import { useContext } from 'react';
import { ToDoAppContext } from '../../context/context';

import { ArchiveTaskItem } from '../ArchiveTasksItem';

import style from './index.module.css';

const ArchiveTasks = ({ tasks }) => {
  const { removeArchive } = useContext(ToDoAppContext);

  return (
    <div className={style.archiveTasks}>
      <h4 className={style.archiveTasksTitle}>Archive Tasks</h4>
      {tasks.map((task, index) => {
        return <ArchiveTaskItem key={`${task.id}${index}`} {...task} />;
      })}
      <button
        className={style.archiveTasksButton}
        onClick={() => setTimeout(() => removeArchive(), 500)}
      >
        Очистить архив
      </button>
    </div>
  );
};

export { ArchiveTasks };
