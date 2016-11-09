PlayerController.$inject = ['$element', '$scope', '$window'];
function PlayerController($element, $scope, $window) {
  var ctrl = this;

  ctrl.$onInit = $onInit;

  angular.element($window).bind('scroll', function (e) {
    if ($window.scrollY >= 289) {
      $element.addClass('fixed');
    } else {
      $element.removeClass('fixed');
    }
  });
  
  function $onInit() {
    var player = $element[0].querySelector('audio');
    player.addEventListener('ended', () => $scope.$applyAsync(ctrl.onEnd()));
  }
}
angular.module('myPlayerApp').component('audioPlayer', {
  template: `
  <div>
    <h1 ng-bind="$ctrl.track.title || $ctrl.player[0].title"></h1>
		<audio ng-src="{{$ctrl.track.src || $ctrl.player[0].src | trusted}}" preload="true" autoplay controls>
			Your browser does not support the audio element.
		</audio>
  </div>`,
  controller: PlayerController,
  bindings: {
    player: '<',
    track: '<',
    onEnd: '&'
  }
});