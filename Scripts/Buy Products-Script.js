function purchers(){
    var userName = document.getElementById("userFirstName").value;
    var userLastName = document.getElementById("userLastName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userAddress = document.getElementById("userAddress").value;
    var userTel = document.getElementById("userTel").value;

    var mensD= document.querySelector(".mensD").innerHTML;
    var ladiesD = document.querySelector(".ladiesD").innerHTML;
    var Gloves  = document.querySelector(".Gloves").innerHTML
    var yogamat = document.querySelector(".yogamat").innerHTML
    var supplement = document.querySelector(".supplement").innerHTML
    var weightPlate = document.querySelector(".weightPlate").innerHTML;
  
    if(userName === "" || userLastName === "" || userEmail === "" || userAddress === "" || userTel === ""){
        
        alert("Please Fill Your Details");

    } else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (userEmail.match(mailformat)) {
            

            document.querySelector(".customerName").innerHTML = userName +" "+ userLastName;
            document.querySelector(".customerAddress").innerHTML = userAddress;
            document.querySelector(".contactNumber").innerHTML = userTel;
            document.querySelector(".emailAddress").innerHTML = userEmail;
            
            if(mensD != "" || ladiesD != "" || Gloves != "" || yogamat != "" || supplement != "" || weightPlate != ""){

                addmensDSummary();
                addladiesDSummary();
                addGlovesSummary();
                addyogamatSummary();
                addsupplementSummary();
                addweightPlateSummary();
                addTotalPrice();
                document.querySelector(".summary").style.display = "block";

            } else {
                alert("Please add item to cart before place order!")
            }   
        } else {

            alert("Please Enter a Valid Email Address")
        }
    }
}

function orderMSG(){
    var cName = document.getElementById("userFirstName").value;
    alert("Dear " + cName + ", your order has been placed successfully!");


}

let MDqauntity = 0;
let LDqauntity = 0;
let GLqauntity = 0;
let YMqauntity = 0;
let SPqauntity = 0;
let WPqauntity = 0;
// MENS DUMBBELL //

function mensD(){
    
    var selecQnt = document.getElementById("mensDQuantity").value;
    var sizeOfWT = document.querySelector( 'input[name="mensDSize"]:checked');

    MDqauntity = selecQnt;

    if(sizeOfWT.value != "" && selecQnt > 0){
        document.querySelector(".mensD").innerHTML = "Dumbbell - Mens:   ";
        document.querySelector(".QtymensD").innerHTML =  "Qty: " + selecQnt;
        document.querySelector("#removemensD").style.display = "block";
    }

}

function removemensD(){

    if (MDqauntity >= 1){
        MDqauntity -= 1;
        document.querySelector(".QtymensD").innerHTML =  "Qty: " + MDqauntity;


    }else{
    document.querySelector(".mensD").innerHTML = "";
    document.querySelector(".QtymensD").innerHTML =  "";
    document.querySelector("#removemensD").style.display = "none";
    }
}

function addmensDSummary(){
    var namemensD = document.querySelector(".mensD");
    var qtymensD = document.getElementById("mensDQuantity").value;
    var sizeOfWT = document.querySelector( 'input[name="mensDSize"]:checked');
    const priceOfmensD = (parseInt(MDqauntity) * 2500);

    if (namemensD.innerHTML != "") {
        document.querySelector(".mensDName").innerHTML = "Dumbbell - Mens";
        document.querySelector(".mensDQty").innerHTML = MDqauntity;
        document.querySelector(".mensDSize").innerHTML = sizeOfWT.value;
        document.querySelector(".mensDTotal").innerHTML = "Rs." + priceOfmensD;

    }
}

// LADIES DUMBBELL //

function ladiesD(){
    var sizeOfBT = document.querySelector('input[name="ladiesDSize"]:checked');
    var selectQnt = document.getElementById("ladiesDQuantity").value;

    LDqauntity = selectQnt;

    if(sizeOfBT.value != "" && selectQnt > 0){
        document.querySelector(".ladiesD").innerHTML = "Dumbbell - Ladies";
        document.querySelector(".QtyladiesD").innerHTML = "Qty: " + selectQnt
        document.querySelector("#removeladiesD").style.display = "block";
    }

}

function removeladiesD(){
    if (LDqauntity > 1){
        LDqauntity -= 1;
        document.querySelector(".QtyladiesD").innerHTML =  "Qty: " + LDqauntity;

    }else{
    document.querySelector(".ladiesD").innerHTML = "";
    document.querySelector(".QtyladiesD").innerHTML = "";
    document.querySelector("#removeladiesD").style.display = "none";
    }
}

function addladiesDSummary(){
    var nameladiesD = document.querySelector(".ladiesD");
    var qtyladiesD = document.getElementById("ladiesDQuantity").value;
    var sizeOfBT = document.querySelector('input[name="ladiesDSize"]:checked');
    const priceOfladiesD = (parseInt(LDqauntity) * 2000);

    if (nameladiesD.innerHTML != "") {
        document.querySelector(".ladiesDName").innerHTML = "Dumbbell - Ladies";
        document.querySelector(".ladiesDQty").innerHTML = LDqauntity;
        document.querySelector(".ladiesDSize").innerHTML = sizeOfBT.value;
        document.querySelector(".ladiesDTotal").innerHTML = "Rs. " + priceOfladiesD;
    }
}

// GLOVES //

function Gloves() {
    var sizeofH = document.querySelector( 'input[name="GlovesSize"]:checked');
    var selectQnt = document.getElementById("GlovesQuantity").value;

    GLqauntity = selectQnt;

    if(sizeofH.value != "" && selectQnt > 0){
        document.querySelector(".Gloves").innerHTML = "Gloves";
        document.querySelector(".QtyGloves").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeGloves").style.display = "block";
    }
}

function removeGloves() {
    if (GLqauntity > 1){
        GLqauntity -= 1;
        document.querySelector(".QtyGloves").innerHTML =  "Qty: " + GLqauntity;

    }else{
    document.querySelector(".Gloves").innerHTML = "";
    document.querySelector(".QtyGloves").innerHTML = "";
    document.querySelector("#removeGloves").style.display = "none";
    }
}

function addGlovesSummary(){
    var nameGloves = document.querySelector(".Gloves");
    var qtyGloves = document.getElementById("GlovesQuantity").value;
    var sizeOfH = document.querySelector('input[name="GlovesSize"]:checked');
    const priceOfGloves = parseInt(GLqauntity) * 2000;

    if (nameGloves.innerHTML != "") {
        document.querySelector(".GlovesName").innerHTML = "Gloves";
        document.querySelector(".GlovesQty").innerHTML = GLqauntity;
        document.querySelector(".GlovesSize").innerHTML = sizeOfH.value;
        document.querySelector(".GlovesTotal").innerHTML = "Rs. " + priceOfGloves;
    }
}

// YOGAMAT //

function yogamat(){
    var selectQnt = document.getElementById("yogamatQuantity").value;

    YMqauntity = selectQnt;

    if (selectQnt > 0){

        document.querySelector(".yogamat").innerHTML = "Yogamat";
        document.querySelector(".Qtyyogamat").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeyogamat").style.display = "block";
    }
}

function removeyogamat(){
    if (YMqauntity > 1){
        YMqauntity -= 1;
        document.querySelector(".Qtyyogamat").innerHTML =  "Qty: " + YMqauntity;

    }else{
    document.querySelector(".yogamat").innerHTML = "";
    document.querySelector(".Qtyyogamat").innerHTML = "";
    document.querySelector("#removeyogamat").style.display = "none";
    }
}

function addyogamatSummary(){
    var nameyogamat = document.querySelector(".yogamat");
    var qtyyogamat = document.getElementById("yogamatQuantity").value;
    const priceOfyogamat = parseInt(YMqauntity) * 2500;

    if (nameyogamat.innerHTML != "") {
        document.querySelector(".yogamatName").innerHTML = "Yogamat";
        document.querySelector(".yogamatQty").innerHTML = YMqauntity;
        document.querySelector(".yogamatSize").innerHTML = "Regular";
        document.querySelector(".yogamatTotal").innerHTML = "Rs. " + priceOfyogamat;
    }

}

// SUPPLEMENT // 

function supplement(){
    var selectQnt = document.getElementById("supplementquantity").value;

    SPqauntity = selectQnt;

    if (selectQnt > 0) {
        document.querySelector(".supplement").innerHTML = "Supplement";
        document.querySelector(".Qtysupplement").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removesupplement").style.display = "block";
    }
}

function removesupplement() {
    if (SPqauntity > 1){
        SPqauntity -= 1;
        document.querySelector(".Qtysupplement").innerHTML =  "Qty: " + SPqauntity;

    }else{
    document.querySelector(".supplement").innerHTML = "";
    document.querySelector(".Qtysupplement").innerHTML = "";
    document.querySelector("#removesupplement").style.display = "";
    }
}

function addsupplementSummary(){
    var namesupplement = document.querySelector(".supplement");
    var qtysupplement = document.getElementById("supplementquantity").value;
    const priceOfsupplement = parseInt(SPqauntity) * 15000;

    if(namesupplement.innerHTML != "") {
        document.querySelector(".supplementName").innerHTML = "Supplement";
        document.querySelector(".supplementQty").innerHTML = SPqauntity;
        document.querySelector(".supplementSize").innerHTML = "Regular";
        document.querySelector(".supplementTotal").innerHTML = "Rs. " + priceOfsupplement;
    }
}

// WEIGHTPALE //

function weightPlate(){
    var selectQnt = document.getElementById("weightPlatequantity").value;

    WPqauntity = selectQnt;

    if (selectQnt > 0) {
        document.querySelector(".weightPlate").innerHTML = "Weight Plate";
        document.querySelector(".QtyweightPlate").innerHTML = "Qty: " + selectQnt;
        document.querySelector("#removeweightPlate").style.display = "block";
    }
}

function removeweightPlate(){
    if (WPqauntity > 1){
        WPqauntity -= 1;
        document.querySelector(".QtyweightPlate").innerHTML =  "Qty: " + WPqauntity;

    }else{
    document.querySelector(".weightPlate").innerHTML = "";
    document.querySelector(".QtyweightPlate").innerHTML = "";
    document.querySelector("#removeweightPlate").style.display = "none";
    }
}

function addweightPlateSummary(){
    var nameweightPlate = document.querySelector(".weightPlate");
    var qtyweightPlate = document.getElementById("weightPlatequantity").value;
    const priceOfweightPlate = parseInt(WPqauntity) * 7500;

    if(nameweightPlate.innerHTML != ""){
        document.querySelector(".weightPlateName").innerHTML = "Weight Plate";
        document.querySelector(".weightPlateQty").innerHTML = WPqauntity;
        document.querySelector(".weightPlateSize").innerHTML = "Regular";
        document.querySelector(".weightPlateTotal").innerHTML = priceOfweightPlate;
    }
}

// TOTAL PRICE //

function addTotalPrice(){
    var qtymensD = document.getElementById("mensDQuantity").value;
    const priceOfmensD = (parseInt(MDqauntity) * 2500);

    var qtyladiesD = document.getElementById("ladiesDQuantity").value;
    const priceOfladiesD = (parseInt(LDqauntity) * 2000);
    
    var qtyGloves = document.getElementById("GlovesQuantity").value;
    const priceOfGloves = parseInt(GLqauntity) * 2000;

    var qtyyogamat = document.getElementById("yogamatQuantity").value;
    const priceOfyogamat = parseInt(YMqauntity) * 2500;

    var qtysupplement = document.getElementById("supplementquantity").value;
    const priceOfsupplement = parseInt(SPqauntity) * 15000;

    var qtyweightPlate = document.getElementById("weightPlatequantity").value;
    const priceOfweightPlate = parseInt(WPqauntity) * 7500;

    document.querySelector(".totalPrice").innerHTML = "Rs. " + parseInt(priceOfmensD + priceOfladiesD + priceOfGloves + priceOfyogamat + priceOfsupplement + priceOfweightPlate);
}

// EDIT BUTTON //
function editbtn(){
    document.querySelector(".summary").style.display = "none";
}