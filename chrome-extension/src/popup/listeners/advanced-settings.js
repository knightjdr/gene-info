const advancedSettings = function settings() {
  const { type } = this.dataset;
  const el = document.getElementById(type);
  if (el) {
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }
};

export default advancedSettings;
