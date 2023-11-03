
"use client";

import { useState, useEffect } from 'react';

const Form = () => {
  const [option, setOption] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().substr(0, 10);
    if (!startDate) {
      setStartDate(today);
      setEndDate(today);
    }
  }, [startDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TBC
  };

  return (
    <div className='border-solid border-2 border-black ml-4 mt-2 p-2 rounded-3xl w-1/3 h-full'>
      <form onSubmit={handleSubmit}>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="">Choose var</option>
          <option value="pH">pH</option>
          <option value="DO">DO</option>
          <option value="XYZ">XYZ</option>
        </select>

        <div>
          <label>Choose start date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className=''
          ></input>
        </div>

        <div>
          <label>Choose end date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className=''
          ></input>
        </div>

        <button type="submit" className=''>Submit</button>
      </form>
    </div>
  );
};

export default Form;
