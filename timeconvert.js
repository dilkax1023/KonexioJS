// Time Convert

function timeReverst(num) {
  var heure = num / 3600;
  var affichedHeure = Math.floor(heure);
  var min = (heure - affichedHeure) * 60;
  var minAffiched = Math.floor(min);
  var second = Math.round((min - minAffiched) * 60);
  return `${affichedHeure} : ${minAffiched} : ${second}`;
}
var reverstedTime = timeReverst(126);
console.log(`126 reversted to ${reverstedTime}`);
