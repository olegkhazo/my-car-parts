import moment from 'moment';

export function getTimeAgo(timestamp) {
  const currentTime = moment();
  const pastTime = moment(timestamp);
  const timeDifference = currentTime.diff(pastTime);

  const duration = moment.duration(timeDifference);

  if (duration.asSeconds() < 60) {
    return Math.floor(duration.asSeconds()) + ' seconds ago';
  } else if (duration.asMinutes() < 60) {
    return Math.floor(duration.asMinutes()) + ' minutes ago';
  } else if (duration.asHours() < 24) {
    return Math.floor(duration.asHours()) + ' hours ago';
  } else if (duration.asDays() < 7) {
    return Math.floor(duration.asDays()) + ' days ago';
  } else if (duration.asMonths() < 1) {
    return Math.floor(duration.asWeeks()) + ' weeks ago';
  } else {
    return Math.floor(duration.asMonths()) + ' months ago';
  }
}

