import toggleTissues from './toggle-tissues';

jest.mock('../../config', () => ({
  tissues: {
    protein: {
      'Homo sapiens': {
        cells: ['HEK 293'],
      },
      'Danio rerio': {
        cells: [],
        tissues: [],
      },
    },
  },
}));

describe('Toggle expression setting', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    div.className = 'protein-expression';
    document.body.appendChild(div);
  });

  it('should not hide expression element for species with data', () => {
    const options = {
      className: 'protein-expression',
      species: 'Homo sapiens',
      tissueID: 'protein',
    };
    toggleTissues(options);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeFalsy();
  });

  it('should hide expression element for species with no tissue entry', () => {
    const options = {
      className: 'protein-expression',
      species: 'Mus musculus',
      tissueID: 'protein',
    };
    toggleTissues(options);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeTruthy();
  });

  it('should hide expression element for species with tissue entry but no data', () => {
    const options = {
      className: 'protein-expression',
      species: 'Danio rerio',
      tissueID: 'protein',
    };
    toggleTissues(options);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeTruthy();
  });
});
