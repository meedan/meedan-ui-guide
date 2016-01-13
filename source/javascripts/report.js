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

  // Edit button
  var editorButton = document.getElementById('js--edit-mode');
  editorButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Selectively enable some elements to be edited
    // 
    // if (element.isContentEditable) {
    //   // Disable Editing
    //   element.contentEditable = 'false';
    //   editorButton.innerHTML = 'Enable Editing';

    //   // You could save any changes here.
    // } else {
    //   element.contentEditable = 'true';
    //   editorButton.innerHTML = 'Disable Editing';
    // }
    
    // Or just allow the whole doc to be edited
    // 
    document.designMode = 'on';
  });
});
