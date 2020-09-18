console.log('js');

$('.contactPage').hide();
$('.resPage').hide();
$('.orderPage').hide();

$(document).ready(function(){

  $('.contact').click(function(){

    $('.homePage').hide();
    $('.resPage').hide();
    $('.contactPage').show();
    $('.orderPage').hide();
  });

  $('.home').click(function(){

    $('.contactPage').hide();
    $('.resPage').hide();
    $('.orderPage').hide();
    $('.homePage').show();
  });

  $('.reservations').click(function(){

    $('.contactPage').hide();
    $('.resPage').show();
    $('.orderPage').hide();
    $('.homePage').hide();
  });

  $('.order').click(function(){

    $('.orderPage').show();
    $('.resPage').hide();
    $('.contactPage').hide();
    $('.homePage').hide();
  });


});
$( function() {
   $( "#speed" ).selectmenu();

   $( "#files" ).selectmenu();

   $( "#number" )
     .selectmenu()
     .selectmenu( "menuWidget" )
       .addClass( "overflow" );

   $( "#salutation" ).selectmenu();
 } );

  $('.orderCloseButton').click(function(){

    $('.contactPage').hide();
    $('.resPage').hide();
    $('.orderPage').hide();
    $('.homePage').show();
   });

   $('.homePageFeast').click(function(){

     $('.contactPage').hide();
     $('.resPage').hide();
     $('.orderPage').Show();
     $('.homePage').hide();
    });

    $('#all').click(function(){
      $('.all').show();
    });



  $('#beer').click(function(){
    $('.all').hide();
    $('.beer').show();
  });

  $('#side').click(function(){
    $('.all').hide();
    $('.side').show();
  });

  $('#main').click(function(){
    $('.all').hide();
    $('.main').show();
  });

  $('#pizza').click(function(){
    $('.all').hide();
    $('.pizza').show();
  });

  $('#burger').click(function(){
    $('.all').hide();
    $('.burger').show();
  });

  $('#dessert').click(function(){
    $('.all').hide();
    $('.dessert').show();
  });

  $('#all').click(function(){
    // $('.all').hide();
    $('.all').show();
  });

  $('.foodItemImage').click(function(){
    $('.zero').hide();
    $('.money').show();
  });

  $('.foodItemImage').on('click', function(){


      var myIndex = $('.foodItemImage').index(this);
      console.log(myIndex);


      var foodImage = document.getElementsByClassName('foodItemImage');
      console.log(foodImage.length);

      for (var i=0; i< foodImage.length;i++){
        console.log(i);
        if (myIndex == i){

          console.log(foodImage[i]);

          $('#total').append(foodImage[i]);

        } //if ends
  } //for loop ends
});
