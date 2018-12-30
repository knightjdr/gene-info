const searchInput = () => {
  chrome.storage.local.get('input_search', (storage) => {
    const value = storage.input_search || '';
    document.getElementById('input_search').value = value;
  });
};

export default searchInput;
