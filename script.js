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
  particles: {
    number: { value: 40 },
    move: { enable: true, speed: 1 },
    size: { value: { min: 2, max: 5 } },
    color: { value: ["#6d28d9", "#8b5cf6", "#60a5fa"] },
  },
  interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
});
