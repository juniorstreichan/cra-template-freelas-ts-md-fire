import { AppBar, Button, createStyles, Icon, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseAuth from '../services/FirebaseAuth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    emailField: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const user = FirebaseAuth.currentUser;

  const handleLogout = useCallback(() => {
    FirebaseAuth.signOut();
    history.replace('/login');
  }, [history]);

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App
          </Typography>
          <div className={classes.emailField}>{user?.email}</div>
          <Button onClick={handleLogout} color="inherit" variant="text">
            <Icon>logout</Icon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
