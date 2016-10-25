'use strict';

module.exports = [
  {
    id: 1,
    name: 'Ultimate Pi',
    date: 'September 2016',
    description: 'Full-Stack responsive web app that enables the client to use a configured Raspberry Pi as an IR remote',
    employs: ['Angular.js', 'Node.js server', 'Express Routing', 'Secure authentication system with registration', 'Custom built angular components', 'Sleek and intuitive remote UI',
      'Webpack bundling', 'SCSS styling', 'Bootstrap', 'Font-awesome for Icons', 'TDD: Karma w/jasmine and Mocha w/Chai for backend testing',
      'Deployed on Heroku'],
    githubUrl: ['https://github.com/sendjmoon/Ultimate-Pi', 'https://github.com/dylanjsa90/UltimatePi-api'],
    deployedUrl: 'http://ultimate-pi.herokuapp.com',
    thumbnailUrl: require('../lib/images/abstract-blue-light-vector-background.jpg')
    
  },

  {
    id: 2,
    name: 'Fake Sports Real Money',
    date: 'August 2016',
    description: 'Pure node.js app for fantasy sports league commissioners which after initial setup will send a daily text and email reminder to members with overdue balances that they need to pay',
    employs: ['Twilio API for daily text reminders', 'Node-mailer for sending daily email reminders', 'Cron for constant time tracking',
    'Express middleware', 'Mocha/Chai Testing', 'Deployed on Heroku'],
    githubUrl: ['https://github.com/FakeSportsRealMoney/FakeSportsRealMoney'],
    deployedUrl: 'https://fake-sports-real-money.herokuapp.com',
    thumbnailUrl: require('../lib/images/abstract-blue-light-vector-background.jpg')
  },

  {
    id: 3,
    name: 'Nosy Neighbor',
    date: 'June 2016',
    description: '',
    employs: ['Single Page Architecture', 'Google Maps API w/Places library for autocompletion', 'Node.js w/Express for the server', 'WebDB for the database',
    'City of Seattle API for data', 'Deployed on Firebase'],
    githubUrl: 'https://github.com/crashtack/301-team-project',
    deployedUrl: 'https://projectstage-a6114.firebaseapp.com/',
    thumbnailUrl: require('../lib/images/blue_abstract_background.jpg') 
  },
  {
    id: 4,
    name: 'Task Manager',
    description: 'Full-stack web organization that users can create accounts and within each account create and manage tasks or lists and add/remove content from those lists',
    employs: ['Angular.js', 'Node.js server with express routing', 'Secure authentication with jsonwebtokens', 'SASS styling', 'webpack bundling', 'bootstrap', 'font-awesome icons', 'Deployed on heroku'], 
    githubUrl: ['https://github.com/dylanjsa90/task-manager'],
    deployedUrl: 'https://task-list-manager.herokuapp.com',
  }
];