export default function initPage() {
  const body = document.body;

  // Create a single div for the entire content which we will populate later
  const appDiv = document.createElement('div');
  appDiv.id = 'app';
  body.appendChild(appDiv);
}
