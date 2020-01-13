import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: "center",
    display: "inline-block",
    margin: "1%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const CardView = (props) => {
    const classes = useStyles();

    const {id, variant, title} = props;

    return (
    
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={

                    <IconButton
                        aria-label="more"
                        aria-haspopup="true"
                    >
                        <OpenInNewIcon />
     
                    </IconButton>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={require('./img1.jpg')}
                title="Paella dish"
            />
            <CardContent>

                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"
                >
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>

            </CardContent>

            <CardActions disableSpacing>    
            </CardActions>
        </Card>
    );
}

export default CardView;