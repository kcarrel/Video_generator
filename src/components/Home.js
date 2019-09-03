import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const styles = {
    main: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    card: {
        minWidth: '300px',
        alignContent: 'center',
        justify: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        objectFit: 'cover',
        padding: 50
    },
};



class Home extends Component {

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
                        xs={12}
                        s={6}
                        md={4}
                        lg={12}
                        flexjustify="center"
                    >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        PanIt
                                    </Typography>
                                    <Typography component="p">
                                        Save the planet and your wallet! 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </main>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);