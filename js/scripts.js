$(document).ready(function(){

  $("form.wordPuzzle").submit(function(event){
    event.preventDefault();
    var string = $("input#string").val();
    var array = string.split("");
    console.log(array);

    for (var i = 0; i < array.length; i++) {
      if (array[i] ==='a' || array[i] ==='e' || array[i] ==='i' || array[i] === 'o' || array[i] ==='u') {
        array[i] = '-';

        console.log(array);
        // array.join();
      }

    }

      $("#formOutput").text(array.join(""));


});

});
