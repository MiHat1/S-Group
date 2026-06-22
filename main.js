
//get object
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const list_skill = document.getElementById("skills");
const btn = document.getElementById("btn-follow");
const addBtn = document.getElementById("addskills");

//function 
function editName() {
    let newName = name.innerText.trim();
    if (!newName) { avatar.innerText = ""; return; }

    let indexSpace = newName.indexOf(" ");
    if (indexSpace == -1) { avatar.innerText = newName[0].toUpperCase(); return; }
    let firstName = newName.substring(0, indexSpace);
    let lastName = newName.substring(indexSpace + 1);

    while (lastName.indexOf(" ") != -1) {
        indexSpace = lastName.indexOf(" ");
        firstName = lastName.substring(0, indexSpace);
        lastName = lastName.substring(indexSpace + 1);

    }
    avatar.innerText = `${firstName[0]}${lastName[0]}`.toUpperCase();
}
function pressBtn() {
    if (btn.innerText == "Dang Theo Doi") { btn.innerText = "Theo Doi"; btn.style.backgroundColor = "green"; return; };
    btn.innerText = "Dang Theo Doi";
    btn.style.backgroundColor = "blue";
}
function changeColor() {
    let currentTime = new Date();
    let curretnMinute = currentTime.getSeconds();

    if (curretnMinute % 2 === 0) {
        bio.style.color = "orange";
    } else {
        bio.style.color = "red";
    }
}
function addSkill() {
    let newSkill = document.createElement("span");
    newSkill.className = "skill-tag";
    newSkill.contentEditable = "true";

    list_skill.insertBefore(newSkill, addBtn);
}

//program
changeColor();
setInterval(changeColor, 100);
btn.onclick = pressBtn;
name.addEventListener("blur", editName);
addBtn.addEventListener("click", addSkill);