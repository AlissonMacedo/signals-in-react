import { useState } from 'react';

const BadPerformance = () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ flexDirection: 'column' }}>
      <h2>Bad Performance</h2>
      <input onChange={(event) => setValue(event.target.value)} />
      <div>Filter: {value}</div>
    </div>
  );
};
export default BadPerformance;
