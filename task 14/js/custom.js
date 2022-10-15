$(document).ready(function(){
    $('.btn').click(function(){
        // add item
        var input = $('.inputitem').val();
        console.log(input);
        if(input != ""){
            $('ul').append('<li class="form-control w-50">'+input+ '<i class="fa fa-trash"></i> </li>')
            $('.inputitem').val('')
        }
        
    })

// remove add list
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').remove();
    })

})

