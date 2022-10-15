let products = [
    {
        "productName": "Margreta Pizza",
        "category": "Pizza",
        "price": "200",
        "image": "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
    },
    {
        "productName": "Maharaja Burger",
        "category": "Burger",
        "price": "279",
        "image": "https://5.imimg.com/data5/SH/WO/MY-24590086/aloo-tikki-burger-500x500.jpg",
    },
    {
        "productName": "Special Sandwich",
        "category": "Sandwich",
        "price": "69",
        "image": "https://i0.wp.com/vegecravings.com/wp-content/uploads/2021/02/Mayonnaise-Sandwish-Recipe-Step-By-Step-Instructions-scaled.jpg?resize=1024%2C756&quality=65&strip=all&ssl=1",
    },
    {
        "productName": "Nutella Coffee",
        "category": "Coffee",
        "price": "179",
        "image": "https://www.sharmispassions.com/wp-content/uploads/2020/12/43532362695_013e791003_o.jpg",
    },
    {
        "productName": "Italian Pizza",
        "category": "Pizza",
        "price": "449",
        "image": "https://img.freepik.com/premium-photo/delicious-classic-italian-pizza-with-mozzarella_79762-2653.jpg?w=740 ",
    },
    {
        "productName": "Double layer Burger",
        "category": "Burger",
        "price": "130",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEDeRcUD9GMp9JQ5F0NI5fQsAAaCxmZX4hA&usqp=CAU",
    },
    {
        "productName": "Cheese Chocolate Sandwich",
        "category": "Sandwich",
        "price": "85",
        "image": "https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900",
    },
    {
        "productName": "Kit-kat Shake",
        "category": "Coffee",
        "price": "250",
        "image": "https://www.spiceupthecurry.com/wp-content/uploads/2022/04/cold-coffee-without-ice-cream-1.jpg",
    },

    {
        "productName": "7 Cheese Pizza",
        "category": "Pizza",
        "price": "545",
        "image": "https://img.freepik.com/premium-photo/slices-fresh-round-pizza-with-chicken-meat-vegetables-mushrooms-cheese-top-view-white-gray-surface-natural-shadow-with-copy-space_172990-248.jpg?w=1060",
    },

    {
        "productName": "Aloo tikki burger",
        "category": "Burger",
        "price": "45",
        "image": "https://c.ndtvimg.com/2020-09/vics3pv_aloo-tikki-burger_625x300_19_September_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
        "productName": "Grill Sandwich",
        "category": "Sandwich",
        "price": "90",
        "image": "https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg",
    },

    {
        "productName": "Dark Chocolate Coffee",
        "category": "Coffee",
        "price": "350",
        "image": "https://www.spiceupthecurry.com/wp-content/uploads/2022/04/cold-coffee-1.jpg",
    },
    {
        "productName": "Small Burger",
        "category": "Burger",
        "price": "60",
        "image": "https://i.ytimg.com/vi/dCVEY88Fn1k/maxresdefault.jpg",
    },
    {
        "productName": "Burn To Hell",
        "category": "Pizza",
        "price": "745",
        "image": "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?t=st=1657438616~exp=1657439216~hmac=0615051b5324dd531800774ce23c0021e665d5d6fd5cc5e24a475453f157b115&w=1060",
    },

];

//display items
$(document).ready(function () {
    for (var i = 0; i < products.length; i++) {
        $(".display").append('<div class="col-md-6 col-lg-4 col-sm-4 mt-3 "><div class="card"><div><img class="image rounded" src="' + products[i].image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + products[i].productName + '</h5><span>' + products[i].price + '</span></div></div></div></div>');
    }

//    btn click opration

    $(".btn").click(function () {
        var currentClick = this.id
        $(".searchitem").val("");
        if (currentClick == "all") {
            $(".display").empty()
            for (var i = 0; i < products.length; i++) {
                $(".display").append('<div class="col-md-6 col-lg-4 col-sm-4 mt-3"><div class="card "><div><img class="image rounded" src="' + products[i].image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + products[i].productName + '</h5><span>' + products[i].price + '</span></div></div></div></div>');
            }
        }
         else {
            let showitem = products.filter(products => products.category == currentClick)
            $(".display").empty()
            for (var i = 0; i < showitem.length; i++) {
                $(".display").append('<div class="col-md-6 col-lg-4 col-sm-4 mt-3"><div class="card "><div><img class="image rounded" src="' + showitem[i].image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + showitem[i].productName + '</h5><span>' + showitem[i].price + '</span></div></div></div></div>');
            }

        }
    })

     // search btn operation
    $(".searchitem").on("keyup", function () {
        let val = $(".searchitem").val().toLowerCase();
        if (val) {
            $(".display").empty("");
            $.each(products, function (index, obj) {
                // console.log(obj.productName.toLowerCase().indexOf(val));
                if (obj.productName.toLowerCase().indexOf(val) != -1) {
                    $(".display").append('<div class="col-md-6 col-lg-4 col-sm-4 mt-3"><div class="card ' + obj.productName + '"><div><img class="image rounded" src="' + obj.image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + obj.productName + '</h5><span>' + obj.price + '</span></div></div></div></div>');
                }
            });
        }
       
    })

    // sorting
    $('#ltohsort').click(function() {

        var sortedProduct =  products.sort(function(a, b){
            return a.price - b.price
        });
     
        $.each(sortedProduct, function (i) {
            $('.display').append ('<div class="col-md-6 col-lg-4 col-sm-4 mt-3"><div class="card ' + sortedProduct[i].productName + '"><div><img class="image rounded" src="' + sortedProduct[i].image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + sortedProduct[i].productName + '</h5><span>' + sortedProduct[i].price + '</span></div></div></div></div>');
            
        });
        
    });
    
    $('#htolsort').click(function() {
        var sortedProduct =  products.sort(function(a, b){
            return b.price - a.price
        });

        $.each(sortedProduct, function (i) {
            $('.display').append('<div class="col-md-6 col-lg-4 col-sm-4 mt-3"><div class="card ' + sortedProduct[i].productName + '"><div><img class="image rounded" src="' + sortedProduct[i].image + '"></div><div class="card-body"><div class="card-text d-flex justify-content-between text-capitalize"><h5>' + sortedProduct[i].productName + '</h5><span>' + sortedProduct[i].price + '</span></div></div></div></div>');  
    
        });
        
    });

});

