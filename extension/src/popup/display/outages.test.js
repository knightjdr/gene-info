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
      global.fetch.mockReturnValueOnce(
        Promise.resolve({
          json: () => Promise.resolve({}),
        }),
      );
    });

    it('should not create outage notice', async () => {
      await displayOutages();
      const element = document.querySelector('.outage-notice');
      expect(element).toBeNull();
    });
  });

  describe('there is outage information', () => {
    describe('outage is in the future', () => {
      beforeAll(() => {
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

      it('should not create outage notice', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element).toBeNull();
      });
    });

    describe('outage is in the past', () => {
      describe('outage notice does not exist already', () => {
        beforeAll(() => {
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

        it('should not create outage notice', async () => {
          await displayOutages();
          const element = document.querySelector('.outage-notice');
          expect(element).toBeNull();
        });
      });

      describe('outage notice already exists', () => {
        beforeAll(() => {
          const p = document.createElement('p');
          p.className = 'outage-notice';
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

        it('should remove outage notice', async () => {
          await displayOutages();
          const element = document.querySelector('.outage-notice');
          expect(element).toBeNull();
        });
      });
    });

    describe('outage is happening now', () => {
      const now = new Date();
      const start = new Date(now.getTime() - dayInMs);
      const end = new Date(now.getTime() + dayInMs);

      beforeAll(async () => {
        const div = document.createElement('div');
        div.id = 'dummy';
        document.body.appendChild(div);

        global.fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => Promise.resolve({
              start,
              end,
              message: 'outage reason',
            }),
          }),
        );
        await displayOutages();
      });

      it('should create outage notice as first element', () => {
        const element = document.body.firstChild;
        expect(element.className).toEqual('outage-notice');
      });

      it('should push dummy element to second/last position', () => {
        const element = document.body.lastChild;
        expect(element.id).toBe('dummy');
      });

      it('should set inner text', () => {
        const startFormatted = formatDate(start);
        const endFormatted = formatDate(end);
        const expected = `OUTAGE: GIX will be unavailable for use from ${startFormatted} to `
        + `${endFormatted} due to outage reason.`;

        const element = document.querySelector('.outage-notice');
        expect(element.innerHTML).toBe(expected);
      });
    });
  });

  describe('fetch failure', () => {
    describe('outage notice does not exist already', () => {
      beforeAll(() => {
        global.fetch.mockImplementationOnce(() => Promise.reject(new Error('error')));
      });

      it('should not create outage notice', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element).toBeNull();
      });
    });

    describe('outage notice already exists', () => {
      beforeAll(() => {
        const p = document.createElement('p');
        p.className = 'outage-notice';
        document.body.appendChild(p);

        global.fetch.mockImplementationOnce(() => Promise.reject(new Error('error')));
      });

      it('should remove outage notice', async () => {
        await displayOutages();
        const element = document.querySelector('.outage-notice');
        expect(element).toBeNull();
      });
    });
  });
});
