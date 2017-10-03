
$(document).ready(function(){
    
    bg = chrome.extension.getBackgroundPage();
    
    $("#volumeSlider").slider({
        formatter: function(volume) { return volume+'%'; },
        min: 0,
        max: 100,
        ticks: [0,25,50,75,100],
        ticks_labels: ['0%','25%','50%','75%','100%'],
        ticks_snap_bounds: .5
    });
    
    bg.Storage.getVolume(function(volume){ 
        console.log(volume);
        $("#volumeSlider").slider('setValue',Number( volume.value ));
    });
    
    $("#volumeSlider").on("slideStop", function(event, ui) {
        bg.Storage.setVolume( event.value );
    });
    
});