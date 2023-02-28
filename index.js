let but = document.getElementById("login");
but.addEventListener("click",okMsg);
function okMsg(){
    document.getElementById('loginModal').style.position="relative";
    document.getElementById('loginModal').style.opacity="100";
    document.getElementById('emailadd').style.pointerEvents="fill";
    document.getElementById('email').style.pointerEvents="fill";
    document.getElementById('continue').style.pointerEvents="fill";
    document.getElementById('password').style.pointerEvents="fill";
    document.getElementById('pass').style.pointerEvents="fill";
    document.getElementById('dont').style.pointerEvents="fill";
    document.getElementById('signup').style.pointerEvents="fill";
    document.getElementById('or').style.pointerEvents="fill";
    document.getElementById('google').style.pointerEvents="fill";
    document.getElementById('microsoft').style.pointerEvents="fill";
    document.getElementById('refer').style.pointerEvents="fill";
}

let cont = document.getElementById("continue");
cont.addEventListener("click",okcont);
function okcont(){
    document.getElementById('loginModal').style.opacity="0";
    document.getElementById('loginModal').style.position="absolute";

}
let but2 = document.getElementById("close");
but2.addEventListener("click",okMsg2);
function okMsg2(){
    document.getElementById('loginModal').style.position="absolute";
    document.getElementById('loginModal').style.opacity="0";
    document.getElementById('emailadd').style.pointerEvents="none";
    document.getElementById('email').style.pointerEvents="none";
    document.getElementById('continue').style.pointerEvents="none";
    document.getElementById('password').style.pointerEvents="none";
    document.getElementById('pass').style.pointerEvents="none";
    document.getElementById('dont').style.pointerEvents="none";
    document.getElementById('signup').style.pointerEvents="none";
    document.getElementById('or').style.pointerEvents="none";
    document.getElementById('google').style.pointerEvents="none";
    document.getElementById('microsoft').style.pointerEvents="none";
    document.getElementById('refer').style.pointerEvents="none";
}

let but3 = document.getElementById("help");
but3.addEventListener("click",okMsg3);
function okMsg3(){
    document.getElementById('helpline').style.opacity="100";
}
let but4 = document.getElementById("hel1");
but4.addEventListener("click",okMsg4);
function okMsg4(){
    document.getElementById('helpline').style.opacity="0";
}
let but5 = document.getElementById("hel2");
but5.addEventListener("click",okMsg5);
function okMsg5(){
    document.getElementById('helpline').style.opacity="0";
}