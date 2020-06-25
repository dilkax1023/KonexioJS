module.exports = {
  getTimePassed: function (arg1, arg2) {
    var mlsc1 = Date.parse(arg1);
    var mlsc2 = Date.parse(arg2);
    var passedMlsc = mlsc2 - mlsc1;
    var day = passedMlsc / (24 * 3600 * 1000);
    var passedDay = Math.floor(day);
    // console.log(passedDay);
    var min = day - passedDay;
    var passedMin = Math.round(min * 24 * 60);
    // console.log(passedMin);
    return `days passed: ${passedDay}, minutes passed: ${passedMin}`;
  },
};
