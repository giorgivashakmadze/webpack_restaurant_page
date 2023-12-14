//creates simple div and adds to content div
export default function createContactTab(contentDiv) {
  contentDiv.innerHTML = `
    <h2>Contact Us</h2>
    <p>
      For reservations or inquiries, please contact us at:
      <br>
      Email: menu@example.com
      <br>
      Phone: 599 56 54 87
    </p>
  `;
}


