function listCity() {
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById("country");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".city");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }

    if (!filter) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var cityList = document.querySelector(".city");
    cityList.addEventListener("click", function(e) {
        var target = e.target;
        if (target.tagName === "P") {
            document.getElementById("country").value = target.textContent;
            cityList.style.display = "none";
        }
    });
});