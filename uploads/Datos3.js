import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles,} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: '2',
    
  },
  paper: {
    maxWidth: 650,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1)
  },


  rb1:{
    background:'#3f50b5',
    borderRadius: '60px 60px 60px 60px',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
   },

}));

export default function AddressForm() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.rb1}>
        DATOS BANCARIOS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled = {true}
            id="clave"
            name="clave"
            label="Numero clave"
            fullWidth
           
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled = {true}
            id="contraseña"
            name="contraseña"
            label="Contraseña"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled = {true}
            id="nombreContact"
            name="nombreContact"
            label="Nombre contacto"
            fullWidth
            
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
  );
}
