import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...rest }) => {
        return (
          <li className={s.friendListItem} key={id}>
            <FriendListItem {...rest} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
