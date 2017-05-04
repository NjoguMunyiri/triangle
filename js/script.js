$(document).ready(function() {
  $("form").submit(function(event) {

  var a = parseInt($("#heightinput").val());
  var b = parseInt($("#baseinput").val());
  var c = parseInt($("#hypotenusinput").val());
  alert(a);
  alert(b);
  alert(c);
  {
  if (!(((a+b)<=c)||((a+c)<=b)||((b+c)<=a))) {
      if (b===c&&c===a) {
          show("Equilateral");
      } else {
        if (b===a||b===c||a===c) {
          show("isosceles");
        } else {
          show("unequal sides");
        }
      }
  } else {
      alert("Not a triangle");
  }

}

});
});
