import { Overlay, ModalBody } from './styles'

interface OrderModalProps {
  visible: boolean
}

export function OrderModal({ visible }: OrderModalProps) {
  if (!visible) {
    return null
  }

  return (
    <Overlay>
      <ModalBody>Order Modal</ModalBody>
    </Overlay>
  )
}
