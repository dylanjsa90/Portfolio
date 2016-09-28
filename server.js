'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

const proxyGithub = function(request, response) {
  console.log('Routing GH request for ', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com.com/' + request.params[0],
    header: {Authorization: 'token ' + process.env.GITHUB_TOKEN}
  }))(request, response);
};

app.get('/github/*', proxyGithub);
app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  console.log('New request', req.url);
  res.SendFile('index.html', {root: '.'});
});

app.listen(PORT, () => console.log('Server up on port: ' + PORT));