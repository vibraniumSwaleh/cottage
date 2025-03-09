import { useState } from 'react';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [value, setValue] = useState('name-asc');
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setValue(e.target.value);
    searchParams.set('SortBy', e.target.value);
    setSearchParams(searchParams);
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
