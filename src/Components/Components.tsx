import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BaseComponents from "./baseComponents";

const useStyles = makeStyles((theme: Theme) => createStyles({
  Components: {
    width: '100%'
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

const options = [{
  name: 'panner1',
  headTitle: '基础组件',
  component: BaseComponents
}, {
  name: 'panner2',
  headTitle: '高级组件',
  component: BaseComponents
}]
export default function Components() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
      <div className={classes.Components}>
        {
          options.map((ele, index: number) => (
              <ExpansionPanel expanded={expanded === ele.name} onChange={handleChange(ele.name)} key={index}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                  <Typography className={classes.heading}>{ele.headTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {ele.component()}
                </ExpansionPanelDetails>
              </ExpansionPanel>
          ))
        }
      </div>
  );
}