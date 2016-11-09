function PlaylistController() {
  var ctrl = this;
}
function ListItemController() {
  var ctrl = this;
}

AddSongController.$inject = ['Song'];
function AddSongController(Song) {
  var ctrl = this;
  ctrl.url = '';
  ctrl.add = function (url) {
    ctrl.onAdd({ song: new Song(url) });
  };
}
angular.module('myPlayerApp')
.component('playList', {  
  template: `
    <div class="list-group" ng-repeat="song in $ctrl.playlist">
      <list-item active="song === $ctrl.activeSong"
                 item="song"
                 on-select="$ctrl.onSelect({ song: song })" 
                 on-delete="$ctrl.onDelete({ song: song })">
      </list-item>
    </div>
    <add-song on-add="$ctrl.onAdd({ song: song })"></add-song>`,
  controller: PlaylistController,
  bindings: {
    activeSong: '<',
    playlist: '<',
    onSelect: '&',
    onDelete: '&',
    onAdd: '&'
  }
})
.component('listItem', {
  template: `
      <a href="" 
         onclick="return false" 
         class="list list-group-item"
         ng-class="{'active-song': $ctrl.active}"
         ng-dblclick="$ctrl.onSelect()">{{$ctrl.item.title}}
        <span class="glyphicon glyphicon-remove" ng-click="$ctrl.onDelete()"></span>
      </a>`,
  controller: ListItemController,
  bindings: {
    active: '<',
    item: '<',
    onSelect: '&',
    onDelete: '&'
  }
})
.component('addSong', {
  template: `
    <div class="add-form"><form name="addSongs" ng-submit="$ctrl.add($ctrl.url)">
      <input type="text" name="url" class="input-song" ng-model="$ctrl.url" size="25" required/>
      <button id="add-button" class="btn btn-primary" type="submit">Add Song</button>
    </form></div>`,
  controller: AddSongController,
  bindings: {
    onAdd: '&'
  }
})