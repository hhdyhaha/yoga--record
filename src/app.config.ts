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
    selectedColor: '#8A6BA6',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/iconPath/indexIcon.png',
        selectedIconPath: 'assets/images/iconPath/selectedIndexIcon.png',
      },
      {
        pagePath: 'pages/record/index',
        text: '记录',
        iconPath: 'assets/images/iconPath/recordIcon.png',
        selectedIconPath: 'assets/images/iconPath/selectedRecordIcon.png',
      },
      {
        pagePath: 'pages/stats/index',
        text: '统计',
        iconPath: 'assets/images/iconPath/statsIcon.png',
        selectedIconPath: 'assets/images/iconPath/selectedStatsIcon.png',
      },
      {
        pagePath: 'pages/share/index',
        text: '分享',
        iconPath: 'assets/images/iconPath/shareIcon.png',
        selectedIconPath: 'assets/images/iconPath/selectedShareIcon.png',
      }
    ]
  }
});