let e1 = document.getElementById("0");
let e2 = document.getElementsByClassName("usundt");
let e3 = document.getElementsByTagName("li");
console.log(e1);
console.log(e2);
console.log(e3);

let n1 = e1.setAttribute("hidden","");

for (let index = 0; index < e2.length; index++) {
    const element = e2[index];
    element.setAttribute("class","sødt")
    console.log(element)
}

let e4 = e1.parentNode.nodeName;
console.log(e4)
let e5 = e1.firstChild
console.log(e5)