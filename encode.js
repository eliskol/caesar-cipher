function encode() {
  var shift = parseInt(document.getElementById('shift').value);
  var text = document.getElementById("text").value;
  let x = [];


if(shift < 26 && shift > -26){
  for (var i = 0; i < text.length; i++) {

    if ((text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) || (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65)) { //checks that the input is a letter

      x[i] = text.charCodeAt(i) + shift;

      if(x[i] > 122){ //if the shifted charcode is greater than the charcode for z, loop back to the beginning of the alphabet
        x[i] -= 26;
      }
      
      else if((x[i] < 97 && (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))){ //if the shifted character isn't a lowercase letter like the input
        x[i] += 26;
      }
      
      else if((x[i] < 97 && x[i] > 90) && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)){
        x[i] -= 26;
      }
      
      else if(x[i] < 65 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)){
        x[i] += 26;
      }
      else if(x[i]){
              
      }
    } 
    else{
      x[i] = text.charCodeAt(i);
    }

  }




  var ec = document.createElement('p');
  ec.innerText = "Encoded text:";
  document.body.appendChild(ec);

  var encstring = String.fromCharCode.apply(null, x);
  var p = document.createElement('p');
  p.innerText = encstring;
  p.id = "enctext"
  document.body.appendChild(p);
}

  else{
    var pf = document.createElement('p');
    pf.innerText = "Error: shift must be between -26 and 26."
    document.body.appendChild(pf);
  }
  
}