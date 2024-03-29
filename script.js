const addButton = document.querySelector("#add");

const updateLSData = ()=>{
  const textAreaData = document.querySelectorAll('textarea');
  const notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note)=>{
  return notes.push(note.value)
  })

     localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = '') => {
  const note = document.createElement("div");
  note.classList.add();
  const hmtlData = `
  <div class="note">
     <div class="operation">
       <button class="edit"><i class="fas fa-edit"></i></button>
       <button class="delete"><i class="fas fa-trash-alt"></i></button>
     </div>
 
     <div class="main ${text ? "" : "hidden"}"></div>
     <textarea class="${text ? "hidden" : ""}"></textarea>
     </div> 
     `;

     note.insertAdjacentHTML('beforeend',hmtlData);
    //  console.log(note);

    // getting the References

    const editButton = note.querySelector('.edit')
    const deleteButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    //deleting the node
    deleteButton.addEventListener('click',()=>{
      note.remove();
      updateLSData();
    })

    //toggle using edit button
textArea.value = text;
mainDiv.innerHTML = text;

    editButton.addEventListener('click',()=>{
      mainDiv.classList.toggle('hidden');
      textArea.classList.toggle('hidden');
    })

    //textarea operation

    textArea.addEventListener('change',(event)=>{
       const value = event.target.value;
       mainDiv.innerHTML=value;

       updateLSData();
    })

     document.body.appendChild(note);
     // it append a node as the last child of a node.

     const notes = JSON.parse(localStorage.getItem('notes'));

     if(notes){notes.forEach((note)=>addNewNote(note))}
};
addButton.addEventListener("click", () => addNewNote());
