import {
  IntegrationCategory,
  IntegrationLicense,
  IntegrationStatus,
} from '~/enums/integrations';

export const integrationsList: {
  name: string;
  logo?: string;
  link:
    | string
    | Array<{
        name: string;
        link: string;
      }>;
  license?: IntegrationLicense;
  status?: IntegrationStatus;
  color?: string;
  icon?: string;
  maintainedBy?: { name: string; link: string }[];
  categories?: IntegrationCategory[];
}[] = [
  {
    name: 'commercetools',
    link: 'https://docs.vuestorefront.io/v2/commercetools/',
    logo: '/brands/commercetools.svg',
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
    logo: '/brands/magento.svg',
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
    logo: '/brands/sfcc.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.enterprise,
    maintainedBy: [{ name: 'Forkpoint', link: 'https://forkpoint.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'SAP Commerce Cloud',
    link: '',
    logo: '/brands/sap.svg',
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
    logo: '/brands/shopify.svg',
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
    logo: '/brands/bigcommerce.svg',
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
    logo: '/brands/scayle.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Sylius',
    link: '',
    logo: '/brands/sylius.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'BitBag', link: 'https://bitbag.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'WooCommerce',
    link: '',
    logo: '/brands/woocommerce.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'OpenCart',
    link: '',
    logo: '/brands/opencart.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Vendure',
    link: 'https://docs.vuestorefront.io/vendure',
    logo: '/brands/vendure.svg',
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
    logo: '/brands/odoo.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'OdooGap', link: 'https://www.odoogap.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'PrestaShop',
    link: 'https://docs.vuestorefront.io/prestashop/',
    logo: '/brands/prestashop.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Binshops', link: 'https://www.binshops.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Spree',
    link: 'https://docs.vuestorefront.io/spree/',
    logo: '/brands/spree.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Upside Lab', link: 'https://upsidelab.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Elastic Path',
    link: '',
    logo: '/brands/elasticpath.svg',
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
    logo: '/brands/swell.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Swell', link: 'https://www.swell.is/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Shopware PWA',
    link: 'https://shopware-pwa-docs.vuestorefront.io/',
    logo: '/brands/shopware.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Shopware', link: 'https://www.shopware.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Storyblok',
    link: 'https://docs.vuestorefront.io/storyblok',
    logo: '/brands/storyblok.svg',
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
    logo: '/brands/amplience.svg',
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
    logo: '/brands/contentstack.svg',
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
    logo: '/brands/contentful.svg',
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
    logo: '/brands/lexascms.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'LexasCMS', link: 'https://www.lexascms.com/' }],
    categories: [IntegrationCategory.cms],
  },
  {
    name: 'Bloomreach Content',
    link: 'https://docs.vuestorefront.io/bloomreach/',
    logo: '/brands/bloomreach.svg',
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
    logo: '/brands/sanity.svg',
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
    logo: '/brands/bazaarvoice.svg',
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
    logo: '/brands/redis.svg',
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
      },
    ],
    logo: '/brands/checkout.com.svg',
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
      { name: 'commercetools', link: 'https://docs.vuestorefront.io/adyen/' },
      {
        name: 'Magento',
        link: 'https://docs.vuestorefront.io/adyen/magento2/',
      },
    ],
    logo: '/brands/adyen.svg',
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
      },
    ],
    logo: '/brands/paypal.svg',
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
      },
    ],
    logo: '/brands/mollie.svg',
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
      { name: 'commercetools', link: 'https://docs.vuestorefront.io/auth0/' },
    ],
    logo: '/brands/auth0.svg',
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
    logo: '/brands/bloomreach.svg',
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
      { name: 'commercetools', link: 'https://docs.vuestorefront.io/algolia' },
    ],
    logo: '/brands/algolia.svg',
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
    logo: '/brands/constructor.io.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.search],
  },
];
