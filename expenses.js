var ul=document.getElementById("ul");
var button=document.getElementById("button");
button.addEventListener("click",addExpense);

function addExpense(a){
    
    var amount=document.getElementById("number").value;
    var description=document.getElementById("textInput").value;
    var category =document.getElementById("category").value;
    var input=amount+": "+description+" , "+category;

    
    var li=document.createElement("li");
    ul.appendChild(li);
    li.className="list-group-item";
    var edit=document.createElement("button");
    edit.class="btn btn-danger btn-sm float-right edit";
    edit.appendChild(document.createTextNode("edit Expense"));
    var deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-outline-danger mx-10 on";
    deleteBtn.appendChild(document.createTextNode("delete"));
    deleteBtn.addEventListener("click",removeExpense);
    li.appendChild(document.createTextNode(input));
    li.appendChild(edit);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}
function removeExpense(c){
    if(c.target.classList.contains("delete")){
        if(confirm("Are you sure??")){//pop up msg
            var deleteAction=c.target.parentElement;
            ul.removeChild(deleteAction);
            // localStorage.removeItem("key");
        }    
    }
}