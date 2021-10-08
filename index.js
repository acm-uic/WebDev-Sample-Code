// var name = prompt("What is your name?");
//console.log(name);
// alert(name);
// while (confirm("Would you like to enter another name?") == true) {
// 	name = prompt("What is your name?");
// 	//console.log(name);
// 	alert("Your name is: " + name);
// }
// var nameShowing = false
// function toggleName() {
// 	if(!nameShowing){
// 		var name = prompt("What is your name?");
// 		var mainUnorderedList = document.querySelector('ul');
// 		var nameListItem = document.createElement('li');
// 		nameListItem.textContent = name;
// 		nameListItem.id = "nameListItem";
// 		mainUnorderedList.append(nameListItem);
// 		nameShowing = !nameShowing;
// 	}else{
// 		var mainUnorderedList = document.querySelector('ul');
// 		var nameListItem = document.getElementById("nameListItem");
// 		mainUnorderedList.remove(nameListItem);
// 		nameShowing = !nameShowing;
// 	}
	
// }

// const myForm = document.getElementById("myForm");
// myForm.onsubmit = addUser;

const namesArr = ["Christian", "Thomas", "Петер", "Will"]

function AddElements(){
	var mainUnorderedList = document.querySelector('ul');
	
	// namesArr.forEach((name) => {
	// 	var nameListItem = document.createElement('li');
	// 	nameListItem.textContent = name;
	// 	nameListItem.id = "nameListItem";
	// 	mainUnorderedList.append(nameListItem);
	// });
	fetch("https://reqres.in/api/users")
		.then((res) => res.json())
		.then((json) => {
			json.data.forEach((userObject) => {
				var nameListItem = document.createElement('li');
				nameListItem.textContent = userObject.first_name;
				nameListItem.id = "nameListItem";
				mainUnorderedList.append(nameListItem);
			})
		});
}

function addUser() {
	event.preventDefault();
	const fnameField = document.getElementById("fname");
	const lnameField = document.getElementById("lname");
	var mainUnorderedList = document.querySelector('ul');
	var nameListItem = document.createElement('li');
	nameListItem.textContent = fnameField.value + " " + lnameField.value;
	nameListItem.id = "nameListItem";
	mainUnorderedList.append(nameListItem);
}