import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddTest from '../AddTest'

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
    }
  }));
  


export default function SubjectAccordion(props){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([false,false,false,false,false]);

    const handleChange = (panel) => (event, isExpanded) => {
        let newArr = [false,false,false,false,false];
        newArr[panel] = isExpanded;
        setExpanded(newArr);
    };
  
  return (
    <div>

<Accordion
    expanded={ expanded[props.id] }
    onChange={handleChange(props.id)}>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls={props.id + "bh-content"}
  id={props.id + "bh-header"}
>
  <Typography className={classes.heading}>{props.title}</Typography>
  <Typography className={classes.secondaryHeading}>{"Aktuelle Note " + props.marks}</Typography>
</AccordionSummary>
<AccordionDetails>
<Card>
<CardContent>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>Art</TableCell>
            <TableCell>Beschreibung</TableCell>
            <TableCell align="right">Punkte</TableCell>
            <TableCell align="right">Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
    <CardActions disableSpacing>
        <AddTest></AddTest>
      </CardActions>
    </Card>

</AccordionDetails>
</Accordion>
</div>
  )}

SubjectAccordion.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    marks: PropTypes.string.isRequired,
    rows: PropTypes.array
};
SubjectAccordion.defaultProps={
    rows: []
}
