function openmodal() {
    const video = document.getElementById("videoplayer");
    video.src = "https://player.vimeo.com/progressive_redirect/playback/666423007/rendition/1080p/1080p.mp4?loc=external&signature=17c5aa462e7071852932f2d8f22a900d7bf1817817170178609e9f68da5fab88";
    video.play();
    document.body.style.overflow = "hidden";
    document.getElementById("videomodal").style.display="flex";
    document.addEventListener("click",closealso);
}
function closemodal() {
    const video = document.getElementById("videoplayer");
    video.pause();
    video.src = "";
    document.body.style.overflow = "auto";
    document.getElementById("videomodal").style.display = "none";
    document.removeEventListener("click",closealso);
}
function closealso(event) {
    const modal = document.getElementById("videomodal");
    if (event.target === modal) {
        closemodal();
    }
}

document.getElementById("select1").addEventListener("focusout",function function1 (){
    const red = "1px solid red";
    const select1 = document.getElementById("select1").value;
    if (select1 != "sel1") {
        document.getElementById("select1").style.border = red;
        document.getElementById("label1").style.display = "block";
    }
});
document.getElementById("select2").addEventListener("focusout", function function2 (){
    const red = "1px solid red";
    const select2 = document.getElementById("select2").value;
    if (select2 != "sel2") {
        document.getElementById("select2").style.border = red;
        document.getElementById("label2").style.display = "block";
    }
});
document.getElementById("select3").addEventListener("focusout", function function3 (){
    const red = "1px solid red";
    const select3 = document.getElementById("select3").value;
    if (select3 != "sel3") {
        document.getElementById("select3").style.border = red;
        document.getElementById("label3").style.display = "block";
    }
});
document.getElementById("input1").addEventListener("focusout", function function4 (){
    const red = "1px solid red";
    const input1 = document.getElementById("input1").value;
    if (input1 === "" || input1 === "FULL NAME") {
        document.getElementById("input1").style.border = red;
        document.getElementById("label4").style.display = "block";
    }
});
document.getElementById("input2").addEventListener("focusout", function function5() {
    const red = "1px solid red";
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const input2 = document.getElementById("input2").value;
    if (input2 === "") {
        document.getElementById("input2").style.border = red;
        document.getElementById("label5").style.display = "block";
    } else if (!pattern.test(input2)) {
        document.getElementById("input2").style.border = red;
        document.getElementById("label7").style.display = "block";
        document.getElementById("label5").style.display = "none";
    }
});
document.getElementById("input3").addEventListener("focusout", function function6() {
    const red = "1px solid red";
    const pattern = /^[0-9]*$/;
    const input3 = document.getElementById("input3").value;
    if (input3 === "") {
        document.getElementById("input3").style.border = red;
        document.getElementById("label6").style.display = "block";
    } else if (!pattern.test(input3)) {
        document.getElementById("input3").style.border = red;
        document.getElementById("label8").style.display = "block";
        document.getElementById("label6").style.display = "none";
    }
});
document.getElementById("input3").addEventListener("input", function function7() {
    const red = "1px solid red";
    const pattern = /^[0-9]*$/;
    const input3 = document.getElementById("input3").value;
    if (!pattern.test(input3)) {
        document.getElementById("input3").style.border = red;
        document.getElementById("label8").style.display = "block";
        document.getElementById("label6").style.display = "none";
    }
});


form1 = document.getElementById("form1");
form1.addEventListener("submit", function functionn(event) {
    event.preventDefault();
    function1();
    function2();
    function3();
    function4();
    function5();
    function6();
    function7();
});
function spanopen(){
    document.getElementById("span").style.display="flex";
}
function focusp(){
    document.getElementById("passcode").focus();
}


