import { Dialog } from '@mui/material';
import { Flex } from '@/shared/ui';
import { ModalText } from './style';

interface ModalProps {
  isOpen: boolean;
}

export const Modal = ({ isOpen }: ModalProps) => {
  return (
    <Dialog open={isOpen}>
      <Flex
        style={{ padding: '2em', borderRadius: '0.75rem' }}
        $gap={20}
        $justify="space-between"
        $align="center"
        $direction="column"
      >
        <img src="/ic.png" alt="icon" />
        <ModalText>Заявка успешно отправлена!</ModalText>
      </Flex>
    </Dialog>
  );
};
