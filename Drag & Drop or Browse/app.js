const dropArea = document.querySelector(".drage-area");
const dragText = document.querySelector("header");
const button = document.querySelector("button");
 const input = document.querySelector("input");
let file; 

button.onclick = ()=>{
  input.click(); 
}

input.addEventListener("change", function(){
  
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); 
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
  file = event.dataTransfer.files[0];
  showFile(); 
});

function showFile(){
  let fileType = file.type; 
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
      let imgTag = `<img src="${fileURL}" alt="image">`; 
      dropArea.innerHTML = imgTag; 
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}