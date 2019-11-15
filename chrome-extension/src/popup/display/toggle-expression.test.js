import toggleExpression from './toggle-expression';

jest.mock('../../config', () => ({
  tissues: {
    protein: {
      'Homo sapiens': {},
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

  it('should hide expression element for species with no data', () => {
    const species = 'Mus musculus';
    toggleExpression('protein', species);

    const element = document.querySelector('.protein-expression');
    expect(element.classList.contains('hide')).toBeTruthy();
  });
});
