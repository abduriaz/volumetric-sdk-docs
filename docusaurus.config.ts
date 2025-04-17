import type { Config } from '@docusaurus/types';

const config: Config = {

  title: 'Volumetric SDK',
  url: 'https://abduriaz.github.io',
  baseUrl: '/volumetric-sdk-docs/',
  favicon: '/components/volumetric-sdk-logo.png',


  organizationName: 'abduriaz',
  projectName: 'volumetric-sdk-docs',
  deploymentBranch: 'main',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: { defaultLocale: 'en', locales: ['en'] },


  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
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
      logo: { 
        alt: 'Volumetric SDK Logo', 
        src: '/components/volumetric-sdk-logo.png',
        width: 32,
        height: 32,
        style: { marginRight: '10px' }
      },
      items: [
        { to: '/introduction/overview', label: 'Documentation', position: 'left' },
        {
          label: 'API Reference',
          position: 'left',
          items: [
            { to: '/api-reference/python/overview', label: 'Python API' },
            { to: '/api-reference/cpp/overview', label: 'C++ API' },
            { to: '/api-reference/csharp/overview', label: 'C# API' },
          ],
        },
        {
          label: 'Guides',
          position: 'left',
          items: [
            { to: '/getting-started/installing-the-sdk', label: 'Getting Started' },
            { to: '/guides/tutorials/scene-from-scratch', label: 'Tutorials' },
            { to: '/guides/working-with-models/visual-tree', label: 'Working with Models' },
            { to: '/guides/volume-behavior/volume-restore', label: 'Volume Behavior' },
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
            { label: 'Tutorials', to: '/guides/tutorials/scene-from-scratch' },
          ],
        },
        {
          title: 'API Reference',
          items: [
            { label: 'Python API', to: '/api-reference/python/overview' },
            { label: 'C++ API', to: '/api-reference/cpp/overview' },
            { label: 'C# API', to: '/api-reference/csharp/overview' },
          ],
        },
        {
          title: 'Guides',
          items: [
            { label: 'Working with Models', to: '/guides/working-with-models/visual-tree' },
            { label: 'Volume Behavior', to: '/guides/volume-behavior/volume-restore' },
            { label: 'Advanced Topics', to: '/guides/tutorials/advanced-composition' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Sample Apps', to: '/resources/sample-apps' },
            { label: 'FAQs', to: '/resources/faqs' },
            { label: 'Glossary', to: '/resources/glossary' },
            { label: 'GitHub', href: 'https://github.com/abduriaz/volumetric-sdk-docs' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Microsoft Corporation. All rights reserved.`,
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
