// @ts-check
/** @type {import('@docusaurus/types').Plugin} */
function MyPlugin(context, options) {
  return {
    name: 'my-plugin',
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn & Develop for Nervos CKB',
  tagline: 'Documentation Site for Developer Tools',
  url: 'https://xying21.github.com',
  baseUrl: '/docsite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xying21', // Usually your GitHub org/user name.
  projectName: 'docsite', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass', 
    /**  [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
    /**    id: 'secondblog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
    /**    routeBasePath: 'secondblog',
        /**
         * Path to data on filesystem relative to site dir.
         */
     /**   path: './secondblog',
      },
    ], */
  
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/xying21/docsite',
		  showLastUpdateTime: true,
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
	algolia: {
      apiKey: '4271cb4b044b51b74fd4bfab962db5ed',
      indexName: 'lumos',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
	hideableSidebar: true,
	prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
    },
    navbar: {
		hideOnScroll: false,
		
		
		logo: {
			alt: 'cryptape',
			src: 'img/whitecryptape.png',
			
      },
      items: [
		{
          //type: 'dropdown',
          label: 'Learn',
          position: 'right',
		  to: 'docs/basics/nervosckb',
        },
		{
          //type: 'dropdown',
          label: 'Develop',
          position: 'right',
		  to: 'docs/develop/getstarted',
        }, 
	/**	{
          type: 'dropdown',
          label: 'Blog',
          position: 'right',
		  items: [
            {
              label: 'First Blog',
              to: 'blog',
            },
            {
              label: 'Second Blog',
              to: 'secondblog',
            },
            // ... more items
          ],
        }, */
       {to: 'blog', label: 'Blog', position: 'right'},
		//{to: 'second-blog', label: 'Second Blog', position: 'right'},
		{
          label: 'Support',
          href: 'https://discord.gg/WsuVsZ2F6Y',
		  position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
	  logo: {
                alt: 'Cryptapers',
                src: 'img/whitecryptape.png',
                
            },
      copyright: `Copyright © ${new Date().getFullYear()} cryptape.com. All Rights Reserved.`,
    },
  },
};

module.exports = config;