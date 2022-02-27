$(".agendamento li img").hover(function() {
    $(this).next("p").show();
    $(this).hide();
  }, function() {
    $(this).next("p").hide();
    $(this).show();
  });