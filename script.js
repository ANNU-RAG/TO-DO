let addEvent = document.querySelector("#event");
let addBtn = document.querySelector("#addBtn");
let addList = document.querySelector("#list");

addBtn.addEventListener("click", ()=>{
    let item = document.createElement("li");
    item.innerText = addEvent.value;
    addList.appendChild(item);
    addEvent.value = "";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");

    item.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", ()=>{
        addList.removeChild(item);
    });
});
