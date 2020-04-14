var polling = false;
var seconds = 0;
var tabID = 0;

function poll()
{
	if(polling == true)
	{
		chrome.tabs.reload(tabID, callback);
		setTimeout(poll, 1000*seconds);
	}
};


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if (request.method == "start")
    {
    	seconds =  request.seconds;
    	tabID =  request.tabID;
       	polling = true;
		  poll();
    }

    if (request.method == "stop")
    {
    	seconds =  request.seconds;
    	tabID =  request.tabID;
    	polling = false;
    }

    if (request.type == "STRING_FOUND") {
      var myAudio = new Audio();
      myAudio.src = chrome.extension.getURL("ring.mp3");
      myAudio.play();
    }
});

function callback() {
    if (chrome.runtime.lastError)
    {
        console.log(chrome.runtime.lastError.message);
        polling = false;
    }
    else
    {

    }
}
