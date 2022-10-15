let products = [
	{
		productName : "Margreta Pizza",
		category: "Pizza",
		price: "200",
		image: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
	},
	{
		productName : "Maharaja Burger",
		category: "Burger",
		price: "279",
		image: "https://5.imimg.com/data5/SH/WO/MY-24590086/aloo-tikki-burger-500x500.jpg",
	},
	{
		productName : "Special Sandwich",
		category: "Sandwich",
		price: "69",
		image: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2021/02/Mayonnaise-Sandwish-Recipe-Step-By-Step-Instructions-scaled.jpg?resize=1024%2C756&quality=65&strip=all&ssl=1",
	},
	{
		productName : "Nutella Coffee",
		category: "Coffee",
		price: "179",
		image: "https://www.sharmispassions.com/wp-content/uploads/2020/12/43532362695_013e791003_o.jpg",
	},
	{
		productName : "Italian Pizza",
		category: "Pizza",
		price: "449",
		image: "https://img.freepik.com/premium-photo/delicious-classic-italian-pizza-with-mozzarella_79762-2653.jpg?w=740 ",
	},
	{
		productName : "Double layer Burger",
		category: "Burger",
		price: "130",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEDeRcUD9GMp9JQ5F0NI5fQsAAaCxmZX4hA&usqp=CAU",
	},
	{
		productName : "Cheese Chocolate Sandwich",
		category: "Sandwich",
		price: "85",
		image: "https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900",
	},
	{
		productName : "Kit-kat Shake",
		category: "Coffee",
		price: "250",
		image: "https://www.spiceupthecurry.com/wp-content/uploads/2022/04/cold-coffee-without-ice-cream-1.jpg",
	},

	{
		productName : "7 Cheese Pizza",
		category: "Pizza",
		price: "545",
		image: "https://img.freepik.com/premium-photo/slices-fresh-round-pizza-with-chicken-meat-vegetables-mushrooms-cheese-top-view-white-gray-surface-natural-shadow-with-copy-space_172990-248.jpg?w=1060",
	},

	{
		productName : "Aloo tikki burger",
		category: "Burger",
		price: "45",
		image: "https://c.ndtvimg.com/2020-09/vics3pv_aloo-tikki-burger_625x300_19_September_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
	},
	{
		productName : "Grill Sandwich",
		category: "Sandwich",
		price: "90",
		image: "https://media.30seconds.com/tip/lg/Grilled-Cheese-Sandwich-Ideas-20-Creative-Ways-to-Make-a-G-20617-88a23048eb-1615952482.jpg",
	},
	
	{
		productName : "Dark Chocolate Coffee",
		category: "Coffee",
		price: "350",
		image: "https://www.spiceupthecurry.com/wp-content/uploads/2022/04/cold-coffee-1.jpg",
	},
	{
		productName : "Small Burger",
		category: "Burger",
		price: "60",
		image: "https://i.ytimg.com/vi/dCVEY88Fn1k/maxresdefault.jpg",
	},
	{
		productName : "Burn To Hell",
		category: "Pizza",
		price: "745",
		image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?t=st=1657438616~exp=1657439216~hmac=0615051b5324dd531800774ce23c0021e665d5d6fd5cc5e24a475453f157b115&w=1060",
	},
	
]; 

for (let i of products){

    //Create Card
    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");
    //Img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //Price
    let price = document.createElement("h4");
    price.innerText = "₹ " + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("box").appendChild(card);

}
  

//Parameter passed from button for all
function filterproduct(value){
   

    let elements = document.querySelectorAll(".card");
   
    elements.forEach((element) => {
        
        if (value == "all"){
            element.classList.remove("hide");
        }
        else {
            //check if element contains category class
            if(element.classList.contains(value)){
               
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}


//Search button click
document.getElementById("search-input").addEventListener("keyup", () =>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element,index) => {

        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        }
        else{
            //hide others
            cards[index].classList.add("hide");
        }
    });
})


// Sorting 
function ltohsort(val){
	const eitherSort = (products = []) => {
		const sorter = (a, b) => {		
			// console.log(a,"<br>");
			// console.log(b);
			// console.log(+a.price - +b.price)	
		  return +a.price - +b.price;
	   };
	   products.sort(sorter);
	   
	};
	eitherSort(products);
   
	   document.getElementById("box").innerHTML = "";
   
		for (let i of products){
		   //Create Card
		   let card = document.createElement("div");
		   card.classList.add("card",i.category);
		   //Img div
		   let imgContainer = document.createElement("div");
		   imgContainer.classList.add("image-container");
		   //img tag
		   let image = document.createElement("img");
		   image.setAttribute("src",i.image);
		   imgContainer.appendChild(image);
		   card.appendChild(imgContainer);
		   //Container
		   let container = document.createElement("div");
		   container.classList.add("container");
		   //product name
		   let name = document.createElement("h5");
		   name.classList.add("product-name");
		   name.innerText = i.productName.toUpperCase();
		   container.appendChild(name);
		   //Price
		   let price = document.createElement("h4");
		   price.innerText = "₹ " + i.price;
		   container.appendChild(price);
   
		   card.appendChild(container);
		   document.getElementById("box").appendChild(card);
	   }
 
};

//descending
function htolsort(val){
	const eitherSort = (products = []) => {
		const sorter = (a, b) => {
		  return +a.price - +b.price;
	   };
	   products.sort(sorter);
	   products.reverse(sorter);
	};
	eitherSort(products);
   
	   document.getElementById("box").innerHTML = "";
   
		for (let i of products){
		   //Create Card
		   let card = document.createElement("div");
		   card.classList.add("card",i.category);
		   //Img div
		   let imgContainer = document.createElement("div");
		   imgContainer.classList.add("image-container");
		   //img tag
		   let image = document.createElement("img");
		   image.setAttribute("src",i.image);
		   imgContainer.appendChild(image);
		   card.appendChild(imgContainer);
		   //Container
		   let container = document.createElement("div");
		   container.classList.add("container");
		   //product name
		   let name = document.createElement("h5");
		   name.classList.add("product-name");
		   name.innerText = i.productName.toUpperCase();
		   container.appendChild(name);
		   //Price
		   let price = document.createElement("h4");
		   price.innerText = "₹ " + i.price;
		   container.appendChild(price);
   
		   card.appendChild(container);
		   document.getElementById("box").appendChild(card);
	   }
};


//Initially display all products
window.onload = () => {
    filterproduct("all");
};