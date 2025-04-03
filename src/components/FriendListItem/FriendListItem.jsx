import s from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={s.friendListImg} src={avatar} alt="Avatar" width="48" />
      <p className={s.friendListName}>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
      {/* <p className={clsx(s.friendListStat)}>
        {isOnline ? "Online" : "Offline"}
      </p> */}
    </>
  );
};

export default FriendListItem;
