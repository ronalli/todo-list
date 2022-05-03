import { useContext, useState, useRef, useEffect } from 'react';
import style from './index.module.css';
import { ToDoAppContext } from '../../context/context';

const InputTask = (props) => {
  const { removeTask, editTask, sendToArchive } = useContext(ToDoAppContext);
  const { id, title } = props;
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);

  const editTitleInputRef = useRef(null);

  useEffect(() => {
    editTitleInputRef?.current?.focus();
  }, [isEditMode]);

  return (
    <div className={style.inputTask}>
      <label className={style.inputTaskLabel}>
        <input
          type='checkbox'
          disabled={isEditMode}
          checked={checked}
          className={style.inputTaskCheckbox}
          onChange={(e) => {
            setChecked(e.target.checked);
            setTimeout(() => sendToArchive(id), 500);
          }}
        />
        {isEditMode ? (
          <input
            value={value}
            ref={editTitleInputRef}
            onChange={(e) => setValue(e.target.value)}
            className={style.inputTaskTitleEdit}
          />
        ) : (
          <h3 className={style.inputTaskTitle}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          className={style.inputTaskSave}
          aria-label='Save'
          onClick={() => {
            setIsEditMode(false);
            editTask(id, value);
          }}
        ></button>
      ) : (
        <button
          className={style.inputTaskEdit}
          aria-label='Edit'
          onClick={() => {
            setIsEditMode(true);
          }}
        ></button>
      )}
      <button
        className={style.inputTaskRemove}
        aria-label='Remove'
        onClick={() => {
          removeTask(id);
        }}
      ></button>
    </div>
  );
};

export { InputTask };
