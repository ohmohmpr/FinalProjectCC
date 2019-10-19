
function clickToChangName() {
    let person = prompt("Please enter your name", "Panyawat 'Ohm' Rattana");
  if (person != null)
    document.getElementById("name").innerHTML = person;
}
function clickToChangBackGroundColor() {
    document.getElementById("body").style.backgroundColor = "pink";
}
function pleaseClick() {
    alert("Click My photo to change colour");
    alert("Click name to change name");
}
function addSkill() {
    let skillAdded = prompt("Please enter new skill");
    let newElement = document.createElement("li");
    let node = document.createTextNode(skillAdded);
    newElement.appendChild(node);
    let element = document.getElementById("otherSkill");
    element.appendChild(newElement);  
}
function deleteSkill() {
    let delAdded = prompt("Please enter the skill(Case Sensitive)");
    var parent = document.getElementById("otherSkill");
    var child = document.getElementById(delAdded);
    parent.removeChild(child);

 
}
