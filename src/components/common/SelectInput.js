import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  let WrapperClass = 'form-group';
  if(error && error.length > 0){
    WrapperClass+= "" + 'has-error';
  }

  return(
  <div className={WrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          type="text"
          name={name}
          value={value}
          onChange={onChange}>

          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }

        </select>
        {error && <div className="alert alert-danger">{error} </div>}

      </div>

  </div>
  );
};

SelectInput.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value:PropTypes.string,
  onChange: PropTypes.func,
  defaultOption:PropTypes.string,
  error:PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
