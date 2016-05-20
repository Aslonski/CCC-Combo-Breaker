$(document).ready(function() {

  SC.initialize({
    client_id: '137c00407d39811965ebfce7da0f1829'
  });

  var track_url = 'http://soundcloud.com/droshik/warm-moments';
  SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
    // console.log('oEmbed response: ', oEmbed);
    $('#sc-player').append(oEmbed.html);
    $('iframe').css('width', '50%').css('height', 150)
  });

    var data = { client_id: "137c00407d39811965ebfce7da0f1829" };
  $.ajax({
    method: 'get',
    dataType: 'json',
    url: 'https://api.soundcloud.com/users/3449496/tracks.json',
    data: data
  }).done(function(response){
    console.log(response);
    response.forEach(function(track){
    console.log(track);
    $('#status').append(track.title) + "<br>";

    });
  });



// $(document).ready(
//   /* This is the function that will get executed after the DOM is fully loaded */
//   function () {
//     /* set user we wish to see trackList for */
//     var USER = "droshik"
//     /* set user name on DOM */
//     $("#user").html(USER);
//     SC.connect().then(function(){
//       SC.get('/me');
//     }).then(function(response) {
//       console.log(response);
//     })
//     /* Use soundcloud API to get track list */
//     // SC.get("/users/"+USER+"/tracks", {limit: 100}, function(tracks){
//     //   var trackList = ""
//     //   console.log(tracks)
//     //   for (var i = 0; i < tracks.length; i++) {
//     //     // console.log(tracks[i]);
//     //     /* populate trackList html */
//     //     // trackList += tracks[i].title + "<br>";
//     //   }
//     //   // $("#status").append(trackList);
//     // });
//   }
// );

//   // $(document).ready(function() {
//   //   var widget = SC.Widget(document.getElementById('soundcloud_widget'));
//   //   widget.bind(SC.Widget.Events.READY, function() {
//   //   console.log('Ready...');
//   // });


//   // $(document).keyup(function(event) {
//   //   event.preventDefault();
//   //   if (event.keyCode == 32) {
//   //    var widget = SC.Widget(document.getElementById('.playButton'));
//   //    widget.bind(toggle());
//   // }

//   // });

});

 //api.soundcloud.com/tracks?client_id=137c00407d39811965ebfce7da0f1829
