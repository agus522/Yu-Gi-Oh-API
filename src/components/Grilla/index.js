import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cardo from '../Card'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Grilla(props) {
  const classes = useStyles();
  const { cartas } = props
  console.log("rrrr",cartas)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cartas.map(carta => {
          return (
            <Grid item xs={3} key={carta._id}>
              <Cardo carta={carta} />
            </Grid>
          )
        })}

      </Grid>
    </div>
  );
}