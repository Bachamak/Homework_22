function pow(num, degree) {
    if (degree == 1) {
      return num;
    } else {
      return num * pow(num, degree - 1);
    }
  }
alert(pow(3, 4));
alert(pow(5, 3));
alert(pow(10, 2));
alert(pow(12345, 1));