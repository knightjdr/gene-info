import panel from '../templates/panel/panel';
import showReport from './show-report';
import tooltip from '../templates/tooltip/tooltip';

jest.mock('../templates/panel/panel');
jest.mock('../templates/tooltip/tooltip');

describe('show report', () => {
  it('should call panel when report type is "detailed"', () => {
    panel.mockClear();
    showReport({}, 'detailed', false);
    expect(panel).toHaveBeenCalledWith(0, false);
  });

  it('should call tooltip when report type is "tooltip"', () => {
    panel.mockClear();
    showReport({}, 'tooltip', false);
    expect(tooltip).toHaveBeenCalledWith({}, false);
  });
});
