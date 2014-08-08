// Code Author: Ivan Gashtilov
//These Variables have been declared in order to be use by several functions

// Regular Expression for number only. Allowed the functions to test for number only or alpha character only 
var numberRegExp = /[0-9]/;
var  alphahwithspaceExp = /^([a-zA-Z ]+)$/;
//Regular Expression for telephone number. Numbers only, length 11 
var telephoneNumberExp = "^([0-9]{11})$";


//Regular Expression for email address. @ and dot required, at least two characters after the dot, length 11
var emailRegExp =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                   
//Current Uk postcode Regular expression
var postcodeRegExp =  /^([A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]|[A-HK-Y][0-9]([0-9]|[ABEHMNPRV-Y]))|[0-9][A-HJKS-UW])\ [0-9][ABD-HJLNP-UW-Z]{2}|(GIR\ 0AA)|(SAN\ TA1)|(BFPO\ (C\/O\ )?[0-9]{1,4})|((ASCN|BBND|[BFS]IQQ|PCRN|STHL|TDCU|TKCA)\ 1ZZ))$/;  

// Card Regular expression: length 16.
var creditCard = "^([0-9]{16})$";


// Credit Card Expiry Date Regular expression.
var ccExpRegExp = /^((0[1-9])|(1[0-2]))\/((2010)|(20[1-2][0-9]))$/;

//firstname and surname Regular expression.
var alphabeticExp = /^([a-zA-Z]+)$/;

// Mastercard Regular expression: length 16, prefix 51-55, dashes optional.
var masterCardRegExp = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
// Visa Regular expression: length 16, prefix 4, dashes optional.
var visaRegExp = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
// American Express Regular expression: length 15, prefix 34 or 37.
var amexRegExp = /^3[4,7]\d{13}$/;

// Credit Card Expiry Date Regular expression.
var ccExpRegExp = /^((0[1-9])|(1[0-2]))\/((2010)|(20[1-2][0-9]))$/;



//Universal function that checks user input for numbers special charecters and less than 2 characters
function checkName(name) 
{
    var check = true;
    if ((name == null) || (name.length <= 2)  || (name.length == " ") || !(name.match(alphabeticExp)))
    {
	    check = false;
    }
    return check;
}
function telephoneNumber(userTelNumber)
{
   
    var check = true;
	if (!userTelNumber.match(telephoneNumberExp))
	{
	    check = false;
    }
    return check;

}
//Email check
function checkEmail(email) 
{
	var check = true;
	if (!emailRegExp.test(email)) 
	{
	    check = false;
    }
    return check;
}

//Address check 
function checkAddress(address) 
{
	 var check = true;  
    if ((address == null) || (address.length <= 3))
    {
	   check = false;
    }
    return check;
}

//Postcode check checks current Uk postcodes
function checkPostcode(postCode)
{
	var check = true;
	if (!postcodeRegExp.test(postCode)) 
	{
	  check = false;
	}
	return check;
}

//If Billing address is same as delivery address this function is invocked in order to fill automaticly delivery fields
function isSameBillingAddress()
	{		
       var address1 = document.getElementById("address1").value;
       var address2 = document.getElementById("address2").value;	
       var town = document.getElementById("town").value;
       var country = document.getElementById('country').value;
       var postcode = document.getElementById('postcode').value;
       document.getElementById("address1D").value=address1;
       document.getElementById("address2D").value=address2;	
       document.getElementById("townD").value=town;
       document.getElementById('countryD').value=country;
       document.getElementById('postcodeD').value=postcode;  

	}

function notSameBillingAddress()

	{	
        document.getElementById("address1D").value="";
        document.getElementById("address2D").value="";	
        document.getElementById("townD").value="";
        document.getElementById('countryD').value="";
        document.getElementById('postcodeD').value="";

	}											


	//Checks credit card depending on credit type
function cardNumberValidation(type, cardNumber)
{	
    var check = false;
	if ((type == "Mastercard" && cardNumber.match(masterCardRegExp)) || (type == "Visa" && cardNumber.match(visaRegExp)) || (type == "AmericanExpress" && cardNumber.match(amexRegExp)) ) 
	{
        check = true;
    }
	return check;
}

function validateExpDate(expDate)
{
    var check = true;
    if ((!expDate.match(ccExpRegExp)))  
    {
      check = false;
    }
    return check;
}

function cardName(name) 
{
      var check = true;
      if ((name == null) || (name.length <= 4)  || (name.length == " ") || !(name.match(alphahwithspaceExp)))
    {
	    check = false;
    }
	 var newName = name.split(" ");
	if(newName.length<2)
	{
	    check = false;
	}
	for(var i = 0; i < newName.length; i++)
	{
	    if(newName[i].length < 2 )
	   {
	    check = false;
	   }
	}
    return check;
	
}

   
function getOrder()
{
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("sname").value;	
    var telNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById('email').value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;	
    var town = document.getElementById("town").value;
    var country = document.getElementById('country').value;
    var postcode = document.getElementById('postcode').value;
    var address1D = document.getElementById("address1D").value;
    var address2D = document.getElementById("address2D").value;	
    var townD = document.getElementById("townD").value;
    var countryD = document.getElementById('countryD').value;
    var postcodeD = document.getElementById('postcodeD').value;
    var cardType = document.getElementById('cardType').value;
    var nameOnCard = document.getElementById('nameOnCard').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expDate = document.getElementById('expDate').value;

	if(!checkName(firstName))
{
    document.getElementById("errorfirstname").className = "alertVisible";
}
if(!checkName(lastName))
{
     document.getElementById("errorsurname").className = "alertVisible";
}
if(!telephoneNumber(telNumber))
{
    document.getElementById("errorphone").className = "alertVisible";
}
if(!checkEmail(email))
{
    document.getElementById("erroremail").className = "alertVisible";
}

if(!checkAddress(address1))
{
    document.getElementById("erroraddress1").className = "alertVisible";
}
if(!checkName(town))
{
     document.getElementById("errortown").className = "alertVisible";
}
if(!checkName(country))
{
     document.getElementById("errorcountry").className = "alertVisible";
}

if(!checkPostcode(postcode))
{
    document.getElementById("errorpostcode").className = "alertVisible";
}

if(!checkAddress(address1D))
{
    document.getElementById("erroraddress1D").className = "alertVisible";
}
if(!checkName(townD))
{
     document.getElementById("errortownD").className = "alertVisible";
}
if(!checkName(countryD))
{
     document.getElementById("errorcountryD").className = "alertVisible";
}

if(!checkPostcode(postcodeD))
{
    document.getElementById("errorpostcodeD").className = "alertVisible";
}
if(!cardName(nameOnCard))
{
    document.getElementById("errornameoncard").className = "alertVisible";
}

if(!cardNumberValidation(cardType, cardNumber))
{
    document.getElementById("errorcardnumber").className = "alertVisible";
}

if(!validateExpDate(expDate))
{
    document.getElementById("errorexpdate").className = "alertVisible";
}


if(checkName(firstName) && checkName(lastName) && telephoneNumber(userTelNumber) && checkEmail(email) && checkAddress(address1) && checkName(town) && checkName(country) && checkPostcode(postcode) && checkAddress(address1D) && checkName(townD) && checkName(countryD) && checkPostcode(postcodeD) && cardName(nameOnCard) && cardNumberValidation(cardType, cardNumber) && validateExpDate(expDate))
{
    
}

    
}

