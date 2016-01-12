// Project page prototype for checkdesk.
// 
// See also: reports.js
// 
// 
$(document).ready(function() {
  // 
  // Eg: http://10.0.1.3:4567/prototype/desk/bellingcat?view=table
  // ... will create a class on the body element "table"
  // 
  
  $('.page--project.js-view-class').addClass(queries.view);

  // Tell the stylesheet switcher which view is active
  // 
  $('.project--stylesheet-switcher.js-view-class').addClass(queries.view);

  // Staggered fade in: reports
  // 
  $('.report').hide();
  $(window).load(function() {
    $(".report").each(function(i) {
       $(this).delay((i + 1) * 80).fadeIn();
    });
  });
});
