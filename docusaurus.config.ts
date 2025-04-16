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
          path: '.',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/abduriaz/volumetric-sdk-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: ['**/node_modules/**'],
        },
        blog: false,
        pages: false,
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
        { to: '/introduction/overview', label: 'Documentation', position: 'left' },
        {
          label: 'API Reference',
          position: 'left',
          items: [
            { to: '/api-reference/python/overview', label: 'Python' },
            { to: '/api-reference/cpp/overview', label: 'C++' },
            { to: '/api-reference/csharp/overview', label: 'C#' },
          ],
        },
        { to: '/resources/sample-apps', label: 'Resources', position: 'left' },
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
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/introduction/overview' },
            { label: 'Getting Started', to: '/getting-started/installing-the-sdk' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/abduriaz/volumetric-sdk-docs' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} The Codegen`,
    },

    prism: {
      theme: {
        plain: {
          color: "#393A34",
          backgroundColor: "#f6f8fa"
        },
        styles: []
      },
      darkTheme: {
        plain: {
          color: "#F8F8F2",
          backgroundColor: "#282A36"
        },
        styles: []
      },
      additionalLanguages: ['cpp', 'csharp', 'python']
    },

    trailingSlash: false,
  },
};

export default config;
