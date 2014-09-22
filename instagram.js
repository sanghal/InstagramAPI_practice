
  $(function() {    // do once original document loaded and ready
        $('#tagButton').click(function() { //number2 in rubric
                $.getJSON("tag.json", function(responseObject) { //receives tag.json file from the server
                        console.log(responseObject.tags.length);
                        var displayText =""; 
                        console.log(displayText);
                        for (var i = 0; i<responseObject.tags.length; i++) {
                                var tag = responseObject.tags[i];
                                displayText += "<li>" + tag.tagName+ "<\/li>"; //show list of json data
                                };
                                console.log(displayText);
                $(".tags").html(displayText);
                } );  // getJSON
        } );  // click


        $('#tagSearch').click(function() { //ajax call for the second button 
          var hashTag = $("input").val(); //need to get a input value in order to use it for api url
          $.ajax({
              type: "GET",
              dataType: "jsonp",
              cache: false,
              crossDomain: true,
              //uses hashtag to complete the url and find photos that relates to that hashtag
              url: "https://api.instagram.com/v1/tags/" + hashTag + "/media/recent?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b",
              success: function(data) {
                $('.popular').empty();
                $('#title').text("Photos for " + hashTag + " tag");
                for (var i = 0; i < 6; i++) { //limit to six photos or videos since there are so many
                  //there are two types of uploads: image and video. 
                  if(data.data[i].type == "image"){
                    $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a> <span> cool photos </span></li>");

                  }
                  else{
                    $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].videos.low_resolution.url +"'></img></a></li>");

                  }
                }
              }
            });
        });

        $("#popularButton").click(function(){ //Ajax call for the third button. It brings current popular photos from instagram
            $.ajax({
              type: "GET",
              dataType: "jsonp",
              cache: false,
              crossDomain: true,
              url: "https://api.instagram.com/v1/media/popular?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b",
              success: function(data) {
                $('.popular').empty();
                 $('#title').text("Popular photos");
                for (var i = 0; i < 6; i++) {
                  $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a><span> cool photos </span></li>");
                }
              }
            });
        } );
}); // onReady

  