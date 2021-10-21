const moment = require('moment');

function timeToNow(date) {
  const dateMoment = moment(date);
  return moment(dateMoment, 'YYYYMMDD').fromNow();
}
