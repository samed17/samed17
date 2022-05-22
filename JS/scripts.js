$(document).ready(function(){
	// The base url for all API calls
	var apiBaseURL = 'https://ptf-web-dizajn-2022.azurewebsites.net/';

	const nowPlayingURL = apiBaseURL + 'api/Cars';
	function getNowPlayingData(){
		$.getJSON(nowPlayingURL, function(nowPlayingData){
			console.log(nowPlayingData);
			for(let i = 0; i<nowPlayingData.length; i++){

				var poster = nowPlayingData[i].imageUrl;

				var title = nowPlayingData[i].name;

				var releaseDate = nowPlayingData[i].year;

				var price = nowPlayingData[i].price;

				var nowPlayingHTML = '';
				nowPlayingHTML += '<div class="col-sm-3 eachMovie">';
					nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
					nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
						nowPlayingHTML += '<div class="modal-dialog" role="document">';
							nowPlayingHTML += '<div class="modal-content col-sm-12">';
								nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
									nowPlayingHTML += '<a href="'+'youtubeLink'+'"><img src="'+poster+'"></a>'; 
								nowPlayingHTML += '</div><br>';//close trailerLink
								nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
									nowPlayingHTML += '<div class="movieName">'+title+'</div><br>';	
									nowPlayingHTML += '<div class="release">Year: '+releaseDate+'</div><br>';
									nowPlayingHTML += '<div class="rating">Price: '+price+ ' BAM</div><br>';
									nowPlayingHTML += '<button type="submit" id='+nowPlayingData[i].id+' onclick='+ DeleteCar(nowPlayingData[i].id) +' class="btn btn-default delete">Delete Car</button>';
								nowPlayingHTML += '</div>'; //close movieDetails
							nowPlayingHTML += '</div>'; //close modal-content
						nowPlayingHTML += '</div>'; //close modal-dialog
					nowPlayingHTML += '</div>'; //close modal
				nowPlayingHTML += '</div>'; //close off each div

				$('#cars-grid').append(nowPlayingHTML);
				$('#carsLabel').html("Cars List");
			}
		}) 
	}
	getNowPlayingData();
	var nowPlayingHTML = '';

	$('.navbar-brand').click(function(){
		getNowPlayingData();
		$('#cars-grid').html(nowPlayingHTML);
		$('#carsLabel').html("Cars List:");
	})		
	$('.nowPlaying').click(function(){
		getNowPlayingData();
		$('#cars-grid').html(nowPlayingHTML);
		$('#carsLabel').html("Cars List:");
	})
	function DeleteCar(id){
		console.log(id);
		 fetch(apiBaseURL + 'api/Cars/' +122, {
		 	method: 'DELETE',
			})
		 	.then(res => {
				res.json()
			})
			.then(res => {
				console.log(res)
			})
	};

});

