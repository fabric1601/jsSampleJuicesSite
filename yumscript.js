// Code Author: Ivan Gashtilov
//function that calculate VAT
function totalWithVat(total){
var vat = 17.5;
var totalVAT = total*(vat/100);
var totalIncludingVat = total+totalVAT;

return totalIncludingVat;
}




//This function is envoked when user click "Total" button
function getTotal()
{

	var discount = 12.5;
	
	var prod1 = parseInt(document.getElementById("product1").value);
	var prod2 = parseInt(document.getElementById("product2").value);
	var prod3 = parseInt(document.getElementById("product3").value);
	var prod4 = parseInt(document.getElementById("product4").value);
	var prod5 = parseInt(document.getElementById("product5").value);
	var prod6 = parseInt(document.getElementById("product6").value);
	var prod7 = parseInt(document.getElementById("product7").value);
	var prod8 = parseInt(document.getElementById("product8").value);
	var prod9 = parseInt(document.getElementById("product9").value);
	var prod10 = parseInt(document.getElementById("product10").value);
	var products = new Array(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10);
	
	//This variable represents the number of Crates ordered by the user in order, later on to verified if the user is entitle of the discount
	var productAmount= prod1+prod2+prod3+prod4+prod5+prod6+prod7+prod8+prod9+prod10;
	// Alert window will pop up if user enter a text value instead of numeric value
	if	(isNaN(productAmount) || productAmount==0)
	{
		alert("Amount of Crates Incorrect. Please enter a at least 1 crate.");
		return false;
	}
	//This array reperesents the price for each product
	var price = new Array(10, 20, 30, 35, 25, 22, 18, 11, 19, 16);
	var newTotal = 0;
	
	     for (var i = 0; i<products.length; i++)
	      {
	         var total = products[i]*price[i];
	         newTotal = newTotal+total;
	      }
	var totalVAT = newTotal*(17.5/100);
	
	//function totalWithVat is applayed here to calculate VAT
	var ptotalWithVat=totalWithVat(newTotal);
	

	if(productAmount>5)
	{
	            var totaldiscount = ptotalWithVat*(discount/100);
                var finalTotal  = ptotalWithVat - totaldiscount;
		
		document.getElementById("total").innerHTML = "Total before discount and VAT "+"£" + newTotal.toFixed(2);
	    document.getElementById("discount").innerHTML = "Total with discount "+"£" + totaldiscount.toFixed(2);
	    document.getElementById("vat").innerHTML = "VAT "+"£" +totalVAT.toFixed(2);
	    document.getElementById("totalincludingvat").innerHTML = "Total including discount and VAT"+"£" + finalTotal.toFixed(2) ;
	}
	else
	{
	    document.getElementById("total").innerHTML = "Total before VAT "+"£" + newTotal.toFixed(2);
	    document.getElementById("discount").innerHTML = "Discount is not applayed because you did not order more than 5 crates";
	    document.getElementById("vat").innerHTML = "VAT "+"£" +totalVAT.toFixed(2);
	    document.getElementById("totalincludingvat").innerHTML = "Total including VAT "+"£" + ptotalWithVat.toFixed(2);
	}


	
}

