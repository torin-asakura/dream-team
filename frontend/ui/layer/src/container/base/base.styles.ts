import { styleFn } from 'styled-system'

const createBaseStyles =
  (): styleFn =>
  ({ visible, scroll }) => ({
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    zIndex: 15,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: scroll ? 'scroll' : 'unset',
  })

export { createBaseStyles }
