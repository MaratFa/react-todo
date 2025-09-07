import classes from "../Notification/Notification.module.css";
import { Alert } from "@mui/material";

export default function Notification({ noti }) {
  return (
    <div className={classes.noti}>
      <Alert severity={noti.type}>{noti?.text ?? "Noti"}</Alert>
    </div>
  );
}
