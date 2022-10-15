$(document).ready(function(){
    //  display value
    $('.calc').click(function(){
        $('#display').val(($('#display').val() + $(this).val()));
    });

    // clear display
    $('#clear').click(function(){
        $('#display').val("");
    })

    // display answer value
    $('#equal').click(function(){
        $('#display').val(eval($('#display').val()));
    })
});