import { ICta } from '@/models/ICta'

export interface IComparisonChart {
  title?: string
  subtitle?: string
  columns?: ComparisonColumn[]
}

export type ComparisonColumn = ComparisonCell[]
export type ComparisonCell = string | ICta
