$(document).ready(function() {

  $("#form").submit(function(event){
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === 'Turtles') {
      $('#Turtles').show();
      $('#Snakes').hide();
      $('#Insects').hide();
    }
    if (animal === 'Snakes') {
      $('#Snakes').show();
      $('#Turtles').hide();
      $('#Insects').hide();
    }
    if (animal === 'Insects') {
      $('#Insects').show();
      $('#Snakes').hide();
      $('#Turtles').hide();
    }
  });
});
