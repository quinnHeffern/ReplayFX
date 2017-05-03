

function getTodaysSchedule()
{
  var baseurl = "http://replayfxcalendar.azurewebsites.net/";
  var dste = new Date();

  dste = dste.getMonth()+"-"+dste.getDate()+"-"+dste.getFullYear();
  var dte="7-27-17";
  var numUpcomingEvents = 0;
  $.ajax({
    url: baseurl+"daily/"+dte,
    context: document.body,
  }).done(function(data) {
    var html = "";
    var counter = 0;
    var upcoming = $("<div></div>");
    upcoming.appendTo("body");
    $(data).each(function(){

        var title = $("<span></span>");
        var date = $("<span></span>");
        var startTime = $("<span></span>");
        var location = $("<div></div>");

        //Pull Data from each object
        title.html(this["title"]);
        var tempDate = this["date"];
        tempDate = tempDate.substring(5,7)+"/"+tempDate.substring(8,10)+"/"+tempDate.substring(0,4);

        date.html(tempDate);
        var tempStartTime = this["startTime"];
        if(tempStartTime!==null&&tempStartTime.substring(0,2)>12)
        {
          var hour = tempStartTime.substring(0,2);
          hour= hour-12;
          tempStartTime = hour+":"+tempStartTime.substring(3,5)+" pm ";
        }
        else if(tempStartTime!==null){
            if(tempStartTime.substring(0,2)=="00")
            {
              tempStartTime = "12:00 am ";
            }
            else {
              tempStartTime = tempStartTime+" am ";
            }

          }
      else {
        tempStartTime = "";
      }

      var tempEndTime = this["endTime"];
      if(tempEndTime!==null&&tempEndTime.substring(0,2)>12)
      {
        var hour = tempEndTime.substring(0,2);
        hour= hour-12;
        tempEndTime = hour+":"+tempEndTime.substring(3,5)+" pm ";

      }
      else if(tempEndTime!==null) {
        if(tempEndTime.substring(0,2)=="00")
      {
          tempEndTime = "12:00 am ";
      }
      else {
        tempEndTime = tempEndTime+" am ";
      }

    }
    else {
      tempEndTime = "";
    }



    startTime.html(tempStartTime+" - " +tempEndTime);

    //append and format times

    var featured = false;
    /*var eventType = this["replayEventTypes"];
    $(eventType).each(function(){
      if(this["name"]=="featured")
      {
        featured = true;
      }
    });*/
    location.html("Locations: " +this["location"]);


    //evnt.html(counter+" "+JSON.stringify(this));

    //This Will Add The Next Two Upcoming Events To The Upcoming
    /*dste = new Date();

    if(this["startTime"].substring(0,2)-dste.getHours()<=1&&this["startTime"].substring(0,2)-dste.getHours()>=0)
    {
      if(numUpcomingEvents<2)
      {
      evnt.clone().appendTo(upcoming).addClass("green");
      numUpcomingEvents++;
      }
    }*/



    counter++;

    var tem = $("<div></div>");
    var curDay = new Date();
    //This Logic Is Used to Add All Events that have not started yet
    if(numUpcomingEvents<8)
    {

      if(!(this["startTime"].substring(0,2)<curDay.getHours()))
      {
        if((this["startTime"].substring(0,2)>curDay.getHours())||(this["startTime"].substring(0,2)==curDay.getHours()&&this["startTime"].substring(3,5)>curDay.getMinutes()))
        {
          title.clone().appendTo(tem);
          $("<br />").appendTo(tem);
          startTime.clone().appendTo(tem);

          location.clone().appendTo(tem);
          $("<br />").appendTo(tem);

          tem.appendTo(".list");
          numUpcomingEvents++;
        }
    }
  }
  });

});
}
function getTodaysMuscians(dte)
{


  location.appendTo(evnt);
  dte = "7-28-17";
  $.ajax({
    url: baseurl+"daily/"+dte+"/music",
    context: document.body,
  }).done(function(data) {
    var html = "";
    var counter = 0;
    var upcoming = $("<div></div>");
    upcoming.appendTo("body");
    $(data).each(function(){

        var title = $("<span></span>");
        var date = $("<span></span>");
        var startTime = $("<span></span>");
        var location = $("<div></div>");
        var description = $("<div></div>")
        //Pull Data from each object
        title.html(this["title"]);
        var tempDate = this["date"];
        tempDate = tempDate.substring(5,7)+"/"+tempDate.substring(8,10)+"/"+tempDate.substring(0,4);

        date.html(tempDate);
        var tempStartTime = this["startTime"];
        if(tempStartTime!==null&&tempStartTime.substring(0,2)>12)
        {
          var hour = tempStartTime.substring(0,2);
          hour= hour-12;
          tempStartTime = hour+":"+tempStartTime.substring(3,5)+" pm ";
        }
        else if(tempStartTime!==null){
            if(tempStartTime.substring(0,2)=="00")
            {
              tempStartTime = "12:00 am ";
            }
            else {
              tempStartTime = tempStartTime+" am ";
            }

          }
      else {
        tempStartTime = "";
      }

      var tempEndTime = this["endTime"];
      if(tempEndTime!==null&&tempEndTime.substring(0,2)>12)
      {
        var hour = tempEndTime.substring(0,2);
        hour= hour-12;
        tempEndTime = hour+":"+tempEndTime.substring(3,5)+" pm ";

      }
      else if(tempEndTime!==null) {
        if(tempEndTime.substring(0,2)=="00")
      {
          tempEndTime = "12:00 am ";
      }
      else {
        tempEndTime = tempEndTime+" am ";
      }

    }
    else {
      tempEndTime = "";
    }



    startTime.html(tempStartTime+" - " +tempEndTime);

    //append and format times

    var featured = false;
    /*var eventType = this["replayEventTypes"];
    $(eventType).each(function(){
      if(this["name"]=="featured")
      {
        featured = true;
      }
    });*/
    location.html("Locations: " +this["location"]);


    //evnt.html(counter+" "+JSON.stringify(this));

    //This Will Add The Next Two Upcoming Events To The Upcoming
    /*dste = new Date();

    if(this["startTime"].substring(0,2)-dste.getHours()<=1&&this["startTime"].substring(0,2)-dste.getHours()>=0)
    {
      if(numUpcomingEvents<2)
      {
      evnt.clone().appendTo(upcoming).addClass("green");
      numUpcomingEvents++;
      }
    }*/



    counter++;
  });

});
}
