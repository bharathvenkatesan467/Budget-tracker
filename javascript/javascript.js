
function add() {
    const t1 = document.getElementById("type").value;
    const t2 = document.getElementById("name").value;
    const t3 = document.getElementById("amount").value;
    console.log(t1);
    console.log(t2);
    console.log(t3);
    
    if (t1.length > 0 && t2.length > 0 && t3.length > 0) {
        document.getElementById("d1").innerHTML += "<div class='task';'>"+t1+"</div>";
        document.getElementById("d2").innerHTML += "<div class='task';'>"+t2+"</div>";
        document.getElementById("d3").innerHTML += "<div class='task';'>"+t3+"</div>";
        document.getElementById("d4").innerHTML += "<div class='task';'><button onclick='del(this)'>DELETE</button></div>";
    }
    document.getElementById("type").value = "";
}
function del(element) {
    element.parentElement.remove();
}