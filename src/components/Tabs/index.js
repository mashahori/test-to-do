import { Tabs as MuiTabs, Tab, withStyles } from '@material-ui/core';
import './index.css';

const StyledTabs = withStyles({
  root: {
    padding: '16px',
  }
})(MuiTabs);

const Tabs = ({ changeList, tab }) => {

  const changeTabs = (event, newValue) => {
    changeList(newValue);
  }

  return (
    <>
    <StyledTabs
     value={tab}
     onChange={changeTabs}
     indicatorColor="primary"
    >
      <Tab label='All' />
      <Tab label="Done" />
      <Tab label="Undone" />
    </StyledTabs>
    </>
  );
};

export default Tabs;