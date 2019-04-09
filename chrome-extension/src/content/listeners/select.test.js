import panel from '../templates/panel/panel';
import State from '../state';
import tooltip from '../templates/tooltip/tooltip';
import { addSelectListener, removeSelectListener, selectChange } from './select';

jest.mock('../templates/panel/panel');
jest.mock('../templates/tooltip/tooltip');

State.init({});
State.createShadow = jest.fn(() => {
  const div = document.createElement('div');
  div.getElementById = id => document.getElementById(id);
  document.body.insertBefore(div, document.body.firstChild);
  State.shadowRoot = div;
});
const clearShadow = () => {
  State.shadowRoot = null;
  document.body.innerHTML = '';
};

describe('Select change', () => {
  let select;

  beforeAll(() => {
    select = document.createElement('select');
    document.body.appendChild(select);
    select.addEventListener('change', selectChange);
    const option1 = document.createElement('option');
    option1.selected = true;
    option1.value = '0';
    select.appendChild(option1);
    const option2 = document.createElement('option');
    option2.value = '1';
    select.appendChild(option2);
    select.selectedIndex = 0;
  });

  it('should call panel function when option changes', () => {
    State.updateSetting('report', 'detailed');
    panel.mockClear();
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change', { }));
    expect(panel).toHaveBeenCalledWith(1);
  });

  it('should call tooltip function when option changes', () => {
    State.updateSetting('report', 'tooltip');
    panel.mockClear();
    select.selectedIndex = 1;
    select.dispatchEvent(new Event('change', { }));
    expect(tooltip).toHaveBeenCalledWith(undefined, undefined, 1);
  });
});

describe('Remove select listener', () => {
  it('should remove event listener', () => {
    clearShadow();
    State.createShadow();
    const select = document.createElement('select');
    select.addEventListener('change', selectChange);
    select.id = 'gene-select';
    select.removeEventListener = jest.fn();
    State.shadowRoot.appendChild(select);
    removeSelectListener();
    expect(select.removeEventListener).toHaveBeenCalledWith('change', selectChange);
  });
});

describe('Add select listener', () => {
  let select;

  beforeAll(() => {
    clearShadow();
    State.createShadow();
    select = document.createElement('select');
    select.addEventListener = jest.fn();
    select.id = 'gene-select';
    State.shadowRoot.appendChild(select);
  });

  it('should not add event listener when there result arg is undefined', () => {
    select.addEventListener.mockClear();
    addSelectListener();
    expect(select.addEventListener).not.toHaveBeenCalled();
  });

  it('should not add event listener when there are now results', () => {
    select.addEventListener.mockClear();
    addSelectListener([]);
    expect(select.addEventListener).not.toHaveBeenCalled();
  });

  it('should add event listener when there are at least two results', () => {
    addSelectListener([1, 2]);
    expect(select.addEventListener).toHaveBeenCalledWith('change', selectChange);
  });
});
