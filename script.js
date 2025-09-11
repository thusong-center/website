// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});

// Copy donation details (only works on donate.html)
function copyBankDetails() {
  const details = `Bank: First National Bank (FNB)
Account holder: Thusong Youth Centre
Account no: 50300065915
Account type: Cheque
Branch code: 250655`;

  navigator.clipboard.writeText(details).then(() => {
    const msg = document.getElementById("copyMsg");
    if (msg) {
      msg.classList.remove("hidden");
      setTimeout(() => msg.classList.add("hidden"), 2000);
    }
  });
}

// Particles background
tsParticles.load("tsparticles", {
  background: { color: "transparent" },
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
    color: { value: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"] },
    links: { enable: false }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
