export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'nacos.io', // 站点部署域名
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/quick-start.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community',
      },
      // {
      //   key: 'download',
      //   text: 'DOWNLOAD',
      //   link: '/en-us/blog/download.html',
      // },
        {
          key: 'Nacos in Cloud',
          text: 'NACOS IN CLOUD',
          link: 'https://www.aliyun.com/product/mse?spm=nacos-website.topbar.0.0.0',
          imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png'
        },
        {
          key: 'We are hiring',
          text: 'HIRING',
          link: 'https://job.alibaba.com/zhaopin/position_detail.htm?trace=qrcode_share&positionCode=GP633620',
          imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png'
      },
      {
        text: 'DEMO-CONSOLE',
          link: 'http://console.nacos.io/nacos/index.html',
      },
    ],
    disclaimer: {
      title: 'Vision',
      content: 'By providing an easy-to-use service infrastructure such as dynamic service discovery, service configuration, service sharing and management and etc., Nacos help users better construct, deliver and manage their own service platform, reuse and composite business service faster and deliver value of business innovation more quickly so as to win market for users in the era of cloud native and in all cloud environments, such as private, mixed, or public clouds.',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/what-is-nacos.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/quick-start.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/contributing.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
          {
              text: 'Cloud Service ACM',
              link: 'https://www.aliyun.com/product/acm?source_type=nacos_pc_20181219',
          },
          {
              text: 'Cloud Service EDAS',
              link: 'https://www.aliyun.com/product/edas?source_type=nacos_pc_20181219',
          },
          {
              text: 'Cloud Service AHAS',
              link: 'https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225',
          },
      ],
    },

    copyright: '@ 2018 The Nacos Authors | An Alibaba Middleware (Aliware) Project',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/what-is-nacos.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
        {
            key: 'Nacos in Cloud',
              text: '企业版Nacos',
            link: 'https://www.aliyun.com/product/mse?spm=nacos-website.topbar.0.0.0',
            imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png'
        },
      {
          key: 'We are hiring',
          text: '招贤纳士',
          link: 'https://job.alibaba.com/zhaopin/position_detail.htm?trace=qrcode_share&positionCode=GP633620',
          imgUrl: 'https://img.alicdn.com/tfs/TB1esl_m.T1gK0jSZFrXXcNCXXa-200-200.png'
      },
      {
        text: '控制台样例',
          link: 'http://console.nacos.io/nacos/index.html',
      },
    ],
    disclaimer: {
      title: '愿景',
      content: 'Nacos 通过提供简单易用的动态服务发现、服务配置、服务共享与管理等服务基础设施，帮助用户在云原生时代，在私有云、混合云或者公有云等所有云环境中，更好的构建、交付、管理自己的微服务平台，更快的复用和组合业务服务，更快的交付商业创新的价值，从而为用户赢得市场。',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/what-is-nacos.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/quick-start.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/contributing.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
          {
              text: '云服务 ACM',
              link: 'https://www.aliyun.com/product/acm?source_type=nacos_pc_20181219',
          },
          {
              text: '云服务 EDAS',
              link: 'https://www.aliyun.com/product/edas?source_type=nacos_pc_20181219',
          },
          {
              text: '云服务 AHAS',
              link: 'https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225',
          },
      ],
    },
    copyright: '@ 2018 The Nacos Authors | An Alibaba Middleware (Aliware) Project',
  },
};
