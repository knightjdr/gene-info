const http = route => (
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      action: 'xhttp',
      method: 'GET',
      route,
    }, (response) => {
      if (response.status === 200) {
        resolve(response.result);
      } else {
        reject();
      }
    });
  })
);

export default http;
