// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Particles background (rainbow theme)
  if (window.tsParticles) {
    tsParticles.load("tsparticles", {
      background: { color: "transparent" },
      particles: {
        number: { value: 90, density: { enable: true, area: 800 } },
        size: { value: 2.5 },
        move: { enable: true, speed: 1.4, outModes: { default: "out" } },
        color: { value: ["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"] },
        links: { enable: false },
        shape: { type: "circle" },
        opacity: { value: 0.9, random: { enable: true, minimumValue: 0.5 } }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.3 },
          push: { quantity: 4 }
        }
      },
      detectRetina: true
    });
  }
});

// Copy donation details (Donate page)
function copyBankDetails() {
  const details = `Bank: First National Bank (FNB)
Account holder: Thusong Youth Centre
Account no: 50300065915
Account type: Cheque
Branch code: 250655`;

  navigator.clipboard.writeText(details).then(() => {
    const msg = document.getElementById("copyMsg");
    if (msg) {
      msg.classList.add("show");
      setTimeout(() => msg.classList.remove("show"), 2200);
    }
  });
}
