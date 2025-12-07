// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
    }
  });
});

// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mobileNav");
btn.onclick = () => nav.classList.toggle("active");

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Typing effect
const words = ["MCA Graduate", "Full-Stack Developer", "Data & ML Enthusiast"];
let i = 0, j = 0;
const el = document.getElementById("typing");

function typeWriter() {
  if (j < words[i].length) {
    el.textContent += words[i].charAt(j);
    j++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      if (j === words[i].length) {
        setTimeout(() => {
          el.textContent = '';
          j = 0;
          i = (i + 1) % words.length;
          typeWriter();
        }, 1000);
      }
    }, 2000);
  }
}
typeWriter();

// Skill bars animation
const bars = document.querySelectorAll(".bar");
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.level + '%';
      observer.unobserve(bar);
    }
  });
}, observerOptions);

bars.forEach(bar => observer.observe(bar));

// Intersection Observer for fade-in animations (optional enhancement)
const animateElements = document.querySelectorAll('.card, .skill-category');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});