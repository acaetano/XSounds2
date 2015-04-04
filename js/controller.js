/**
 * Created by Ailton on 04/04/2015.
 */

angular.module('XSounds2').controller("MainController", function(){

    var vm = this;
    vm.title = "XSounds 2 - Music Player"
    vm.songs = $("#ipt_load_files").files;

});