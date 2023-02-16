export class Helpers {
  static getRelativeTime(dateTime) {
    var dateTimeInMiliSeconds = dateTime * 1000;
    var currentTimeInMiliSeconds = new Date().getTime();

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = currentTimeInMiliSeconds - dateTimeInMiliSeconds;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' days ';
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' months ';
    } else {
      return Math.round(elapsed / msPerYear) + ' years ';
    }
  }
}
