// Simple confetti effect without external dependency
export default function confetti() {
  const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#22c55e', '#f59e0b'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      opacity: 1;
      pointer-events: none;
      z-index: 9999;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      transform: rotate(${Math.random() * 360}deg);
    `;
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
      { 
        transform: `translateY(0) rotate(0deg)`,
        opacity: 1 
      },
      { 
        transform: `translateY(100vh) rotate(${720 + Math.random() * 360}deg)`,
        opacity: 0 
      }
    ], {
      duration: 2000 + Math.random() * 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      delay: Math.random() * 300
    });
    
    animation.onfinish = () => confetti.remove();
  }
}

