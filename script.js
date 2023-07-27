const model=document.querySelector('.model');
const orderBtn=document.querySelector('.loginBtn');
const closeBtn=document.querySelector('.close');

orderBtn.addEventListener('click',openModel);
closeBtn.addEventListener('click',closeModel);
window.addEventListener('click',outsideClick);

function openModel(){
    model.style.display="block";
}

function closeModel(){
    model.style.display='none';
}

function outsideClick(e){
    if(e.target==model){
        closeModel()
    }
}
