import { Dispatch, SetStateAction } from 'react'

export type TextInputCheckType = '' | 'error' | 'check'

export interface ButtonCompProps {
  isHomeButton?: boolean
  func?: () => void
  text?: string
}

export interface TextInputCompProps {
  placeholder: string
  check?: TextInputCheckType
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isPassword?: boolean
}

export interface CloseButtonProps {
  onPress?: () => void
}
