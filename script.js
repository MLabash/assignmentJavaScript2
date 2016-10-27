/*
 Broca formula
    Men: Ideal Body Weight (kilograms) = [Height (cm) - 100] - ([Height (cm) - 100] x 10%)
    Women: Ideal Body Weight (kilograms) = [Height (cm) - 100] + ([Height (cm) - 100] x 15%)
*/
function getIdealWeight (height, IsMan) {
    var idealWeight;
    if (IsMan) {
        idealWeight = height - 100 - ((height - 100) * 0.10);
    } else {
        idealWeight = height - 100 - ((height - 100) * 0.15);
    }
    return idealWeight;
}

function calc() {
    var idealWeight, status;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var genderIsMan = document.getElementById("man").checked;
    idealWeight = getIdealWeight(height, genderIsMan);
    if (weight > idealWeight + 2.5) {
        status = "Overweight";
    } else if (weight < idealWeight - 2.5) {
        status = "Underweight";
    } else {
        status = "Ideal weight";
    }
    
    document.getElementById("result").innerHTML = " <b> Result : " + status + ".</b>";
    document.getElementById("result-explanation").innerHTML = "Based on the <b>Broca formula</b>, your ideal weight is: <b>" + idealWeight + "</b>";
    document.getElementById("result-section").style.display = "block";
}

function reset() {
    document.getElementById("weight").value = 72;
    document.getElementById("height").value = 180;
    document.getElementById("man").checked = true;
    document.getElementById("woman").checked = false;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result-explanation").innerHTML = "";
    document.getElementById("result-section").style.display = "none";
}

/*
 Pascal triangle
    result[i,j]= result[i-1, j-1] + result [i-1,j]
*/
function PascTri(number) {
    var result = [];
    
    // result[0], result[1] intialization
    result[0] = [0];
    result[1] = [0];
    for (var index = 0; index < number * 2 + 1; index++){
        result[0][index] = (index != number ? 0 : 1)
        result[1][index] = ((index == number - 1)||(index == number + 1) ? 1 : 0)
    }
    
    // result[1..n] calculation
    for (var row = 2; row < number; row++){
        result[row] = [1];
        for (var col = 0; col < number * 2 + 1; col++){
            result[row][col] = (result[row - 1][col + 1] > 0 ? result[row - 1][col + 1] : 0) +
               (result[row - 1][col - 1] > 0 ? result[row - 1][col - 1] : 0);
        }
        
    }
    
    // print result
    for (var row = 0; row < number; row++){
        var str='';
        for (var col = 0; col < number * 2 + 1; col++){ 
            str += (result[row][col] != 0 ? result[row][col].toString() : ' ');
        }
        
        console.log(str);
    }
    
}

PascTri(10);