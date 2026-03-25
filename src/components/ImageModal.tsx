'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ModalContextType {
  openModal: (src: string, alt: string) => void
}

const ModalContext = createContext<ModalContextType>({ openModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

export function ImageModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ src: string; alt: string } | null>(null)

  const openModal = useCallback((src: string, alt: string) => {
    setState({ src, alt })
  }, [])

  const closeModal = useCallback(() => {
    setState(null)
  }, [])

  useEffect(() => {
    if (state) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [state])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state) closeModal()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [state, closeModal])

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={state.src}
                alt={state.alt}
                className="max-w-full max-h-[90vh] object-contain rounded"
              />
              <button
                onClick={closeModal}
                aria-label="Close image"
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surface text-text hover:text-bright flex items-center justify-center text-xl leading-none transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  )
}
