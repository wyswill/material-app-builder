import React from 'react';
import Components from "../Components/Components";
import {makeStyles, createStyles, Theme, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  content: {
    display: 'flex',
    height: '100%',
    textAlign: 'center'
  },
  grid: {

  }
}));
export default function MainPage() {
  const classes = useStyles();
  return (
      <main className={classes.content}>
        <Grid container className={classes.grid}>{Components()}
        </Grid>
        <Grid container className={classes.grid}>
          代码编辑和效果查看区
        </Grid>
        <Grid container className={classes.grid}>
          属性修改区
        </Grid>
      </main>
  );

}