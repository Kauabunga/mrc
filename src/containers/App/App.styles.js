import jss from 'jss';

const styles = {
  root: {
    'max-width': '800px',
    padding: '0 20px',
    margin: '0 auto',
  },
  container: {
    margin: '0 20px',
    background: '#f7f7f7',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
