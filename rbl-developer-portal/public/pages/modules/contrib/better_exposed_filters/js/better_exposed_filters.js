/**
 * @file
 * better_exposed_filters.js
 *
 * Provides some client-side functionality for the Better Exposed Filters module.
 */

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.betterExposedFilters = {
    attach: function (context, settings) {
      // Add highlight class to checked checkboxes for better theming.
      $('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]')
        // Highlight newly selected checkboxes.
        .change(function () {
          _bef_highlight(this, context);
        })
        .filter(':checked').closest('.form-item', context).addClass('highlight');

        $(".credit-card-filter-menu:nth-child(1)+.form-wrapper .form-checkboxes ul").prepend(`
        <li>
            <div class="select-all-filter-checkbox checkbox form-check">
                <input type="checkbox" id="select-all-filter" name="select-all-filter" value="select-all-filter" class="form-checkbox form-check-input">
                <label class="form-check-label" for="select-all-filter">
                    Select All
                </label>
            </div>
        </li>
        `);
    }
  };

  /*
   * Helper functions
   */

  /**
   * Adds/Removes the highlight class from the form-item div as appropriate.
   */
  function _bef_highlight(elem, context) {
    $elem = $(elem, context);
    $elem.attr('checked')
      ? $elem.closest('.form-item', context).addClass('highlight')
      : $elem.closest('.form-item', context).removeClass('highlight');

     
  }

  

})(jQuery, Drupal, drupalSettings);
