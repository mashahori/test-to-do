import { useState } from 'react';
import { Tabs as MuiTabs, Tab, withStyles } from '@material-ui/core';
import './index.css';

const StyledTabs = withStyles({
  root: {
    padding: '16px',
  }
})(MuiTabs);

const Tabs = () => {
  const [value, setValue] = useState(0);

  const changeTabs = (value) => {
    setValue(value);
  }

  return (
    <StyledTabs
     value={value}
     //onChange={(value) =>setValue(value)}
     indicatorColor="primary"
    >
      <Tab label="All" />
      <Tab label="Done" />
      <Tab label="Undone" />
    </StyledTabs>
  );
};

export default Tabs;