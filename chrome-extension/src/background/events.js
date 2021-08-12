const url = process.env.NODE_ENV === 'production'
  ? 'https://api.gene-info.org/api'
  : 'http://localhost:8002';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { action, route } = message;
  if (action === 'xhttp') {
    fetch(`${url}/extension${route}`)
      .then((response) => {
        if (!response.ok) {
          sendResponse({ error: true });
        }
        return response.json();
      })
      .then((data) => {
        sendResponse({ data });
      })
      .catch(() => {
        sendResponse({ error: true });
      });
  }
  return true;
});
