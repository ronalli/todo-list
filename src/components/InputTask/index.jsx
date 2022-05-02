import { useState } from 'react';
import style from './index.module.css';

const InputTask = (props) => {
  const { id, title } = props;
  const [checked, setChecked] = useState(false);
  return (
    <div className={style.inputTask}>
      <label className={style.inputTaskLabel}>
        <input
          type='checkbox'
          checked={checked}
          className={style.inputTaskCheckbox}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <h3 className={style.inputTaskTitle}>{title}</h3>
      </label>
      <button
        className={style.inputTaskEdit}
        aria-label='Edit'
        onClick={() => {}}
      ></button>
      <button
        className={style.inputTaskRemove}
        aria-label='Remove'
        onClick={() => {}}
      ></button>
    </div>
  );
};

export { InputTask };
