import jss from 'jss';

// TODO use react-jss

const styles = {
  container: {
    margin: '48px 0 192px',
  },
};

export const { classes } = jss.createStyleSheet(styles).attach();
