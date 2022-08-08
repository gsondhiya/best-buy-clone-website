var payment = JSON.parse(localStorage.getItem("paymentitems"));
console.log(payment);

function displaydata() {
  document.querySelector("#placeorederitemdetails").innerHTML = "";
  payment.map(function (ele, index, array) {
    var div = document.createElement("div");
    div.setAttribute("id", "totalitemcontainer");

    var innercontainer1 = document.createElement("div");
    innercontainer1.setAttribute("id", "innercontainer1");

    var itemimage = document.createElement("img");
    itemimage.setAttribute("src", ele.image_url);
    var itemname = document.createElement("h6");
    itemname.innerText = ele.name;

    innercontainer1.append(itemimage, itemname);

    var innercontainer2 = document.createElement("div");
    innercontainer2.setAttribute("id", "innercontainer2");

    var paymentpageitemprice = document.createElement("p");
    paymentpageitemprice.innerText = ele.price;
    var paymentpageitemquantity = document.createElement("p");
    paymentpageitemquantity.innerText = ele.quant;

    innercontainer2.append(paymentpageitemprice, paymentpageitemquantity);

    div.append(innercontainer1, innercontainer2);
    document.querySelector("#placeorederitemdetails").append(div);
  });
}
displaydata();

function showtotal() {
  var Total = payment.reduce(function (acc, ele, index, array) {
    return acc + ele.price * ele.quant;
    console.log(ele.quant);
  }, 0);

  var totalprice = document.querySelector("#ordereditemtotal");
  totalprice.innerText = Math.floor(Total - 100 + Math.floor(Total * 0.12));
  if (totalprice.innerText == -100) {
    totalprice.innerText = 0;
  }
}
showtotal();

function changemethod() {
  var howtopay = document.querySelector("#Pmethod").value;
  console.log(howtopay);
  if (howtopay == "db") {
    var x = document.querySelector("#debitcard");
    x.style.display = "block";
  } else if (howtopay == "cod") {
    var x = document.querySelector("#debitcard");
    x.style.display = "none";
  } else if (howtopay == "cd") {
    var x = document.querySelector("#debitcard");
    x.style.display = "none";
  }
  displaydata();
}

function tothankspage() {
  window.location.href = "../thanks/thanks.html";
}
