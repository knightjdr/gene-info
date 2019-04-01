import panel from '../templates/panel/panel';
import tooltip from '../templates/tooltip/tooltip';

const showReport = (event, reportType, error) => {
  if (reportType === 'detailed') {
    panel(0, error);
  } else {
    tooltip(event, error);
  }
};

export default showReport;
