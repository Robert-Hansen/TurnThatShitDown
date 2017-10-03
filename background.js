(function(window, document, undefined) {
  console.info("Starting TurnDatSh!itDown Background Script.");

  let cssStyles = {
    boldGreen: "font-weight: bolder;color: green; font-size:14px"
  };

  let Storage = {} || 0;
  window.Storage = Storage;

  Storage.setVolume = function(volume) {
    let start = performance.now();
    chrome.storage.sync.set({ value: volume }, function() {
      console.info("[TurnDatSh!itDown][Debug] Default Volume Setting Saved");
    });
    let end = performance.now();
    console.info(
      "[TurnDatSh!itDown][Debug] Volume Value retrieved in %c" +
        (end - start).toFixed(2) +
        " ms.",
      cssStyles.boldGreen
    );
  };

  Storage.getVolume = function(callback) {
    let start = performance.now();
    console.info("[TurnDatSh!itDown][Debug] Getting Currently Default Volume.");
    chrome.storage.sync.get("value", function(volume) {
      callback(volume);
    });
    let end = performance.now();
    console.info(
      "[TurnDatSh!itDown][Debug] Volume Value stored in %c" +
        (end - start).toFixed(2) +
        " ms.",
      cssStyles.boldGreen
    );
  };

  //chrome.storage.onChanged.addListener(function(changes, namespace) {
  //    for (key in changes) {
  //        let storageChange = changes[key];
  //        console.info('Storage key "%s" in namespace "%s" changed. ' +
  //                    'Old value was "%s", new value is "%s".',
  //        key,namespace,storageChange.oldValue,storageChange.newValue);
  //    }
  //});
})(window, document);
