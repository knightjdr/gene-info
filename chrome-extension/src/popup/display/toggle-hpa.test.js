import toggleHPA from './toggle-hpa';

describe('Toggle HPA setting', () => {
  beforeAll(() => {
    const div1 = document.createElement('div');
    div1.id = 'div1';
    div1.className = 'hpa';
    document.body.appendChild(div1);
    const div2 = document.createElement('div');
    div2.id = 'div2';
    div2.className = 'hpa';
    document.body.appendChild(div2);
  });

  it('should not hide hpa elements for Homo sapiens', () => {
    toggleHPA('Homo sapiens');

    const elements = document.querySelectorAll('.hpa');
    elements.forEach((element) => {
      expect(element.classList.contains('hide')).toBeFalsy();
    });
  });

  it('should hide hpa elements for non Homo sapien species', () => {
    toggleHPA('Mus musculus');

    const elements = document.querySelectorAll('.hpa');
    elements.forEach((element) => {
      expect(element.classList.contains('hide')).toBeTruthy();
    });
  });
});
