import React from 'react'
import { TextField, Button, Grid, Typography, Container, Paper } from '@material-ui/core'
import { makeStyles } from  "@material-ui/core";
import {CopyToClipboard} from 'copy-to-clipboard'
import {Assignment, Phone, PhoneDisabled} from '@material-ui/icons'
import { SocketContext } from '../SocketContext';
import { useState } from 'react';
import { useContext } from 'react';
import copy from 'copy-to-clipboard';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));


const Options = ({children}) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container} >
      <Paper elevation={10} className={classes.paper} >
        <form className={classes.root} noValidate autoComplete="off" >
          <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={6} className={classes.padding} >
                       <Typography gutterBottom variant='h6' >
                          Account Info
                       </Typography>
                       <TextField  label="Name" value={name} onChange={(e)=>setName(e.target.value)} fullWidth />
                       <copy text={me} className={classes.margin} >
                         <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />} >

                         </Button>

                       </copy>
                </Grid>
          </Grid>

        </form>

      </Paper>


      Options
      {children}
      </Container>
  );
}

export default Options