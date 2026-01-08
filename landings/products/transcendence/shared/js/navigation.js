/**
 * Transcendence Products - Navigation Utilities
 * Handles constellation navigation, transitions, and progress tracking
 */

import { products, getProductById, getConnectedProducts } from './product-data.js';

// Track visited products in localStorage
const STORAGE_KEY = 'transcendence_visited';

export const getVisitedProducts = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const markProductVisited = (productId) => {
  const visited = getVisitedProducts();
  if (!visited.includes(productId)) {
    visited.push(productId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visited));
  }
  return visited;
};

export const isProductVisited = (productId) => {
  return getVisitedProducts().includes(productId);
};

export const getVisitedCount = () => {
  return getVisitedProducts().length;
};

// Page transition effect
export const transitionToProduct = (productId, event) => {
  event?.preventDefault();
  
  const product = getProductById(productId);
  if (!product) return;
  
  // Create transition overlay
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: ${product.color.bg};
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display, Georgia);
    font-size: 4rem;
    color: ${product.color.primary};
  `;
  overlay.innerHTML = product.symbol;
  document.body.appendChild(overlay);
  
  // Trigger animation
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    setTimeout(() => {
      window.location.href = `${productId}/`;
    }, 400);
  });
};

// Initialize mini constellation on product pages
export const initMiniConstellation = (currentProductId) => {
  const mini = document.createElement('a');
  mini.href = '../';
  mini.className = 'mini-constellation';
  mini.title = 'Back to Constellation';
  mini.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="2"/>
      <circle cx="5" cy="5" r="1.5"/>
      <circle cx="19" cy="5" r="1.5"/>
      <circle cx="5" cy="19" r="1.5"/>
      <circle cx="19" cy="19" r="1.5"/>
      <line x1="12" y1="12" x2="5" y2="5" opacity="0.5"/>
      <line x1="12" y1="12" x2="19" y2="5" opacity="0.5"/>
      <line x1="12" y1="12" x2="5" y2="19" opacity="0.5"/>
      <line x1="12" y1="12" x2="19" y2="19" opacity="0.5"/>
    </svg>
  `;
  document.body.appendChild(mini);
  
  // Mark current product as visited
  markProductVisited(currentProductId);
};

// Get suggested next products based on connections
export const getSuggestedProducts = (currentProductId, count = 3) => {
  const connected = getConnectedProducts(currentProductId);
  const visited = getVisitedProducts();
  
  // Prioritize unvisited connected products
  const unvisited = connected.filter(p => !visited.includes(p.id));
  const visitedConnected = connected.filter(p => visited.includes(p.id));
  
  return [...unvisited, ...visitedConnected].slice(0, count);
};

// Render connected products section
export const renderConnectedProducts = (currentProductId, container) => {
  const suggested = getSuggestedProducts(currentProductId);
  
  container.innerHTML = `
    <h3 class="connected-title">Explore Connected Products</h3>
    <div class="connected-grid">
      ${suggested.map(product => `
        <a href="../${product.id}/" class="connected-card" style="--card-color: ${product.color.primary}">
          <span class="connected-symbol">${product.symbol}</span>
          <span class="connected-name">${product.name}</span>
          <span class="connected-tagline">${product.tagline}</span>
          ${isProductVisited(product.id) ? '<span class="visited-badge">Visited</span>' : ''}
        </a>
      `).join('')}
    </div>
  `;
};

// Progress indicator
export const renderProgressIndicator = () => {
  const visited = getVisitedCount();
  const total = products.length;
  const percentage = (visited / total) * 100;
  
  const indicator = document.createElement('div');
  indicator.className = 'progress-indicator';
  indicator.innerHTML = `
    <div class="progress-bar" style="--progress: ${percentage}%"></div>
    <span class="progress-text">${visited}/${total} Explored</span>
  `;
  
  return indicator;
};



