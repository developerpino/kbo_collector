chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, { file: 'scripts.js' }, result => {
        const lastErr = chrome.runtime.lastError;
        //alert('tab: ' + tab.id + ' lastError: ' + JSON.stringify(lastErr));
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    setTimeout(function(){
        chrome.tabs.create(request, function(tab){
          setTimeout(function(){
            chrome.tabs.executeScript(tab.id, { file: 'collector.js' }, result => {
                const lastErr = chrome.runtime.lastError;
                //alert('tab: ' + tab.id + ' lastError: ' + JSON.stringify(lastErr));
            });
          }, 1000);

          setTimeout(function(){
              chrome.tabs.remove(tab.id);
          }, 8000);
        });
    }, 1000);
});