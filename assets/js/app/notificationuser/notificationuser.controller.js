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
        .controller('NotificationUserCtrl', NotificationUserCtrl);

    NotificationUserCtrl.$inject = ['notificationUserService'];

    function NotificationUserCtrl(notificationUserService) {
        /* jshint validthis: true */
        var vm = this;

        vm.notificationUsers = [];
        vm.notificationTypes = [];
        vm.saving = false;
        
        vm.createNotificationUser = createNotificationUser;
        vm.destroyNotificationUser = destroyNotificationUser;
        vm.updateNotificationUser = updateNotificationUser;

        activate();

        function activate() {
            getNotificationTypes();
            getNotificationUsers();
        }

        function getNotificationUsers(){
            return notificationUserService.get()
              .then(function(data){
                  vm.notificationUsers = data.data; 
              });
        }
        
        function getNotificationTypes(){
            return notificationUserService.getTypes()
              .then(function(data){
                  vm.notificationTypes = data.data; 
              });
        }
        
        function createNotificationUser(notificationUser){
            return notificationUserService.create(notificationUser)
              .then(function(data){
                  
                  return getNotificationUsers();
              });
        }
        
        function destroyNotificationUser(index, id){
            return notificationUserService.destroy(id)
              .then(function(){
                 vm.notificationUsers.splice(index, 1); 
              });
        }

        function updateNotificationUser(id, param){
           vm.saving = true;
           return notificationUserService.update(id, param)
             .then(function(){
                vm.saving = false; 
             });
       }
        
    }
})();