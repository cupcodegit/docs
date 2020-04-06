module.exports = {
  title: 'CloudPanel CE | Documentation',
  tagline: 'CloudPanel CE | Documentation',
  url: 'https://github.com/cloudpanel-io/docs/tree/master/docs/cloudpanel-ce',
  baseUrl: '/docs/cloudpanel-ce/',
  favicon: 'img/favicon.png',
  organizationName: 'CloudPanel',
  projectName: 'CloudPanelCE',
  themeConfig: {
    disableDarkMode: true,
    /*
    algolia: {
      appId: 'MTBF0OPI8S',
      apiKey: 'd2ce345b6ba76e388b14242cb4a93f66',
      indexName: 'cloudpanel-ce',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    */
    navbar: {
      logo: {
        alt: 'CloudPanel CE | Documentation',
        src: 'img/logo.svg',
      },
      links: [
        /*
        {
          to: 'doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/cloudpanel-io/docs/tree/master/docs/cloudpanel-ce',
          label: 'GitHub',
          position: 'right',
        },
         */
      ],
    },
    footer: {
      style: 'classic',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Contact',
              href: '#',
            },
            {
              label: 'Imprint',
              to: '#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cloudpanel',
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudpanel.io',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://www.cloudpanel.io/blog/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloudpanel-io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudpanel_io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cloudpanel.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
