import displayOutages, { formatDate } from './outages';

// const DATE_TO_USE = new Date('Tue Feb 08 2022 9:00:00 GMT-0500');

const origFetch = global.fetch;
global.fetch = jest.fn();

const dayInMs = 24 * 60 * 60 * 1000;

afterAll(() => {
  global.fetch = origFetch;
});

describe('Outage notice', () => {
  describe('there is no outage information', () => {
    beforeAll(() => {
      const p = document.createElement('p');
      p.className = 'outage-notice';
      p.style.display = 'none';
      document.body.appendChild(p);

      global.fetch.mockReturnValueOnce(
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      );
    });

    it('should set display property to none', async () => {
      await displayOutages();
      const element = document.querySelector('.outage-notice');
      expect(element.style.display).toBe('none');
    });
  });

  describe('there is outage information', () => {
    describe('outage is in the future', () => {
      beforeAll(() => {
        const p = document.createElement('p');
        p.className = 'outage-notice';
        p.style.display = 'none';
        document.body.appendChild(p);

        const now = new Date();
        global.fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => Promise.resolve({
              start: new Date(now.getTime() + dayInMs),
              end: new Date(now.getTime() + (2 * dayInMs)),
            }),
          }),
        );
      });

      it('should set display property to none', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element.style.display).toBe('none');
      });
    });

    describe('outage is in the past', () => {
      beforeAll(() => {
        const p = document.createElement('p');
        p.className = 'outage-notice';
        p.style.display = 'none';
        document.body.appendChild(p);

        const now = new Date();
        global.fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => Promise.resolve({
              start: new Date(now.getTime() - (2 * dayInMs)),
              end: new Date(now.getTime() - dayInMs),
            }),
          }),
        );
      });

      it('should set display property to none', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element.style.display).toBe('none');
      });
    });

    describe('outage is happening now', () => {
      const now = new Date();
      const start = new Date(now.getTime() - dayInMs);
      const end = new Date(now.getTime() + dayInMs);

      beforeAll(() => {
        const p = document.createElement('p');
        p.className = 'outage-notice';
        p.style.display = 'none';
        document.body.appendChild(p);

        global.fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => Promise.resolve({
              start,
              end,
              message: 'outage reason',
            }),
          }),
        );
      });


      it('should set display property to block', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element.style.display).toBe('block');
      });

      it('should set inner text', async () => {
        const startFormatted = formatDate(start);
        const endFormatted = formatDate(end);
        const expected = `OUTAGE: GIX will be unavailable for use from ${startFormatted} to `
        + `${endFormatted} due to outage reason.`;

        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element.innerHTML).toBe(expected);
      });
    });
  });

  describe('fetch failure', () => {
    beforeAll(() => {
      const p = document.createElement('p');
      p.className = 'outage-notice';
      p.style.display = 'none';
      document.body.appendChild(p);

      global.fetch.mockImplementationOnce(() => Promise.reject(new Error('error')));
    });

    it('should set display property to none', async () => {
      await displayOutages();
      const element = document.querySelector('.outage-notice');
      expect(element.style.display).toBe('none');
    });
  });
});
