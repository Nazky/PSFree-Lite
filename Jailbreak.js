export function GoldHEN() {
    fetch("./GoldHEN.bin").then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
            localStorage.setItem("jb", 1);
            document.getElementById("loader").style.display = "none";
            document.getElementById("done").style.display = "block";
        })
    });   
}