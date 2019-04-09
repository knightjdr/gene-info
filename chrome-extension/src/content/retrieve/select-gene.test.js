import selectGene from './select-gene';

describe('Select gene', () => {
  it('should return input text when defined', () => {
    const event = {};
    const text = 'inputText';
    expect(selectGene(event, text)).toBe('inputText');
  });

  it('should return text selected by double-clicking', () => {
    const event = {};
    const text = '';
    global.getSelection = () => ({
      toString: () => ({
        trim: () => 'selectedText',
      }),
    });
    expect(selectGene(event, text)).toBe('selectedText');
  });

  describe('nothing selected', () => {
    it('should return empty string when text and selection empty, and event undefined', () => {
      const event = undefined;
      const text = '';
      global.getSelection = () => ({
        toString: () => undefined,
      });
      expect(selectGene(event, text)).toBe('');
    });

    it('should return empty string when text and selection empty, and event.target undefined', () => {
      const event = {
        target: undefined,
      };
      const text = '';
      global.getSelection = () => ({
        toString: () => undefined,
      });
      expect(selectGene(event, text)).toBe('');
    });

    it('should return empty string when text and selection empty, and targeted node is not allowed', () => {
      const event = {
        target: {
          nodeName: 'SELECT',
        },
      };
      const text = '';
      global.getSelection = () => ({
        toString: () => undefined,
      });
      expect(selectGene(event, text)).toBe('');
    });
  });

  describe('select from inputs in Firefox', () => {
    it('should select text from input', () => {
      const event = {
        target: {
          nodeName: 'INPUT',
          selectionEnd: 16,
          selectionStart: 2,
          value: 'a inputFieldText b',
        },
      };
      const text = '';
      global.getSelection = () => ({
        toString: () => undefined,
      });
      expect(selectGene(event, text)).toBe('inputFieldText');
    });

    it('should select text from textarea', () => {
      const event = {
        target: {
          nodeName: 'TEXTAREA',
          selectionEnd: 19,
          selectionStart: 2,
          value: 'a textAreaFieldText b',
        },
      };
      const text = '';
      global.getSelection = () => ({
        toString: () => undefined,
      });
      expect(selectGene(event, text)).toBe('textAreaFieldText');
    });
  });
});
