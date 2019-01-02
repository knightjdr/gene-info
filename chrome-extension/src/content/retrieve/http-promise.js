const url = process.env.NODE_ENV === 'production'
  ? 'http://prohitstools.mshri.on.ca:8002'
  : 'http://localhost:8002';

const http = route => (
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      action: 'xhttp',
      method: 'GET',
      url: `${url}/extension${route}`,
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
