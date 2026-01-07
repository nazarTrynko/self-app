/**
 * Digital Detox Carousel Script
 * Mindful technology relationship tools
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvas background
    const canvas = document.getElementById('canvas');
    const waterCanvas = new WaterCanvas(canvas);
    
    // Initialize carousel engine
    const carousel = new CarouselEngine('#carousel', {
        autoPlay: false,
        loop: true,
        transition: 'fade',
        transitionDuration: 600,
        haptic: true
    });
    
    // Connect canvas to carousel
    carousel.setCanvasBackground(waterCanvas);
    
    // Initialize interactive features
    initScreenTimeCalculator();
    initSignsChecklist();
    initChallengeTimer();
});

/**
 * Screen Time Calculator
 */
function initScreenTimeCalculator() {
    const slider = document.getElementById('screenTimeSlider');
    const hoursDisplay = document.getElementById('screenTimeHours');
    const impact = document.getElementById('timeImpact');
    
    function updateDisplay() {
        const hours = parseInt(slider.value, 10);
        hoursDisplay.textContent = hours;
        
        const yearlyHours = hours * 365;
        const yearlyDays = Math.round(yearlyHours / 24);
        
        impact.innerHTML = `
            <span class="impact-yearly">= <strong>${yearlyHours}</strong> годин/рік</span>
            <span class="impact-days">= <strong>${yearlyDays}</strong> днів</span>
        `;
        
        // Visual feedback
        if (hours > 8) {
            hoursDisplay.style.color = '#c0392b';
        } else if (hours > 5) {
            hoursDisplay.style.color = '#d4a574';
        } else {
            hoursDisplay.style.color = '#4A7C8C';
        }
    }
    
    slider.addEventListener('input', updateDisplay);
    updateDisplay();
}

/**
 * Signs Checklist
 */
function initSignsChecklist() {
    const checkboxes = document.querySelectorAll('.sign-checkbox');
    const result = document.getElementById('signsResult');
    
    const messages = {
        0: 'Позначте те, що вам відгукується',
        1: 'Один знак — добре, що помічаєте',
        2: 'Два знаки — варто звернути увагу',
        3: 'Три знаки — час для змін',
        4: 'Чотири знаки — детокс буде корисним',
        5: 'Всі п\'ять — терміново потрібен детокс!'
    };
    
    function updateResult() {
        const checked = document.querySelectorAll('.sign-checkbox:checked').length;
        result.textContent = messages[checked];
        
        if (checked >= 3) {
            result.classList.add('warning');
        } else {
            result.classList.remove('warning');
        }
    }
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateResult);
    });
}

/**
 * 24-Hour Challenge Timer
 */
function initChallengeTimer() {
    const btn = document.getElementById('startChallenge');
    const progress = document.getElementById('timerProgress');
    const hoursDisplay = document.getElementById('timerHours');
    
    const circumference = 2 * Math.PI * 90; // radius = 90
    let isActive = false;
    let startTime = null;
    let intervalId = null;
    
    // Check if challenge is already active
    const savedStart = localStorage.getItem('detoxChallengeStart');
    if (savedStart) {
        startTime = parseInt(savedStart, 10);
        const elapsed = Date.now() - startTime;
        const totalMs = 24 * 60 * 60 * 1000;
        
        if (elapsed < totalMs) {
            isActive = true;
            btn.textContent = 'Челендж активний';
            btn.classList.add('active');
            startUpdateLoop();
        } else {
            localStorage.removeItem('detoxChallengeStart');
        }
    }
    
    function updateTimer() {
        if (!startTime) return;
        
        const elapsed = Date.now() - startTime;
        const totalMs = 24 * 60 * 60 * 1000;
        const remaining = Math.max(0, totalMs - elapsed);
        const remainingHours = Math.ceil(remaining / (60 * 60 * 1000));
        
        // Update display
        hoursDisplay.textContent = remainingHours;
        
        // Update progress ring
        const progressRatio = elapsed / totalMs;
        const offset = circumference * (1 - progressRatio);
        progress.style.strokeDashoffset = offset;
        
        // Challenge complete
        if (remaining <= 0) {
            completeChallenge();
        }
    }
    
    function startUpdateLoop() {
        updateTimer();
        intervalId = setInterval(updateTimer, 60000); // Update every minute
    }
    
    function completeChallenge() {
        clearInterval(intervalId);
        localStorage.removeItem('detoxChallengeStart');
        isActive = false;
        
        hoursDisplay.textContent = '✓';
        btn.textContent = 'Вітаємо! Ви це зробили!';
        btn.classList.remove('active');
        
        // Celebration
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        }
    }
    
    btn.addEventListener('click', () => {
        if (isActive) {
            // Confirm cancel
            if (confirm('Ви впевнені, що хочете скасувати челендж?')) {
                clearInterval(intervalId);
                localStorage.removeItem('detoxChallengeStart');
                isActive = false;
                startTime = null;
                
                hoursDisplay.textContent = '24';
                progress.style.strokeDashoffset = 0;
                btn.textContent = 'Почати челендж';
                btn.classList.remove('active');
            }
        } else {
            // Start challenge
            startTime = Date.now();
            localStorage.setItem('detoxChallengeStart', startTime.toString());
            isActive = true;
            
            btn.textContent = 'Челендж активний';
            btn.classList.add('active');
            startUpdateLoop();
            
            // Haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        }
    });
}

