document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    // Toggle chicklets
    // 
    // This is throwaway code, doesn't work very well. — CB 
    // 
    var chicklets = document.getElementsByClassName('chicklet');

    var toggleSelection = function () {
      this.classList.toggle('selected');
    };

    for (var i = 0; i < chicklets.length; i++) {
      chicklets[i].addEventListener("click", toggleSelection, false);
    }
  }

  // Resize textareas automatically
  // 
  // This is straight from the autosize docs, see
  // https://github.com/jackmoore/autosize/blob/master/example/index.html
  //  — CB
  // 
  autosize(document.querySelectorAll('textarea'));
};