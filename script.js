  function sendMessage(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      alert("Thank you " + name + "! Your message has been received.");
      document.querySelector("form").reset();
    }
    function toggleTheme() {
      document.body.classList.toggle("dark");
      const btn = document.querySelector(".toggle-btn");
      btn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
    }
    window.addEventListener("scroll", reveal);
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.onclick = function() {
      window.scrollTo({top:0, behavior:"smooth"});
    };


    function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const mailtoLink = `mailto:sahumohit1494@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;

  window.location.href = mailtoLink;
}
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.textContent = navbar.classList.contains("active") ? "✖" : "☰";
});
