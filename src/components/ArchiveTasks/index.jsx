import { ArchiveTaskItem } from '../ArchiveTasksItem';

import style from './index.module.css';

const ArchiveTasks = ({ tasks }) => {
  return (
    <>
      <h4 className={style.title}>Archive Tasks</h4>
      {tasks.map((task, index) => {
        return <ArchiveTaskItem key={`${task.id}${index}`} {...task} />;
      })}
    </>
  );
};

export { ArchiveTasks };
