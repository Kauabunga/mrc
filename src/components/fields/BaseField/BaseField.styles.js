import jss from 'jss';

const styles = {
  container: {
    background: 'white',
  },
  infoContainer: {
    display: 'inline-block',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
