// var name = prompt("What is your name?");
//console.log(name);
// alert(name);
// while (confirm("Would you like to enter another name?") == true) {
// 	name = prompt("What is your name?");
// 	//console.log(name);
// 	alert("Your name is: " + name);
// }
var nameShowing = false
function toggleName() {
	if(!nameShowing){
		var name = prompt("What is your name?");
		var mainUnorderedList = document.querySelector('ul');
		var nameListItem = document.createElement('li');
		nameListItem.textContent = name;
		nameListItem.id = "nameListItem";
		mainUnorderedList.append(nameListItem);
		nameShowing = !nameShowing;
	}else{
		var mainUnorderedList = document.querySelector('ul');
		var nameListItem = document.getElementById("nameListItem");
		mainUnorderedList.remove(nameListItem);
		nameShowing = !nameShowing;
	}
	
}