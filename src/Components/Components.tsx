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

const useStyles = makeStyles((theme: Theme) => createStyles({
  Components: {
    width:'100%'
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
export default function Components() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
      <div className={classes.Components}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
          >
            <Typography className={classes.heading}>基础组件</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              基础组件itmes
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
          >
            <Typography className={classes.heading}>高级组件</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              高级组件items
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
  );
}