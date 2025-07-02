function pondeli() {
    document.getElementById("pondeli1").textContent = "Pondělí: Začátek týdne, ideální čas na nové cíle."
    document.getElementById("skrytBtn").style.display = "inline-block"
}


function utery(){
    document.getElementById("utery1").textContent = "Úterý: Pracovní tempo se rozjíždí, soustředění na úkoly."
    document.getElementById("skrytBtn").style.display = "inline-block"
}

function streda(){
    document.getElementById("streda1").textContent = "Středa: Polovina týdne – čas na malé shrnutí a korekce."
    document.getElementById("skrytBtn").style.display = "inline-block"
}

function ctvrtek(){
    document.getElementById("ctvrtek1"). textContent = "Čtvrtek: Blíží se víkend, energie se zvedá."
    document.getElementById("skrytBtn").style.display = "inline-block"
}

function patek() {
    document.getElementById("patek1"). textContent = "Pátek: Den na dokončení práce a těšení se na víkend."
    document.getElementById("skrytBtn").style.display = "inline-block"
}

function smazatObsah(){
    document.getElementById("pondeli1"). textContent = ""
    document.getElementById("utery1"). textContent = ""
    document.getElementById("streda1"). textContent = ""
    document.getElementById("ctvrtek1"). textContent = ""
    document.getElementById("patek1"). textContent = ""
    document.getElementById("skrytBtn").style.display = "none"
}


