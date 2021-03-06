import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

export default function EditStudentModal(props) {


    const [open, setOpen] = useState(false);

    const [state, setState] = useState({
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        gpa: props.gpa
    });

    //This hook simulates a componentDidMount behavior
    useEffect( () => {
        //initialize state by making an api call here
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        props.editStudent(state);
        setOpen(false);
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.id]: (event.target.value)})
    }

    return (
    <div>
        <IconButton 
            aria-label="edit"
            onClick={handleClickOpen}
        >
            <EditIcon />
        </IconButton>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Student</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    value={state.firstName}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                    value={state.lastName}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={handleChange}
                    value={state.email}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="gpa"
                    label="GPA"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    value={state.gpa}
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                Cancel
                </Button>

                <Button onClick={handleSubmit} color="primary">
                Save
                </Button>
            </DialogActions>
            
        </Dialog>
    </div>
    );
    }