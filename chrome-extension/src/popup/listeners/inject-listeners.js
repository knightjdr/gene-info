document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#click').addEventListener('click', clickSet);
  document.querySelectorAll('.display-click').forEach(function(element) { element.addEventListener('click', reportType); });
  document.querySelectorAll('.toggle').forEach(function(element) { element.addEventListener('click', toggle); });
});
