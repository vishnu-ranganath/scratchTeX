var buttonColumn = document.getElementById("button-column");
var inputColumn = document.getElementById("input-column");
var outputColumn = document.getElementById("output-column");

var buttonFooter = document.getElementById("button-holder-footer");
var inputFooter = document.getElementById("input-footer");
var outputFooter = document.getElementById("output-footer");

var currRowNumber = 0; //This is the number of the (vertically) lowest row

window.triggerInputEvent = function(rowNum) {
	var inputElement = document.getElementById("input-" + rowNum);
	inputElement.addEventListener("click", updateEquation);
	inputElement.click();
	inputElement.removeEventListener("click", updateEquation);
}

window.updateEquation = function(e) {
	var s = this.value;
	s = s.replace(/\<br\>/g, "<br\/>");
	s = s.replace(/\<br\/\>/g, " ");
	s = s.replace(/\<div\>/g, " ");
	s = s.replace(/\<div\/\>/g, " ");
	s = s.replace(/\n/g, " ");
	s = s.replace(/\r/g, " ");
	var rowNum = +this.id.replace("input-", "")
	var equationElement = document.getElementById("output-" + rowNum);
	katex.render(s, equationElement, {
		throwOnError: false,
		displayMode: true,
		fleqn: true
	});
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
	var newRemButton = document.createElement("button");
	var newDupButton = document.createElement("button");
	
	newRemButton.innerHTML = "X";
	newRemButton.classList = ["rem-btn"];
	newRemButton.id = "remove-button-" + rowNum;
	
	newDupButton.innerHTML = "duplicate";
	newDupButton.id = "duplicate-button-" + rowNum;
	
	newButtonHolder.appendChild(document.createElement("br"));
	newButtonHolder.classList = ["button-holder"];
	newButtonHolder.appendChild(newRemButton);
	newButtonHolder.appendChild(newDupButton);
	newButtonHolder.id = "button-holder-" + rowNum;
	
	newInput.classList = ["tex-input"];
	newInput.id = "input-" + rowNum;
	
	newOutput.classList = ["svg-output"];
	newOutput.id = "output-" + rowNum;
	
	currRowNumber = rowNum;
	
	newInput.addEventListener("keyup", updateEquation);
	newRemButton.addEventListener("click", removeEquation);
	newDupButton.addEventListener("click", copyEquation);
	
	buttonColumn.removeChild(buttonFooter);
	inputColumn.removeChild(inputFooter);
	outputColumn.removeChild(outputFooter);
	
	buttonColumn.appendChild(newButtonHolder);
	inputColumn.appendChild(newInput);
	outputColumn.appendChild(newOutput);
	
	buttonColumn.appendChild(buttonFooter);
	inputColumn.appendChild(inputFooter);
	outputColumn.appendChild(outputFooter);
	
	triggerInputEvent(rowNum);
	newInput.focus();
	document.getElementById("output-" + currRowNumber).style.borderBottom = "2px black solid";
}

window.removeEquation = function(e) {
	var rowNum = +this.id.replace("remove-button-", "");
	var equationElement = document.getElementById("output-" + rowNum);
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
			document.getElementById("remove-button-" + j).id = ("remove-button-" + i);
			document.getElementById("duplicate-button-" + j).id = ("duplicate-button-" + i);
			document.getElementById("input-"+ j).id = ("input-"+ i);
			document.getElementById("output-"+ j).id = ("output-"+ i);
		}
		currRowNumber -= 1;
	}
	document.getElementById("output-" + currRowNumber).style.borderBottom = "2px black solid";
}

window.removeAll = function(e) {
	var allBtns = document.getElementsByClassName("rem-btn");
	var numBtns = allBtns.length;
	for(var i = numBtns - 1; i > -1; i--) {
		allBtns[i].click();
	}
}

window.copyEquation = function(e) {
	var rowNum = +this.id.replace("duplicate-button-", "");
	addRow();
	//currRowNumber has now incremented by one
	for(var i = currRowNumber; i > rowNum; i--) {
		var oneLess = i - 1;
		document.getElementById("input-" + i).value = document.getElementById("input-" + oneLess).value;
		triggerInputEvent(i);
	}
	document.getElementById("input-" + (+rowNum + 1)).focus();
}

document.getElementById("removeAll").addEventListener("click", removeAll);
document.getElementById("add-btn").addEventListener("click", addRow);

window.alignRow("header");
window.alignRow("footer");
//addRow();