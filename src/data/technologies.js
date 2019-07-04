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
    logoSrc: 'https://avatars3.githubusercontent.com/u/17475736?s=400&v=4',
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
    logoSrc: 'data:image/png;base64,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',
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
    logoSrc: 'https://cdn.worldvectorlogo.com/logos/websocket.svg',
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
    logoSrc: 'https://pngimg.com/uploads/php/php_PNG50.png',
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
    logoSrc: 'https://user-images.githubusercontent.com/10379994/31985754-c56b8dba-b998-11e7-9705-a7f984433049.png',
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