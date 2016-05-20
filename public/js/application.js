$(document).ready(function() {

  SC.initialize({
    client_id: '137c00407d39811965ebfce7da0f1829'
  });

  var playTrack = function(url) {
    var track_url = url;
    SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
      $('iframe').remove();
      $('#sc-player').append(oEmbed.html);
      $('iframe').css('width', '50%').css('height', 150)
    });
  };

  var data = { client_id: "137c00407d39811965ebfce7da0f1829" };
  $.ajax({
    method: 'get',
    dataType: 'json',
    url: 'https://api.soundcloud.com/users/droshik/tracks.json',
    data: data

  }).done(function(response){
    response.forEach(function(track){
    $('#track-list').append(`<p> <a href='http://soundcloud.com/droshik/${track.permalink}'>${track.title}</a></p>`);

  });

  $('#track-list').on('click', 'a', function(event){
    event.preventDefault();
    var track = $(this).attr('href');
    playTrack(track);
  });

  });

});

 //api.soundcloud.com/tracks?client_id=137c00407d39811965ebfce7da0f1829
