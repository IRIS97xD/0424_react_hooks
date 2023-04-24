import { useState } from 'react';

const UseMemoTest = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber('');
  };

  return (
    <>
      <h1>useMemo hook</h1>

      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((li, idx) => {
          return <li key={idx}>{li}</li>;
        })}
      </ul>
    </>
  );
};

export default UseMemoTest;