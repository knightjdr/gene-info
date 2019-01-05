const dragButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'drag';
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
      <circle fill="#FAFAFA" cx="256" cy="256" r="175" />
      <path fill="#9E9E9E" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z
         M421.332,269.871l-57.148,70.344c-10.041,12.358-27.208,3.604-27.208-13.869v-37.65H175.024v37.65
        c0,17.473-17.167,26.229-27.207,13.869l-57.149-70.344c-6.225-7.661-6.225-20.082,0-27.742l57.149-70.344
        c10.041-12.357,27.207-3.606,27.207,13.873v37.647h161.952v-37.647c0-17.479,17.168-26.23,27.208-13.872l57.148,70.345
        C427.556,249.791,427.556,262.21,421.332,269.871z" />
    </svg>
  `;
  button.type = 'button';
  target.appendChild(button);
};

export default dragButton;
