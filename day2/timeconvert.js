// Time Convert

function timeConvert(num) {
  var heure = num / 3600;
  var affichedHeure = Math.floor(heure);
  var min = (heure - affichedHeure) * 60;
  var minAffiched = Math.floor(min);
  var second = Math.round((min - minAffiched) * 60);
  return `${affichedHeure}:${minAffiched}:${second}`;
}
console.log(timeConvert(126));
