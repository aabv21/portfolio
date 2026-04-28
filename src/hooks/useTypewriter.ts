'use client'

import { useState, useEffect, useRef } from 'react'

const TYPE_SPEED = 55
const DELETE_SPEED = 28
const PAUSE_AFTER = 1800
const PAUSE_BETWEEN = 400

export function useTypewriter(questions: readonly string[]): string {
  const [text, setText] = useState('')
  const qi = useRef(0)
  const ci = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    qi.current = 0
    ci.current = 0
    deleting.current = false
    setText('')

    if (questions.length === 0) return

    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const question = questions[qi.current]

      if (!deleting.current) {
        ci.current += 1
        setText(question.slice(0, ci.current))

        if (ci.current === question.length) {
          deleting.current = true
          timeout = setTimeout(tick, PAUSE_AFTER)
          return
        }
        timeout = setTimeout(tick, TYPE_SPEED)
      } else {
        ci.current -= 1
        setText(question.slice(0, ci.current))

        if (ci.current === 0) {
          deleting.current = false
          qi.current = (qi.current + 1) % questions.length
          timeout = setTimeout(tick, PAUSE_BETWEEN)
          return
        }
        timeout = setTimeout(tick, DELETE_SPEED)
      }
    }

    timeout = setTimeout(tick, 800)
    return () => clearTimeout(timeout)
  }, [questions])

  return text
}
