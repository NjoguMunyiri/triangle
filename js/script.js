$(document).ready(function() {
  $("form").submit(function(event) {

  var a = parseInt($("#heightinput").val());
  var b = parseInt($("#baseinput").val());
  var c = parseInt($("#hypotenusinput").val());

  {
  if (!(((a+b)<=c)||((a+c)<=b)||((b+c)<=a))) {
      if (b===c&&c===a) {
            $("#Equilateral").show();
            $("#Isosceles").hide();
            $("#Scalene").hide();

      } else {
        if (b===a||b===c||a===c) {
          $("#Equilateral").hide();
          $("#Isosceles").show();
          $("#Scalene").hide();
        } else {
          $("#Equilateral").hide();
          $("#Isosceles").hide();
          $("#Scalene").show();
        }
      }
  } else {
      alert("The Measurements do Not form a triangle");
  }

}
  event.preventDefault();
});
});
