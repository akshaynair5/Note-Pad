let p = document.getElementById("clear");
let q = document.getElementById("save");
let r = document.getElementById("font");
let t = document.getElementById("size");
let s = document.getElementById("result");
let notes = [];
l = notes.length;
var i=1;
p.addEventListener('click', e=> {
    console.log(s.value);
    s.value = "";
    alert("clear?");
})
q.addEventListener('click', e =>{
    notes[i] = s.value;
    s.value = "";
    console.log(notes[i]);
    let num = i.toString();

    document.getElementById(num).innerText = notes[i];
    document.getElementById(num).style.visibility = 'visible';
    i++;
    alert("saved");
    if(i>5){
        alert("You have reached the limit for number of notes");
        i=5;
    }
})

r.addEventListener('click' , ()=>{
    let ans = prompt("Enter the font family you want. (default css-fonts only)");
    s.style.fontFamily = ans;
})
// document.getElementById("1").innerText = "guu";
// p.addEventListener('click', e =>{
//     s.value="";
// })
t.addEventListener('click',() =>{
    let ans = prompt("Type the font-size you want. (small,medium,larger,larger)");
    // let ans1 = parseInt(ans);
    console.log(ans);
    s.style.fontSize = ans;
})
