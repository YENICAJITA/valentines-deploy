function deploy() {
    const terminal = document.getElementById("terminal");
    const letter = document.getElementById("letter");
    const commitSection = document.getElementById("commitSection");

    terminal.style.display = "block";
    terminal.innerHTML = "";

    const lines = [
        "> Installing love dependencies...",
        "> Checking emotional compatibility...",
        "> 100% match found ❤️",
        "> Refactoring heart architecture...",
        "> Removing unnecessary drama...",
        "> Optimizing future together...",
        "> Building stable release...",
        "> Deploy successful."
    ];

    let i = 0;

    function typeLine() {
        if (i < lines.length) {
            terminal.innerHTML += lines[i] + "<br>";
            i++;
            setTimeout(typeLine, 700);
        } else {
            setTimeout(() => {
                letter.style.display = "block";
                commitSection.style.display = "block";
            }, 800);
        }
    }

    typeLine();
}

function commitForever() {
    const result = document.getElementById("commitResult");
    result.innerHTML = `
✔ Commit successful.<br>
✔ No merge conflicts detected.<br>
✔ Relationship locked in production ❤️
    `;
}
    // Floating hearts animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 14) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);