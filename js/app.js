const fab = document.querySelector('.fab');
const inputField =  document.getElementById('input-field');
const form = document.querySelector('#form-task');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.list-group');


//Load all event Listeners
loadEventListener();
function loadEventListener(){
      // toggle the input-field class
    fab.addEventListener('click',runEvent);

    //Create a task
    form.addEventListener('submit',addTask);

    //Remove a task
    taskList.addEventListener('click',removeTask);


}


function runEvent(e){
    // toggle the input-field class
    document.getElementById('btn').style.display ='block';
    inputField.style.display ='block';
    fab.style.display ="none"
    document.querySelector('hr').style.display ='block';
    e.preventDefault();
}


function addTask(event){
    if(taskInput.value === ''){
        alert('add task');
    }
         console.log(taskInput.value);
         // create li element
       const li = document.createElement('li');
         // add a class
        li.className = 'list-group-item';

         // add a textNode and append it to li
         li.appendChild(document.createTextNode(taskInput.value));

         // create a new link
         const link = document.createElement('a');
         link.className = 'delete-item';

         //add icon to html
         link.innerHTML = '<i class = "fa fa-remove"></i>';

         //add margin to the link
         link.style.marginLeft = '5rem';


        // append the link to the li
         li.appendChild(link);

        //append the li to our ul
        taskList.appendChild(li);
        taskInput.value = '';

        document.getElementById('btn').style.display ='none';
         inputField.style.display ='none';
         fab.style.display ="block";
         document.querySelector('hr').style.display ='none';
    
         event.preventDefault()
}

 function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
    
        e.target.parentElement.parentElement.remove();
    
    }
    
  //console.log(e.target);
   e.preventDefault()
 }