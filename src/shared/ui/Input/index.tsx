import { InputLabel, TextFieldProps } from '@mui/material';
import { Ref, forwardRef } from 'react';

import { InputField } from './style';

interface Props extends Omit<TextFieldProps, 'variant'> {
  label: string;
}

const Input = forwardRef(
  ({ label, ...props }: Props, ref: Ref<Omit<TextFieldProps, 'variant'>>) => {
    return (
      <div style={{ width: '100%' }}>
        <InputLabel sx={{ marginBottom: 1, color: '#38424F' }}>
          {label}
        </InputLabel>
        <InputField ref={ref} {...props} />
      </div>
    );
  },
);

export { InputField, Input };
