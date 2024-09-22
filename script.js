function playlist() {
    let name = prompt("Whats your name?");
    let genre = prompt("Which genre do you like?");
    let h2 = document.querySelector("h2");
    h2.innerHTML = ("😎 " + name + ", 🎶 ENJOY 🎵 " + genre);
}
let playlistButton = document.querySelector("button");
playlistButton.addEventListener("click", playlist);