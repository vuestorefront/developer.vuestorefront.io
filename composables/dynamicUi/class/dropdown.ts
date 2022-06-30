import {
  createPopper,
  Instance as PopperInstance,
  PositioningStrategy,
  State,
  Modifier,
  Obj,
  Placement,
} from '@popperjs/core';

type PopperJsOptions = {
  modifiers: Array<Partial<Modifier<unknown, Obj>>>;
  strategy: PositioningStrategy;
  onFirstUpdate?: (arg: Partial<State>) => void;
};
export type DropdownOptions = {
  placement?: Placement | string;
  onShow?: (self: Dropdown) => Promise<void> | void;
  onHide?: (self: Dropdown) => Promise<void> | void;
  popperJsOptions?: PopperJsOptions;
  showClass?: string;
  hideClass?: string;
};

export class Dropdown {
  private targetEl?: HTMLElement;

  private triggerEl?: HTMLElement;

  private options: DropdownOptions;

  private popperInstance?: PopperInstance | null;

  private popperJsOptions: PopperJsOptions | undefined;

  private readonly showClass: string;

  private readonly hideClass: string;

  public isVisible: boolean;

  constructor(options?: DropdownOptions) {
    this.options = {
      placement: 'bottom',
      onShow: () => {},
      onHide: () => {},
      ...options,
    };

    this.showClass = options?.showClass || 'block';
    this.hideClass = options?.hideClass || 'hidden';

    this.popperJsOptions = options?.popperJsOptions;

    this.isVisible = false;
  }

  mount() {
    if (this.triggerEl && this.targetEl) {
      this.popperInstance = this.createPopperInstance();
      this.triggerEl.addEventListener('click', () => {
        this.toggle().catch((e) => console.error(e));
      });
    }
  }

  unMount() {
    window.removeEventListener('click', this.handleClickOutside, true);
  }

  setTarget(targetElement: HTMLElement) {
    this.targetEl = targetElement;
  }

  setTrigger(triggerElement: HTMLElement) {
    this.triggerEl = triggerElement;
  }

  private createPopperInstance() {
    const popperOptions = this.options?.popperJsOptions;
    if (this.triggerEl && this.targetEl) {
      return createPopper(this.triggerEl, this.targetEl, {
        placement: this.options.placement || 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
          ...(popperOptions?.modifiers || []),
        ],
      });
    }
    return null;
  }

  private async handleClickOutside(ev, targetEl) {
    const clickedEl = ev.target;
    if (
      clickedEl !== targetEl &&
      !targetEl.contains(clickedEl) &&
      !this.triggerEl?.contains(clickedEl) &&
      this.isVisible
    ) {
      await this.hide();
    }

    window.removeEventListener('click', this.handleClickOutside, true);
  }

  private async toggle() {
    if (this.isVisible) {
      await this.hide();
      window.removeEventListener('click', this.handleClickOutside, true);
    } else {
      await this.show();
    }
  }

  private toggleClass() {
    this.targetEl?.classList.remove(
      this.isVisible ? this.showClass : this.hideClass,
    );
    this.targetEl?.classList.add(
      this.isVisible ? this.hideClass : this.showClass,
    );
  }

  private setPopperListeners(enabled = false) {
    this.popperInstance
      ?.setOptions((options) => ({
        ...options,
        modifiers: [...options.modifiers, { name: 'eventListeners', enabled }],
      }))
      .catch((error) => console.error(error));
  }

  async show() {
    this.toggleClass();

    window.addEventListener(
      'click',
      (ev) => {
        this.handleClickOutside(ev, this.targetEl);
      },
      true,
    );

    this.setPopperListeners(true);

    this.popperInstance?.update().catch((e) => console.error(e));
    this.isVisible = true;

    if (this.options?.onShow) {
      await this.options.onShow(this);
    }
  }

  async hide() {
    this.toggleClass();

    this.setPopperListeners();

    this.isVisible = false;

    if (this.options?.onHide) {
      await this.options.onHide(this);
    }
  }
}
