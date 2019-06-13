const technologies = [
  {
    logoSrc: 'https://cacm.acm.org/system/assets/0001/7595/102114_Gaurang_JavaScript-and-the.large.jpg?1476779478&1413913211',
    title: 'JavaScript'
  },
  {
    logoSrc: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    title: 'React.js',
  },
  {
    logoSrc: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    title: 'Node.js',
  },
  {
    logoSrc: 'https://uploads.toptal.io/blog/category/logo/25/express_js.png',
    title: 'Express.js',
  },
  {
    logoSrc: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-28/424668624724_3d9a8923cf9349adcb2c_230.png',
    title: 'Koa.js',
  },
  {
    logoSrc: 'https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png',
    title: 'Redux',
  },
  {
    logoSrc: 'https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F65f2eaa0-8b60-11e8-8382-2749ac03c4b8.png&height=640',
    title: 'Redux-Form',
  },
  {
    logoSrc: 'https://avatars0.githubusercontent.com/u/24776643?s=400&v=4',
    title: 'Redux-Saga',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/thumbs/2x/mobx-logo.png',
    title: 'Mobx',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
    title: 'SASS',
  },
  {
    logoSrc: 'https://appliedparticletechnology.com/wp-content/uploads/2016/03/less-logo.png',
    title: 'LESS',
  },
  {
    logoSrc: 'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png',
    title: 'React Native',
  },
  {
    logoSrc: 'https://avatars2.githubusercontent.com/u/29647600?s=400&v=4',
    title: 'React Navigation',
  },
  {
    logoSrc: 'https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png',
    title: 'Expo',
  },
  {
    logoSrc: 'https://vuejs.org/images/logo.png',
    title: 'Vue.js',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png',
    title: 'Electron',
  },
  {
    logoSrc: 'https://www.shareicon.net/download/2016/08/01/639868_development.ico',
    title: 'HTML5',
  },
  {
    logoSrc: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    title: 'CSS3',
  },
  {
    logoSrc: 'https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png',
    title: 'Gatsby',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png',
    title: 'GraphQL',
  },
  {
    logoSrc: 'https://user-images.githubusercontent.com/6937879/51302792-61243b80-1a6e-11e9-958a-90fc50605f00.png',
    title: 'Ant Design',
  },
  {
    logoSrc: 'https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F26cf1e10-8c6a-11e8-9fbe-bf2bef5835c0.png&height=480',
    title: 'Material UI',
  },
  {
    logoSrc: 'https://express-validator.github.io/img/logo.svg',
    title: 'Express Validator',
  },
  {
    logoSrc: 'https://www.searchpng.com/wp-content/uploads/2019/02/Bootstrap-Logo-PNG-715x715.png',
    title: 'Bootstrap',
  },
  {
    logoSrc: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png',
    title: 'MongoDB',
  },
  {
    logoSrc: 'https://img.icons8.com/color/420/firebase.png',
    title: 'Firebase',
  },
  {
    logoSrc: 'http://www.stickpng.com/assets/images/5848104fcef1014c0b5e4950.png',
    title: 'MySQL',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png',
    title: 'Postgressql',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/large/2x/websocket-logo-png-transparent.png',
    title: 'Websocket',
  },
  {
    logoSrc: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg',
    title: 'Socket.io',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1280px-Babel_Logo.svg.png',
    title: 'Babel',
  },
  {
    logoSrc: 'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
    title: 'Webpack',
  },
  {
    logoSrc: 'http://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png',
    title: 'npm',
  },
  {
    logoSrc: 'https://camo.githubusercontent.com/5e511d0a0f2dcd66a843017402001844861979a4/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67',
    title: 'Typescript',
  },
  {
    logoSrc: 'https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/vscode-typescript-tslint-plugin/1.1.0/1558483615346/Microsoft.VisualStudio.Services.Icons.Default',
    title: 'TSLint',
  },
  {
    logoSrc: 'https://avatars2.githubusercontent.com/u/15352388?s=400&v=4',
    title: 'Flow Typing',
  },
  {
    logoSrc: 'https://eslint.org/img/favicon.512x512.png',
    title: 'ESLint',
  },
  {
    logoSrc: 'https://cdn-images-1.medium.com/max/1200/1*i37IyHf6vnhqWIA9osxU3w.png',
    title: 'Jest',
  },
  {
    logoSrc: 'https://cdn-images-1.medium.com/max/800/1*IGn5E-1wp5mQ2DHoevVCFA.png',
    title: 'Gulp',
  },
  {
    logoSrc: 'https://seeklogo.com/images/G/grunt-logo-E890D57A06-seeklogo.com.png',
    title: 'Grunt',
  },
  {
    logoSrc: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png',
    title: 'Storybook',
  },
  {
    logoSrc: 'https://blog.couchbase.com/wp-content/uploads/2017/01/Swagger-Logo.png',
    title: 'Swagger',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/thumbs/1x/auth0-logo.png',
    title: 'Auth0',
  },
  {
    logoSrc: 'https://logrocket.com/blog/content/images/2018/10/Screen-Shot-2018-10-11-at-1.40.06-PM.png',
    title: 'JSON Web Token',
  },
  {
    logoSrc: 'https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png',
    title: 'JQuery',
  },
  {
    logoSrc: 'https://www.emailjs.com/wp-content/themes/EmailJS/pages/homepage/img/logo@2x.png',
    title: 'EmailiJS',
  },
  {
    logoSrc: 'https://sendgrid.com/wp-content/themes/sgdotcom/pages/resource/brand/2016/SendGrid-Logomark.png',
    title: 'Sendgrid',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/1200px-Elm_logo.svg.png',
    title: 'Elm',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png',
    title: 'PHP',
  },
  {
    logoSrc: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png',
    title: 'Wordpress',
  },
  {
    logoSrc: 'https://www.stickpng.com/assets/images/58482ec0cef1014c0b5e4a70.png',
    title: 'Shopify',
  },
  {
    logoSrc: 'https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png',
    title: 'Java',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png',
    title: 'Ruby',
  },
  {
    logoSrc: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c526.png',
    title: 'Messenger Customer Chat',
  },
  {
    logoSrc: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    title: 'Git',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1108px-GitLab_Logo.svg.png',
    title: 'Gitlab',
  },
  {
    logoSrc: 'https://image.flaticon.com/icons/svg/25/25231.svg',
    title: 'Github',
  },
  {
    logoSrc: 'https://seeklogo.com/images/B/bitbucket-logo-D072214725-seeklogo.com.png',
    title: 'Bitbucket',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png',
    title: 'AWS',
  },
  {
    logoSrc: 'https://img.icons8.com/color/420/heroku.png',
    title: 'Heroku',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/large/2x/visual-studio-code-logo-png-transparent.png',
    title: 'VSCode',
  },
  {
    logoSrc: 'https://cdn.freebiesupply.com/logos/large/2x/atom-4-logo-png-transparent.png',
    title: 'Atom',
  },
  {
    logoSrc: 'https://www.sublimehq.com/images/sublime_text.png',
    title: 'Sublime Text',
  },
  {
    logoSrc: 'https://applitools.com/blog/wp-content/uploads/2018/07/Jira-new-logo.png',
    title: 'JIRA',
  },
  {
    logoSrc: 'https://www.stickpng.com/assets/images/58482beecef1014c0b5e4a36.png',
    title: 'Trello',
  },
  {
    logoSrc: 'https://seeklogo.com/images/A/asana-logo-7F172ED8E6-seeklogo.com.png',
    title: 'Asana',
  },
  {
    logoSrc: 'https://cdn.worldvectorlogo.com/logos/invision.svg',
    title: 'Invision',
  },
  {
    logoSrc: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
    title: 'Figma',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/615px-Adobe_XD_CC_icon.svg.png',
    title: 'Adobe XD',
  },
  {
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
    title: 'Linux',
  },
  {
    logoSrc: 'http://1.bp.blogspot.com/-bI-rVQGWouE/VBKLZnyxbqI/AAAAAAAAhY4/79NXGfXIxxo/s1600/MacOS-icon.png',
    title: 'MacOS',
  },
]

export default technologies;