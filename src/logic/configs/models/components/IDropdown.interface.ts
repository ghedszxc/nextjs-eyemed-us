import { SelectHTMLAttributes } from 'react'

export interface IDropdown extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[]
  label?: string
  errorMessage?: string | null
  variant?: 'default' | 'rounded'
}

export interface IOption {
  label: string
  value: string | number
}
