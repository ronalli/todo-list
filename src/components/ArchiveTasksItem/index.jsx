import style from './index.module.css';

const ArchiveTaskItem = (props) => {
  const { title, addDate } = props;
  return (
    <div className={style.archiveTaskItem}>
      <p>{title}</p>
      <p>{new Date(addDate).toLocaleDateString()}</p>
    </div>
  );
};

export { ArchiveTaskItem };
