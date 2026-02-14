function deploy() {
    const terminal = document.getElementById("terminal");
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
                document.querySelector(".envelope-container").style.display = "flex";
                setTimeout(()=>{
                    document.querySelector(".envelope-container").scrollIntoView({
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
    setTimeout(() => {
        pipeline.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }, 300);

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
            setTimeout(() => {
                const final = document.getElementById("finalMessage");
        
                final.style.display = "block";
        
                // 🔥 Scroll suave hacia el mensaje
                final.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
        
            }, 2500); // espera a que termine el deploy visual
        }

    }, 300);
}
    // Floating hearts animation
setInterval(() => {

    for (let i = 0; i < 3; i++) { // 👈 crea 3 cada vez
        const heart = document.createElement("div");
        heart.className = "floating-heart";
    
        const emojis = ["❤️", "💖", "❤️", "💘"];
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 10 + 14) + "px";
    
        document.body.appendChild(heart);
    
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
}, 1500);
const envelope = document.getElementById("envelope");
const typedText = document.getElementById("typedText");
const clickText = document.querySelector(".click-text");

const message = 
"You are my best commit.\n" +
"My favorite feature.\n" +
"My most stable version.\n\n" +
"Thank you for debugging my fears,\n" +
"patching my bad days,\n" +
"and deploying love consistently.\n\n" +
"If life were a repository,\n" +
"I'd choose you in every branch.\n" +
"And I would never roll back.";


let opened = false;

envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    envelope.classList.add("open");
    clickText.style.opacity = "0";
    typeWriter();
});

function typeWriter() {
    let i = 0;
    typedText.innerHTML = "";

    const speed = 35;

    function typing() {
        if (i < message.length) {
            // reemplaza saltos de línea por <br> en HTML
            const char = message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
            typedText.innerHTML += char;
            const letterBox = document.querySelector(".letter");
            letterBox.style.maxHeight = letterBox.scrollHeight + "px";
            i++;
            setTimeout(typing, speed);
        }else {
            // 🔥 AQUÍ termina el typing
            const commitSection = document.getElementById("commitSection");

            commitSection.style.display = "block";

            setTimeout(() => {
                commitSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 300);
        }
    }

    typing();
}
document.addEventListener("click", function(e) {

    if (e.target && e.target.id === "yesBtn") {
        explosionSanValentin();

        if (document.querySelector(".bigLoveMessage")) return;

        const bigMessage = document.createElement("div");
        bigMessage.className = "bigLoveMessage";

        bigMessage.innerHTML = `
            <div class="bigContent">
                <img src="images/fotofinal.jpg" alt="us">

                <div class="bigText">
                    <h1>Forever Deployed 💖</h1>
                    <p>
                        Yenifer & Florian<br><br>
                        No rollbacks.<br>
                        No branches.<br>
                        Just us.
                    </p>
                </div>
            </div>
        `;

        document.body.appendChild(bigMessage);

        // cerrar al tocar fondo
        bigMessage.addEventListener("click", () => {
            bigMessage.remove();
            const countdown = document.querySelector(".countdown-wrapper");
            countdown.style.display = "block";

            setTimeout(() => {
                countdown.scrollIntoView({
                behavior: "smooth",
                block: "center"
                });
            }, 200);
        });
    }
});
function actualizarCountdown() {
    const ahora = new Date();
    const añoActual = ahora.getFullYear();
  
    let fechaObjetivo = new Date(`May 14, ${añoActual} 00:00:00`);
  
    if (ahora > fechaObjetivo) {
      fechaObjetivo = new Date(`May 14, ${añoActual + 1} 00:00:00`);
    }
  
    const diferencia = fechaObjetivo - ahora;
  
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
    const elemento = document.getElementById("countdown");
    if (!elemento) return;
  
    elemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
  
  setInterval(actualizarCountdown, 1000);
  actualizarCountdown();
  
  function crearCorazonCountdown() {
    const container = document.querySelector(".hearts-container-countdown");
    if (!container) return;
  
    const heart = document.createElement("span");
    heart.classList.add("floating-heart-countdown");
    heart.innerHTML = "❤";
  
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (2 + Math.random() * 2) + "s";
  
    container.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
setInterval(crearCorazonCountdown, 600);
crearCorazonCountdown();

function explosionSanValentin() {

    const total = 60;
  
    for (let i = 0; i < total; i++) {
  
      const heart = document.createElement("div");
      heart.className = "valentine-explosion";
  
      const emojis = ["❤️", "💖", "💘"];
      heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
  
      heart.style.fontSize = (Math.random() * 15 + 20) + "px";
  
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  }
  const startScreen = document.getElementById("startScreen");

  startScreen.addEventListener("click", () => {
    startScreen.style.opacity = "0";
  
    setTimeout(() => {
      startScreen.style.display = "none";
    }, 1000);
  });
