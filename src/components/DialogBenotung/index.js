import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SubjectAccordion from '../SubjectAccordion'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(date, type, desc, points, marks) {
    return { date, type, desc, points, marks };
  }
  const rowsMathe = [
    createData('02.04.2020', 'Arbeit', 'Osterarbeit', '24/60', 4),
    createData('15.06.2020', 'Test', '', '30/60', 3.0),
    createData('21.07.2020', 'Test', 'Überraschungstest', '28/60', 3.1),
    createData('30.07.2020', 'Arbeit', 'Statistik', '35/60', 2.7),
    createData('04.08.2020', 'Test', '', '21/60', 4.8),
  ];
  const rowsDeutsch = [
    createData('11.05.2020', 'Diktat', 'Osterarbeit', '55/60', 1.5),
    createData('21.05.2020', 'Aufsatz', '', '45/60', 2.5),
  ];

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Benotung beginnen
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Benotung von Vorname Nachname
            </Typography>
            <Button variant="outlined" autoFocus color="inherit" onClick={handleClose}>
              Speichern
            </Button>
          </Toolbar>
        </AppBar>

      <SubjectAccordion id="0" title="Mathematik" marks="2,0" rows={rowsMathe}></SubjectAccordion>
      <SubjectAccordion id="1" title="Deutsch" marks="2,5"rows={rowsDeutsch}></SubjectAccordion>
      <SubjectAccordion id="2" title="Englisch" marks="1,5"></SubjectAccordion>
      <SubjectAccordion id="3" title="Physik" marks="4,0"></SubjectAccordion>
      <SubjectAccordion id="4" title="Chemie" marks="3,5"></SubjectAccordion>

      </Dialog>
    </div>
  );
}
