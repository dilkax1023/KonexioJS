var request = require('request');
var url = [
  'http://www.omdbapi.com/?t=avatar&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=game+of+throne&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=prison+break&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=king+lion&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=star+wars&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=casablanca&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=city+lights&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=the+dark+knight&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=the+lord+of+the+rings+trilogy&apikey=3e90dd0a',
  'http://www.omdbapi.com/?t=moon+light&apikey=3e90dd0a',
];
for (var i = 0; i < url.length; i++) {
  request(url[i], function (error, response, body) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    var body = JSON.parse(body);
    var { Title, Year, Genre, Actors } = body;
    console.log(
      `${
        i++ - 9
      }. Nom: ${Title}  Année: ${Year}  Genre: ${Genre}  Acteurs: ${Actors}`
    );
  });
}
