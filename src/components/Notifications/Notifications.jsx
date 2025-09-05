import classes from "./Notifications.module.css";

export default function Notifications({ notifications }) {
  return (
    <div className={classes["noti-wrapper"]}>
      {notifications &&
        notifications.map((noti) => {
          return <div key={noti.id}>{noti.text}</div>;
        })}
    </div>
  );
}
