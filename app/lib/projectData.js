'use strict';

module.exports = [
  {
    id: 0,
    name: 'Ultimate Pi',
    date: 'September 2016',
    description: 'Full-Stack responsive web app that enables the client to use a configured Raspberry Pi as an IR remote',
    employs: ['Angular.js', 'Node.js server', 'Express Routing', 'Secure authentication system with registration', 'Custom built angular components', 'Sleek and intuitive remote UI',
      'Webpack bundling', 'SCSS styling', 'Bootstrap', 'Font-awesome for Icons', 'TDD: Karma w/jasmine and Mocha w/Chai for backend testing',
      'Deployed on Heroku'],
    skills: ['Angular.js', 'Node.js', 'Express.js', 'Webpack', 'SCSS', 'Bootstrap', 'HTML5', 'MongoDB', 'JavaScript', 'RESTful Architecture', 'Unit Testing'],
    deployedUrl: 'http://ultimate-pi.herokuapp.com',
    urls: {'fa-github': 'https://github.com/sendjmoon/Ultimate-Pi', 'fa-github-square': 'https://github.com/dylanjsa90/UltimatePi-api'},
    thumbnailUrl: require('./thumbnails/mobile_remote.jpg')
    
  },

  {
    id: 1,
    name: 'Fake Sports Real Money',
    date: 'August 2016',
    description: 'Pure node.js app for fantasy sports league commissioners which after initial setup will send a daily text and email reminder to members with overdue balances that they need to pay',
    employs: ['Twilio API for daily text reminders', 'Node-mailer for sending daily email reminders', 'Cron for constant time tracking',
    'Express middleware', 'Mocha/Chai Testing', 'Deployed on Heroku'],
    skills: ['Node.js', 'Express.js', 'Unit testing', 'RESTful Architecture'],
    githubUrl: ['https://github.com/FakeSportsRealMoney/FakeSportsRealMoney'],
    deployedUrl: 'https://fake-sports-real-money.herokuapp.com',
    urls: {'fa-github':'https://github.com/FakeSportsRealMoney/FakeSportsRealMoney'},
    thumbnailUrl: require('./thumbnails/FSRM.jpg')
  },

  {
    id: 2,
    name: 'Nosy Neighbor',
    date: 'June 2016',
    description: 'Responsive web application for checking new construction and development in areas and neighborhoods within Seattle',
    employs: ['Single Page Architecture', 'Google Maps API w/Places library for autocompletion', 'Node.js w/Express for the server', 'WebDB for the database',
    'City of Seattle API for data', 'Deployed on Firebase'],
    skills: ['Node.js', 'Express.js', 'CSS', 'HTML5', 'JavaScript', 'RESTful Architecture'],
    githubUrl: 'https://github.com/crashtack/301-team-project',
    deployedUrl: 'https://projectstage-a6114.firebaseapp.com/',
    urls: { 'fa-github': 'https://github.com/crashtack/301-team-project'},
    thumbnailUrl: require('./thumbnails/full_list_nosy_neighbor.jpg') 
  },
  {
    id: 3,
    name: 'Task Manager',
    date: 'September 2016',
    description: 'Full-stack web organization that users can create accounts and within each account create and manage tasks or lists and add/remove content from those lists',
    employs: ['Angular.js', 'Node.js server with express routing', 'Secure authentication with jsonwebtokens', 'SASS styling', 'webpack bundling', 'bootstrap', 'font-awesome icons', 'Deployed on heroku'],
    skills: ['Angular.js', 'Node.js', 'Express.js', 'SCSS', 'Webpack', 'Bootstrap', 'JavaScript'], 
    githubUrl: ['https://github.com/dylanjsa90/task-manager'],
    urls: {'fa-github': 'https://github.com/dylanjsa90/task-manager'},
    deployedUrl: 'https://task-list-manager.herokuapp.com',
    thumbnailUrl: require('./thumbnails/Business-Todo-List-icon.png')
  },
  {

    id: 4,
    name: 'Famous Quote Generator',
    date: 'January 2017',
    description: 'A simple single page web application that generates a random quote either from the famous or movie category from the Mashape API',
    employs: ['jQuery', 'SCSS', 'Bootstrap', 'Font Awesome icons'],
    skills: ['jQuery', 'HTML5', 'CSS/SCSS', 'JavaScript'],
    urls: {'fa-codepen': 'http://codepen.io/dylansa90/pen/jybbPa'},
    deployedUrl: 'http://codepen.io/dylansa90/full/jybbPa',
    thumbnailUrl: require('./thumbnails/famous_quote.jpg')

  },
  {
    id: 5,
    name: 'Local Weather',
    date: 'January 2017',
    description: 'A single page web application that displays the users local weather in standard or metric as well as the conditions',
    employs: ['Weather API', 'Ipinfo.io API for users location', 'Font Awesome icons'],
    skills: ['jQuery', 'HTML5', 'CSS/SCSS', 'JavaScript'],
    urls: {'fa-codepen': 'http://codepen.io/dylansa90/pen/LxpGmj/'},
    deployedUrl: 'http://codepen.io/dylansa90/full/LxpGmj/',
    thumbnailUrl: require('./thumbnails/local_weather.jpg')
  },
  {
    id: 6,
    name: 'Wikipedia Explorer',
    date: 'January 2017',
    description: 'A singe page web application that uses the Wikipedia API to allow users to search entries or randomly select one',
    employs: ['Font Awesome Icons', 'Wikipedia API'],
    skills: ['jQuery', 'HTML5', 'CSS/SCSS', 'JavaScript'],
    urls: {'fa-codepen': 'http://codepen.io/dylansa90/pen/NdGReZ/'},
    deployedUrl: 'http://codepen.io/dylansa90/full/NdGReZ/',
    thumbnailUrl: require('./thumbnails/wikipedia.jpg')
  }
];