

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