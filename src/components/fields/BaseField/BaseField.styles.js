import jss from 'jss';

const styles = {
  container: {
    background: '#f7f7f7',
  },
  infoContainer: {
    display: 'inline-block',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
