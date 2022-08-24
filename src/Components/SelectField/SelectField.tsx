import combineClassNames from "@/utilities/classNames"
import { classPrefix } from "@/utilities/global"
import Select, { LabeledValue } from "antd/lib/select"
import { CSSProperties, ReactNode } from "react"

interface SelectOption {
  label: string
  value: string | number
}

interface OptionProps {
  className: string
  disabled: boolean
  title: string
  value: string | number
}

interface SelectFieldProps {
  allowClear?: boolean
  autoClearSearchValue?: boolean
  autoFocus?: boolean
  bordered?: boolean
  clearIcon?: ReactNode
  defaultActiveFirstOption?: boolean
  defaultOpen?: boolean
  defaultValue?:
    | string
    | string[]
    | number
    | number[]
    | LabeledValue
    | LabeledValue[]
  disabled?: boolean
  dropdownClassName?: string
  dropdownMatchSelectWidth?: boolean | number
  dropdownRender?: (originNode: ReactNode) => ReactNode
  dropdownStyle?: CSSProperties
  // fieldNames?: {label: string, value: string|number, options: OptionProps}
  filterOption?: boolean
  // filterSort?: (optionA: Option, optionB: Option) => number
  // getPopupContainer?: () => void
  labelInValue?: boolean
  listHeight?: number
  loading?: boolean
  maxTagCount?: number
  maxTagPlaceholder?: ReactNode
  maxTagTextLength?: number
  menuItemSelectedIcon?: ReactNode
  mode?: "multiple" | "tags"
  notFoundContent?: ReactNode
  open?: boolean
  optionFilterProp?: string
  optionLabelProp?: string
  options?: OptionProps[]
  placeholder?: ReactNode
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight"
  removeIcon?: ReactNode
  searchValue?: string
  showArrow?: boolean
  showSearch?: boolean
  size?: "large" | "middle" | "small"
  status?: "error" | "warning"
  suffixIcon?: ReactNode
  // tagRender?: (props) => ReactNode
  tokenSeparators?: string[]
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[]
  virtual?: boolean
  onBlur?: () => void
  onChange?: () => void
  onClear?: () => void
  onDeselect?: () => void
  onDropdownVisibleChange?: () => void
  onFocus?: () => void
  onInputKeyDown?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onPopupScroll?: () => void
  onSearch?: (value: string) => void
  onSelect?: () => void
  containerClass?: string
  elementClass?: string
}

const SelectField = (props: SelectFieldProps) => {
  const {
    allowClear,
    autoClearSearchValue,
    autoFocus,
    bordered,
    clearIcon,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    dropdownStyle,
    filterOption,
    labelInValue,
    listHeight,
    loading,
    maxTagCount,
    maxTagPlaceholder,
    maxTagTextLength,
    menuItemSelectedIcon,
    mode,
    notFoundContent,
    open,
    optionFilterProp,
    optionLabelProp,
    options,
    placeholder,
    placement,
    removeIcon,
    searchValue,
    showArrow,
    showSearch,
    size,
    status,
    suffixIcon,
    tokenSeparators,
    value,
    virtual,
    onBlur,
    onChange,
    onClear,
    onDeselect,
    onDropdownVisibleChange,
    onFocus,
    onInputKeyDown,
    onMouseEnter,
    onMouseLeave,
    onPopupScroll,
    onSearch,
    onSelect,
    containerClass,
    elementClass
  } = props
  const containerClassName = combineClassNames([
    `${classPrefix}-input-field-wrapper`,
    containerClass
  ])
  return (
    <div>
      <Select
        allowClear={allowClear}
        autoClearSearchValue={autoClearSearchValue}
        autoFocus={autoFocus}
        bordered={bordered}
        clearIcon={clearIcon}
        defaultActiveFirstOption={defaultActiveFirstOption}
        defaultOpen={defaultOpen}
        defaultValue={defaultValue}
        disabled={disabled}
        dropdownClassName={dropdownClassName}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        dropdownStyle={dropdownStyle}
        filterOption={filterOption}
        labelInValue={labelInValue}
        listHeight={listHeight}
        loading={loading}
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder}
        maxTagTextLength={maxTagTextLength}
        menuItemSelectedIcon={menuItemSelectedIcon}
        mode={mode}
        notFoundContent={notFoundContent}
        open={open}
        optionFilterProp={optionFilterProp}
        optionLabelProp={optionLabelProp}
        options={options}
        placeholder={placeholder}
        placement={placement}
        removeIcon={removeIcon}
        searchValue={searchValue}
        showArrow={showArrow}
        showSearch={showSearch}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        tokenSeparators={tokenSeparators}
        value={value}
        virtual={virtual}
        onBlur={onBlur}
        onChange={onChange}
        onClear={onClear}
        onDeselect={onDeselect}
        onDropdownVisibleChange={onDropdownVisibleChange}
        onFocus={onFocus}
        onInputKeyDown={onInputKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPopupScroll={onPopupScroll}
        onSearch={onSearch}
        onSelect={onSelect}
      ></Select>
    </div>
  )
}

export default SelectField
