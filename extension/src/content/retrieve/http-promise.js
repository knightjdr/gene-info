const http = route => (
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      action: 'xhttp',
      route,
    }, (response) => {
      if (!response.error) {
        resolve(response.data);
      } else {
        reject();
      }
    });
  })
);

export default http;
