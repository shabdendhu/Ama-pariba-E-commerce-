import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, Typography } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import Header from "../../Component/templet/header";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

//
const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&$expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&$focused, &$selected, &$selected$focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  focused: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0, 0.5, 0.5),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));
function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon
            color="inherit"
            className={classes.labelIcon}
            style={{ fontSize: "20px" }}
          />
          <Typography
            variant="body2"
            className={classes.labelText}
            style={{ color: "red", fontSize: "20px" }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
        fontSize: "1px",
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

// StyledTreeItem.propTypes = {
//   bgColor: PropTypes.string,
//   color: PropTypes.string,
//   labelIcon: PropTypes.elementType.isRequired,
//   labelInfo: PropTypes.string,
//   labelText: PropTypes.string.isRequired,
// };

const useStyles = makeStyles({
  root: {
    // height: 240,
    // flexGrow: 1,
    // maxWidth: 400,
  },
  root2: {
    color: "red",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
});
const Dataforloop = [
  {
    id: " 1",
    year: "fruits",
    months: [
      { id: "1", name: "fresh fruits", fiels: ["Apple", "Grapes"] },
      { id: "2", name: "chopped fruits", fiels: ["Pinaple", "Guava"] },
      { id: "3", name: "fruit Juice", fiels: ["Watermillon", "mango"] },
    ],
  },
  {
    id: " 2",
    year: "fruits",
    months: [
      { id: "1", name: "fresh fruits", fiels: ["Apple", "Grapes"] },
      { id: "2", name: "chopped fruits", fiels: ["Pinaple", "Guava"] },
      { id: "3", name: "fruit Juice", fiels: ["Watermillon", "mango"] },
    ],
  },
];
const ShopByItemCategory = () => {
  const classes = useStyles();
  //   const [years, setYears] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://careipro.com:9000/site-management/get-visiters-log-files")
  //       .then(({ data }) => {
  //         setYears(data);
  //         let current_year = data[data.length - 1];
  //         let current_month = current_year.months[current_year.months.length - 1];
  //         let file = current_month.fiels[current_month.fiels.length - 1];
  //         //   onOpenFile(current_year.year, current_month.name, file);
  //       });
  //   }, []);
  return (
    <>
      <Header pagetitle={"pagetitle"} />
      <div style={{ marginTop: "50px" }}>
        {/* <HomeBanner /> */}
        {/* <ProductsByCategory /> */}

        {/* <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {Dataforloop.map((year, index) => (
            <TreeItem
              style={{ color: "red", fontSize: "30px" }}
              nodeId={year.id}
              key={`year-${year.id}`}
              label={year.year}
            >
              {year.months.map((month) => (
                <TreeItem
                  style={{ color: "red" }}
                  nodeId={`${year.id}-${month.id}`}
                  key={`${year.id}-${month.id}`}
                  label={month.name}
                >
                  {month.fiels.map((file) => (
                    <TreeItem
                      nodeId={`${year.id}-${month.id}-${file}`}
                      key={`${year.id}-${month.id}-${file}`}
                      label={file}
                      //   onClick={() => {
                      //     onOpenFile(year.year, month.name, file);
                      //   }}
                    />
                  ))}
                </TreeItem>
              ))}
            </TreeItem>
          ))}
        </TreeView> */}
        <TreeView
          aria-label="gmail"
          className={classes.root}
          defaultExpanded={["3"]}
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          defaultEndIcon={<div style={{ width: 24 }} />}
        >
          {/* {Dataforloop.map((year, index) => ( */}
          {Dataforloop.map((year, index) => (
            <StyledTreeItem
              nodeId={year.id}
              key={`year-${year.id}`}
              //   label={year.year}
              nodeId={year.id}
              labelText={year.year}
              labelIcon={Label}
            >
              {year.months.map((month) => (
                <StyledTreeItem
                  nodeId={`${year.id}-${month.id}`}
                  key={`${year.id}-${month.id}`}
                  //   label={month.name}
                  labelText={month.name}
                  labelIcon={SupervisorAccountIcon}
                  labelInfo="90"
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                >
                  {month.fiels.map((file) => (
                    <StyledTreeItem
                      nodeId={`${year.id}-${month.id}-${file}`}
                      key={`${year.id}-${month.id}-${file}`}
                      labelText={file}
                      labelIcon={SupervisorAccountIcon}
                      labelInfo="90"
                      color="#1a73e8"
                      bgColor="#e8f0fe"
                    />
                  ))}
                </StyledTreeItem>
              ))}
            </StyledTreeItem>
            //   <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
          ))}
        </TreeView>
      </div>
    </>
  );
};

export default ShopByItemCategory;
//

//
