console.info("[TurnThatShitDown] Loaded Successfully.");

(function() {
  let cssStyles = {
    boldGreen: "font-weight: bolder;color: green; font-size:14px"
  };

  $(document).bind("DOMSubtreeModified", () => {
    let listOfVideos = document.getElementsByTagName("video");

    for (let i = 0; i < listOfVideos.length; i++) {
      listOfVideos[i].onloadstart = () => {
        listOfVideos[i].onloadedmetadata = () => {
          console.info(
            "[TurnThatShitDown][DEBUG] Video Tags Found:%c %i",
            cssStyles.boldGreen,
            listOfVideos.length
          );

          chrome.storage.sync.get("value", obj => {
            if (obj === undefined) {
              console.warn(
                "[TurnThatShitDown][DEBUG] Saved volume was undefined."
              );
              obj = 0.5;
            } else {
              listOfVideos[i].volume = obj.value / 100;
            }
          });
        };
      };
    }
  });
})();
