import IcoMoon, { IconProps } from "react-icomoon"
const iconSet = require("../../utilities/selection.json")

const Icon = (props: IconProps) => {
  return <IcoMoon iconSet={iconSet} {...props} />
}

export default Icon
