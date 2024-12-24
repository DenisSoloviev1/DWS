import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import { Flex } from '../Flex';
import { ArrowRight } from '../Icon';

import { IconBtn, SubmitBtn, Text } from './style';

interface Props {
  label: string;
  loading: boolean;
  disabled: boolean;
}

export const SubmitButton: FC<Props> = ({
  label,
  disabled,
  loading,
  ...props
}) => {
  return (
    <SubmitBtn
      {...props}
      type="submit"
      $disabled={disabled}
      disabled={disabled}
    >
      <Flex $justify="space-between" $direction='row'>
        <Text>{label}</Text>
        {!loading ? (
          <IconBtn>
            <ArrowRight stroke={'#fff'} />
          </IconBtn>
        ) : (
          <CircularProgress />
        )}
      </Flex>
    </SubmitBtn>
  );
};
