import jss from 'jss';

const styles = {
  container: {
    'min-height': '64px',
    'margin-bottom': '36px !important',
  },
  '@media (min-width: 960px)': {
    container: {
      'margin-bottom': '0px !important',
    }
  }
};

export const {classes} = jss.createStyleSheet(styles).attach();
