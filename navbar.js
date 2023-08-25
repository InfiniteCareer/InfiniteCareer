const icon = document.querySelector(".bars");

console.log(icon);

icon.addEventListener("click", expand);

function expand() {
    const nav = document.getElementById("nav-list");

    console.log("clicked");

    if (nav.className === "topnav") {
        nav.className = "active";
    } else {
        nav.className = "topnav";
    }
}