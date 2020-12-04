import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AddTest() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('Test');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
  <AddIcon />
</Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Hinzufügen</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
  <RadioGroup aria-label="type" name="type" row value={value} onChange={handleChange}>
    <FormControlLabel value="Test" control={<Radio />} label="Test" />
    <FormControlLabel value="Arbeit" control={<Radio />} label="Arbeit" />
    <FormControlLabel value="Prüfung" control={<Radio />} label="Prüfung" />
  </RadioGroup>
</FormControl>

<div><div>&nbsp;</div>
<TextField
    id="date"
    label="Datum"
    type="date"
    defaultValue="2020-05-20"
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
  />
</div><div><div>&nbsp;</div>
<TextField id="desc" type="text" placeholder="Beschreibung" fullWidth />
</div><div><div>&nbsp;</div>
<TextField id="points" type="text" placeholder="Punkte" fullWidth/>
</div><div><div>&nbsp;</div>
<TextField id="mark" type="text" placeholder="Note" fullWidth />
</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose}  variant="contained" color="primary">
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
