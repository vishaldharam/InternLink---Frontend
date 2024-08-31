import React from 'react'

const Inputfield = ({handleSelectCategory, value, title, name}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
  <input
    type="checkbox"
    name={name}
    value={value}
    onChange={handleSelectCategory}
    className="form-checkbox h-4 w-4 text-blue-600 rounded-md"
  />
  <span className="text-primary/80 text-[15px]">{title}</span>
</label>
  )
}

export default Inputfield