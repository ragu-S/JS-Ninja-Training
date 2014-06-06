// Chapitre 3 - Partie 3.3

function assert(condition, statement) {
	var ulList = document.createElement("ul");
	var liList = document.createElement("li");

	(liList.style.background = "rgba(0, 160, 0, 0.8)") && (liList.style.border = "solid rgba(0, 128, 0, 1)");
	statement != undefined || (statement = "condition est vrai");
	liList.innerHTML = statement;
	
	(liList.style.width = "20%") && (liList.style.minWidth = "350px");
	//console.dir(liList.listStyleType);
	(liList.style.padding = "5px") && (liList.style.listStyleType = "decimal");

	if(!condition) {
		liList.style.textDecoration = "line-through";
		(liList.style.background = "rgba(160, 0, 0, 0.8)") && (liList.style.border = "solid rgba(128, 0, 0, 1)");		
	}

	document.body.appendChild(ulList.appendChild(liList));
}


