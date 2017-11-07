class WebPresenter {
  setIsValid(valid) {
    if (valid) {
      document.querySelector('#message').innerHTML = "Parabéns";
    } else {
      document.querySelector('#message').innerHTML = "";
    }
  }

  setResult(result) {
    result.forEach(function(line){
      line.forEach(function(el){
        let row = el.i;
        let col = el.j;
        let element = document.querySelector('.cell[data-row="' +row+ '"][data-column="' + col + '"]');
        element.classList.remove("error");
        element.classList.remove("valid");

        if (el.valid) {
          element.classList.add("valid");
        } else if (el.value) {
          element.classList.add("error");
        }
      });
    });
  }
}
