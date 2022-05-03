import { useContext, useEffect } from 'react';
import { InputPlus } from '../../components/InputPlus';
import style from './index.module.css';

import { ToDoAppContext } from '../../context/context';
import { InputTask } from '../../components/InputTask';

const Home = () => {
  const { tasks, addTask, setAllTasks } = useContext(ToDoAppContext);

  useEffect(() => {
    let newTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setAllTasks(newTasks);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    </article>
  );
};

export { Home };
