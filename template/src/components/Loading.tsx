import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Loading;
