// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '芥龍 Vincent',
  tagline: 'SWE, Backend @ Zoek Inc.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chivincent.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chivincent', // Usually your GitHub org/user name.
  projectName: 'chivincent.net', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '文章一覽',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Chivincent`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-RQ18NWKWDF',
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.webp',
        },
        items: [
          {to: '/blog', label: '文章', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '社群',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chivincent',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/chivincent.net',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.tv/chivincent',
              },
            ],
          },
          {
            title: '通訊',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/chivincent'
              }
            ],
          }
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Chivincent. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'docker', 'nasm', 'ini', 'json'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-next-line',
            block: {start: 'highlight-error-start', end: 'highlight-error-end'}
          },
          {
            className: 'code-block-success-line',
            line: 'highlight-success-next-line',
            block: {start: 'highlight-success-start', end: 'highlight-success-end'}
          }
        ]
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'SANPS1NFCM',
  
        // Public API key: it is safe to commit it
        apiKey: 'd44c63dce57f1cc3c3f0abd0218e39f6',
  
        indexName: 'chivincent',
  
        // Optional: see doc section below
        contextualSearch: false,
      },
    }),
};

module.exports = config;
