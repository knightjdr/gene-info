import fadeOut from './fade-out';

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

describe('Fade out element', () => {
  let div;

  beforeAll(() => {
    div = document.createElement('div');
    div.id = 'test-div';
    document.body.appendChild(div);
  });

  it('should add animation class and remove element after 400ms', async (done) => {
    fadeOut(div);
    expect(div.classList.contains('panel_animate-fadeout')).toBeTruthy();
    expect(document.querySelector('#test-div')).not.toBeNull();
    await sleep(500);
    expect(document.querySelector('#test-div')).toBeNull();
    done();
  });
});
