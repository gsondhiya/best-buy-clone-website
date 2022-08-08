// cartArray = [
//   {
//     image_url:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452966_sd.jpg;maxHeight=200;maxWidth=300",
//     name: "Samsung - 43 Class 8000 Series LED 4K UHD Smart Tizen TV",
//     model: "Model: UN43AU8000FXZA",
//     sku: "SKU: 6452966",
//     rating_url: "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
//     ratingCount: "(823)",
//     get: "Get it today",
//     pickup: "pickup:Available today at Aiea",
//     location: "See all pickup locations",
//     shipping:
//       "Shipping: Unavailable in your area This item is only available in certain markets",
//     extimates: "Estimates for 96939",
//     price: 379.99,
//     save: "Save $70",
//     strikedoffprice: 449.99,
//     quant: 1,
//   },
//   {
//     image_url:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401740_sd.jpg;maxHeight=200;maxWidth=300",
//     name: "Samsung - 43 Class 7 Series LED 4K UHD Smart Tizen TV",
//     model: "Model: UN43TU7000FXZA",
//     sku: "SKU: 6401740",
//     rating_url: "https://confirmedbest.com/ViewAssets/Images/4.5stars.svg",
//     ratingCount: "(7,002)",
//     get: "Get it today",
//     pickup: "Pickup: Available today at Aiea",
//     location: "See all pickup locations",
//     shipping:
//       "Shipping: Unavailable in your area This item is only available in certain markets",
//     extimates: "Estimates for 96939",
//     price: 309.99,
//     save: "Save $90",
//     strikedoffprice: 399.99,
//     quant: 1,
//   },
 
// ];
// localStorage.setItem("cartitems", JSON.stringify(cartArray));

Cartitems = JSON.parse(localStorage.getItem("cartItem"))||[];
console.log(Cartitems);

function displaydata(Cartitems) {
  document.querySelector("#cartitems").innerHTML = "";
  Cartitems.map(function (ele, index, array) {
    // console.log(cartitems);
    var div = document.createElement("div");
    div.setAttribute("id", "addeditemcontainer");

    var section1 = document.createElement("div");
    section1.setAttribute("id", "section1");
    // items in section 1

    // !items in itemsdiv
    var section1itemdiv = document.createElement("div");
    section1itemdiv.setAttribute("id", "section1itemdiv");
    var image = document.createElement("img");
    image.setAttribute("src", ele.image_url);
    var a = document.createElement("a");
    a.innerText = ele.name;
    a.addEventListener("click", moveto);
    function moveto() {
      window.location.href = "";
    }
    // ?items in itemsdiv

    //  !items in deliverydiv

    var section1deliverydiv = document.createElement("div");
    section1deliverydiv.setAttribute("id", "section1deliverydiv");

    var div1 = document.createElement("div");
    var button1 = document.createElement("input");
    button1.type = "radio";
    span1 = document.createElement("span");
    span1.innerText = "Pickup at Aiea";

    var div2 = document.createElement("div");
    div2.innerText =
      "Ready for pickup Sun, Mar 6Available Today at a store 6 miles awayEligible for curbside pickup";

    var div3 = document.createElement("div");
    var button2 = document.createElement("input");
    button2.type = "radio";
    span2 = document.createElement("span");
    span2.innerText = "Shipping to 96939 96939Unavailable in this area";

    //  ?items in deliverydiv

    // !items in quantitydiv
    var increase = document.createElement("button");
    increase.innerText = "+";
    increase.addEventListener("click", function () {
      Increment(index);
    });

    var quantity = document.createElement("span");
    quantity.innerText = ele.quant;

    var decrease = document.createElement("button");
    decrease.innerText = "-";
    decrease.addEventListener("click", function () {
      decrement(index);
    });

    var removeitem = document.createElement("p");
    removeitem.innerText = "Remove Item";

    removeitem.addEventListener("click",function remove(){
      console.log("hello")
      Cartitems.splice(index,1)
   

      displaydata(Cartitems)
      showtotal();
    })

    var saveitem = document.createElement("p");
    saveitem.innerText = "SaveItem";

    // ?items in quantitydiv
    // !items in pricediv

    var dollar = document.createElement("span");
    dollar.innerText = "$";
    var price = document.createElement("span");
    price.innerText = ele.price;

    var section1quantitydiv = document.createElement("div");
    section1quantitydiv.setAttribute("id", "section1quantitydiv");

    var section1pricediv = document.createElement("div");
    section1pricediv.setAttribute("id", "section1pricediv");

    // appending of the items initemsdiv

    section1itemdiv.append(image, a);

    // appending of the items deliverydiv
    div1.append(button1, span1);
    div3.append(button2, span2);
    section1deliverydiv.append(div1, div2, div3);

    // appending of the items quantitydiv

    section1quantitydiv.append(
      quantity,
      increase,
      decrease,
      removeitem,
      saveitem
    );

    // appending of the items pricediv
    section1pricediv.append(dollar, price);

    section1.append(
      section1itemdiv,
      section1deliverydiv,
      section1quantitydiv,
      section1pricediv
    );

    // !section2

    var section2 = document.createElement("div");
    section2.setAttribute("id", "section2");

    var protectionplandiv = document.createElement("div");
    protectionplandiv.setAttribute("id", "protectionplandiv");
    var h4 = document.createElement("h4");
    h4.innerText = "Protection plans";
    var hr = document.createElement("hr");

    protectionplandiv.append(h4, hr);

    var seeallplandiv = document.createElement("div");
    seeallplandiv.setAttribute("id", "seeallplandiv");
    var innerdiv1 = document.createElement("div");
    innerdiv1.setAttribute("id", "innerdiv1");
    var image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTI0SvV9ORXm52fV8UBLbpgz70ItLt3Id5DEHsdrIOVSIxHM0qV"
    );

    innerdiv1.append(image);

    var innerdiv2 = document.createElement("div");
    innerdiv2.setAttribute("id", "innerdiv2");
    var ptag = document.createElement("p");
    ptag.innerText = "Standard Geek Squad Protection";
    var image2 = document.createElement("img");
    image2.setAttribute("src", "");
    innerdiv2.append(ptag, image2);

    var innerdiv3 = document.createElement("div");
    innerdiv3.setAttribute("id", "innerdiv3");
    var seeallplanbutton = document.createElement("button");
    seeallplanbutton.innerText = "See All Plans";
    innerdiv3.append(seeallplanbutton);

    seeallplandiv.append(innerdiv1, innerdiv2, innerdiv3);

    var returnperioddiv = document.createElement("div");
    returnperioddiv.setAttribute("id", "returnperioddiv");
    var div1 = document.createElement("div");
    var returnpolicy = document.createElement("h4");
    returnpolicy.innerText = "15-Day Return Period";
    var hr = document.createElement("hr");
    div1.append(returnpolicy, hr);

    var div2 = document.createElement("div2");
    var ptag2 = document.createElement("p");
    ptag2.innerText =
      "If received today, the last day to return this item would be Mar 10. Learn more ˃";
    div2.append(ptag2);

    returnperioddiv.append(div1, div2);

    section2.append(protectionplandiv, seeallplandiv, returnperioddiv);

    div.append(section1, section2);
    document.querySelector("#cartitems").append(div);
  });
}
displaydata(Cartitems);

function Increment(index) {
  console.log(index);
  Cartitems[index].quant++;
  console.log(Cartitems[index].quant);
  displaydata(Cartitems);
  localStorage.setItem("cartitems", JSON.stringify(Cartitems));
  showtotal(Cartitems);
}
function decrement(index) {
  console.log(index);
  Cartitems[index].quant--;
  console.log(Cartitems[index].quant);
  displaydata(Cartitems);
  localStorage.setItem("cartitems", JSON.stringify(Cartitems));
  showtotal(Cartitems);
}

// !function to go to payment page

document
  .getElementById("button1")
  .addEventListener("click", function gotopayment() {
  //  displaydata(Cartitems)
  localStorage.setItem("paymentitems",JSON.stringify(Cartitems))
  //  showtotal();
  localStorage.removeItem("cartitems")
    window.location.href = "../payment/payment.html";
  });

// function showtotal
// Cartitems.reduce(function)

function showtotal() {
  var Total = Cartitems.reduce(function (acc, ele, index, array) {
    return acc + ele.price * ele.quant;
    console.log(ele.quant);
  }, 0);

  var totalprice = document.querySelector("#ordereditemprice");
  totalprice.innerText = Total;
  //   console.log(totalprice.innerText);

  var savings = document.getElementById("oredereditemsavings");
  if(Total>0){
    savings.innerText = -100;

  }
  else{
    savings.innerText = 0;
  }

  var tax = document.getElementById("oredereditemsaletax");
  tax.innerText = Math.floor(Total * 0.12);

  var checkoutprice = document.getElementById("ordereditemtotal");
  checkoutprice.innerText = Math.floor(Total +Number(savings.innerText) + Math.floor(Total * 0.12));
}
showtotal();







function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.querySelector("#searchlogo").addEventListener("click",function(){
  console.log("hello")

  goto()
})

function goto(){
  var searchtextvalue=document.querySelector("#search").value
  console.log(searchtextvalue)
  console.log("hello")
  if(searchtextvalue=="tv"){
      window.location.href="../tv/tvcomplete.html"
  }
  if(searchtextvalue=="laptop"){
      window.location.href="../laptop/laptopcomplete.html"
  }
  if(searchtextvalue=="phone"){
      window.location.href="../phone/phonecomplete.html"
  } 
}

document.querySelector("#companylogo").addEventListener("click",function(){
  window.location.href="../homepage/homepagecomplete.html"
})