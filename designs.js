// Select color input
// Select size input

// When size is submitted by the user,
$(document).ready(function(){
	
    $("#submit").click(function(){
	   
	   // Your code goes here!
	   var height=$("#input_height").val();
	   var width=$("#input_width").val();
	   var table ='<table id="table">';
	   for(var i=0;i<height;i++)
	   {
		   table +='<tr class="row">';
		   for(var j=0;j<width;j++)
		   {
			   table +='<td class="col sel">';
			   table +='</td>';
			}
			table +='</tr>';
	    }
		table +='</table>';
	    $(".gridHolder").html(table);
   });
   
   $("#reset").on("click",function(){
	   $('.sel').css({background:"#ffff"})
   });
   
   $(".gridHolder").on("click",".sel",function(){
	   $(this).css({background: $("#colorPicker").val()});
   });
});

   
   


