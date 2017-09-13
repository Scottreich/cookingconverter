var cupsToPints = function(cups) {
  return cups / 2;

}

var pintsToCups = function(pints) {
  return pints * 2;
}


///
$(document).ready(function() {
  $("form#cups-convert").submit(function(event) {
    event.preventDefault();
    var cupsInput = parseInt($("input#cups").val());
      //var pintsInput = parseInt($("form#pints").val());
    var result = cupsToPints(cupsInput);
    $("#outputCups").text(result);
      //$("#outputPints").text(pintsToCups(pintsInput));

  });
});

$(document).ready(function() {
  $("form#pints-convert").submit(function(event) {
    event.preventDefault();
        //var cupsInput = parseInt($("form#cups").val());
    var pintsInput = parseInt($("input#pints").val());
          //$("#outputCups").text(cupsToPints(cupsInput));
    $("#outputPints").text(pintsToCups(pintsInput));

  });
});
