// Individual Idea Page Script
document.addEventListener('DOMContentLoaded', () => {
  initMindTabs();
  initRevenueCalculator();
});

function initMindTabs() {
  const tabs = document.querySelectorAll('.mind-tab');
  const contents = document.querySelectorAll('.mind-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const mind = tab.dataset.mind;
      
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      // Add active to clicked
      tab.classList.add('active');
      document.getElementById(`${mind}-content`).classList.add('active');
    });
  });
}

function initRevenueCalculator() {
  const input = document.getElementById('salesPerDay');
  const monthlyEl = document.getElementById('monthlyRevenue');
  const annualEl = document.getElementById('annualRevenue');
  const price = 150;
  
  if (!input) return;
  
  input.addEventListener('input', (e) => {
    const salesPerDay = parseFloat(e.target.value) || 0;
    const monthly = salesPerDay * price * 30;
    const annual = monthly * 12;
    
    monthlyEl.textContent = formatCurrency(monthly);
    annualEl.textContent = formatCurrency(annual);
  });
}

function formatCurrency(amount) {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}k`;
  }
  return `$${Math.round(amount).toLocaleString()}`;
}

