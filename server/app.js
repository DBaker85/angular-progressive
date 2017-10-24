const express = require('express'),
cors = require('cors'),
app = express(),
router = express.Router(),
bodyParser = require('body-parser'),
https = require('https'),
path = require('path');
request=require('request');
/**npm
* Use cors to solve CORS browser issues for local development
*/
app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'..','dist')));

const feeds = [
  {
    'title':'Shortage of ether causes widespread panic',
    'shortUrl':'ether_shortage',
    'image':'https://source.unsplash.com/1600x900/?panic',
    'body': []
  },
  {
    'title':'Warlocks demand more respect and not to be refered to as hipsters',
    'shortUrl':'warlock_hipsters',
    'image':'https://source.unsplash.com/1600x900/?respect',
    'body' : []
  },
  {
    'title':'Makers guild invent a whole new propulsion system',
    'shortUrl':'makers_propulsion',
    'image':'https://source.unsplash.com/1600x900/?invention',
    'body' : []
  },
  {
    'title':'Magic vs science, the eternal debate',
    'shortUrl':'magic_science',
    'image':'https://source.unsplash.com/1600x900/?debate',
    'body' : []
  },
  {
    'title':'Black lands reconquered by wandering mage',
    'shortUrl':'blacklands_mage',
    'image':'https://source.unsplash.com/1600x900/?dark',
    'body' : []
  },
  {
    'title':'Orlogs, fight or flee?',
    'shortUrl':'orlog_fight',
    'image':'https://source.unsplash.com/1600x900/?fight',
    'body' : []
  },
  {
    'title':'Pirates invade from the east',
    'shortUrl':'pirates_invasion',
    'image':'https://source.unsplash.com/1600x900/?pirates',
    'body' : []
  },
]


function search(nameKey, prop, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i][prop] === nameKey) {
          return myArray[i];
      }
  }
};

/**
* Default endpoint
*/
app.get('/api/feed', function (req, res) {
  res.send(feeds);
});

app.get('/api/story/:shorturl', function (req, res) {
  let feed = search(req.params.shorturl,'shortUrl',feeds);
  request.get('https://baconipsum.com/api/?type=meat-and-filler&paras=10',function(error, response, body){
    feed.body = JSON.parse(body);
    res.send(feed);
  })

});


/**
* Init Server. Log a message for user to know that server is on.
*/
app.listen(8888, function () {
  console.log('Server on port http://localhost:8888')
});
