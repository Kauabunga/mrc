import jss from 'jss';

const styles = {
  container: {
    'max-width': '800px',
    padding: '0 20px',
    margin: '0 auto',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
