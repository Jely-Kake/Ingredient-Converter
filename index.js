function clickMe(){
    var d = document.querySelector("#ingredientName").value;
    if (d == "sugar")
        document.querySelector("#weight").value = d;
    else
        document.querySelector("#weight").value = "NO VALUE";
}