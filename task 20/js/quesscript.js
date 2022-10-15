$(document).ready(function() {
            
    $('#form').parsley();

    $('.extra_field').hide();
    $('.extra_field :input').prop('required',true);

    $("#type_text").click(function () {
        $('.extra_field').hide();
        $('.extra_field :input').prop('required',false);
        $('.type_text').show();
        $('.type_text :input').prop('required',true);
    });

    $("#type_qtime").click(function () {
        $('.extra_field').hide();
        $('.extra_field :input').prop('required',false);
    });

    $("#type_qnumber").click(function () {
        $('.extra_field').hide();
        $('.extra_field :input').prop('required',false);
        $('.type_qnumber').show();
        $('.type_qnumber :input').prop('required',true);
    });

    $("#type_qyesno").click(function () {
        $('.extra_field').hide();
        $('.extra_field :input').prop('required',false);
        $('.type_qyesno').show();
        $('.type_qyesno :input').prop('required',true);
    });

});