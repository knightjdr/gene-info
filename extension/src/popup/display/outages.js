import config from '../../config';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatter = typeof Intl !== 'undefined' && Intl?.DateTimeFormat('default', { timeZoneName: 'short' });

const getTimezoneAbbr = date => formatter?.formatToParts?.(date)
  .find(part => part.type === 'timeZoneName')
  ?.value || '';

const formatTwelveHour = date => (
  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);

export const formatDate = (date) => {
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const tz = getTimezoneAbbr(date);
  return `${formatTwelveHour(date)} ${tz} ${day}, ${month} ${date.getDate()}`;
};

const removeNotice = () => {
  const p = document.querySelector('.outage-notice');
  if (p) {
    p.remove();
  }
};

const displayOutages = async () => {
  try {
    const response = await fetch(config.outages, { cache: 'no-store' });
    const outages = await response.json();
    if (outages?.start) {
      const start = new Date(outages.start);
      const end = new Date(outages.end);
      const now = new Date();
      if (now > start && now < end) {
        const text = `OUTAGE: GIX will be unavailable for use from ${formatDate(start)} to `
          + `${formatDate(end)} due to ${outages.message}.`;
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(text));
        p.classList.add('outage-notice');
        document.body.prepend(p);
      } else {
        removeNotice();
      }
    }
  } catch (err) {
    removeNotice();
  }
};

export default displayOutages;
