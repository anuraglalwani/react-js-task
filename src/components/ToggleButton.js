import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewListIcon from '@material-ui/icons/ViewList';
import TableChartSharpIcon from '@material-ui/icons/TableChartSharp';

export default function ToggleButtons(props) {
  const [alignment, setAlignment] = React.useState('left');
  // functions to handle click event of the list and table toggle button
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function ListClicked(){
    props.onClick(true);
  }
  function TableClicked(){
    props.onClick(false);
  }
  // returns the two toggle button (list and table)
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="list" aria-label="list" onClick={ListClicked}>
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="table"  aria-label="table" onClick={TableClicked}>
      <TableChartSharpIcon></TableChartSharpIcon>
      </ToggleButton>
  

    </ToggleButtonGroup>
  );
}
