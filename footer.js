// components/footer.js
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <p>© ${new Date().getFullYear()} MyApp — built modularly</p>
    </div>
  `;
  return footer;
}
