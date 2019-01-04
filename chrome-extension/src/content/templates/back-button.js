const backButton = (target, reports) => {
  if (reports > 1) {
    const button = document.createElement('button');
    button.className = 'gene-info__panel-button';
    button.id = 'gene-info__panel-back';
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
        <path fill="#1976d2" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z" />
      </svg>
    `;
    target.appendChild(button);
  }
};

export default backButton;
