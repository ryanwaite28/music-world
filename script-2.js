// console.log();

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {
	
	/*		-----------		*/
	/*		Load Artist		*/
	/*		-----------		*/
	
	$scope.loadArtists = function() {
		console.log('Load Artist');
		
		$('#artist-div').css('display', 'block');
		$('#tag-div').css('display', 'none');
		$('#alb-div').css('display', 'none');
		$('#trk-div').css('display', 'none');
		
		var searchArtist = $('#s-artist').val();
		var artOption;
		
		if(searchArtist == '') {
			$('#message').text('Please Input A Search Query.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		if( $('#art-gta').prop('checked') == false && $('#art-toptracks').prop('checked') == false ) {
			$('#message').text('Please Choose From The Two Options.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		
		var artistAPI;
		
		//	Artist Album Selection
		if( $('#art-gta').prop('checked') == true ) {
		
			$('#arttrks-list').css('display', 'none');
			$('#artalbs-list').css('display', 'block');
		
			artOption = 'getTopAlbums';
			
			artistAPI = 'http://ws.audioscrobbler.com/2.0/?method=artist.' + artOption + '&artist=' + searchArtist + '&limit=15&api_key=d75388110ca7dc9f1023d17803115757&format=json';
		
			$scope.albums = [];
			
			$.getJSON(artistAPI, function(data){
				console.log(data);
				
				var albums = data.topalbums.album;
				
				for(var i = 0; i < albums.length; i++) {
				
					var album = data.topalbums.album[i];

					var name = album.name;
					var playCount = album.playcount;
					var url = album.url;
					var artistName = album.artist.name;
					var artistURL = album.artist.url;
					
					var imgOne = album.image[0]['#text'];
					var imgTwo = album.image[1]['#text'];
					var imgThree = album.image[2]['#text'];
					var imgFour = album.image[3]['#text'];
					
					$scope.albums.push({
						albumName: name,
						albumPlayCount: playCount,
						albumURL: url,
						albumImgOne: imgOne,
						albumImgTwo: imgTwo,
						albumImgThree: imgThree, 
						albumImgFour: imgFour, 
						artName: artistName,
						artURL: artistURL,
					});
				
				}
				
				$scope.$apply(function () {
					console.log($scope.albums);
				});

			});
			
		} 
		
		//	Artist Tracks Selection
		if( $('#art-toptracks').prop('checked') == true ) {
		
			$('#artalbs-list').css('display', 'none');
			$('#arttrks-list').css('display', 'block');
		
			artOption = 'getTopTracks';
			
			artistAPI = 'http://ws.audioscrobbler.com/2.0/?method=artist.' + artOption + '&artist=' + searchArtist + '&limit=30&api_key=d75388110ca7dc9f1023d17803115757&format=json';
		
			$scope.tracks = [];
			
			$.getJSON(artistAPI, function(data){
				console.log(data);
				
				var tracks = data.toptracks.track;
				
				for(var i = 0; i < tracks.length; i++) {
				
					var track = data.toptracks.track[i];
					
					var name = track.name;
					var listeners = track.listeners;
					var playCount = track.playcount;
					var streamable = track.streamable;
					var url = track.url;
					var artistName = track.artist.name;
					var artistURL = track.artist.url;
					var imgOne = track.image[0]['#text'];
					var imgTwo = track.image[1]['#text'];
					var imgThree = track.image[2]['#text'];
					var imgFour = track.image[3]['#text'];
					
					$scope.tracks.push({
						trackName: name,
						trackListeners: listeners,
						trackPlayCount: playCount,
						trackStreamable: streamable,
						trackURL: url,
						artName: artistName,
						artURL: artistURL,
						trackImgOne: imgOne,
						trackImgTwo: imgTwo,
						trackImgThree: imgThree, 
						trackImgFour: imgFour, 
					});
				
				}
				
				$scope.$apply(function () {
					console.log($scope.tracks);
				});
				
			});
			
		}
		
	}
	
	/*		---------		*/
	/*		Load Tags		*/
	/*		---------		*/
	
	$scope.loadTags = function() {
		console.log('Load Tag');
		
		$('#artist-div').css('display', 'none');
		$('#tag-div').css('display', 'block');
		$('#alb-div').css('display', 'none');
		$('#trk-div').css('display', 'none');
		
		var searchTag = $('#s-tag').val();
		var tagOption;
		
		if(searchTag == '') {
			$('#message').text('Please Input A Search Query.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		if( $('#tag-art').prop('checked') == false && $('#tag-trk').prop('checked') == false && $('#tag-alb').prop('checked') == false) {
			$('#message').text('Please Choose From The Three Options.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		
		var tagAPI;
		
		//
		if($('#tag-art').prop('checked') == true) {
		
			$('#tag-alb-list').css('display', 'none');
			$('#tag-trk-list').css('display', 'none');
			$('#tag-art-list').css('display', 'block');
			
			tagOption = 'getTopArtists';
			
			tagAPI = 'http://ws.audioscrobbler.com/2.0/?method=tag.' + tagOption + '&tag=' + searchTag + '&api_key=d75388110ca7dc9f1023d17803115757&format=json';
			
			$scope.tagArtists = [];
			
			$.getJSON(tagAPI, function(data){
				console.log(data);
				
				var tagArtists = data.topartists.artist;
				
				for(var i = 0; i < tagArtists.length; i++) {
				
					var tagArtist = data.topartists.artist[i];
					
					var name = tagArtist.name;
					var url = tagArtist.url;
					var streamable = tagArtist.streamable;
					var rank = tagArtist['@attr'].rank;
					
					var imgOne = tagArtist.image[0]['#text'];
					var imgTwo = tagArtist.image[1]['#text'];
					var imgThree = tagArtist.image[2]['#text'];
					var imgFour = tagArtist.image[3]['#text'];
					var imgFive = tagArtist.image[4]['#text'];
					
					$scope.tagArtists.push({
						tagName: name,
						tagURL: url,
						tagStreamable: streamable,
						tagRank: rank,
						tagImgOne: imgOne,
						tagImgTwo: imgTwo,
						tagImgThree: imgThree,
						tagImgFour: imgFour,
						tagImgFive: imgFive,
					});
				
				}
				
				$scope.$apply(function () {
					console.log($scope.tagArtists);
				});
			
			})

		}
		
		//
		if($('#tag-trk').prop('checked') == true) {
		
			$('#tag-alb-list').css('display', 'none');
			$('#tag-art-list').css('display', 'none');
			$('#tag-trk-list').css('display', 'block');
			
			tagOption = 'getTopTracks';
			
			tagAPI = 'http://ws.audioscrobbler.com/2.0/?method=tag.' + tagOption + '&tag=' + searchTag + '&api_key=d75388110ca7dc9f1023d17803115757&format=json';
			
			$scope.tagTracks = [];
			
			$.getJSON(tagAPI, function(data){
				console.log(data);
				
				var tagTracks = data.tracks.track;
				
				for(var i = 0; i < tagTracks.length; i++) {
				
					var tagTrack = data.tracks.track[i];
					
					var name = tagTrack.name;
					var url = tagTrack.url;
					var duration = tagTrack.duration;
					var rank = tagTrack['@attr'].rank;
					var artist = tagTrack.artist.name;
					var artistURL = tagTrack.artist.url;
					
					var imgOne = tagTrack.image[0]['#text'];
					var imgTwo = tagTrack.image[1]['#text'];
					var imgThree = tagTrack.image[2]['#text'];
					var imgFour = tagTrack.image[3]['#text'];
					
					$scope.tagTracks.push({
						tagName: name,
						tagURL: url,
						tagDuration: duration,
						tagRank: rank,
						tagArtist: artist,
						tagArtistURL: artistURL,
						tagImgOne: imgOne,
						tagImgTwo: imgTwo,
						tagImgThree: imgThree,
						tagImgFour: imgFour,
					});
				
				}
				
				$scope.$apply(function () {
					console.log($scope.tagTracks);
				});
			
			})
		
		}
		
		//
		if($('#tag-alb').prop('checked') == true) {
		
			$('#tag-alb-list').css('display', 'block');
			$('#tag-art-list').css('display', 'none');
			$('#tag-trk-list').css('display', 'none');
			
			tagOption = 'getTopAlbums';
			
			tagAPI = 'http://ws.audioscrobbler.com/2.0/?method=tag.' + tagOption + '&tag=' + searchTag + '&api_key=d75388110ca7dc9f1023d17803115757&format=json';
			
			$scope.tagAlbums = [];
			
			$.getJSON(tagAPI, function(data){
				console.log(data);
				
				var tagAlbums = data.albums.album;
				
				for(var i = 0; i < tagAlbums.length; i++) {
				
					var tagAlbum = data.albums.album[i];
					
					var name = tagAlbum.name;
					var url = tagAlbum.url;
					var rank = tagAlbum['@attr'].rank;
					var artist = tagAlbum.artist.name;
					var artistURL = tagAlbum.artist.url;
					
					var imgOne = tagAlbum.image[0]['#text'];
					var imgTwo = tagAlbum.image[1]['#text'];
					var imgThree = tagAlbum.image[2]['#text'];
					var imgFour = tagAlbum.image[3]['#text'];
					
					$scope.tagAlbums.push({
						tagName: name,
						tagURL: url,
						tagRank: rank,
						tagArtist: artist,
						tagArtistURL: artistURL,
						tagImgOne: imgOne,
						tagImgTwo: imgTwo,
						tagImgThree: imgThree,
						tagImgFour: imgFour,
					});
				
				}
				
				$scope.$apply(function () {
					console.log($scope.tagAlbums);
				});
			
			})
			
		}
		
	}
	
	/*		----------		*/
	/*		Load Track		*/
	/*		----------		*/
	
	$scope.loadTrack = function() {
		console.log('Load Track');
		
		$('#artist-div').css('display', 'none');
		$('#tag-div').css('display', 'none');
		$('#trk-div').css('display', 'block');
		
		var searchTrackName = $('#s-track-name').val();
		var searchTrackArtist = $('#s-track-artist').val();
		var trackOption;
		
		if(searchTrackName == '' || searchTrackArtist == '') {
			
			$('#message').text('Please Input A Search Query In Both Fields.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		if($('#trk-smlr').prop('checked') == false && $('#trk-info').prop('checked') == false) {
			$('#message').text('Please Choose From The Two Options.');
			setTimeout(function(){
				$('#message').text('');
			}, 4000);
			return;
		}
		
		var trackAPI;
		
		if($('#trk-smlr').prop('checked') == true) {
		
			$('#trk-smlr-list').css('display', 'block');
			$('#trk-info-div').css('display', 'none');
		
			trackOption = 'getSimilar';
			
			trackAPI = 'http://ws.audioscrobbler.com/2.0/?method=track.' + trackOption + '&track=' + searchTrackName + '&artist=' + searchTrackArtist + '&limit=50&api_key=d75388110ca7dc9f1023d17803115757&format=json';
			
			$scope.similar = [];
			
			$.getJSON(trackAPI, function(data){
				console.log(data);
				
				var similarTracks = data.similartracks.track;
				
				for(var i = 0; i < similarTracks.length; i++) {
					
					var track = data.similartracks.track[i];
					
					var name = track.name;
					var url = track.url;
					var duration = track.duration;
					var playCount = track.playcount;
					var match = track.match;
					var artist = track.artist.name;
					var artistURL = track.artist.url;
					
					var imgOne = track.image[0]['#text'];
					var imgTwo = track.image[1]['#text'];
					var imgThree = track.image[2]['#text'];
					var imgFour = track.image[3]['#text'];
					
					$scope.similar.push({
						trackName: name,
						trackURL: url,
						trackDuration: duration,
						trackPlayCount: playCount,
						trackMatch: match,
						trackArtist: artist,
						trackArtistURL: artistURL,
						trackImgOne: imgOne,
						trackImgTwo: imgTwo,
						trackImgThree: imgThree,
						trackImgFour: imgFour,
					});
					
				}
				
				$scope.$apply(function () {
					console.log($scope.similar);
				});
				
			});
			
		}
		
		if($('#trk-info').prop('checked') == true) {
		
			$('#trk-smlr-list').css('display', 'none');
			$('#trk-info-div').css('display', 'block');
		
			trackOption = 'getInfo';
			
			trackAPI = 'http://ws.audioscrobbler.com/2.0/?method=track.' + trackOption + '&track=' + searchTrackName + '&artist=' + searchTrackArtist + '&api_key=d75388110ca7dc9f1023d17803115757&format=json';
		
			$.getJSON(trackAPI, function(data){
				console.log(data);
				
				var info = data.track;
				
				$scope.artist = info.album.artist;
				$scope.title = info.album.title;
				$scope.image = info.album.image[3]['#text'];
				$scope.albumURL = info.album.url;
				$scope.artistURL = info.artist.url;
				
				$scope.trackTagOneName = info.toptags.tag[0].name;
				$scope.trackTagOneURL = info.toptags.tag[0].url;
				$scope.trackTagTwoName = info.toptags.tag[1].name;
				$scope.trackTagTwoURL = info.toptags.tag[1].url;
				$scope.trackTagThreeName = info.toptags.tag[2].name;
				$scope.trackTagThreeURL = info.toptags.tag[2].url;
				$scope.trackTagFourName = info.toptags.tag[3].name;
				$scope.trackTagFourURL = info.toptags.tag[3].url;
				$scope.trackTagFiveName = info.toptags.tag[4].name;
				$scope.trackTagFiveURL = info.toptags.tag[4].url;
				
				$scope.infoPublished = info.wiki.published;
				$scope.infoSummary = info.wiki.summary;
				$scope.infoContents = info.wiki.content;
				
				console.log($scope.infoPublished);
				console.log($scope.infoSummary);
				console.log($scope.infoContents);
				
				$scope.$apply(function () {
					console.log('Info Loaded');
				});
				
			});

		}
		
	}
	
	
});