import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddStudentForm(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
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
        <Button variant="contained" color="primary" onClick={handleClickOpen}> Add Student </Button>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Student Information</DialogTitle>
        <DialogContent>
            <TextField
                required
                label="First Name"
                fullWidth
                margin="dense"
                autoFocus
                id="firstName"
                type="text"
                onChange={handleChange}
            />
            <TextField
                required
                label="Last Name"
                fullWidth
                margin="dense"
                autoFocus
                id="lastName"
                type="text"
                onChange={handleChange}
            />
            <TextField
                required
                label="Email"
                fullWidth
                margin="dense"
                autoFocus
                id="email"
                type="email"
                onChange={handleChange}
            />
            <TextField
                required
                label="GPA"
                fullWidth
                margin="dense"
                autoFocus
                id="gpa"
                type="number"
                onChange={handleChange}
            />
            <TextField
                required
                label="Campus"
                fullWidth
                margin="dense"
                autoFocus
                id="campusid"
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

