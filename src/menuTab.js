// src/menuTab.js
export default function createMenuTab(contentDiv) {
  contentDiv.innerHTML = `
    <h2>Menu</h2>
    <ul>
      <li>Appetizers</li>
      <li>Main Courses</li>
      <li>Desserts</li>
    </ul>
  `;
}