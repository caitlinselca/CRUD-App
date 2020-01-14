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
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { EditStudentForm } from '../students';


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

    const {id, variant, firstName, lastName, removeStudent, email, gpa} = props;
    let history = useHistory();

    return (
    
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {firstName[0]}
                    </Avatar>
                }
                action={

                    <IconButton
                        aria-label="more"
                        aria-haspopup="true"
                        onClick={ () => history.push(`/${variant}/${id}`)}
                    >
                        <OpenInNewIcon />
     
                    </IconButton>
                }
                title={`${firstName} ${lastName}`}
                subheader={email}
            />
            <CardMedia
                className={classes.media}
                image={require('./img1.jpg')}
            />
            <CardContent>

                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"
                >
                    {`${firstName} ${lastName}`} is a student at some campus that has a gpa of {gpa}.
                    <br></br>
                </Typography>

            </CardContent>

            <CardActions disableSpacing>

                <EditStudentForm
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    gpa={gpa}
                    editStudent={props.editStudent}
                ></EditStudentForm>

                <IconButton 
                    aria-label="add to favorites"
                    onClick={ () => {removeStudent(id)}}
                >
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            
            </CardActions>
        </Card>
    );
}

export default CardView;