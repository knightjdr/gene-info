import toggleCompartments from './toggle-compartments';

jest.mock('../../config', () => ({
  compartmentSpecies: ['Homo sapiens'],
}));

describe('Toggle compartment setting', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    div.className = 'compartments';
    document.body.appendChild(div);
  });

  it('should not hide compartment element for valid species', () => {
    const species = 'Homo sapiens';
    toggleCompartments(species);

    const element = document.querySelector('.compartments');
    expect(element.classList.contains('hide')).toBeFalsy();
  });

  it('should hide compartment element for invalid species', () => {
    const species = 'Mus musculus';
    toggleCompartments(species);

    const element = document.querySelector('.compartments');
    expect(element.classList.contains('hide')).toBeTruthy();
  });
});
