window.addEventListener("keydown", (event) => {
    var selected = document.querySelectorAll(".klienttypeSelected")
    
    if (event.key == 1) {
        let et = document.getElementById("1");
        console.log(et);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        et.classList.add("klienttypeSelected");
    } else if (event.key == 2) {
        let to = document.getElementById("2");
        console.log(to);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        to.classList.add("klienttypeSelected");
    } else if (event.key == 3) {
        let tre = document.getElementById("3");
        console.log(tre);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        tre.classList.add("klienttypeSelected");
    } else if (event.key == 4) {
        let fire = document.getElementById("4");
        console.log(fire);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        fire.classList.add("klienttypeSelected");
    } else if (event.key == 5) {
        let fem = document.getElementById("5");
        console.log(5);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        fem.classList.add("klienttypeSelected");
    } else if (event.key == 6) {
        let seks = document.getElementById("6");
        console.log(seks);
        selected.forEach(klienttypeSelected => {
            klienttypeSelected.classList.remove("klienttypeSelected")
        })
        seks.classList.add("klienttypeSelected");
    } 
})