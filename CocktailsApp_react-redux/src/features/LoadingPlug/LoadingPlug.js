import React from 'react'
import loader from '../../images/loader.gif'
import styles from './LoadingPlug.module.scss'
const LoadingPlug = () => {
  return (
    <div className={styles.loader}>
        <img src={loader} alt="" />
    </div>

  )
}

export default LoadingPlug