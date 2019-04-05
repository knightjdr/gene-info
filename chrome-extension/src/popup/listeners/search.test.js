import { onSearchClick, search } from './search';
import { activeTab } from '../helpers/message';

jest.mock('../helpers/message');

describe('Search', () => {
  it('should not submit search when enter key is not pressed', () => {
    activeTab.mockClear();
    const e = {
      keyCode: 12,
    };
    search(e);
    expect(activeTab).not.toHaveBeenCalled();
  });

  it('should not submit search when the input has no value', () => {
    activeTab.mockClear();
    const e = {
      keyCode: 12,
      target: {
        value: '',
      },
    };
    search(e);
    expect(activeTab).not.toHaveBeenCalled();
  });

  it('should submit search when input has value and enter is pressed', () => {
    activeTab.mockClear();
    const e = {
      keyCode: 13,
      target: {
        value: 'test',
      },
    };
    search(e);
    expect(activeTab).toHaveBeenCalledWith('search', 'test');
  });
});

describe('Search click', () => {
  beforeAll(() => {
    activeTab.mockClear();
    const input = document.createElement('input');
    input.id = 'input_search';
    input.value = 'click_test';
    document.body.appendChild(input);
  });

  it('should call search method on click', () => {
    onSearchClick();
    expect(activeTab).toHaveBeenCalledWith('search', 'click_test');
  });
});
