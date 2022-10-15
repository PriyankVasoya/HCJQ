

$(document).ready(function () {
    $("#myform").parsley();

    // add receipe toolbar
    $('#receipe').summernote({
        placeholder: 'Add recipe',
        toolbar: [
            ['style', ['bold', 'italic', 'underline',]],
            ['para', ['ul', 'ol', 'paragraph']],
        ]

    });

    // img 

    $(function() {
        $("#file").change(function() {
          readURL(this);
        });
      });


      function readURL(input) {
        if (input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    // loadfile = function (e) {
        
        //alert(e.target.result);
    //     let img = document.getElementById("img");
    //     img.src = URL.createObjectURL(e.target.files[0]);
    // }
    $('#input').datepicker({
        datepicker: { showOtherMonths: true },
        uiLibrary: 'bootstrap5',
        modal: true,
        footer: true
    });

    
    // add delete ingrediants

    // $("#addIng").click(function () {
    //     var Ingredient = $('#Ingredient').val();
    //     var unit = $('#unit').val();
    //     var quantity = $('#quantity').val();
        
    //     if(Ingredient == '' || unit == '' || quantity == ''){
    //             alert('Please Enter Ingredients Details');
    //     }else{
    //         $("#AllIngredientList").append("<li> "+ Ingredient +" - "+ unit +" - " + quantity +"<a class='btn btn-sm btn-danger' id='close'>×</a></li>");
    //         $('#Ingredient').val('');$('#unit').val('');$('#quantity').val('');
    //     }
    // });

    // $("#Ingredient").change(function () {
    //     $("#unit").val($("#Ingredient option:selected").attr('data-unit'));
    // });

    // $(document).on('click','#close', function(){
    //     $(this).closest('li').hide();
    // });

    $("#add").click(function () {
        var ingredient = $('.ingredient').val();
        var unit = $('.unit').val();
        var quantity = $('#quantity').val();
        
        if(ingredient == '' || unit == '' || quantity == ''){
                alert('Please Enter ingredients Details');
        }else{
            $("#itemlist").append(`<tr><td> `+ ingredient + ` </td><td>`+ unit +` </td><td>` + quantity +` </td><td> <a class='btn btn-sm btn-danger' id='close'>×</a></td></tr>`);
            $('.ingredient').val('');$('.unit').val('');$('#quantity').val('');
        }
    });

    $(".ingredient").change(function () {
        $(".unit").val($(".ingredient option:selected").attr('data-unit'));
    });

    $(document).on('click','#close', function(){
        $(this).closest('tr').hide();
    });

});




