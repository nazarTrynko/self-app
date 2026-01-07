document.addEventListener('DOMContentLoaded', () => {
    // Demo items selection
    const demoItems = document.querySelectorAll('.demo-item');
    const demoHeader = document.querySelector('.demo-header h3');
    const demoAvatar = document.querySelector('.demo-avatar');
    
    const developers = {
        1: { name: '@alexai', initial: 'A', tech: 'FastAPI • BERT • 1000 req/min' },
        2: { name: '@mlpro', initial: 'M', tech: 'PyTorch • Custom Transformer • Multi-lang' },
        3: { name: '@buildfast', initial: 'B', tech: 'GPT-4 • Streaming • Dashboard' }
    };
    
    demoItems.forEach(item => {
        item.addEventListener('click', () => {
            demoItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const demoId = item.dataset.demo;
            const dev = developers[demoId];
            demoHeader.textContent = `Live Demo from ${dev.name}`;
            document.querySelector('.demo-tech').textContent = dev.tech;
            
            // Animate the change
            const iframe = document.querySelector('.demo-iframe');
            iframe.style.opacity = '0';
            setTimeout(() => {
                iframe.style.opacity = '1';
            }, 200);
        });
    });

    // Sentiment analysis demo
    const analyzeBtn = document.getElementById('analyzeBtn');
    const demoInput = document.getElementById('demoInput');
    const demoResult = document.getElementById('demoResult');
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            const text = demoInput.value.toLowerCase();
            const resultSentiment = demoResult.querySelector('.result-sentiment');
            const confidenceFill = demoResult.querySelector('.confidence-fill');
            const confidenceText = demoResult.querySelectorAll('.result-confidence span')[1];
            
            analyzeBtn.textContent = 'Analyzing...';
            analyzeBtn.disabled = true;
            
            setTimeout(() => {
                // Simple sentiment analysis simulation
                const positiveWords = ['love', 'great', 'amazing', 'excellent', 'best', 'awesome', 'fantastic', 'wonderful', 'happy', 'good'];
                const negativeWords = ['hate', 'terrible', 'awful', 'worst', 'bad', 'horrible', 'disappointed', 'angry', 'sad', 'poor'];
                
                let positiveScore = 0;
                let negativeScore = 0;
                
                positiveWords.forEach(word => {
                    if (text.includes(word)) positiveScore++;
                });
                negativeWords.forEach(word => {
                    if (text.includes(word)) negativeScore++;
                });
                
                let sentiment, confidence, className;
                
                if (positiveScore > negativeScore) {
                    sentiment = 'POSITIVE';
                    confidence = Math.min(65 + positiveScore * 10, 98);
                    className = 'positive';
                } else if (negativeScore > positiveScore) {
                    sentiment = 'NEGATIVE';
                    confidence = Math.min(65 + negativeScore * 10, 98);
                    className = 'negative';
                } else {
                    sentiment = 'NEUTRAL';
                    confidence = 55 + Math.random() * 20;
                    className = 'neutral';
                }
                
                resultSentiment.textContent = sentiment;
                resultSentiment.className = 'result-sentiment ' + className;
                confidenceFill.style.width = confidence + '%';
                confidenceText.textContent = Math.round(confidence) + '%';
                
                analyzeBtn.textContent = 'Analyze Sentiment';
                analyzeBtn.disabled = false;
            }, 800);
        });
    }

    // How it works tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.how-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tab}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Waitlist form
    const waitlistForm = document.getElementById('waitlistForm');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = waitlistForm.querySelector('button');
            const email = waitlistForm.querySelector('input[type="email"]').value;
            const userType = waitlistForm.querySelector('select').value;
            
            button.textContent = 'Joining...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'You\'re on the list!';
                button.style.background = '#059669';
                
                // Update the trust line
                const trustLine = document.querySelector('.cta-trust');
                if (trustLine) {
                    const currentCount = parseInt(trustLine.textContent.replace(/[^0-9]/g, ''));
                    trustLine.textContent = `${(currentCount + 1).toLocaleString()}+ on the waitlist`;
                }
                
                setTimeout(() => {
                    button.textContent = 'Join Waitlist';
                    button.style.background = '';
                    button.disabled = false;
                    waitlistForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Select demo button
    const selectBtn = document.querySelector('.select-btn');
    if (selectBtn) {
        selectBtn.addEventListener('click', () => {
            selectBtn.textContent = 'Demo Selected!';
            selectBtn.style.background = '#059669';
            
            setTimeout(() => {
                selectBtn.textContent = 'Select This Demo';
                selectBtn.style.background = '';
            }, 2000);
        });
    }

    // Add intersection observer for fade-in animations on scroll
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
    
    document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Demo iframe transition
    const demoIframe = document.querySelector('.demo-iframe');
    if (demoIframe) {
        demoIframe.style.transition = 'opacity 0.2s ease';
    }
});

