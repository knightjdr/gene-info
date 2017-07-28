const http = (gene) => {
  return new Promise((resolve, reject) => {
    const paramString = `?gene=${gene}`;
    chrome.runtime.sendMessage({
      method: 'GET',
      action: 'xhttp',
      url: `http://localhost:8002/extension${paramString}`
      // url: `http://prohitstools.mshri.on.ca:8002/extension${paramString}`
    }, function(response) {
      var parsedResponse = JSON.parse(response);
      if (parsedResponse.status === 200) {
        resolve(parsedResponse.result);
      } else {
        reject(parsedResponse.error);
      }
    });
  });
};
