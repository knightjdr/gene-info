chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { action, route } = message;
  if (action === 'xhttp') {
    fetch(`${process.env.API}/extension${route}`)
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
