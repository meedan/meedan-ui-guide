// Project page prototype for checkdesk
// 
$(document).ready(function() {
  // Toggle the reports
  //
  $('.js--show-report').click(function(e) {
    $(this).closest('.report').find('.report--checklog').slideToggle();
    e.preventDefault();
  });

  // On the project page, collapse the checklog
  // 
  $('.page--project .report--menu').hide();
  $('.page--project .report-menu-trigger').click(function(e) {
    $(this).closest('.report--contextual-action-menu').find('ul').slideToggle(200);
    e.preventDefault();
  });

  // Subactions
  // 
  $('.js--hide').hide();

  $('.js--toggle-subactions').click(function(e) {
    $(this).closest('.report--action').find('.action--subaction').slideToggle(200);
    e.preventDefault();
  });

  $('.action--subaction a').click(function(e){
    modal.open({content: $(this).closest(".action--subaction").find('.helper-text').text()});
    e.preventDefault();
    // $.get('/share.html', function(data){
    //   modal.open({content: data});
    // });
  });

  // Show and hide the checklist
  // 
  $('.js--toggle-checklist').click(function(e){
    $(".checklist img").slideToggle(200);
  });

  // Silly Edit button, demoing click-to-edit UI
  // 
  $('#js--edit-mode').click(function(e) {
    e.preventDefault();
    document.designMode = 'on';
    $(this).text('Would this have a save button');
  });

  // Hide the buttons on the project page
  // 
  $('.page--project .report--actions').hide();
  $('.js--more-actions').click(function(e) {
    e.preventDefault();
    $(this).closest(".report--contextual-actions").find('.report--actions').slideToggle(200);
  });

  // Start a progress bar on the checklist
  progressJs('.checklist').start().set(100);

  // Embed links in the log
  // 
  // Using a throwaway key ...
  // 
  $.embedly.defaults.key = 'ac0065388fd046efba9bf4eae348e2e2';
  $('.log-entry a').embedly();
});
