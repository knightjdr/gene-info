import State from '../../state';

const noResult = () => (`
  <aside id="backdrop">
    <div
      class="theme_${State.settings.theme}"
      id="tooltip"
    >
      <header>No gene information available</header>
    </div>
  </aside>
`);

export default noResult;
