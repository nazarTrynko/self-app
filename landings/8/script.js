/**
 * ISOMETRIC DATASCAPE — Mind as City
 * 
 * Technical 3D grid city visualization
 */

document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.arch-block, .feature-block, .user-block');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // 3D cube rotation on hover
    document.querySelectorAll('.block-3d').forEach(cube => {
        cube.addEventListener('mousemove', (e) => {
            const rect = cube.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            cube.style.transform = `rotateX(${-20 + y * 20}deg) rotateY(${45 + x * 20}deg)`;
        });
        
        cube.addEventListener('mouseleave', () => {
            cube.style.transform = 'rotateX(-20deg) rotateY(45deg)';
        });
    });
    
    // Grid background parallax
    const gridBg = document.querySelector('.grid-bg');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        gridBg.style.transform = `rotateX(60deg) translateY(${scrollY * 0.3}px)`;
    });
    
    // Console message
    console.log('%c🏗️ SELF — Isometric Edition', 'color: #0066ff; font-size: 14px;');
    console.log('%cBuilding intelligence, block by block...', 'color: #00d4ff;');
});

