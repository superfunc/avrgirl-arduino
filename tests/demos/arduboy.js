var Avrgirl = require('../../avrgirl-arduino');
var avrgirl = new Avrgirl({
  board: 'leonardo',
  debug: true
});

var hex = __dirname + '/../../junk/hex/arduboy/rund.cpp.leonardo.hex';

avrgirl.flash(hex, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('done.');
  }
});
