window.onload = function() {
    chrome.storage.sync.get("ids", ({ ids }) => {
      if(ids) document.getElementById("ids").value = ids;
  });
}
// When the button is clicked, inject setPageBackgroundColor into current page
save.addEventListener("click", async () => {
  var ids = document.getElementById("ids").value;
  chrome.storage.sync.set({"ids": ids});
  document.getElementById("result").innerHTML = "Saved";
});