'use client'

import { useEffect, useRef, useState } from 'react'
import { createRoot, Root } from 'react-dom/client'
import clsx from 'clsx'
import style from './styles/index.module.scss'
import { IQuiz } from './types'
import AppConfig from '@/lib/AppConfig'
import Button from '@/components/UI/Button'

const Quiz = ({ title, questions, results, theme }: IQuiz) => {
  const dynamicTheme = theme || 'leaf'

  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const headingRootRef = useRef<Root | null>(null)
  const bodyRootRef = useRef<Root | null>(null)

  const handleAnswer = (category: string, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [category]: value,
    }))
  }

  const getButtonVariant = (category: string, negated?: boolean) => {
    const answer = answers[category]
    const active = typeof answer === 'boolean' ? (negated ? !answer : answer) : false
    return active ? 'primary' : 'secondary'
  }

  useEffect(() => {
    const areAllQuestionsAnswered = () => {
      return questions?.every(q => answers[q?.id || ''] !== undefined)
    }

    const getResult = () => {
      const answersById = questions?.map(q => answers[q?.id ?? ''])
      return results?.find(result => {
        return answersById?.every((value, i) => value === result?.answer?.[i])
      })
    }

    if (!areAllQuestionsAnswered()) return

    const result = getResult()
    if (!result) return

    const titleEl = document.getElementById('m07_title')
    if (titleEl) {
      if (!headingRootRef.current) headingRootRef.current = createRoot(titleEl)
      headingRootRef.current.render(AppConfig.html(result?.title || ''))
    }

    const subtitleEl = document.getElementById('m07_subtitle')
    if (subtitleEl) {
      if (!bodyRootRef.current) bodyRootRef.current = createRoot(subtitleEl)
      bodyRootRef.current.render(AppConfig.html(`<p>${result?.body || ''}</p>`))
    }
  }, [answers, questions, results])

  return (
    <div className={clsx(style.quiz, style[dynamicTheme])}>
      <div className={style.container}>
        <h2>{title}</h2>
        <div className={style.questions}>
          {questions?.map(item => {
            const category = item?.id
            if (!category) return null

            return (
              <div key={category} className={style.item}>
                <h4>{item?.title}</h4>
                {item?.cta?.map(btn => {
                  const isYes = btn?.label?.toLowerCase?.() === 'yes'

                  return (
                    <Button
                      key={`${category}-${btn?.label}`}
                      theme={dynamicTheme}
                      variant={getButtonVariant(category, !isYes)}
                      animate
                      data-question={category}
                      onClick={() => handleAnswer(category, isYes)}
                    >
                      {btn?.label}
                    </Button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Quiz
