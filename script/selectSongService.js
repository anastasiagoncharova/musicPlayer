angular.module('myPlayerApp')
.factory('selectSongFactory', function() {
	var ctrl = this;
  	return function selectSong(song) {
	    ctrl.current = song.src;
	    return ctrl.current;
  	}
})