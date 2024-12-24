import { TextField, AutocompleteProps } from '@mui/material';
import { forwardRef, LegacyRef, PropsWithChildren } from 'react';

import { Autocomplete, List, ListItem, Paper } from './style';

export interface OptionStruct {
  id: number;
  name: string;
}

interface SelectedProps
  extends Omit<
    AutocompleteProps<OptionStruct, boolean, boolean, boolean>,
    'renderInput'
  > {
  options: OptionStruct[];
  label: string;
  id: string;
}

const ListboxComponent = forwardRef(
  (
    { children, ...props }: PropsWithChildren,
    ref: LegacyRef<HTMLUListElement>,
  ) => {
    return (
      <List ref={ref} {...props}>
        {children}
      </List>
    );
  },
);

const CustomPaper = ({ ...props }) => {
  return <Paper elevation={0} {...props} />;
};

export const Select = ({ options, label, id, ...props }: SelectedProps) => {
  return (
    <Autocomplete
      id={id}
      options={options}
      PaperComponent={CustomPaper}
      ListboxComponent={ListboxComponent}
      getOptionLabel={(option) =>
        typeof option === 'string' ? '' : option.name
      }
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField sx={{ border: 'none' }} {...params} label={label} />
      )}
      renderOption={(props, option: OptionStruct) => (
        <ListItem {...props} key={option.id}>
          {option.name}
        </ListItem>
      )}
      {...props}
    />
  );
};
