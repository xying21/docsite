module.exports = {
  title: 'Learn & Develop for Nervos CKB',
  tagline: 'Documentation Site for Developer Tools',
  url: 'https://github.com/xying21/docsite',
  baseUrl: '/docsite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xying21', // Usually your GitHub org/user name.
  projectName: 'docsite', // Usually your repo name.

  plugins: ['docusaurus-plugin-sass' ],
  
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
		hideOnScroll: true,
		
		
		logo: {
			alt: 'cryptape',
			src: 'img/whitecryptape.png',
			
      },
      items: [
		{
          //type: 'dropdown',
          label: 'Learn',
          position: 'right',
		  to: 'docs/learn/intro',
		  // items: [
            // {
              // label: 'What is CKB?',
              // to: 'docs/learn/ckb',
            // },
          // ],
        },
		{
          //type: 'dropdown',
          label: 'Develop',
          position: 'right',
		  to: 'docs/tools',
		  // items: [
            // {
              // label: 'Lumos',
              // to: 'docs/lumos/introduction/intro',
            // },
			// {
              // label: 'Godwoken',
              // to: 'docs/godwoken/godwoken',
            // },
			// {
              // label: 'CKB SDK',
              // to: 'docs/sdk/overview_go',
            // },
          // ],
        },
        {to: 'blog', label: 'Blog', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About',
          items: [

            {
              label: 'What is Lumos?',
              to: 'docs/lumos/introduction/intro',
            },
          ],
        },
        {
          title: 'Setup',
          items: [
            {
              label: 'Set Up the Development Environment',
              to: 'docs/lumos/preparation/setupsystem',
            },
            {
              label: 'Install Lumos Packages',
              to: 'docs/lumos/guides/installlumos',
            }
          ],
        },
        {
          title: 'Config',
          items: [
            {
              label: 'Set Up the Config Manager',
              to: 'docs/lumos/guides/config',
            },
			{
              label: 'Set Up the Lumos Indexer',
              to: 'docs/lumos/guides/indexer',
            },
          ],
        }
      ],
	  logo: {
                alt: 'Cryptapers',
                src: 'img/whitecryptape.png',
                
            },
      copyright: `Copyright © ${new Date().getFullYear()} cryptape.com. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cryptape/lumos-doc/tree/master',
		  showLastUpdateTime: true,
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
