import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gpa: 0
    });

    const handleSubmit = () => {
        props.addStudent(state);
        setOpen(false);
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.id]: (event.target.value)})
    }

  return (
    <div>
      <div className="App">
      <Button variant="contained" onClick={handleClickOpen}> Add Student </Button>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Student Information</DialogTitle>
        <DialogContent>
          <TextField
            required
            label="ID"
            variant="filled"

            id="id"
            type="number"
            onChange={handleChange}
          />

          <TextField
            required
            label="First Name"
            variant="filled"

            id="firstName"
            type="text"
            onChange={handleChange}
          />

          <TextField
            required
            label="Last Name"
            variant="filled"

            id="lastName"
            type="text"
            onChange={handleChange}
          />

          <TextField
            required
            label="Email"
            variant="filled"

            id="email"
            type="text"
            onChange={handleChange}
          />

          <TextField
            required
            label="GPA"
            variant="filled"

            id="gpa"
            type="text"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            align-items="center"
            onClick={handleSubmit}
          >
            Add Student
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

