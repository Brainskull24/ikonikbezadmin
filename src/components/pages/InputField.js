import React from 'react'

const InputField = ({title,placeholder}) => {
  return (
    <div>
      <label htmlFor="input" className="block font-[400]">
        {title}
      </label>
      <div className="flex">
        <input
          type="text"
          id="input"
          placeholder={placeholder}
          className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
        />
      </div>
    </div>
  )
}

export default InputField;
