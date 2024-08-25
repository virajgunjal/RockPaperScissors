
//alert("hello");

let div = document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.style.fontSize =" 20px";

// div.innerText ="Sup lol"

// let newbtn = document.createElement("button");
// newbtn.innerText("Click me!");

//div.append(newbtn);
let btn1 = document.querySelector("#btn001");


btn1.addEventListener("click",()=>{
    console.log("Haaaaaaaaa")
})

btn1.addEventListener("dblclick",()=>{
    console.log("ek bar")
})
let box = document.querySelector("#div1");

box.addEventListener("mouseover",()=>{
    div.style.backgroundColor = 'blue';
})
box.addEventListener("mouseout",()=>{
    div.style.backgroundColor = '';
})
// box.onmouseleave=()=>{
    
//     div.style.backgroundColor = '';
// }
let curMode = "light";
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let reset = document.querySelector("#mode1");

modebtn.addEventListener("click", ()=>{
    if(curMode==="light"){
        curMode="dark";
        body.classList.add("dark");//both this 
        body.classList.remove("light");
    }else{
        curMode="light";
        body.classList.add("light");//and this are acceptable
        body.classList.remove("dark");
    }
})

reset.addEventListener("click",()=>{
    if(curMode==="light"){
        body.classList.remove("light");
    }else{
        body.classList.remove("dark");
    }
})
