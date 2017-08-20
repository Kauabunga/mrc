import jss from 'jss';

const styles = {
  container: {
    'height': '72px',
    'margin-bottom': '12px !important',
  },
  '@media (min-width: 960px)': {
    container: {
      'margin-bottom': '0px !important',
    },
  },
  infoContainer: {
    display: 'inline-block',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
