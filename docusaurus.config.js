// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '芥龍 Vincent',
  tagline: 'SRE, Backend @ Rosetta.ai',
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
      },
    }),
};

module.exports = config;
