import combineClassNames from "@/utilities/classNames"
import { Button } from "antd"
import { MouseEventHandler, ReactNode } from "react"
import { classPrefix } from "../../utilities/global"
import "./ButtonClick.scss"

interface ButtonClickProps {
  block?: boolean
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
  href?: string
  htmlType?: "button" | "submit" | "reset" | undefined
  icon?: ReactNode
  iconPosition?: "left" | "right"
  loading?: boolean
  shape?: "default" | "circle" | "round"
  size?: "large" | "middle" | "small"
  target?: string
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default"
  onClick?: MouseEventHandler<HTMLButtonElement>
  containerClass?: string
  elementClass?: string
  text?: string
  children?: ReactNode | string
}

const ButtonClick = (props: ButtonClickProps) => {
  const {
    block,
    danger,
    disabled,
    ghost,
    href,
    htmlType = "button",
    icon,
    iconPosition = "left",
    loading,
    shape,
    size = "middle",
    target = "",
    type,
    onClick,
    containerClass = "",
    elementClass = "",
    text = "",
    children,
    ...rest
  } = props
  const containerClassName = combineClassNames([
    `${classPrefix}-btn-wrapper`,
    containerClass
  ])

  return (
    <div className={containerClassName}>
      <Button
        block={block}
        danger={danger}
        disabled={disabled}
        ghost={ghost}
        href={href}
        htmlType={htmlType}
        loading={loading}
        shape={shape}
        size={size}
        target={target}
        type={type}
        onClick={onClick}
        className={`${elementClass} d-flex align-items-center`}
        {...rest}
      >
        {iconPosition === "left" && icon}
        {children || <span>{text}</span>}
        {iconPosition === "right" && icon}
      </Button>
    </div>
  )
}

export default ButtonClick
