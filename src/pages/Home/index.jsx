import { useContext, useEffect } from 'react';
import { InputPlus } from '../../components/InputPlus';
import style from './index.module.css';

import { ToDoAppContext } from '../../context/context';
import { InputTask } from '../../components/InputTask';
import { ArchiveTasks } from '../../components/ArchiveTasks';

const Home = () => {
  const { tasks, addTask, setAllTasks, archiveTasks, setArchiveTasks } =
    useContext(ToDoAppContext);

  useEffect(() => {
    setAllTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    setArchiveTasks(JSON.parse(localStorage.getItem('archiveTasks')) || []);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('archiveTasks', JSON.stringify(archiveTasks));
  }, [tasks, archiveTasks]);

  return (
    <article className={style.article}>
      <h1 className={style.articleTitle}>To Do App</h1>
      <section className={style.articalSection}>
        <InputPlus addTask={addTask} />
      </section>
      <section className={style.articalSection}>
        {tasks.map((task) => {
          return <InputTask key={task.id} {...task} />;
        })}
      </section>
      {archiveTasks.length ? (
        <section>
          <hr />
          <ArchiveTasks tasks={archiveTasks} />
        </section>
      ) : null}
    </article>
  );
};

export { Home };
