import http from './http-promise';
import fetch from './fetch';
import showReport from './show-report';
import State from '../state';

jest.mock('./http-promise');
jest.mock('./show-report');

State.init({});

describe('fetch report', () => {
  describe('succesfully', () => {
    beforeAll(async () => {
      showReport.mockClear();
      const reports = [{ gene: 'a' }];
      http.mockResolvedValue(reports);
      await fetch('Homo sapiens', 'gene', 'a', {});
    });

    it('should search term in state', () => {
      expect(State.searchTerm).toBe('a');
    });

    it('should add report to state', () => {
      const expected = [[{ gene: 'a' }]];
      expect(State.results).toEqual(expected);
    });

    it('should call show report with no error', () => {
      expect(showReport).toHaveBeenCalledWith({}, 'detailed');
    });
  });

  describe('failed', () => {
    beforeAll(async () => {
      showReport.mockClear();
      http.mockRejectedValue();
      await fetch('Homo sapiens', 'gene', 'a', {});
    });

    it('should call show report with error', () => {
      expect(showReport).toHaveBeenCalledWith({}, 'detailed', true);
    });
  });
});
