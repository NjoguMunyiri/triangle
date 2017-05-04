$(document).ready(function() {
  $("form").submit(function(event) {

  var a = parseInt($("#heightinput").val());
  var b = parseInt($("#baseinput").val());
  var c = parseInt($("#hypotenusinput").val());

  {
  if (!(((a+b)<=c)||((a+c)<=b)||((b+c)<=a))) {
      if (b===c&&c===a) {
          alert("Equilateral");
      } else {
        if (b===a||b===c||a===c) {
          alert("isosceles");
        } else {
          alert("unequal sides");
        }
      }
  } else {
      alert("Not a triangle");
  }

}

});
});
