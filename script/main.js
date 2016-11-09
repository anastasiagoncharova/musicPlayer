angular.module('myPlayerApp', []).controller('mainController', ['$scope', '$element', 'Song', function mainController($scope, $element, Song) {
    var ctrl = this;
    ctrl.songs = [
        '../audio/Black Veil Brides - Legasy.mp3',
        '../audio/Blind Guardian - Valhalla.mp3.',
        '../audio/Fram - Ohne Dich.mp3',
        '../audio/IAMX - Come with knives.mp3',
        '../audio/Pain - Same old song.mp3',
        '../audio/Placebo - Exit wounds.mp3',
        '../audio/Wardruna - Urur.mp3'
    ].map(url => new Song(url)); 
    ctrl.activeSong = null;
    ctrl.deleteSong = function (song) {
        var index = ctrl.songs.indexOf(song);
        if(ctrl.activeSong === song) {
            ctrl.playNext(); 
        }
        ctrl.songs.splice(index, 1);
    }
    ctrl.playNext = function () {
        var index = ctrl.songs.indexOf(ctrl.activeSong);
        ctrl.activeSong = ctrl.songs[(index + 1) % ctrl.songs.length];
    }
}]).filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]).factory('Song', () => Song);

class Song {
    constructor(url) {
        this.src = url;
        this.title = this.getTitle(url) || 'Untitled';
    }

    getTitle(url) {
        var a = document.createElement('a');
        var path, file, title;
        a.href = url;
        path = a.pathname;
        file = decodeURIComponent(path.slice(path.lastIndexOf('/') + 1));
        title = file.indexOf('.') !== -1? file.slice(0, file.lastIndexOf('.')): file;
        return title.replace(/[\s_]+/g, ' ');
    }
}
