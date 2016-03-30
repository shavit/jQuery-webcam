$(document).ready(function(){

  function loadWebCams(){
    $("div[data-webcam]").webcam({
      append: false,
      width: 324,
      height: 240,
      mode: "save",
      swffile: "../../jscam.swf",
      quality: 60,

      onSave: function(data){
        var col = data.split(";");
      },

      onCapture: function(){
        webcam.save();
      },

      onLoad: function () {
          var cams = webcam.getCameraList();
          for(var i in cams) {
              jQuery("#cams").append("<li>" + cams[i] + "</li>");
          }
      }
    });
  }

  loadWebCams();

  $("#capture").on("click", function(event){
    console.log(webcam.capture("/camera/save"));
  });

});
