import './style.css'

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.classList.add('active');
});

// Snappier cursor follow
function animateCursor() {
  const speed = 0.4;
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-badge');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ==========================================
// LOCAL TIME DISPLAY
// ==========================================
function updateLocalTime() {
  const timeElement = document.getElementById('localTime');
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  timeElement.textContent = timeString;
}

updateLocalTime();
setInterval(updateLocalTime, 1000);

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// ==========================================
// TERMINAL TYPING ANIMATION
// ==========================================
const terminalContent = [
  "# Initializing QuickFlow ecosystem...",
  "> Deploying Keycloak IAM container...",
  "Status: Secure Tunnel Established (OIDC)",
  "",
  "System Orchestration:",
  "- Docker: Synchronizing Microservices",
  "- OAuth2: Integrating Google IdP",
  "- Ollama: Mounting Llama-3.2 volume",
  "",
  "System Health: [##########] 100%",
  "Location: /dev/quickflow/security-stack",
  "",
  "yacin@whitecape:~/internship/better-ux$ _"
];

const typedContentElement = document.getElementById('typedContent');
const terminalOutput = document.getElementById('terminalOutput');
let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (lineIndex < terminalContent.length) {
    const currentLine = terminalContent[lineIndex];
    if (charIndex < currentLine.length) {
      typedContentElement.textContent += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeTerminal, Math.random() * 30 + 20);
    } else {
      typedContentElement.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeTerminal, 500);
    }
    // Auto-scroll terminal
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

// Start terminal animation after a short delay
setTimeout(typeTerminal, 1500);

// Observe all tiles
document.querySelectorAll('.tile').forEach(tile => {
  observer.observe(tile);
});

// ==========================================
// PROJECT CARD EXPANSION (FLIP Animation)
// ==========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the card's position before expansion
    const first = card.getBoundingClientRect();

    // Toggle expanded class
    card.classList.toggle('expanded');

    // Get the card's position after expansion
    const last = card.getBoundingClientRect();

    // Calculate the difference
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;
    const deltaW = first.width / last.width;
    const deltaH = first.height / last.height;

    // Apply the inverse transform
    card.animate([
      {
        transformOrigin: 'top left',
        transform: `
          translate(${deltaX}px, ${deltaY}px)
          scale(${deltaW}, ${deltaH})
        `
      },
      {
        transformOrigin: 'top left',
        transform: 'none'
      }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'both'
    });
  });
});

// ==========================================
// SMOOTH SCROLL TO SECTIONS
// ==========================================
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
  });
});

// ==========================================
// PARALLAX EFFECT ON BACKGROUND
// ==========================================
const bgGradient = document.querySelector('.bg-gradient');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 20;
  const y = (e.clientY / window.innerHeight) * 20;
  bgGradient.style.transform = `translate(${x}px, ${y}px)`;
});

// ==========================================
// SKILL BADGE SHIMMER EFFECT
// ==========================================
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach((badge, index) => {
  // Stagger the shimmer effect on page load
  setTimeout(() => {
    badge.style.animation = 'none';
    setTimeout(() => {
      const shimmer = badge.querySelector('::before');
      if (shimmer) {
        shimmer.style.left = '100%';
      }
    }, 100);
  }, index * 150);
});

console.log('🎨 Portfolio loaded successfully!');
