import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  main: {
    display: 'block', // Fix IE 11 issue.
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
  },
  card: {
    maxWidth: 900,
    alignContent: 'center',
    justify: 'center',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    padding: 50
  },
};

class About extends Component {
  render() {

    const { classes } = this.props;
    return (
    <main className={classes.main}>
      <Grid
        container spacing={24}
        direction="column"
        justify="center"
        alignItems="center"
      >
      <Grid
        item
        justify="center"
        alignItems="center"
        >
      <Card style={{height: '50%'}}className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              About PanIt
            </Typography>
            <Typography component="p">
              TThis is a great description
            </Typography>
            <br></br>
            </CardContent>
          </CardActionArea>
        </Card>

        
      </Grid>
    </Grid>

    </main>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
