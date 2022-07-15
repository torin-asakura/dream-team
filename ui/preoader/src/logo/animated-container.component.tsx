import React      from 'react'
import { motion } from 'framer-motion'

export const AnimatedContainer = ({ children }) => (
  <motion.div
    key='logo'
    style={{ display: 'flex' }}
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '-100%' }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
)
