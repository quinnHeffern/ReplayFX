getTodaysSchedule();
var div = $(".list");
function timfunction(){
  var pos = div.scrollTop();
  div.scrollTop(++pos);
  }
  var scroll = setInterval(timfunction,10);
