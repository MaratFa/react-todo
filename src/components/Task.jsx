import clasess from "./Task.module.css";

export default function Task({ title, description }) {
  return (
      <div className={clasess.task}>
        <div className="task-check"></div>
        <div className="task-info"></div>
        <div className="task-actions"></div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  );
}
