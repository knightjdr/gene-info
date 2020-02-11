import toggleExpression from './toggle-expression';

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
    const species = 'Homo sapiens';
    toggleExpression('protein', species);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeFalsy();
  });

  it('should hide expression element for species with no tissue entry', () => {
    const species = 'Mus musculus';
    toggleExpression('protein', species);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeTruthy();
  });

  it('should hide expression element for species with tissue entry but no data', () => {
    const species = 'Danio rerio';
    toggleExpression('protein', species);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeTruthy();
  });
});
