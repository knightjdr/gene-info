document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#click').addEventListener('click', clickSet);
  document.querySelectorAll('.display-click').forEach((element) => { element.addEventListener('click', reportType); });
  document.querySelectorAll('.toggle').forEach((element) => { element.addEventListener('click', toggle); });
});
