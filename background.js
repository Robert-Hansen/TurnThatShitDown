(function(window, document, undefined) {
  console.info("Starting TurnDatSh!itDown Background Script.");

  let cssStyles = {
    boldGreen: "font-weight: bolder;color: green; font-size:14px"
  };

  let Storage = {} || 0;
  window.Storage = Storage;

  /**
   * Setting the volume in chrome storage.
   */
  Storage.setVolume = volume => {
    let start = performance.now();
    chrome.storage.sync.set({ value: volume }, () => {
      console.info("[TurnDatSh!itDown][Debug] Default Volume Setting Saved");
    });
    let end = performance.now();
    console.info(
      "[TurnDatSh!itDown][Debug] Volume value retrieved in %c" +
        (end - start).toFixed(2) +
        " ms.",
      cssStyles.boldGreen
    );
  };

  /**
   * Getting the volume in chrome storage.
   */
  Storage.getVolume = callback => {
    let start = performance.now();
    console.info("[TurnDatSh!itDown][Debug] Getting Currently Default Volume.");
    chrome.storage.sync.get("value", volume => {
      if (volume === undefined) return 100;
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
