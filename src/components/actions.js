'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>VER REPOSITÓRIOS</button>
    <button onClick={getStarred}>VER FAVORITOS</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
