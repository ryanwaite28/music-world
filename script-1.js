$(document).ready(function(){

	/* ---	Switch Pages Functionality ---	*/
	
	var lastfmPage = $('#c-lastfm');
	var spotifyPage = $('#c-spotify');
	
	var lastfmDiv = $('#lastfm-div');
	var spotifyDiv = $('#spotify-div');

	lastfmPage.css({
		'position': 'static',
		'left': '0px',
	});
	
	lastfmDiv.click(function() {
	
		/*$('#icon-1').css({
			'display': 'block',
			'position': 'absolute',
			'top': '0px',
			'left': '0px',
			'border-right': '1px solid black',
		});
		$('#icon-2').css('display', 'none');*/
		
		lastfmPage.css({
			'position': 'static',
			'left': '0px',
		});
		
		spotifyPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		
	});
	
	spotifyDiv.click(function() {
	
		/*$('#icon-1').css('display', 'none');
		$('#icon-2').css({
			'display': 'block',
			'position': 'absolute',
			'top': '0px',
			'right': '0px',
			'border-left': '1px solid black',
		});*/
		
		lastfmPage.css({
			'position': 'absolute',
			'left': '-999em',
		});
		
		spotifyPage.css({
			'position': 'static',
			'left': '0px',
		});
		
	});
	
	/* ---	Switch Search Functionality	--- */
	
	var artistSearch = $('#artist-search');
	var tagSearch = $('#tag-search');
	var albumSearch = $('#album-search');
	var trackSearch = $('#track-search');
	
	var artistSelect = $('#i-artist');
	var tagSelect = $('#i-tag');
	var albumSelect = $('#i-album');
	var trackSelect = $('#i-track');
	
	/* Artist Selection */
	artistSelect.click(function() {
		artistSearch.css('display', 'block');
		tagSearch.css('display', 'none');
		albumSearch.css('display', 'none');
		trackSearch.css('display', 'none');
		
		tagSelect.prop('checked', false);
		albumSelect.prop('checked', false);
		trackSelect.prop('checked', false);
	})
	
	$('#art-toptracks').click(function(){
		$('#art-gta').prop('checked', false);
	})
	$('#art-gta').click(function(){
		$('#art-toptracks').prop('checked', false);
	})
	
	/* Tag Selection */
	tagSelect.click(function() {
		artistSearch.css('display', 'none');
		tagSearch.css('display', 'block');
		albumSearch.css('display', 'none');
		trackSearch.css('display', 'none');
		
		artistSelect.prop('checked', false);
		albumSelect.prop('checked', false);
		trackSelect.prop('checked', false);
	})
	
	$('#tag-art').click(function(){
		$('#tag-trk').prop('checked', false);
		$('#tag-alb').prop('checked', false);
	})
	$('#tag-trk').click(function(){
		$('#tag-art').prop('checked', false);
		$('#tag-alb').prop('checked', false);
	})
	$('#tag-alb').click(function(){
		$('#tag-trk').prop('checked', false);
		$('#tag-art').prop('checked', false);
	})
	
	/* Album Selection */
	albumSelect.click(function() {
		artistSearch.css('display', 'none');
		tagSearch.css('display', 'none');
		albumSearch.css('display', 'block');
		trackSearch.css('display', 'none');
		
		tagSelect.prop('checked', false);
		artistSelect.prop('checked', false);
		trackSelect.prop('checked', false);
	})
	
	$('#alb-toptags').click(function(){
		$('#alb-info').prop('checked', false);
	})
	$('#alb-info').click(function(){
		$('#alb-toptags').prop('checked', false);
	})
	
	/* Track Selection */
	trackSelect.click(function() {
		artistSearch.css('display', 'none');
		tagSearch.css('display', 'none');
		albumSearch.css('display', 'none');
		trackSearch.css('display', 'block');
		
		tagSelect.prop('checked', false);
		albumSelect.prop('checked', false);
		artistSelect.prop('checked', false);
	})
	
	$('#trk-smlr').click(function(){
		$('#trk-info').prop('checked', false);
	})
	$('#trk-info').click(function(){
		$('#trk-smlr').prop('checked', false);
	})
	
	/*		Show Menu		*/
	var menuOne = $('#icon-1');
	var menuTwo = $('#icon-2');
	
	menuOne.click(function(){
		console.log('Click Function');
		
		if($('#lastfm-search').css('display') == 'none') {
		
			$('#lastfm-search').css({
			'display': 'block',
			'position': 'absolute',
			'z-index': '1',
			'top': '1px',
			'left': '10px',
			});
		
		}
		else {
			$('#lastfm-search').css('display', 'none');
		}
		
	});
	
	menuTwo.click(function(){
		console.log('Click Function');
		
		if($('#').css('display') == 'none') {
		
			$('#').css({
			'display': 'block',
			'position': 'absolute',
			'z-index': '1',
			'top': '1px',
			'left': '10px',
			});
		
		}
		else {
			$('#').css('display', 'none');
		}
		
	});
	
	
	
});