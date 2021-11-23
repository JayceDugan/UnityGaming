import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment'
import ExploreIcon from '@mui/icons-material/ExploreOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <Select
        displayEmpty
        IconComponent={KeyboardArrowDownIcon}
        variant="standard"
        value={personName}
        onChange={handleChange}
        sx={{
          '& .MuiSelect-select:focus': {
            background: 'transparent'
          },
          width: 176,
          fontSize: 14,
          fontWeight: 500
        }}
        input={
          <Input
            disableUnderline={true}
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 500,
              fontSize: 14
            }}
            startAdornment={
              <InputAdornment position="start" sx={{ color: theme.palette.text.secondary }}>
                <ExploreIcon />
              </InputAdornment>
            }
          />
        }
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Browse</em>;
          }

          return selected.join(', ');
        }}
        MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}
      >
        <MenuItem disabled value="">
          <em>Browse</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
