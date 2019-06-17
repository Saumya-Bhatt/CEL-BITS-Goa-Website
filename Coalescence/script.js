var first1 = document.getElementById("first-card1");
var first2 = document.getElementById("first-card2");
var first3 = document.getElementById("first-card3");
var first4 = document.getElementById("first-card4");

var second1 = document.getElementById("second-card1");
var second2 = document.getElementById("second-card2");
var second3 = document.getElementById("second-card3");
var second4 = document.getElementById("second-card4");

var third1 = document.getElementById("third-card1");
var third2 = document.getElementById("third-card2");
var third3 = document.getElementById("third-card3");
var third4 = document.getElementById("third-card4");


function myFunction1()
{
    first1.style.display="block";
    first2.style.display="block";
    first3.style.display="block";
    first4.style.display="block";

    second1.style.display="none";
    second2.style.display="none";
    second3.style.display="none";
    second4.style.display="none";

    third1.style.display="none";
    third2.style.display="none";
    third3.style.display="none";
    third4.style.display="none";
}

function myFunction2()
{
    first1.style.display="none";
    first2.style.display="none";
    first3.style.display="none";
    first4.style.display="none";

    second1.style.display="block";
    second2.style.display="block";
    second3.style.display="block";
    second4.style.display="block";

    third1.style.display="none";
    third2.style.display="none";
    third3.style.display="none";
    third4.style.display="none";
}

function myFunction3()
{
    first1.style.display="none";
    first2.style.display="none";
    first3.style.display="none";
    first4.style.display="none";

    second1.style.display="none";
    second2.style.display="none";
    second3.style.display="none";
    second4.style.display="none";

    third1.style.display="block";
    third2.style.display="block";
    third3.style.display="block";
    third4.style.display="block";
}

function message()
{
    var x = document.getElementById("message");
    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
}
