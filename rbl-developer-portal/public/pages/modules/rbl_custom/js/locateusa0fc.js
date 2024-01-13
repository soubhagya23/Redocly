(function ($, Drupal) {
  Drupal.behaviors.locateus = {
    attach: function (context, settings) {
      $(".page-node-1138 #locateus-form .locate-us-state").change(function () {
        $(".page-node-1138 .views-exposed-form #edit-state").val($(this).val());
        $(".page-node-1138 .views-exposed-form #edit-city").val('All');
      });

      $(".page-node-1138 #locateus-form .locate-us-city").change(function () {
        console.log($(this).val());
        $(".page-node-1138 .views-exposed-form #edit-city").val($(this).val());
      });

    }
  };
})($, Drupal);
