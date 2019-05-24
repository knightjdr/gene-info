/* eslint indent: 0 */
import config from '../../../config';

const species = selected => `
  <select id="species_select" class="slim-select-style">
    ${
      config.species.map((specie) => {
        const props = [`value="${specie}"`];
        if (specie === selected) {
          props.push('selected');
        }
        return `
          <option ${props.join(' ')}>
            ${specie}
          </option>
        `;
      })
    }.join('\n');
  </select>
`;

export default species;
