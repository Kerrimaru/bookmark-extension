chrome.browserAction.onClicked.addListener(function(tab) {
  // Sends a message to the active tab
  chrome.tabs.captureVisibleTab(null, {}, function(imageData) { 
    var image = imageData.replace(/^data:image\/\w+;base64,/, "");
    saveScreen(image)
  });
});

function saveScreen(image){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "clicked_extension", "image":image})
  });
}
