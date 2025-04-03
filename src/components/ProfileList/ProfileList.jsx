import s from "./ProfileList.module.css";

const ProfileList = ({ followers, views, likes }) => {
  return (
    <>
      <li className={s.profileListItem}>
        <span className={s.profileItemTitle}>Followers</span>
        <span className={s.profileItemValue}>{followers}</span>
      </li>
      <li className={s.profileListItem}>
        <span className={s.profileItemTitle}>Views</span>
        <span className={s.profileItemValue}>{views}</span>
      </li>
      <li className={s.profileListItem}>
        <span className={s.profileItemTitle}>Likes</span>
        <span className={s.profileItemValue}>{likes}</span>
      </li>
    </>
  );
};

export default ProfileList;
