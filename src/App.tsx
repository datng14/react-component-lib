import { createRef, useState } from "react"
import ButtonClick from "./Components/ButtonClick/ButtonClick"
import Icon from "./Components/Icon/Icon"
import InputField from "./Components/InputField/InputField"
import InputSearchField from "./Components/InputSearchField/InputSearchField"

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const onClick = () => {
    console.log("onClick")
  }
  const onSearch = () => {
    console.log("onSearch")
  }
  const viewPassword = () => {
    console.log("viewPassword")
    setShowPassword(!showPassword)
  }
  return (
    <div className="App p-xxl-5">
      <InputField placeholder="search text here" showCount maxLength={100} />
      <InputSearchField
        placeholder="search text here"
        enterButton
        onSearch={onSearch}
      />
      <InputField
        placeholder="enter your password"
        type={showPassword ? "text" : "password"}
        suffix={
          showPassword ? (
            <Icon
              icon="eye"
              size="16"
              className="cursor-pointer"
              onClick={viewPassword}
            />
          ) : (
            <Icon
              icon="eye-off"
              size="16"
              className="cursor-pointer"
              onClick={viewPassword}
            />
          )
        }
      />
      <ButtonClick
        text="Default"
        icon={<Icon icon="chevron-right" size={20} color="#007500" />}
        iconPosition="right"
      />
      <ButtonClick text="Primary has click" type="primary" onClick={onClick} />
      <ButtonClick text="Primary disabled" type="primary" disabled />
      <ButtonClick text="Primary loading" type="primary" loading />
      <ButtonClick text="Ghost" type="ghost" />
      <ButtonClick text="Dashed" type="dashed" />
      <ButtonClick text="Text" type="text" />
      <ButtonClick text="Link" type="link" />
      <ButtonClick text="Ghost" ghost />
      <ButtonClick text="block" block />
    </div>
  )
}

export default App
