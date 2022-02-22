window.onload = function() {
	pollDOM();
}
function pollDOM () {
	if (document.getElementsByClassName('item-view').length > 2) {
		chrome.storage.sync.get("ids", ({ ids }) => {
			ids.split(",").forEach((element) => {
				if(element) {
					document.querySelectorAll(".item-view a[href*='"+element+"']")[0].parentElement.parentElement.hidden = true
				}
			});
		});
	} else {
		setTimeout(pollDOM, 40);
	}
}