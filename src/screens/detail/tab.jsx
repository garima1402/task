import React from "react";
import { Paper, Tabs, Tab } from "@mui/material";

const TabComponent = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <h2>How to Create Tabs in ReactJS?</h2>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Active TAB One" />
          <Tab label="Active TAB Two" />
          <Tab label="Disabled TAB!" disabled />
          <Tab label="Active Tab Three" />
        </Tabs>
        <h3>TAB NO: {value} clicked!</h3>
      </Paper>
    </div>
  );
};

export default TabComponent;
