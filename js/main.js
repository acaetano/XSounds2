/**
 * Created by Ailton on 04/04/2015.
 */

angular.module('XSounds2', []);

function get_files(){
    document.getElementById('ipt_load_files').click();
}

function files_loaded() {
    // quando os arquivos forem selecionados (evento "change"), executa essa funcao)
    var i = 0;
    lista_reproducao = lista_arquivos.files;
    var len = lista_reproducao.length;
}

$( document ).ready(function() {
    document.getElementById('load_files').onclick = get_files;
});