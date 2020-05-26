var savePage = (image) => {
  var data =  {"bookmark": {"url":window.location.href, "title":document.title, "auto": true, "screenshot":{"io":image}} };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://hidden-bastion-43962.herokuapp.com/bookmarks.json');
  xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
  alert("Bookmark added to your homepage");
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_extension" ) {
      savePage(request.image);
    }
  }
);
