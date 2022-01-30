//here we are Addding input text;
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    //here notes is a key value  
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let addtext = document.getElementById('message');
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext = "";
    //this is for cALLING THE SHOW FUNCTON
    shownotes();
});
//declearations of shownotes() function

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="my-2 mx-2 card" style="border: 1px solid gray; display: inline-block; border-radius: 4px;
        padding: 20px;  margin: 8px;">
        <div class="card-body">
          <h5 class="card-title" style="font-size: 20px;" >Notes ${index + 1}</h5><hr>
          <p class="card-text" style="font-size: 18px;">${element}</p><br>
          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary" style="border: 0px solid rgb(0, 26, 255); background-color: rgb(0, 26, 255); color: white; padding: 12px; width: 100px;">Delete</button>
        </div>
      </div>`
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    } else {
        noteselm.innerHTML = "Nothing you have added. plzz Add a note"
    }
}
//from here we are starting delete  function
function deleteNote(index) {
let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}