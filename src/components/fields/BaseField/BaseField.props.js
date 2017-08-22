import PropTypes from 'prop-types';

const props = {
  info: PropTypes.string,
  infoContent: PropTypes.any,
  meta: PropTypes.shape({
    error: PropTypes.any,
    warning: PropTypes.any,
    touched: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
  }),
};

export default props;
