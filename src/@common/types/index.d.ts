export type TextInputCheckType = '' | 'error' | 'check'

export interface ButtonCompProps {
  isHomeButton?: boolean
  func?: () => void
  text?: string
}

export interface TextInputCompProps {
  placeholder: string
  check?: TextInputCheckType
}

export interface CloseButtonProps {
  onPress?: () => void
}
