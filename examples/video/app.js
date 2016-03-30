$(document).ready(function(){

  function loadWebCams(){
    $("div[data-webcam]").webcam({
      append: false,
      width: 640,
      height: 480,
      mode: "callback",
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
