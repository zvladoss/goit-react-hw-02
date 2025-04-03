import ProfileList from "../ProfileList/ProfileList";
import s from "./Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileInfoWrapper}>
        <div className={s.profileImgWrapper}>
          <img
            className={s.profileInfoImg}
            src={avatar}
            alt="User avatar"
            width="201"
          />
        </div>
        <div className={s.profileInfo}>
          <p className={s.profileInfoUsername}>{username}</p>
          <p className={s.profileInfoTag}>@{tag}</p>
          <p className={s.profileInfoLocation}>{location}</p>
        </div>
      </div>
      <ul className={s.profileList}>
        <ProfileList {...stats} />
      </ul>
    </div>
  );
};

export default Profile;
