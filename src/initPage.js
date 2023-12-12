// src/initPage.js
export default function initPage() {
  const body = document.body;

  // Create a single div for the entire content
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  body.appendChild(appDiv);
}
