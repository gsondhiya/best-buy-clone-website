var dodData = JSON.parse(localStorage.getItem("dodPage")) || [];
// console.log(tvData)

var dodData =[
  {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458907_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Dell - Inspiron 7000 2-in-1 14 Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB Solid State Drive - Blue",
  model : "Model: i7415-A906BLU-PUS",
  sku : "SKU: 6458907",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(537)",
  get : "Get it today",
  pickup: "pickup:Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 799.99,
  save : "Save $70",
  strikedoffprice: 869.99,
    },
    {image_url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401740_sd.jpg;maxHeight=200;maxWidth=300",
    name: "Samsung - 43 Class 7 Series LED 4K UHD Smart Tizen TV",
    model : "Model: UN43TU7000FXZA",
    sku : "SKU: 6401740",
    rating_url :
    "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratingCount : "(7,002)",
    get : "Get it today",
    pickup: "Pickup: Available today at Aiea",
    location : "See all pickup locations",
    shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
    extimates : "Estimates for 96939",
    price: 309.99,
    save : "Save $90",
    strikedoffprice: 399.99,
      },
    {image_url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461977_sd.jpg;maxHeight=200;maxWidth=300",
    name: "Lenovo Ideapad 3 15.6 FHD Touch Screen Laptop - Intel Core i5 11th Gen - 12GB Memory - 256GB SSD - Arctic Grey",
    model : "Model: 82H801DQUS/82H8018SUS",
    sku : "KU: 6461977",
    rating_url :
    "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratingCount : "(905)",
    get : "Get it today",
    pickup: "Pickup: Available today at Aiea",
    location : "See all pickup locations",
    shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
    extimates : "Estimates for 96939",
    price: 549.99,
    save : "Save $70",
    strikedoffprice: 619,
      },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483636_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Google - Pixel 6 Pro 128GB (Unlocked) - Stormy Black",
  model : "Model: GA03149-US",
  sku : " SKU: 6483636",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(157)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 899.00,
  save : "Save $80",
  strikedoffprice: 979.99,
    },
    {image_url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452966_sd.jpg;maxHeight=200;maxWidth=300",
    name: "Samsung - 43 Class 8000 Series LED 4K UHD Smart Tizen TV",
    model : "Model: UN43AU8000FXZA",
    sku : "SKU: 6452966",
    rating_url :
    "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratingCount : "(823)",
    get : "Get it today",
    pickup: "pickup:Available today at Aiea",
    location : "See all pickup locations",
    shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
    extimates : "Estimates for 96939",
    price: 379.99,
    save : "Save $70",
    strikedoffprice: 449.99,
      },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6493/6493970_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Samsung - Galaxy A13 5G 64GB (Unlocked) - Black",
  model : "Model: SM-A136UZKDXAA",
  sku : "SKU: 6493970",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(3)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 249.99,
  save : "Save $50",
  strikedoffprice: 299.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398614_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Apple - Pre-Owned iPhone XR with 128GB Memory Cell Phone (Unlocked) - Black",
  model : "Model: XR 128GB BLACK RB",
  sku : "SKU: 6398614",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(499))",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 419.99,
  save : "Save $70",
  strikedoffprice: 489.99,
    },
    {image_url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427874_sd.jpg;maxHeight=200;maxWidth=300",
    name: "TCL - 50 Class 4 Series 4K UHD Smart Roku TV",
    model : "Model: 50S435",
    sku : " SKU: 6427874",
    rating_url :
    "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratingCount : "(638)",
    get : "Get it today",
    pickup: "Pickup: Available today at Aiea",
    location : "See all pickup locations",
    shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
    extimates : "Estimates for 96939",
    price: 299.99,
    save : "Save $60",
    strikedoffprice: 359.99,
      },
    // done
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457035_sd.jpg;maxHeight=200;maxWidth=300",
  name: "OnePlus - 9 5G 128GB (Unlocked) - Astral Black",
  model : "Model: LE2115",
  sku : "SKU: 6457035",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(2,773)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 549.99,
  save : "Save $180",
  strikedoffprice: 729.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452963_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Samsung - Galaxy A42 5G 128GB (Unlocked) - Black",
  model : "Model: SM-A426UZKBXAA",
  sku : "SKU: 6452963",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(147)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 399.99,
  save : "Save $100",
  strikedoffprice: 499.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443180_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Apple - iPhone 13 5G 128GB - Blue (T-Mobile)",
  model : "Model: MLMT3LL/A",
  sku : "SKU: 6443180",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(527)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 349.99,
  save : "Save $100",
  strikedoffprice: 449.99,
    },
    {image_url:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429416_sd.jpg;maxHeight=200;maxWidth=300",
    name: "Samsung - 70 Class 7 Series LED 4K UHD Smart Tizen TV",
    model : "Model: UN70TU7000BXZA",
    sku : "SKU: 6429416",
    rating_url :
    "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
    ratingCount : "(2,773)",
    get : "Get it today",
    pickup: "Pickup: Available today at Aiea",
    location : "See all pickup locations",
    shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
    extimates : "Estimates for 96939",
    price: 649.99,
    save : "Save $30",
    strikedoffprice: 679.99,
      },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448201_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Motorola - Moto G Stylus 5G 256GB (Unlocked) - Cosmic Emerald",
  model : "Model: PAN00004US",
  sku : " SKU: 6463049",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(239)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 299.99,
  save : "Save $100",
  strikedoffprice: 399.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6334/6334396_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Apple - Pre-Owned iPhone 8 with 64GB Memory Cell Phone (Unlocked) - Space Gray",
  model : "Model: 8 64GB GRAY RB",
  sku : " SKU: 6334396",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(720)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 229.99,
  save : "Save $20",
  strikedoffprice: 249.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441105_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Samsung - Galaxy S21 5G 128GB (Unlocked) - Phantom Gray",
  model : "Model: SM-G991UZKAXAA",
  sku : "SKU: 6441105",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(498)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 799.99,
  save : "Save $20",
  strikedoffprice: 819.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462915_sd.jpg;maxHeight=200;maxWidth=300",
  name: "Nokia - G10 32GB (Unlocked) - Night",
  model : "Model: TA-1338",
  sku : "SKU: 6462915",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(43)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 149.99,
  save : "Save $20",
  strikedoffprice: 169.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441178_rd.jpg;maxHeight=200;maxWidth=300",
  name: "Motorola - Moto G Power 2021 (Unlocked) 64GB Memory - Flash Gray",
  model : "Model: PALF0005US",
  sku : " SKU: 6441178",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(748)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 129.99,
  save : "Save $120",
  strikedoffprice: 1249.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441181_rd.jpg;maxHeight=200;maxWidth=300",
  name: "Motorola One 5G Ace 2021 (Unlocked) 128GB Memory - Frosted Silver",
  model : "Model: PALK0003US",
  sku : "SKU: 6441181",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(567)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 249.99,
  save : "Save $150",
  strikedoffprice: 399.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473167_sd.jpg;maxHeight=200;maxWidth=300",
  name: "SSamsung - Galaxy S9 64GB Unlocked Cell Phone - Pre-Owned - Midnight Black",
  model : "Model: G960U",
  sku : "SKU: 6473167",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(28)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 249.99,
  save : "Save $40",
  strikedoffprice: 279.99,
    },
    {image_url:
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441176_rd.jpg;maxHeight=200;maxWidth=300",
  name: "Motorola - Moto G Play (2021) 32GB Memory (Unlocked) - Misty Blue",
  model : "Model: PAL60003US",
  sku : " SKU: 6441176",
  rating_url :
  "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
  ratingCount : "(604)",
  get : "Get it today",
  pickup: "Pickup: Available today at Aiea",
  location : "See all pickup locations",
  shipping : "Shipping: Unavailable in your area This item is only available in certain markets",
  extimates : "Estimates for 96939",
  price: 149.99,
  save : "Save $20",
  strikedoffprice: 169.99,
    },

];

localStorage.setItem("dodPage", JSON.stringify(dodData));


var dodData = JSON.parse(localStorage.getItem("dodPage")) || [];

    
var dodCartArr = JSON.parse(localStorage.getItem("dodCartItem")) || [];

display()
function display(){
document.querySelector("#container").innerHTML = "";

dodData.map( function(element, index){
    

    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", ("mainBox"))

    // 1st column
    var div1 = document.createElement("div");
    div1.setAttribute("id", ("column1"))

    var image = document.createElement("img");
    image.setAttribute("src", element.image_url)
    image.setAttribute("id", ("image"))

    div1.append(image)

    // 2nd column
    var div2 = document.createElement("div");
    div2.setAttribute("id", ("column2"))

    var name = document.createElement("h4");
    name.innerText = element.name;
    name.setAttribute("id", ("name"))

    var model = document.createElement("p");
    model.innerText = element.model;

    var sku = document.createElement("p");
    sku.innerText = element.sku;
    sku.setAttribute("id", ("sku"))

    // mainDiv1
    var miniDiv1 = document.createElement("div");
    miniDiv1.setAttribute("id", ("miniDiv1"))

    // sUBminiDiv1
    var subMiniDiv1 = document.createElement("div");

    var ratingStars = document.createElement("img");
    ratingStars.setAttribute("src", element.rating_url)
    ratingStars.setAttribute("id", ("ratingStars"))

    subMiniDiv1.append(ratingStars)

    // sUBminiDiv2
    var subMiniDiv2 = document.createElement("div");
    subMiniDiv2.setAttribute("id", ("subMiniDiv2"))

    var ratingCount = document.createElement("p");
    ratingCount.innerText = element.ratingCount;

    subMiniDiv2.append(ratingCount)
    
    miniDiv1.append(subMiniDiv1,subMiniDiv2)

    var get = document.createElement("p");
    get.innerText = element.get;
    get.setAttribute("id", ("get"))

    var pickup = document.createElement("p");
    pickup.setAttribute("id", ("pickup"))
    pickup.innerText = element.pickup;

    var location = document.createElement("p");
    location.innerText = element.location;
    location.setAttribute("id", ("location"))

    var shipping = document.createElement("p");
    shipping.innerText = element.shipping;

    var extimates = document.createElement("p");
    extimates.innerText = element.extimates;
    extimates.setAttribute("id", ("extimates"))


    div2.append(name,model,sku,miniDiv1,get,pickup,location,shipping,extimates)

    // 3rd column
    var div3 = document.createElement("div");
    div3.setAttribute("id", ("column3"))

    // miniDiv2
    var miniDiv2 = document.createElement("div");
    miniDiv2.setAttribute("id", ("miniDiv2"))

    var dollarSign = document.createElement("p");
    dollarSign.setAttribute("id", ("dollarSign"))
    dollarSign.innerText = "$";

    var price = document.createElement("p");
    price.innerText = element.price;
    price.setAttribute("id", ("price"))

    miniDiv2.append(dollarSign,price)

    // miniDiv3
    var miniDiv3 = document.createElement("div");
    miniDiv3.setAttribute("id", ("miniDiv3"))

    var subMiniDiv3 = document.createElement("div");
    subMiniDiv3.setAttribute("id", ("subMiniDiv3"))

    var save = document.createElement("p");
    save.setAttribute("id", ("save"))
    save.innerText = element.save;
    subMiniDiv3.append(save)

    var subMiniDiv4 = document.createElement("div");
    subMiniDiv4.setAttribute("id", ("subMiniDiv4"))
    var was = document.createElement("p");
    was.innerText = "Was $";
    subMiniDiv4.append(was)

    var subMiniDiv5 = document.createElement("div");
    subMiniDiv5.setAttribute("id", ("subMiniDiv5"))

    var strikedoffprice = document.createElement("p");
    strikedoffprice.innerText = element.strikedoffprice;
    subMiniDiv5.append(strikedoffprice)

    miniDiv3.append(subMiniDiv3,subMiniDiv4,subMiniDiv5)
    

    var addTocartButton = document.createElement("button");
    addTocartButton.innerText = "🛒Add to Cart"
    addTocartButton.setAttribute("id", ("addTocartButton"))
    addTocartButton.addEventListener("click",function(){
    addTocart(element)
})
    var line = document.createElement("hr");
    div3.append(miniDiv2,miniDiv3,addTocartButton)




    mainDiv.append(div1,div2,div3,)
    document.querySelector("#container").append(mainDiv,line);


})
};

// button function
function addTocart(element){

element.quant = 1;
dodCartArr.push(element);
localStorage.setItem("dodCartItem", JSON.stringify(dodCartArr));
}

function addTocart(element){

  element.quant = 1;
  dodCartArr.push(element);
  localStorage.setItem("cartItem", JSON.stringify(dodCartArr));
  }
  
  
  // function sortItems(){
  // var sorting=document.querySelector("#sort").value
  // console.log(sorting)
  
  // if(sorting=="h2l"){
  //   dodData.sort(function(a,b){
  //     return b.price-a.price
  //   })
  //   display()
  // }
  // else if(sorting=="l2h"){
  //   dodData.sort(function(a,b){
  //     return a.price-b.price
  //   })
  //   display()
  // }
  // else if (sorting == "acending") {
  //   dodData.sort(function (a, b) {
  //     if(a.name>b.name){
  //       return 1
  //     }
  //     if(a.name<b.name){
  //       return -1
  //     }
  //   });
  //   display();
  // }
  // else if (sorting == "decending") {
  //   dodData.sort(function (a, b) {
  //     if(b.name>a.name){
  //       return 1
  //     }
  //     if(b.name<a.name){
  //       return -1
  //     }
  //   });
  //   display();
  // }
  // }
