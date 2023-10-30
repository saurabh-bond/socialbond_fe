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

  static calculateOrderPrice(price_per_k, quantity) {
    return parseFloat((Math.round(price_per_k * quantity) / 1000).toFixed(2));
  }

  static processIgURL(url) {
    if (url === undefined || url === '') return '';
    const p = url.split('/');
    var t = '';
    for (let i = 0; i < p.length; i++) {
      if (i == 2) {
        t +=
          p[i].replaceAll('-', '--').replaceAll('.', '-') +
          atob('LnRyYW5zbGF0ZS5nb29n') +
          '/';
      } else {
        if (i != p.length - 1) {
          t += p[i] + '/';
        } else {
          t += p[i];
        }
      }
    }
    return encodeURI(t);
  }

  static convertSecsToRelativeTime(seconds) {
    let d = Number(seconds);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    console.log(h, m, s);

    var hDisplay = h > 0 ? h + (h == 1 ? ' hour ' : ' hours ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute ' : ' minutes ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return hDisplay + mDisplay + sDisplay;
  }
}
