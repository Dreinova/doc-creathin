import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Creathin',
  tagline: 'Guía para usar tu sistema de costeo, ventas y administración',
  favicon: 'img/favicon.svg',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages: se publica en https://dreinova.github.io/doc-creathin/
  url: 'https://dreinova.github.io',
  baseUrl: '/doc-creathin/',

  organizationName: 'Dreinova',
  projectName: 'doc-creathin',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Creathin',
      logo: {
        alt: 'Creathin',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://creathin.vercel.app',
          label: 'Ir a la app',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Creathin',
          items: [
            {
              label: 'Abrir la app',
              href: 'https://creathin.vercel.app',
            },
            {
              label: 'Catálogo público',
              href: 'https://creathin.vercel.app/catalogo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Creathin.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
