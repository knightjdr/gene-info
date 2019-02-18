import activationCheck from './activation-check';
import advancedSettings from './advanced-settings';
import bindListeners from './bind-listeners';
import { drag, dragEnd, dragStart } from './drag';
import { onSearchClick, search } from './search';

jest.mock('./activation-check');
jest.mock('./advanced-settings');
jest.mock('./namespace-check');
jest.mock('./on-change');
jest.mock('./report-check');
jest.mock('./species-on-change', () => jest.fn());
jest.mock('./toggle');
jest.mock('./drag', () => ({
  drag: jest.fn(),
  dragEnd: jest.fn(),
  dragStart: jest.fn(),
}));
jest.mock('./search', () => ({
  onSearchClick: jest.fn(),
  search: jest.fn(),
}));

describe('Bind listeners', () => {
  beforeAll(() => {
    // Activate checkboxes.
    const checkbox1 = document.createElement('input');
    checkbox1.id = 'checkbox_one';
    checkbox1.className = 'click-activate';
    document.body.appendChild(checkbox1);
    const checkbox2 = document.createElement('input');
    checkbox2.id = 'checkbox_two';
    checkbox2.className = 'click-activate';
    document.body.appendChild(checkbox2);

    // Advanced setting buttons.
    const button1 = document.createElement('input');
    button1.id = 'as_button_one';
    button1.className = 'advanced-settings';
    document.body.appendChild(button1);
    const button2 = document.createElement('input');
    button2.id = 'as_button_two';
    button2.className = 'advanced-settings';
    document.body.appendChild(button2);

    // Create search elements.
    const searchButton = document.createElement('button');
    searchButton.id = 'button_search';
    document.body.appendChild(searchButton);
    const searchInput = document.createElement('input');
    searchInput.id = 'input_search';
    document.body.appendChild(searchInput);

    // Create draggable divs
    const drag1 = document.createElement('div');
    drag1.id = 'drag_one';
    drag1.setAttribute('draggable', true);
    document.body.appendChild(drag1);
    const drag2 = document.createElement('div');
    drag2.id = 'drag_two';
    drag2.setAttribute('draggable', true);
    document.body.appendChild(drag2);

    bindListeners();
  });

  describe('activate checkboxes', () => {
    it('should bind click handler on first checkbox', () => {
      activationCheck.mockClear();
      const input = document.getElementById('checkbox_one');
      input.dispatchEvent(new Event('click', {}));
      expect(activationCheck).toHaveBeenCalled();
    });

    it('should bind click handler on second checkbox', () => {
      activationCheck.mockClear();
      const input = document.getElementById('checkbox_two');
      input.dispatchEvent(new Event('click', {}));
      expect(activationCheck).toHaveBeenCalled();
    });
  });

  describe('advanced setting checkboxes', () => {
    it('should bind click handler on first button', () => {
      advancedSettings.mockClear();
      const button = document.getElementById('as_button_one');
      button.dispatchEvent(new Event('click', {}));
      expect(advancedSettings).toHaveBeenCalled();
    });

    it('should bind click handler on second button', () => {
      advancedSettings.mockClear();
      const button = document.getElementById('as_button_two');
      button.dispatchEvent(new Event('click', {}));
      expect(advancedSettings).toHaveBeenCalled();
    });
  });

  describe('search', () => {
    it('should bind click listener to button', () => {
      onSearchClick.mockClear();
      const input = document.getElementById('button_search');
      input.dispatchEvent(new Event('click', {}));
      expect(onSearchClick).toHaveBeenCalled();
    });

    it('should bind enter listener to input', () => {
      search.mockClear();
      const input = document.getElementById('input_search');
      input.dispatchEvent(new Event('keypress', { keyCode: 13 }));
      expect(search).toHaveBeenCalled();
    });
  });

  describe('drag', () => {
    describe('first div', () => {
      let div;

      beforeAll(() => {
        div = document.getElementById('drag_one');
      });

      it('should bind drag listener', () => {
        drag.mockClear();
        div.dispatchEvent(new Event('drag', {}));
        expect(drag).toHaveBeenCalled();
      });

      it('should bind dragEnd listener', () => {
        dragEnd.mockClear();
        div.dispatchEvent(new Event('dragend', {}));
        expect(dragEnd).toHaveBeenCalled();
      });

      it('should bind dragStart listener', () => {
        dragStart.mockClear();
        div.dispatchEvent(new Event('dragstart', {}));
        expect(dragStart).toHaveBeenCalled();
      });
    });

    describe('second div', () => {
      let div;

      beforeAll(() => {
        div = document.getElementById('drag_two');
      });

      it('should bind drag listener', () => {
        drag.mockClear();
        div.dispatchEvent(new Event('drag', {}));
        expect(drag).toHaveBeenCalled();
      });

      it('should bind dragEnd listener', () => {
        dragEnd.mockClear();
        div.dispatchEvent(new Event('dragend', {}));
        expect(dragEnd).toHaveBeenCalled();
      });

      it('should bind dragStart listener', () => {
        dragStart.mockClear();
        div.dispatchEvent(new Event('dragstart', {}));
        expect(dragStart).toHaveBeenCalled();
      });
    });
  });
});
