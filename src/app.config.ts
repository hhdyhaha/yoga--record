export default defineAppConfig({
  pages: [
    'pages/index/index',
    "pages/record/index",
    "pages/stats/index",
    "pages/share/index"
  ],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/record/index',
        text: '记录',
      },
      {
        pagePath: 'pages/stats/index',
        text: '统计',
      },
      {
        pagePath: 'pages/share/index',
        text: '分享',
      }
    ]
  }
});