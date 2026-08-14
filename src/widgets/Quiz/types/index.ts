import { ICta } from '@/models/ICta'
import { ThemeColor } from '@/types/theme'

export interface IQuiz {
  theme?: ThemeColor
  title?: string
  questions?: QuizQuestion[]
  results?: QuizResult[]
}

type QuizQuestion = {
  id?: string
  title?: string
  cta?: ICta[]
}

type QuizResult = {
  title?: string
  body?: string
  answer?: Record<string, boolean | null>
}
