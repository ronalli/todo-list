import { useState } from 'react';
import style from './index.module.css';

const InputPlus = (props) => {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div className={style.inputPlus}>
      <input
        type='text'
        className={style.inputPlusValue}
        value={inputValue}
        placeholder='Type here...'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={style.inputPlusButton}
        onClick={handleSubmit}
        arial-label='Add'
      ></button>
    </div>
  );
};

export { InputPlus };
