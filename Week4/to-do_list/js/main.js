/*
Name: Nicholas Noriega Overly
Date: 02/26/16
Assignment:
*/
$(function(){

$('.picker').datepicker();

      $('.add_item').click(function() {
        $('.modal').dialog('open');
      });//end click
        $('.modal').dialog({
          width: 350,
          height: 350,
          modal: true,
          autoOpen: false,
          close: function() {
            $('.modal input').val('');//Clear Fields
          },
        buttons : {
          "Add task" : function() {
            var taskName = $('input.description').val();
            var dueDate = $('.picker').val();
            var beginLi = '<li style="list-style-type: none; border: 1px solid orange; padding: 6px; margin-bottom: 10px; margin-right: 40px;"><span style="margin-top: -1px;" class="done">&#10004</span>';
            var taskLi = '<span style="width: 60%;" class="task">' + taskName + '</span>';
            var dateLi = '<span class="due-date">' + dueDate + '</span>';
            var endLi = '<span style="margin-top: -1px;" class="delete">x</span></li>';
            $('.task_list').prepend(beginLi + taskLi + dateLi + endLi);
            $('.task_list').hide().slideDown(250).find('li:first')
                    .animate({
                  'background-color': 'rgb(255,255,204)'
                },250)
                    .animate({
                      'background-color': 'white'
                },750).animate;// end animate
              $(this).dialog('close');
          },
          "Cancel" : function() {
            $(this).dialog('close');
          }
        }
      }); //end dialog

//Marking as complete
  $('.task_list').on('click', '.done', function(){
    var $taskItem = $(this).parent('li');
    $taskItem.slideUp(250, function(){
      var $this = $(this);
      $this.detach();
      $('.completed_list').prepend($this);
      $this.slideDown();
    });
  });

// Sortable
  $('.sortable').sortable({
    connectWith:'.sortlist',
    cursor:'pointer',
    placeholder : 'ui-state-highlight',
    cancel:'.delete, .done'
  });

  //Delete
    $('.sortable').on('click', '.delete', function(){
      $(this).parent('li').effect('puff',function(){
        $(this).remove();
      });
    });



});//Jquery END




//Failed code below



/*$(function($) {
    //Datepicker
    $('.picker').datepicker();

    //Add button makes modal appear
    $('.add_item').click(function() {
        $('.modal').fadeIn(200);
    });

    //Close button makes modal disappear
    $('.close').click(function() {
        $('.modal').css('display', 'none');
    });

    //Submit button enters information

    var desc = document.getElementById('.description');
    var date = document.getElementById('.date');

    $('.submit').click(function() {
        $('.task_list').append('<li class="item"><p>Task:</p> + desc + <p>Date</p> + date </li>');
    });

    //Makes lists sortable
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();

}); */
