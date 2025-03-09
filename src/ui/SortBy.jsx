import { useState } from 'react';
import Select from './Select';

function SortBy({ options }) {
  const [value, setValue] = useState('name-asc');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Select
      options={options}
      onChange={handleChange}
      type='white'
      value={value}
    />
  );
}

export default SortBy;
