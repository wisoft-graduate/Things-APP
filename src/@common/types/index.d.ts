import { Dispatch, SetStateAction } from 'react'

export type TextInputCheckType = '' | 'error' | 'check'
export type TextInputType = 'id' | 'password' | 'nickname'

export interface ButtonCompProps {
  isHomeButton?: boolean
  func?: () => void
  text?: string
  isDisabled?: boolean
}

export interface TextInputCompProps {
  placeholder: string
  check?: TextInputCheckType
  value: string
  setValue: Dispatch<SetStateAction<string>>
  isPassword?: boolean
  type?: TextInputType
  setIsChecked?: Dispatch<SetStateAction<boolean>>
}

export interface CloseButtonProps {
  onPress?: () => void
}
