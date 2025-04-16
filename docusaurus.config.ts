import type { Config } from '@docusaurus/types';

const config: Config = {

  title: 'Volumetric SDK',
  url: 'https://abduriaz.github.io',
  baseUrl: '/volumetric-sdk-docs/',
  favicon: 'img/favicon.ico',


  organizationName: 'abduriaz',
  projectName: 'volumetric-sdk-docs',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: { defaultLocale: 'en', locales: ['en'] },


  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/abduriaz/volumetric-sdk-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],


  themeConfig: {
    navbar: {
      title: 'Volumetric SDK',
      logo: { alt: 'SDK Logo', src: 'img/logo.svg' },
      items: [
        { to: 'docs/introduction/overview', label: 'Docs', position: 'left' },
        {
          label: 'API',
          position: 'left',
          items: [
            { to: 'docs/api-reference/python/overview', label: 'Python' },
            { to: 'docs/api-reference/cpp/overview', label: 'C++' },
            { to: 'docs/api-reference/csharp/overview', label: 'C#' },
          ],
        },
        { to: 'docs/resources/sample-apps', label: 'Resources', position: 'left' },
        {
          href: 'https://github.com/abduriaz/volumetric-sdk-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: 'docs/introduction/overview' },
            { label: 'Getting Started', to: 'docs/getting-started/installing-the-sdk' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/abduriaz/volumetric-sdk-docs' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} The Codegen`,
    },

    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['cpp', 'csharp', 'python'],
    },

    trailingSlash: false,
  },
};

export default config;
