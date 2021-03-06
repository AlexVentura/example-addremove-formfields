// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require_tree .

$(function () {

     $('.add_child').click(function() {
        var association = $(this).attr('data-association');
        var target = $(this).attr('target');
        var regexp = new RegExp('new_' + association, 'g');
        var new_id = new Date().getTime();
        var Dest = (target == '') ? $(this).parent() : $(target);
        Dest.append(window[association+'_fields'].replace(regexp, new_id));
        return false;
      });

      $(document).delegate('.remove_child','click', function() {
        $(this).parent()
        $(this).parent().children('.removable')[0].value = 1;
        $(this).parent().hide();
        return false;
      });
 });
