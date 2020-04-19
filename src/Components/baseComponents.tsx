import React from "react";
import items from "../config/baseComponents";
import { Box, Grid, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    baseComponents: {},
    item: {
      display: "Grid",
      gridTemplateColumns: "repeat(4,25%)",
      wordBreak: "break-all",
    },
    itme2: {
      minHeight: "40px",
    },
  })
);
let components = [];
Object.keys(items).forEach((ele) => {
  components = components.concat(items[ele]);
});
export default function BaseComponents() {
  const classes = useStyles();

  return (
    <Grid container className={classes.item}>
      {components.map((elem) => (
        <Box boxShadow={3} className={classes.itme2} key={elem}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {elem}
          </Grid>
        </Box>
      ))}
    </Grid>
  );
}
