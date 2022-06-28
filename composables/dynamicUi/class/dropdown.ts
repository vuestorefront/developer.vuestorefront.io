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
  placement?: Placement;
  onShow?: (self: Dropdown) => Promise<void> | void;
  onHide?: (self: Dropdown) => Promise<void> | void;
  popperJsOptions?: PopperJsOptions;
};

export class Dropdown {
  private targetEl?: HTMLElement;

  private triggerEl?: HTMLElement;

  private options: DropdownOptions;

  private popperInstance?: PopperInstance | null;

  private popperJsOptions: PopperJsOptions | undefined;

  public isVisible: boolean;

  constructor(options?: DropdownOptions) {
    this.options = {
      placement: 'bottom',
      event: 'click',
      onShow: () => {},
      onHide: () => {},
      ...options,
    };
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
        placement: this.options.placement,
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

  async show() {
    this.targetEl?.classList.remove('hidden');
    this.targetEl?.classList.add('block');

    await this.popperInstance?.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    window.addEventListener(
      'click',
      (ev) => {
        this.handleClickOutside(ev, this.targetEl);
      },
      true,
    );

    await this.popperInstance?.update();

    this.isVisible = true;
    if (this.options?.onShow) {
      await this.options.onShow(this);
    }
  }

  async hide() {
    this.targetEl?.classList.remove('block');
    this.targetEl?.classList.add('hidden');

    await this.popperInstance?.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));

    this.isVisible = false;

    if (this.options?.onHide) {
      await this.options.onHide(this);
    }
  }
}
