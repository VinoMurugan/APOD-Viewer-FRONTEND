import React, { useState } from 'react';

const DateInput = ({ onDateSubmit }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSubmit(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </label>
      <button type="submit">Show Picture</button>
    </form>
  );
};

export default DateInput;
