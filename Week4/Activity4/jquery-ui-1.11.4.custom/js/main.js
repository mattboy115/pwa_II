$( "#accordion" ).accordion();

$( "#button" ).button();

$( "#radioset" ).buttonset();

$( "#dialog" ).dialog({
    autoOpen: false,
    width: 400,
    buttons: [
        {
            text: "Ok",
            click: function() {
                $( this ).dialog( "close" );
            }
        },
        {
            text: "Cancel",
            click: function() {
                $( this ).dialog( "close" );
            }
        }
    ]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
    $( "#dialog" ).dialog( "open" );
    event.preventDefault();
});

//Datepicker
$( "#datepicker" ).datepicker({
    inline: true
});

//Drag and Drop

$(function() {
  $( "#draggable" ).draggable({ snap: true });
  $( "#draggable2" ).draggable({ snap: ".ui-widget-header" });
  $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
  $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
  $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });
});

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
    function() {
        $( this ).addClass( "ui-state-hover" );
    },
    function() {
        $( this ).removeClass( "ui-state-hover" );
    }
);
