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
                setTimeout(()=>{
                    letter.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                },100);
            }, 800);
        }
    }

    typeLine();
}

function commitForever() {
    const pipeline = document.getElementById("pipeline");
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("pipelineText");

    pipeline.style.display = "block";

    let progress = 0;

    const interval = setInterval(() => {
        progress += 10;
        fill.style.width = progress + "%";

        if (progress === 30) text.innerText = "Running tests...";
        if (progress === 60) text.innerText = "No merge conflicts detected...";
        if (progress === 80) text.innerText = "Pushing to production...";
        if (progress === 100) {
            text.innerText = "Deployment successful ❤️";
            clearInterval(interval);

            setTimeout(() => {
                document.getElementById("finalSection")
                    .scrollIntoView({ behavior: "smooth" });
            }, 1000);
            setTimeout(() => {
                document.getElementById("photo1").classList.remove("hidden");
                document.getElementById("photo1").classList.add("show");
            }, 500);
            
            setTimeout(() => {
                document.getElementById("photo2").classList.remove("hidden");
                document.getElementById("photo2").classList.add("show");
            }, 1000);
            
            setTimeout(() => {
                document.getElementById("photo3").classList.remove("hidden");
                document.getElementById("photo3").classList.add("show");
            }, 1500);

            setTimeout(() => {
                document.getElementById("photo4").classList.remove("hidden");
                document.getElementById("photo4").classList.add("show");
            }, 2000);
        }

    }, 300);
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