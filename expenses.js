// var ul = document.getElementById("ul");
var button = document.getElementById("button");
button.addEventListener("click", addExpense);

function addExpense(a) {
  var amount = document.getElementById("number").value;
  var description = document.getElementById("textInput").value;
  var category = document.getElementById("category").value;
  var input = amount + ": " + description + " , " + category;
  const obj={
    amount,description,category
  }

  var li = document.createElement("li");
  ul.appendChild(li);
  li.className = "list-group-item";
  var edit = document.createElement("button");
  edit.className = "btn btn-outline-primary mx-2 on";
  edit.appendChild(document.createTextNode("Edit Expense"));
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger mx-10 on";
  deleteBtn.appendChild(document.createTextNode("Delete"));

  li.appendChild(document.createTextNode(input));
  li.appendChild(edit);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  axios.post("https://crudcrud.com/api/e73b6b1b5c584dc19218de843521a17b/expenses",obj)
  .then((response)=>{
    console.log(response.data)
  }).catch((err)=>console.log(err));

  //delete
  deleteBtn.addEventListener("click", function (c) {
    var deleteAction = c.target.parentElement;
    ul.removeChild(deleteAction);
    axios.delete("https://crudcrud.com/api/e73b6b1b5c584dc19218de843521a17b/expenses")
  });
  //update
  edit.addEventListener("click", function (c) {
    console.log("hello");
    var container = document.getElementById("container");
    var amount1 = document.createElement("input");
    amount1.type = "number";
    amount1.placeholder = "Choose the expenditure";
    amount1.value = amount; // Set the input value to the existing amount
    var description1 = document.createElement("input");
    description1.type = "text";
    description1.placeholder = "Enter the description";
    description1.value = description; // Set the input value to the existing description
    var category1 = document.createElement("select");
    category1.placeholder = "Choose the category";
    category1.innerHTML=`<option value="volvo">Volvo</option>
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>`;
    var save = document.createElement("button");
    save.className = "btn btn-outline-primary mx-2 on";
    save.appendChild(document.createTextNode("Save Expense"));
    container.appendChild(amount1);
    container.appendChild(description1);
    container.appendChild(category1);
    container.appendChild(save);
    save.addEventListener("click", function () {
      // Update the expense details with the edited values
      amount=amount1.value;
      description=description1.value;
      category=category1.value;
      
       input = amount + ": " + description + " , " + category;
       li.firstChild.textContent = input
         container.removeChild(amount1);
          container.removeChild(description1);
          container.removeChild(category1);
          container.removeChild(save);
    });
  });
}
