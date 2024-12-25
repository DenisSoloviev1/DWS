import { Dialog } from '@mui/material';
import { Flex } from '@/shared/ui';
import { ModalText } from './style';

export const Modal = ({ isOpen }: {isOpen: boolean}) => {
  return (
    <Dialog open={isOpen}>
      <Flex
        style={{ padding: '30px'}}
        $gap={20}
        $justify="space-between"
        $align="center"
        $direction="column"
      >
        <img src="/ic.png" alt="icon" />
        
        <ModalText>Заявка отправлена</ModalText>
      </Flex>
    </Dialog>
  );
};
