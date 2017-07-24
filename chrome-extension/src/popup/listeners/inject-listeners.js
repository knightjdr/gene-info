document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.activate-click').forEach((element) => { element.addEventListener('click', activateType); });
  document.querySelectorAll('.display-click').forEach((element) => { element.addEventListener('click', reportType); });
  document.querySelectorAll('.namespace-click').forEach((element) => { element.addEventListener('click', goNamespace); });
  document.querySelectorAll('.toggle').forEach((element) => { element.addEventListener('click', toggle); });
});
