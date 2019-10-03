app.filter("capitalize", function() {
  return function(incomeValue) {
    if (incomeValue) {
      return incomeValue.charAt(0).toUpperCase() + incomeValue.slice(1);
    }
    return "";
  };
});
