import activationMethod from './activation-method';
import details from './details';
import reportType from './report-type';

const loadPreferences = () => {
  activationMethod();
  details();
  reportType();
};

export default loadPreferences;
