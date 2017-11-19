/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
(function () {
    'use strict';

    angular
        .module('gladys')
        .controller('ModeCtrl', ModeCtrl);

    ModeCtrl.$inject = ['modeService'];

    function ModeCtrl(modeService) {
        /* jshint validthis: true */
        var vm = this;
        
        vm.modes = [];
    	vm.createMode = createMode;
        vm.destroyMode = destroyMode;
        vm.updateMode = updateMode;
        vm.saving = false;
        vm.newMode = {};
        
        activate();

        function activate() {
            getModes();
        }
        
        function getModes(){
            return modeService.get()
              .then(function(data){
                  vm.modes = data.data;
              });
        }
        
        function createMode(mode){
            return modeService.create(mode)
              .then(function(data){
                  vm.modes.push(data.data);
                  vm.newMode = {};
              });
        }
        
        function destroyMode(index, modeId){
            return modeService.destroy(modeId)
              .then(function(){
                  vm.modes.splice(index, 1);
              });
        }

        function updateMode(mode){
            vm.saving = true;
            return modeService.update(mode.id, mode)
              .then(function(data){
                  vm.saving = false;
              });
        }

    }
})();
