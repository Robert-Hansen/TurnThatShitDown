
console.info('[TurnThatShitDown] Loaded Successfully.');

(function() {

    var cssStyles = {
        boldGreen: 'font-weight: bolder;color: green; font-size:14px',
    }


    $(document).bind("DOMSubtreeModified", function()
    {
        let listOfVideos = document.getElementsByTagName("video");

        for (let i = 0; i < listOfVideos.length; i++)
        {
            listOfVideos[i].onloadstart = function()
            {
                listOfVideos[i].onloadedmetadata = function()
                {
                    console.info('[TurnThatShitDown][DEBUG] Video Tags Found:%c %i', cssStyles.boldGreen, listOfVideos.length);

                    chrome.storage.sync.get("value", function(obj)
                    {
                        if (obj === undefined)
                        {
                            console.warn('[TurnThatShitDown][DEBUG] Saved volume was undefined.');
                            obj = .5;
                        }
                        else
                        {
                            listOfVideos[i].volume = obj.value / 100;
                        }
                    });
                };
            };
        };
    });
})();
