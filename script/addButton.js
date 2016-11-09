function AddButtonController() {
      var ctrl = this;
  }
angular.module('myPlayerApp').component('addButton', {
  template: `  
    <form name="newSongs" ng-submit="addSong()">
      <input type="text" name="newSkill" ng-model="newSkill" required />
      <button ng-disabled="skillsFrm.$invalid" ng-click="addSong()">Add</button>
    </form>`,
  controller: AddButtonController
});