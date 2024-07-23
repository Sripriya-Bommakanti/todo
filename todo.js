let todoList=[];
displayitems();
function addtodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateelement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=dateelement.value;
  todoList.push({item: todoItem,duedate: tododate});
  inputElement.value='';
  dateelement.value='';
  displayitems();
}
function displayitems()
{
  let containerelement=document.querySelector('.todo-container');
  let newhtml='';
  for(let i=0;i<todoList.length;i++)
    {
      
      let {item,duedate}=todoList[i];
      newhtml+=`
      <div class="todo-items-list">
         <div class="input">${item}</div>
         <div class="date">${duedate}</div>
         <button class="button-delete"  onclick="todoList.splice(${i},1);displayitems();">Delete</button>
      </div>
     
      `;
        
    }
    containerelement.innerHTML=newhtml;
}