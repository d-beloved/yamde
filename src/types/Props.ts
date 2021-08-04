import Theme from './Theme'

interface Props {
  value: string
  defaultValue?: string
  handler: (param: string) => void
  theme?: Theme
  toolbar?: string[]
}

export default Props
