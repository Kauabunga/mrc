import PropTypes from 'prop-types';

const props = {
  canHide: PropTypes.bool.isRequired,
  info: PropTypes.string,
  infoContent: PropTypes.any,
  index: PropTypes.number.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  meta: PropTypes.shape({
    error: PropTypes.any,
    warning: PropTypes.any,
    touched: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    initial: PropTypes.any,
  }),
};

export default props;
