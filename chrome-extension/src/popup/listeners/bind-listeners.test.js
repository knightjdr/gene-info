import bindListeners from './bind-listeners';
import { onSearchClick, search } from './search';

jest.mock('./activation-check');
jest.mock('./advanced-settings');
jest.mock('./namespace-check');
jest.mock('./on-change');
jest.mock('./report-check');
jest.mock('./species-on-change', () => jest.fn());
jest.mock('./toggle');
jest.mock('./drag');
jest.mock('./search', () => ({
  onSearchClick: jest.fn(),
  search: jest.fn(),
}));

describe('Bind listeners', () => {
  beforeAll(() => {
    const searchButton = document.createElement('button');
    searchButton.id = 'button_search';
    document.body.appendChild(searchButton);
    const searchInput = document.createElement('input');
    searchInput.id = 'input_search';
    document.body.appendChild(searchInput);
    bindListeners();
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
});
