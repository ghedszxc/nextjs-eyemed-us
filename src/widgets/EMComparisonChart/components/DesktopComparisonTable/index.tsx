import style from '../../styles/index.module.scss'
import { ComparisonColumn } from '../../types'
import AppConfig from '@/logic/configs/AppConfig'
import Button from '@/components/UI/Button'
import Icon from '@/components/UI/Icon'

const DesktopComparisonTable: React.FC<{ columns?: ComparisonColumn[] }> = ({ columns }) => {
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

  return (
    <table className={style.desktop}>
      <thead>
        <tr>
          {headerRow.map((cell, i) => (
            <th key={i}>{AppConfig.html(cell.toString())}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => {
              if (typeof cell === 'string') {
                if (cell === '-') {
                  return (
                    <td key={colIndex}>
                      <Icon type="check" />
                    </td>
                  )
                }
                return <td key={colIndex}>{AppConfig.html(cell)}</td>
              }
              if (typeof cell === 'object' && cell !== null) {
                return (
                  <td key={colIndex}>
                    <Button href={cell.url} animate fullWidth>
                      {AppConfig.html(cell.label)}
                    </Button>
                  </td>
                )
              }
              return <td key={colIndex}>{cell}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DesktopComparisonTable
