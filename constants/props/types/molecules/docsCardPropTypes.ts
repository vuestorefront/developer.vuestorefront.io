export type DocsCardProps = {
  img: string;
  status: 'prod' | 'alpha' | 'beta' | 'wip';
  license: 'os' | 'enterprise' | 'paid';
  docs: {
    link: string;
    disabled: boolean;
  };
  repo: {
    link: string;
    disabled: boolean;
  };
  description: string;
  name: string;
};
