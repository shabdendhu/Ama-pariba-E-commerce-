import React from "react";
import Collapse from "@material-ui/core/Collapse";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core";
import TreeItem from "@material-ui/lab/TreeItem";
import './style.css'

const useStyles = makeStyles({
  root: {
    // height: 110,
    flexGrow: 1,
    // maxWidth: 400,
    background: "white",
    borderRadius: "10px",
    padding:'10px'
  },
 
});
const LeftNav = () => {
  const classes = useStyles();
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        // multiSelect
      >
        <TreeItem nodeId="1" label="Fruits & Vagitables">
          <TreeItem nodeId="2" label="Fresh Fruits" />
          <TreeItem nodeId="3" label="Fresh Vegitables" />
          <TreeItem nodeId="4" label="Herbs & Seasonings" />
          <TreeItem nodeId="5" label="Exotic Fruits & Vegitables" />
        </TreeItem>
        <TreeItem nodeId="6" label="Dairy & Bekery">
          <TreeItem nodeId="7" label="Calendar" />
          <TreeItem nodeId="8" label="Chrome" />
          <TreeItem nodeId="9" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="10" label="Applications">
          <TreeItem nodeId="11" label="Calendar" />
          <TreeItem nodeId="12" label="Chrome" />
          <TreeItem nodeId="13" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="14" label="Applications">
          <TreeItem nodeId="15" label="Calendar" />
          <TreeItem nodeId="16" label="Chrome" />
          <TreeItem nodeId="17" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="18" label="Applications">
          <TreeItem nodeId="19" label="Calendar" />
          <TreeItem nodeId="20" label="Chrome" />
          <TreeItem nodeId="21" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="22" label="Applications">
          <TreeItem nodeId="23" label="Calendar" />
          <TreeItem nodeId="24" label="Chrome" />
          <TreeItem nodeId="25" label="Webstorm" />
        </TreeItem>
        <TreeItem nodeId="26" label="Documents">
          <TreeItem nodeId="27" label="index.js" />
          <TreeItem nodeId="28" label="tree-view.js" />
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default LeftNav;
