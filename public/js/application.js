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

 $("#user-info").on('submit', function(){
    event.preventDefault();
    var userName = $(this).serialize().split('=')[1]
       // console.log(userName);

    var url = 'https://api.soundcloud.com/users/' + userName + '/tracks.json'
    var data = { client_id: "137c00407d39811965ebfce7da0f1829" };
    $.ajax({
      method: 'get',
      dataType: 'json',
      url: url,
      data: data

    }).done(function(response){
      $("#user-info")[0].reset();
      response.forEach(function(track){

      $('#track-list').append(`<p> <a href='http://soundcloud.com/${userName}/${track.permalink}'>${track.title}</a></p>`);
       })
    });

  $('#track-list').on('click', 'a', function(event){
    event.preventDefault();
    var track = $(this).attr('href');
    playTrack(track);
  });

  });

});

 //api.soundcloud.com/tracks?client_id=137c00407d39811965ebfce7da0f1829
