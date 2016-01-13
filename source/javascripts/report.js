// Project page prototype for checkdesk
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
  $('.js--toggle-input').click(function(e) {
    $(this).closest('.report--form').find('form').slideToggle(200);
    e.preventDefault();
  });

  // On the project page, collapse the checklog
  // 
  $('.page--project .report--menu').hide();
  $('.report-menu-trigger').click(function(e) {
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

  $('.js--toggle-checklist').click(function(e){
    $(".checklist").slideToggle(200);
  });

  // Silly Edit button
  $('#js--edit-mode').click(function(e) {
    e.preventDefault();
    document.designMode = 'on';
    $(this).text('Would this have a save button');
  });

  // Hide the buttons on the project page
  // 
  $('.page--project .report--actions').hide();
  $('.report--menu-trigger').click(function(e) {
    e.preventDefault();
    $(this).closest(".report--contextual-action-menu").find('.report--actions').slideToggle(200);
  }) ;
});
