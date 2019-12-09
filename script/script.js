var index;
var count = 0;
var ultimoClique;
$( ".areaPrincipal .col" ).click(function() {
    //Verifica se está no menu principal e não é a opção de aspirar saliva
    if($('.area').css('display') != 'none' && $(this).index() != 4){
        index = $(this).index();
        $(".area").hide();
        $(".areaSecundaria .area"+index).show();
        $(".s"+index).show();
        $( ".voltars" ).show();
	ultimoClique = index;
    }
});

$( ".areaSecundaria .col" ).click(function() {
	if(ultimoClique == 1){
		index = $(this).index();
		$(".areaSecundaria .area"+ultimoClique).hide();
		$(".areaTerciaria .area"+index).show();
		$(".s"+ultimoClique).hide();
		$(".t"+index).show();
		$( ".voltars" ).hide();
		$( ".voltart" ).show();
	}
});

$( ".voltars" ).click(function() {
    $(".areaSecundaria .area"+index).hide();
	$(".areaSecundaria .area"+ultimoClique).hide();
	$(".s"+ultimoClique).hide();
    $(".s"+index).hide();
    $(".voltars" ).hide();
    $(".area").show();
});

$( ".voltart" ).click(function() {
    $(".areaTerciaria .area"+index).hide();
    $(".t"+index).hide();
    $( ".voltart" ).hide();
    $( ".voltars" ).show();
    $(".s"+ultimoClique).show();
    $(".areaSecundaria .area"+ultimoClique).show();
});

setInterval( function() {
  $(".col:nth-child("+count+")").removeClass("piscar");
  if(count == 5){
    count = 0;
  }
  else if(count == 2){
    count++
  }
  count++;
  $(".row .col:nth-child("+count+")").addClass("piscar");
}, 3000 );

