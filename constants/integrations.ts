import {
  CommerceIntegrationsName,
  IntegrationCategory,
  IntegrationLicense,
  IntegrationStatus,
} from '~/enums/integrations';
import { IntegrationList } from '~/types/integrations';

export const integrationsList: IntegrationList = [
  {
    name: CommerceIntegrationsName.commercetools,
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
    name: CommerceIntegrationsName.magento,
    link: 'https://docs.vuestorefront.io/magento',
    logo: '/brands/logos/magento.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/template-magento.git',
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.sfcc,
    link: 'https://docs.vuestorefront.io/sfcc',
    logo: '/brands/logos/sfcc.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.enterprise,
    repository: 'https://github.com/vuestorefront/salesforce-commerce-cloud',
    maintainedBy: [{ name: 'Forkpoint', link: 'https://forkpoint.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.sap,
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
    name: CommerceIntegrationsName.shopify,
    link: 'https://docs.vuestorefront.io/shopify',
    logo: '/brands/logos/shopify.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/template-shopify.git',
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.bigcommerce,
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
    name: CommerceIntegrationsName.scayle,
    link: '',
    logo: '/brands/logos/scayle.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.sylius,
    link: '',
    logo: '/brands/logos/sylius.svg',
    status: IntegrationStatus.beta,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'BitBag', link: 'https://bitbag.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.woocommerce,
    link: '',
    logo: '/brands/logos/woocommerce.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.opencart,
    link: '',
    logo: '/brands/logos/opencart.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.vendure,
    link: 'https://docs.vuestorefront.io/vendure',
    logo: '/brands/logos/vendure.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/template-vendure.git',
    maintainedBy: [
      {
        name: 'Jakub Andrzejewski',
        link: 'https://www.linkedin.com/in/jakub-andrzejewski/',
      },
    ],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.odoo,
    link: 'https://docs.vuestorefront.io/odoo/',
    logo: '/brands/logos/odoo.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront-community/template-odoo',
    maintainedBy: [{ name: 'OdooGap', link: 'https://www.odoogap.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.prestashop,
    link: 'https://docs.vuestorefront.io/prestashop/',
    logo: '/brands/logos/prestashop.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository:
      'https://github.com/vuestorefront-community/template-prestashop',
    maintainedBy: [{ name: 'Binshops', link: 'https://www.binshops.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.spree,
    link: 'https://docs.vuestorefront.io/spree/',
    logo: '/brands/logos/spree.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/spree',
    maintainedBy: [{ name: 'Upside Lab', link: 'https://upsidelab.io/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.elasticpath,
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
    name: CommerceIntegrationsName.swell,
    link: '',
    logo: '/brands/logos/swell.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.os,
    maintainedBy: [{ name: 'Swell', link: 'https://www.swell.is/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: CommerceIntegrationsName.shopware,
    link: 'https://shopware-pwa-docs.vuestorefront.io/',
    logo: '/brands/logos/shopware.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/shopware-pwa',
    maintainedBy: [{ name: 'Shopware', link: 'https://www.shopware.com/' }],
    categories: [IntegrationCategory.commerce],
  },
  {
    name: 'Storyblok',
    link: 'https://docs.vuestorefront.io/storyblok',
    logo: '/brands/logos/storyblok.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.os,
    repository: 'https://github.com/vuestorefront/storyblok',
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
    logo: '/brands/logos/aem.svg',
    status: IntegrationStatus.wip,
    license: IntegrationLicense.enterprise,
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [
      IntegrationCategory.cms,
      // IntegrationCategory.analytics
    ],
  },

  {
    name: 'Bazaarvoice',
    link: 'https://docs.vuestorefront.io/v2/integrations/bazaarvoice.html',
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
    link: 'https://docs.vuestorefront.io/v2/integrations/redis-cache.html',
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
        name: CommerceIntegrationsName.commercetools,
        link: 'https://www.npmjs.com/package/@vue-storefront/checkout-com',
        icon: '/brands/icons/commercetools.svg',
      },
    ],
    logo: '/brands/logos/checkout.com.svg',
    status: IntegrationStatus.prod,
    license: IntegrationLicense.enterprise,
    repository: 'https://github.com/vuestorefront/checkout-com',
    maintainedBy: [
      { name: 'Vue Storefront', link: 'https://vuestorefront.io/' },
    ],
    categories: [IntegrationCategory.payment],
  },
  {
    name: 'Adyen',
    link: [
      {
        name: CommerceIntegrationsName.commercetools,
        link: 'https://docs.vuestorefront.io/adyen/',
        icon: '/brands/icons/commercetools.svg',
      },
      {
        name: CommerceIntegrationsName.magento,
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
        name: CommerceIntegrationsName.commercetools,
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
        name: CommerceIntegrationsName.commercetools,
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
        name: CommerceIntegrationsName.commercetools,
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
        name: CommerceIntegrationsName.commercetools,
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
