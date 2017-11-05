$(document).ready(function() {

	var subjects = ['dogs', 'cats', 'birds'];

	renderButtons();
	function renderButtons(){

		$("#button-div").empty();

        // Looping through the array of movies
        for (var i = 0; i < subjects.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("subject");
          // Adding a data-attribute
          a.attr("data-name", subjects[i]);
          // Providing the initial button text
          a.text(subjects[i]);
          // Adding the button to the buttons-view div
          $("#button-div").append(a);
        }
      }

      $('#add-subject').on('click', function(event){
      		event.preventDefault();

      		var subject = $('#subject-input').val().trim();

      		subjects.push(subject);

      		renderButtons();

      });

    $(document).on('click', ".subject", displayGifInfo);

	function displayGifInfo() {
	// $(".subject").on("click", function() {
	// 	console.log('button was clicked');
		var subject = $(this).attr('data-name');
		var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=56uYq7JLVc0ntzCICXjAnKxSDyNVuKyF&limit=10";
		
       		
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        	var results = response.data;

        	for (var i = 0; i < results.length; i++){


	        	var gifDiv = $('<div class="gifWell">');


	        	var rating = response.data[i].rating;
	        	console.log("rating is " + rating);

	        	var ratingDiv = $('<div>').text("Rating: " + rating);

	        	var imgURL = response.data[i].images.original.url;
	        	console.log("img url is " + imgURL);

	        	gifDiv.append(rating);

	        	var image = $('<img>').attr("src", imgURL);
        		image.addClass('gif');
        		image.attr('data-state', 'still');
        		image.attr('data-still', response.data[i].images.original_still.url);
        		image.attr('data-animate', response.data[i].images.original.url);
	        	gifDiv.append(image);

	        	$('#gifWell').prepend(gifDiv);
        	}

     	});
    }

    $('.gif').on('click', function() {
    	console.log("gif button is clicked");

    	var state = $(this).attr('data-state');

    	if (state === 'still'){
    		$(this).attri('src', $(this).attr('data-animate'));
    		$(this).attr('data-state', 'animate');
    	} else {
    		$(this).attr('src', $(this).attr('data-still'));
    		$(this).attr('data-state', 'still');
    	}
    });


});

















// });