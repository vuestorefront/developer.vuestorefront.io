import {
  IntegrationCategory,
  IntegrationLicense,
  IntegrationStatus,
} from '~/enums/integrations';

export const integrationsList: {
  name: string;
  logo: string;
  link:
    | string
    | Array<{
        name: string;
        link: string;
        icon: string;
      }>;
  license: IntegrationLicense;
  status: IntegrationStatus;
  color?: string;
  maintainedBy: { name: string; link: string }[];
  categories: IntegrationCategory[];
}[] = [
  {
    name: 'commercetools',
    link: 'https://docs.vuestorefront.io/v2/commercetools/',
    logo: '/brands/logos/commercetools.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Magento',
    link: 'https://docs.vuestorefront.io/magento',
    logo: '/brands/logos/magento.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.os,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Salesforce Commerce Cloud',
    link: 'https://docs.vuestorefront.io/sfcc',
    logo: '/brands/logos/sfcc.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.enterprise,
    maintainedBy: [{ name: 'Forkpoint', link: 'https://forkpoint.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'SAP Commerce Cloud',
    link: '',
    logo: '/brands/logos/sap.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Shopify',
    link: 'https://docs.vuestorefront.io/shopify',
    logo: '/brands/logos/shopify.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'BigCommerce',
    link: 'https://docs.vuestorefront.io/bigcommerce',
    logo: '/brands/logos/bigcommerce.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Scayle',
    link: '',
    logo: '/brands/logos/scayle.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Sylius',
    link: '',
    logo: '/brands/logos/sylius.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'BitBag', link: 'https://bitbag.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'WooCommerce',
    link: '',
    logo: '/brands/logos/woocommerce.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'OpenCart',
    link: '',
    logo: '/brands/logos/opencart.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Vendure',
    link: 'https://docs.vuestorefront.io/vendure',
    logo: '/brands/logos/vendure.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [
      {
        name: 'Jakub Andrzejewski',
        link: 'https://www.linkedin.com/in/jakub-andrzejewski/',
      },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Odoo',
    link: 'https://docs.vuestorefront.io/odoo/',
    logo: '/brands/logos/odoo.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'OdooGap', link: 'https://www.odoogap.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'PrestaShop',
    link: 'https://docs.vuestorefront.io/prestashop/',
    logo: '/brands/logos/prestashop.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Binshops', link: 'https://www.binshops.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Spree',
    link: 'https://docs.vuestorefront.io/spree/',
    logo: '/brands/logos/spree.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Upside Lab', link: 'https://upsidelab.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Elastic Path',
    link: '',
    logo: '/brands/logos/elasticpath.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Swell',
    link: '',
    logo: '/brands/logos/swell.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Swell', link: 'https://www.swell.is/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Shopware PWA',
    link: 'https://shopware-pwa-docs.vuestorefront.io/',
    logo: '/brands/logos/shopware.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Shopware', link: 'https://www.shopware.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Storyblok',
    link: 'https://docs.vuestorefront.io/storyblok',
    logo: '/brands/logos/storyblok.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Amplience',
    link: 'https://docs.vuestorefront.io/amplience',
    logo: '/brands/logos/amplience.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Contentstack',
    link: 'https://docs.vuestorefront.io/contentstack',
    logo: '/brands/logos/contentstack.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Contentful',
    link: 'https://docs.vuestorefront.io/contentful',
    logo: '/brands/logos/contentful.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'LexasCMS',
    link: 'https://github.com/LexasCMS/vsf-next-lexascms',
    logo: '/brands/logos/lexascms.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'LexasCMS', link: 'https://www.lexascms.com/' }],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Bloomreach Content',
    link: 'https://docs.vuestorefront.io/bloomreach/',
    logo: '/brands/logos/bloomreach.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Sanity',
    link: 'https://docs.vuestorefront.io/sanity/',
    logo: '/brands/logos/sanity.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Adobe Experience Manager',
    link: '',
    logo: 'https://www.rackspace.com/sites/default/files/styles/rxt_image/public/2020-11/AEM.png',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cms, IntegrationCategory.analytics],
  },

  {
    name: 'Bazaarvoice',
    link: './bazaarvoice.html',
    logo: '/brands/logos/bazaarvoice.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.reviews],
  },
  {
    name: 'Redis',
    link: './redis-cache.html',
    logo: '/brands/logos/redis.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.cache],
  },

  {
    name: 'Checkout.com',
    link: [
      {
        name: 'commercetools',
        link: 'https://www.npmjs.com/package/@vue-storefront/checkout-com',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/checkout.com.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.payment],
  },
  {
    name: 'Adyen',
    link: [
      {
        name: 'commercetools',
        link: 'https://docs.vuestorefront.io/adyen/',
        icon: '/brands/icons/commercetools.svg',
      },
      {
        name: 'Magento',
        link: 'https://docs.vuestorefront.io/adyen/magento2/',
        icon: '/brands/icons/magento.svg',
      },
    ],
    logo: '/brands/logos/adyen.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.payment],
  },
  {
    name: 'PayPal',
    link: [
      {
        name: 'commercetools',
        link: 'https://docs.vuestorefront.io/paypal/commercetools',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/paypal.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.payment],
  },
  {
    name: 'Mollie',
    link: [
      {
        name: 'commercetools',
        link: 'https://docs.vuestorefront.io/mollie/commercetools',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/mollie.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.payment],
  },
  {
    name: 'Auth0',
    link: [
      {
        name: 'commercetools',
        link: 'https://docs.vuestorefront.io/auth0/',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/auth0.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.auth],
  },

  {
    name: 'Bloomreach Discovery',
    link: 'https://docs.vuestorefront.io/bloomreach-search/',
    logo: '/brands/logos/bloomreach.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.search],
  },

  {
    name: 'Algolia',
    link: [
      {
        name: 'commercetools',
        link: 'https://docs.vuestorefront.io/algolia',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/algolia.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.search],
  },
  {
    name: 'Constructor.io',
    link: 'https://docs.vuestorefront.io/constructor-io/',
    logo: '/brands/logos/constructor.io.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.search],
  },
];

const { filterBy } = useArrayManipulation();

export const integrationsListByCategory = (categories: IntegrationCategory[]) =>
  filterBy(integrationsList, {
    categories,
  });
