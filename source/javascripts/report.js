// Project page prototype for checkdesk.
// 
$(document).ready(function() {
  // Toggle the reports
  //
  $('.js-show-report').click(function(e) {
    $(this).prev().slideToggle();
    e.preventDefault();
  });

  // Toggle the input in the checklog
  // 
  $('.report form').hide();
  $('.js-toggle-input').click(function(e) {
    $(this).closest('.report--form').find('form').slideToggle();
    e.preventDefault();
  });
});
