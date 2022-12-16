import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/736x/b1/93/8e/b1938e033f60606863defdc3d631d4f8.jpg" />
      </div>
      <div className={s.item}>AVA</div>
    </div>
  );
};

export default ProfileInfo;
