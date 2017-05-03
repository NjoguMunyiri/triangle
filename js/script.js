if (!(((a+b)<=c)||((a+c)<=b)||((b+c)<=a))) {
    if (b===c&&c===a) {
        show("Equilateral");
    } else {
      if (b===a||b===c||a===c) {
        show("isosceles")
      } else {
        show("unequal sides");
      }
    }
} else {
    alert("Not a triangle");
}
