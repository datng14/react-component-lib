import combineClassNames from "@/utilities/classNames"
import { classPrefix } from "@/utilities/global"
import { Input } from "antd"
import { ReactNode } from "react"

interface InputSearchFieldProps {
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
  enterButton?: boolean | ReactNode
  loading?: boolean
  onSearch?: () => void
}

const InputSearchField = (props: InputSearchFieldProps) => {
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
    enterButton,
    loading,
    onSearch,
    ...rest
  } = props
  const containerClassName = combineClassNames([
    `${classPrefix}-input-field-wrapper`,
    containerClass
  ])
  return (
    <div className={containerClassName}>
      <Input.Search
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
        enterButton={enterButton}
        loading={loading}
        onSearch={onSearch}
        {...rest}
      />
    </div>
  )
}

export default InputSearchField
