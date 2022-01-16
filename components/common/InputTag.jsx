const InputTag = ({
  type = 'text',
  width = 'w-full',
  placeholder = 'Placeholder',
  register = () => {},
  name,
  validation,
  errors = [],
}) => {
  return (
    <div className='mb-3 pt-1 '>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ${width} `}
      />
      {errors[name] && (
        <p className={`absolute -bottom-5 right-0 text-xs text-red-600`}>
          {errors[name].message}
        </p>
      )}
    </div>
  )
}

export default InputTag
