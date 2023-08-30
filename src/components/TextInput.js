import PrimaryButton from "./Button/PrimaryButton"

const TextInput = ({ textLabel, placeholder, inputRef, onChange, textValue }) => {
  return (
    <div className="flex flex-col mt-4 p-2">
      <label className="mb-2">{textLabel}</label>
      <input ref={inputRef} value={textValue} onChange={onChange} placeholder={placeholder} className="p-2 outline-none rounded-md bg-blue-100" />
    </div>
  )
}

export default TextInput