
var buttonAdd = document.querySelector(".button");
var buttonSort = document.querySelector(".sort");
var buttonClear = document.querySelector(".clear");
var buttonDelete = document.querySelector(".delete");
var container = document.querySelector(".container");
var num=1;

window.onload = addBox;



buttonAdd.addEventListener("click",()=>{
    addBox();
})
buttonSort.addEventListener("click",()=>{
    Sort();
})
buttonClear.addEventListener("click",()=>{
    clear();
})
buttonDelete.addEventListener("click",()=>{
    Delete();
})

// container.addEventListener("focusout",()=>{
//     Sort();
// });

function addBox(){
    let newbox = document.createElement("div");
    newbox.classList.add("box");
    newbox.id = "box-"+num;
    newbox.contentEditable = true;
    newbox.classList.add("newbox");
    container.append(newbox);
    num++;
}

function Sort(){
    let array=[];

    for(let i=0,j=1;i<num-1;i++){
        let idBox = "box-"+j;
        let value = document.getElementById(idBox).innerText;
        value = Number(value);
        array[i] = value;
        j++;
    }

    let k=0;
    while(k!=array.length){
        console.log("Before sorting");
        console.log(array[k]);
        k++;
    }

    for (let i=0;i<num-1;i++){

        for(let j=i+1;j<num-1;j++){

            if(array[i]>array[j]){
                let temp = array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }

    for(let i=0,j=1;i<num-1;i++){
        let value;
        let idBox = "box-"+j;
        value = array[i];
        document.getElementById(idBox).innerText = value;
        j++;
    }
    
}

function clear(){
    for(let i=0,j=1;i<num-1;i++){
        let idBox = "box-"+j;
        document.getElementById(idBox).innerText ="";
        j++;
    }
}

function Delete(){
    let Dbox = document.getElementById("box-"+(num-1));
    Dbox.classList.add("deletebox");
    Dbox.style.background = "red";
    Dbox.addEventListener("animationend",()=>{
        Dbox.remove();
        num--;
    });
}