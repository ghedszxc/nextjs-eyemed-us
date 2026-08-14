'use client'

import { useState } from 'react'
import clsx from 'clsx'
import style from '../../styles/index.module.scss'
import { ComparisonCell, ComparisonColumn } from '../../types'
import AppConfig from '@/logic/configs/AppConfig'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'

const columnColors = ['leaf', 'grape', 'lips', 'sun', 'moon']

const MobileComparisonTable: React.FC<{ columns?: ComparisonColumn[] }> = ({ columns }) => {
  const [currentColumn, setCurrentColumn] = useState(0)

  if (!columns || columns.length === 0) {
    return null
  }

  // Get highest column length
  const rowCount = Math.max(...columns.map(col => col.length))

  // Transpose: fill missing cells with empty string
  const transposed: ComparisonColumn[] = Array.from({ length: rowCount }, (_, rowIndex) =>
    columns.map(col => col[rowIndex] ?? '')
  )

  const [headerRow, ...bodyRows] = transposed

  const prevColumn = () => {
    const prev = currentColumn - 1

    if (prev >= 0) {
      setCurrentColumn(prev)
    } else {
      setCurrentColumn(columns.length - 2)
    }
  }

  const nextColumn = () => {
    const next = currentColumn + 1

    if (next < columns.length - 1) {
      setCurrentColumn(next)
    } else {
      setCurrentColumn(0)
    }
  }

  const getCell = (cell: ComparisonCell) => {
    if (typeof cell === 'string') {
      if (cell === '-') {
        return (
          <td>
            <Icon type="check" />
          </td>
        )
      }
      return <td>{AppConfig.html(cell)}</td>
    }
    if (typeof cell === 'object' && cell !== null) {
      return (
        <td>
          <Button href={cell.url} animate>
            {AppConfig.html(cell.label)}
          </Button>
        </td>
      )
    }
    return <td>{cell}</td>
  }

  return (
    <table className={clsx(style.mobile, style[columnColors[currentColumn]])}>
      <thead>
        <tr>
          <th>
            <Button
              className={style.left}
              leftIcon={<Icon type="caretRight" />}
              animate
              onClick={prevColumn}
            />
            {AppConfig.html(headerRow[currentColumn + 1].toString())}
            <Button
              className={style.right}
              leftIcon={<Icon type="caretRight" />}
              animate
              onClick={nextColumn}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{AppConfig.html(headerRow[0].toString())}</td>
          <td>{AppConfig.html(headerRow[currentColumn + 1].toString())}</td>
        </tr>
        {bodyRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {getCell(row[0])}
            {getCell(row[currentColumn + 1])}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MobileComparisonTable
