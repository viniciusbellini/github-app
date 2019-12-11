'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userInfo }) => (
  <div className='user-info'>
    <img src={userInfo.photo} />

    <div className='user-info-items'>
      <h1 className={userInfo.username}>
        <a href={`https://github.com/${userInfo.login}`}>
          {userInfo.username}
        </a>
      </h1>

      <ul className='repos-info'>
        <li>Repositorios: {userInfo.repos} </li>
        <li>Seguidores: {userInfo.followers} </li>
        <li>Seguindo: {userInfo.following} </li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })

}
export default UserInfo
