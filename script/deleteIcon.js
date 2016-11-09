function DeleteIconController() {
      var ctrl = this;
  }
angular.module('myPlayerApp').component('deleteIcon', {
  template: `  
    <span class="glyphicon glyphicon-remove" ng-click="$ctrl.onDelete({ song: $ctrl.songs })"></span>`,
  controller: DeleteIconController,
  bindings: {
  	songs: '<',
    onDelete: '&'
  }
});