import createHeading from './create-heading';

describe('Create essentiality heading', () => {
  it('should create heading using source DB gene symbol', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        sourceSymbol: 'GENEa',
      },
    };

    const expected = {
      class: 'details-header',
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'ESSENTIALITY' },
        {
          class: 'essentiality__link',
          href: 'https://depmap.org/portal/gene/GENEa?tab=overview',
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: 'DepMap',
        },
      ],
    };

    expect(createHeading(report)[0]).toEqual(expected);
  });

  it('should create heading using official gene symbol when source symbol missing', () => {
    const report = {
      gene: 'GENEA',
      essentiality: {
        sourceSymbol: '',
      },
    };

    const expected = {
      class: 'details-header',
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'ESSENTIALITY' },
        {
          class: 'essentiality__link',
          href: 'https://depmap.org/portal/gene/GENEA?tab=overview',
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: 'DepMap',
        },
      ],
    };

    expect(createHeading(report)[0]).toEqual(expected);
  });
});
