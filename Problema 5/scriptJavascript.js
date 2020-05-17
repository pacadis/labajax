function getFiles(){
    this.style.pointerEvents = "none";
    alert(this.innerHTML);
    var id = this.id;
    alert("Id: " + id);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var text = this.responseText;
            alert(text);
            var dirs = text.split(',');
            for(var i = 0;i<dirs.length; i++){
                alert(dirs[i]);
                var listItem = document.createElement("li");
                listItem.style.pointerEvents = "auto";

                // listItem.addEventListener("click", displayText);
                listItem.innerHTML = dirs[i];
                document.getElementById(id).appendChild(listItem);
            }
        }
    }
    xmlhttp.open("GET", "server.php?g=1&dir=" + this.innerHTML, true);
    xmlhttp.send();


}

function clickedButton() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var text = this.responseText;
            alert(text);
            var dirs = text.split(',');
            for(var i = 0;i<dirs.length; i++){
                var lista = document.createElement("ul");
                lista.id = dirs[i];
                lista.innerText = dirs[i];
                lista.addEventListener("click", getFiles);
                document.getElementById("tree").appendChild(lista);
            }
        }
    }
    xmlhttp.open("GET", "server.php?g=0", true);
    xmlhttp.send();
}