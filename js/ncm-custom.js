$(document).ready(function()
{
    $("form,input").attr('autocomplete', 'off');
    var url = '../../visitorcount';   
    $.ajax({
        url: url,
        type: 'POST',
        success: function(response){
            $(".totalVisitor").show().html(response.total_visitors);
        }
    });
    //Security audit
    if(!$('div').hasClass('form-group-ckeditor')){
         $('svg').replaceWith('');
    }
});
$("input,textarea").on("keypress", function(e) {
    if ((e.which === 32 && !this.value.length) || (e.which === 60 || e.which === 61 || e.which === 62))
        e.preventDefault();
});
