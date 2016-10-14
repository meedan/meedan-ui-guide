document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    // Toggle chicklets
    var chicklets = document.getElementsByClassName('chicklet');

    var toggleSelection = function () {
      this.classList.toggle('selected');
    };

    for (var i = 0; i < chicklets.length; i++) {
      chicklets[i].addEventListener("click", toggleSelection, false);
    }
  }
};