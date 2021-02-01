var buttonColumn = document.getElementById("button-column");
var inputColumn = document.getElementById("input-column");
var outputColumn = document.getElementById("output-column");

var buttonFooter = document.getElementById("button-holder-footer");
var inputFooter = document.getElementById("input-footer");
var outputFooter = document.getElementById("output-footer");

var currRowNumber = 0; //This is the number of the (vertically) lowest row

window.updateEquation = function(e) {
	var s = this.value;
	s = "\\[" + s + "\\]";
	s = s.replace(/\<br\>/g, "<br\/>");
	s = s.replace(/\<br\/\>/g, " ");
	s = s.replace(/\<div\>/g, " ");
	s = s.replace(/\<div\/\>/g, " ");
	s = s.replace(/\n/g, " ");
	s = s.replace(/\r/g, " ");
	var rowNum = +this.id.replace("input-", "")
	var equationElement = document.getElementById("output-" + rowNum);
	equationElement.innerHTML = s;
	try {
		MathJax.typeset([equationElement]);
	} catch(e) {
	}
	alignRow(rowNum);
};

window.alignRow = function(rowName) {
	//rowName is either the row number or the strings "header" or "footer"
	var currButton = document.getElementById("button-holder-" + rowName);
	var currInput = document.getElementById("input-" + rowName);
	var currOutput = document.getElementById("output-" + rowName);
	currButton.style.height = "initial";
	currInput.style.height = "initial";
	currOutput.style.height = "initial";
	var p = (rowName === "footer" || rowName === "header" || currOutput.childElementCount == 0) ? 0 : 32;
	var bH = currButton.clientHeight - p;
	var iH = currInput.clientHeight - p;
	var oH = currOutput.childElementCount == 0 ? currOutput.clientHeight : currOutput.children[0].clientHeight;
	var maxHeight = Math.max(bH, Math.max(iH, oH));
	currButton.style.height = maxHeight + p + "px";
	currInput.style.height = maxHeight + p + "px";
	currOutput.style.height = maxHeight + (p / 2) + "px";
	if(rowName !== "footer" && rowName !== "header") {
		currInput.style.width = inputFooter.clientWidth + "px";
	}
}

window.addRow = function(e) {
	if(currRowNumber != 0) {
		document.getElementById("output-" + currRowNumber).style.borderBottom = "2px transparent solid";
	}
	var rowNum = currRowNumber + 1;
	var newButtonHolder = document.createElement("div");
	var newInput = document.createElement("textarea");
	var newOutput = document.createElement("div");
	var newButton = document.createElement("button");
	
	newButton.innerHTML = "X";
	newButton.classList = ["rem-btn"];
	newButton.id = "button-" + rowNum;
	
	newButtonHolder.innerHTML = "<br/>";
	newButtonHolder.classList = ["button-holder"];
	newButtonHolder.appendChild(newButton);
	newButtonHolder.id = "button-holder-" + rowNum;
	
	newInput.classList = ["tex-input"];
	newInput.id = "input-" + rowNum;
	
	newOutput.classList = ["svg-output"];
	newOutput.id= "output-" + rowNum;
	
	currRowNumber = rowNum;
	
	newInput.addEventListener("keyup", updateEquation);
	newButton.addEventListener("click", removeEquation);
	
	buttonColumn.removeChild(buttonFooter);
	inputColumn.removeChild(inputFooter);
	outputColumn.removeChild(outputFooter);
	
	buttonColumn.appendChild(newButtonHolder);
	inputColumn.appendChild(newInput);
	outputColumn.appendChild(newOutput);
	
	buttonColumn.appendChild(buttonFooter);
	inputColumn.appendChild(inputFooter);
	outputColumn.appendChild(outputFooter);
	
	newInput.addEventListener("click", updateEquation); //Artificially trigger the event
	newInput.click();
	newInput.removeEventListener("click", updateEquation);
	newInput.focus();
	document.getElementById("output-" + currRowNumber).style.borderBottom = "2px black solid";
}

window.removeEquation = function(e) {
	var rowNum = +this.id.replace("button-", "");
	var equationElement = document.getElementById("output-" + rowNum);
	MathJax.typesetClear([equationElement]);
	equationElement.innerHTML = "";
	
	buttonColumn.removeChild(document.getElementById("button-holder-" + rowNum));
	inputColumn.removeChild(document.getElementById("input-" + rowNum));
	outputColumn.removeChild(document.getElementById("output-" + rowNum));
	
	if(buttonColumn.childElementCount == 2) {
		currRowNumber = 0;
		addRow();
	} else {
		for(var i = rowNum; i < currRowNumber; i++) {
			var j = i + 1;
			document.getElementById("button-holder-" + j).id = ("button-holder-" + i);
			document.getElementById("button-" + j).id = ("button-" + i);
			document.getElementById("input-"+ j).id = ("input-"+ i);
			document.getElementById("output-"+ j).id = ("output-"+ i);
		}
		currRowNumber -= 1;
	}
}

window.removeAll = function(e) {
	var allBtns = document.getElementsByClassName("rem-btn");
	var numBtns = allBtns.length;
	for(var i = numBtns - 1; i > -1; i--) {
		allBtns[i].click();
	}
}

document.getElementById("removeAll").addEventListener("click", removeAll);
document.getElementById("add-btn").addEventListener("click", addRow);

window.alignRow("header");
window.alignRow("footer");
//addRow();