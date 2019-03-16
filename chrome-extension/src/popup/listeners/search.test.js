import { onSearchClick, search } from './search';
import * as updateTab from './update-tab';

jest.mock('./update-tab', () => ({
  searchTab: jest.fn(),
}));

describe('Search', () => {
  it('should not submit search when enter key is not pressed', () => {
    updateTab.searchTab.mockClear();
    const e = {
      keyCode: 12,
    };
    search(e);
    expect(updateTab.searchTab).not.toHaveBeenCalled();
  });

  it('should not submit search when the input has no value', () => {
    updateTab.searchTab.mockClear();
    const e = {
      keyCode: 12,
      target: {
        value: '',
      },
    };
    search(e);
    expect(updateTab.searchTab).not.toHaveBeenCalled();
  });

  it('should submit search when input has value and enter is pressed', () => {
    updateTab.searchTab.mockClear();
    const e = {
      keyCode: 13,
      target: {
        value: 'test',
      },
    };
    search(e);
    expect(updateTab.searchTab).toHaveBeenCalledWith('search', 'test');
  });
});

describe('Search click', () => {
  beforeAll(() => {
    updateTab.searchTab.mockClear();
    const input = document.createElement('input');
    input.id = 'input_search';
    input.value = 'click_test';
    document.body.appendChild(input);
  });

  it('should call search method on click', () => {
    onSearchClick();
    expect(updateTab.searchTab).toHaveBeenCalledWith('search', 'click_test');
  });
});
