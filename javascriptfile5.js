//javascript code for font size-changing button in info page
//took help from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontsize2

function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
   
    
        document.getElementById("vpp2").style.fontSize = listValue;
        document.getElementById("vpp3").style.fontSize = listValue;
        document.getElementById("vpp4").style.fontSize = listValue;
        document.getElementById("vpp5").style.fontSize = listValue;
        document.getElementById("vpp6").style.fontSize = listValue;
       
    }
