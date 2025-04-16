import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'home',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/overview',
        'introduction/about-sdk',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing-the-sdk',
        'getting-started/loading-and-rendering-glb',
        'getting-started/load-multiple-models',
        'getting-started/load-multiple-volumes',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'category',
          label: 'Python API',
          items: [
            'api-reference/python/overview',
            'api-reference/python/instancing',
            'api-reference/python/modify-subnodes',
          ],
        },
        {
          type: 'category',
          label: 'C++ API',
          items: [
            'api-reference/cpp/overview',
            'api-reference/cpp/instancing',
            'api-reference/cpp/modify-subnodes',
          ],
        },
        {
          type: 'category',
          label: 'C# API',
          items: [
            'api-reference/csharp/overview',
            'api-reference/csharp/instancing',
            'api-reference/csharp/modify-subnodes',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'guides/tutorials/scene-from-scratch',
            'guides/tutorials/combining-models-volumes',
            'guides/tutorials/advanced-composition',
          ],
        },
        {
          type: 'category',
          label: 'Working with Models',
          items: [
            'guides/working-with-models/visual-tree',
            'guides/working-with-models/instancing',
            'guides/working-with-models/modify-subnodes',
          ],
        },
        {
          type: 'category',
          label: 'Volume Behavior',
          items: [
            'guides/volume-behavior/volume-restore',
            'guides/volume-behavior/rotation-lock',
            'guides/volume-behavior/display-name',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/sample-apps',
        'resources/faqs',
        'resources/glossary',
      ],
    },
  ],
};

export default sidebars;
