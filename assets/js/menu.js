$('.menu-burger').on('click', function() {
  $('#main, .sidenav').addClass('active');
})
$('.closeButton').on('click', function() {
  $('#main, .sidenav').removeClass('active');
})
