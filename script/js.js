
let list=document.getElementsByClassName('alumni-groups__row');
let btn=document.getElementById('btn');
let block=document.getElementsByClassName('best-projects__website');
let btnGrid=document.getElementById('btn-grid');
let hover=document.get
btn.addEventListener('click',closed);
function closed () {
    if(btn.value==='показать ещё'){
        btn.value='скрыть'
        for(let i=3;i<list.length;i++){
            list[i].style.display="flex";
        }
    }else{
        btn.value='показать ещё';
        for(let i=3;i<list.length;i++){
            list[i].style.display="none";
        }
    }
}
btnGrid.addEventListener('click',closedGrid);
function closedGrid () {
    if(btnGrid.value==='показать ещё'){
        btnGrid.value='скрыть'
        for(let i=8;i<block.length;i++){
            block[i].style.display="block";
        }
    }else{
        btnGrid.value='показать ещё';
        for(let i=8;i<block.length;i++){
            block[i].style.display="none";
        }
    }
}


