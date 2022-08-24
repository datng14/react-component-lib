import combineClassNames from "@/utilities/classNames"
import { classPrefix } from "@/utilities/global"
import { Input } from "antd"
import { ReactNode } from "react"
import "./InputField.scss"

interface InputFieldProps {
  addonAfter?: ReactNode
  addonBefore?: ReactNode
  allowClear?: boolean
  bordered?: boolean
  defaultValue?: string
  disabled?: boolean
  id?: string
  maxLength?: number
  showCount?: boolean
  status?: "error" | "warning"
  prefix?: ReactNode
  size?: "large" | "middle" | "small"
  suffix?: ReactNode
  type?: string
  value?: string
  placeholder?: string
  onChange?: () => void
  onPressEnter?: () => void
  containerClass?: string
  elementClass?: string
}

const InputField = (props: InputFieldProps) => {
  const {
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    defaultValue,
    disabled,
    id,
    maxLength,
    showCount,
    status,
    prefix,
    size,
    suffix,
    type,
    value,
    placeholder,
    onChange,
    onPressEnter,
    containerClass,
    elementClass,
    ...rest
  } = props
  const containerClassName = combineClassNames([
    `${classPrefix}-input-field-wrapper`,
    containerClass
  ])
  return (
    <div className={containerClassName}>
      <Input
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        allowClear={allowClear}
        bordered={bordered}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        showCount={showCount}
        status={status}
        prefix={prefix}
        size={size}
        suffix={suffix}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
        className={elementClass}
        {...rest}
      />
    </div>
  )
}

export default InputField
