//main content initialiser
import initPage from './initPage';
import createContactTab from './contactTab';
import createMenuTab from './menuTab';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the page
  initPage();

  // Get the content div
  const appDiv = document.getElementById('app');

  // Create a fixed div for buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'button-container';

  // Create navigation buttons
  const homeButton = createNavigationButton('Home', initDefaultContent);
  const contactButton = createNavigationButton('Contact', createContactTab);
  const menuButton = createNavigationButton('Menu', createMenuTab);

  // Append the buttons to the buttonContainer
  buttonContainer.appendChild(homeButton);
  buttonContainer.appendChild(contactButton);
  buttonContainer.appendChild(menuButton);

  // Append the buttonContainer to the appDiv
  appDiv.appendChild(buttonContainer);

  // Create a dynamic content div
  const contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  // Append the contentDiv to the appDiv
  appDiv.appendChild(contentDiv);

  // Initialize default content
  initDefaultContent(contentDiv);

  // Function to create navigation buttons
  function createNavigationButton(label, callback) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', () => {
      // Execute the callback function with the contentDiv
      callback(contentDiv);
    });
    return button;
  }

  // Function to initialize default content
  function initDefaultContent(contentDiv) {
    contentDiv.innerHTML = '<h1>Welcome to Our Restaurant</h1><p>Experience the finest dining in a cozy atmosphere. Our chefs prepare exquisite dishes with the freshest ingredients.</p>';
  }
});
