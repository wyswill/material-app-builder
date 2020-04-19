import React from "react";
import items from "../config/baseComponents";
import {
  Grid, Paper,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  item: {
    display: 'Grid',
    gridTemplateColumns: 'repeat(4,25%)'
  },
  itme2: {}

}));
export default function BaseComponents() {
  const classes = useStyles();
  return (
      <div className="baseComponents">
        {
          Object.keys(items).map((ele, index) => (
              <Grid container className={classes.item} key={index}>
                {
                  items[ele].map(elem => (
                      <div className={classes.itme2} key={elem}>
                        {elem}
                      </div>
                  ))
                }
              </Grid>
          ))
        }
      </div>
  );

}