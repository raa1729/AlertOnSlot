window.addEventListener ("load", myMain, false);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myMain () {
  //alert(document.body.innerHTML);
  if(document.body.innerHTML.includes("Today"))
    if(document.body.innerHTML.includes("Right now, all shoppers are busy"))
      console.log("Found Busy Message")
    else
      chrome.runtime.sendMessage({type: "STRING_FOUND"});
  else {
    await sleep(1000);
    myMain();
  }
}
