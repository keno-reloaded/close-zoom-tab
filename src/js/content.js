(function () {
  setTimeout(function () {
    // Check if the URL contains '#success'
    const hasSuccess = window.location.href.includes("#success");
    if (hasSuccess) {
      chrome.runtime.sendMessage({ closeThis: true });
    }
  }, 2000);
})();
