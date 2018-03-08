$.ajaxSetup({
  async:false
    })
var channels = ["freecodecamp","ESL_SC2","OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var status="Offline";
channels.forEach(function(channel){
  
//$.getJSON("https://jsonplaceholder.typicode.com/users/1",function(data){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+channel,function(data){
  console.log(data);  
      if (data.stream == null){
        status="Offline";
      }
      else{
        status="Online";
      }
    })
  $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+channel,function(data){
  console.log(data);  
  if (status=="Online"){
    $(".twitchList").append('<li class="list-group-item list-group-item-success justify-content-between"><img width="40" height="40" src="'
    + data.logo +
    '"><a target="_blank" href="' 
    + data.url + 
    '">' 
    + data.display_name + 
    "</a><span class='badge badge-default badge-pill'>"
    + status + 
    "</span></li>");
  }
    else
      {
    $(".twitchList").append('<li class="list-group-item list-group-item-danger justify-content-between"><img width="40" height="40" src="'
    + data.logo +
    '"><a target="_blank" href="' 
    + data.url + 
    '">' 
    + data.display_name + 
    "</a><span class='badge badge-default badge-pill'>"
    + status + 
    "</span></li>");
  }
    
})
});
