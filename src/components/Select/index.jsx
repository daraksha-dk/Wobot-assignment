const SelectInput = ({
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
}) => {
  return (
    <div className="App-SelectInput">
      <label htmlFor={name}>{label}</label>
      <div className="App-SelectInput_input-container">
        <select
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="App-SelectInput_error">{error}</div>}
    </div>
  );
};

export default SelectInput;
