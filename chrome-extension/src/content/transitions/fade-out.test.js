import fadeOut from './fade-out';

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
);

describe('Fade out element', () => {
  let child;
  let shadowDom;

  beforeAll(() => {
    shadowDom = document.createElement('div');
    shadowDom.id = 'shadow-dom';
    document.body.appendChild(shadowDom);
    child = document.createElement('div');
    child.id = 'test-div';
    shadowDom.appendChild(child);
  });

  it('should add animation class and remove element after 400ms', async (done) => {
    fadeOut(child, shadowDom);
    expect(child.classList.contains('panel_animate-fadeout')).toBeTruthy();
    expect(document.querySelector('#test-div')).not.toBeNull();
    await sleep(500);
    expect(document.querySelector('#test-div')).toBeNull();
    done();
  });
});
