window.addEventListener('load',()=>{
    const form = document.querySelector('#task-inputs');
    const input = document.querySelector('#input-task')
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        const task = input.value;
        if(!task){
            alert("task ah add pandra");
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const content = document.createElement('div');
        content.classList.add("content");
        task_el.appendChild(content)

        const task_input = document.createElement('input');
        task_input.classList.add('input')
        task_input.value=task;
        task_input.setAttribute('readonly','readonly');
        content.appendChild(task_input);

        const actions = document.createElement('div');
        actions.classList.add('actions')

        const task_edit = document.createElement("button");
        task_edit.classList.add('edit')
        task_edit.innerHTML='EDIT'
        actions.appendChild(task_edit);

        const task_delete = document.createElement("button");
        task_delete.classList.add('delete')
        task_delete.innerHTML='DELETE';
        actions.appendChild(task_delete);

        task_el.appendChild(actions)
        list_el.appendChild(task_el);

        input.value='';
        task_edit.addEventListener('click',()=>{
            if(task_edit.innerText.toLowerCase() == 'edit'){
                task_input.removeAttribute('readonly');
                task_input.focus();
                task_edit.innerText="SAVE";
            }
            else{
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText="EDIT"
            }
        })
        task_delete.addEventListener('click',()=>{
            task_delete.innerText.toLowerCase()=="delete";
            list_el.removeChild(task_el);
        })
    });
})