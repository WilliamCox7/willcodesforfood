import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views'
import styles from '../../styles/Post.module.css'

export default function Post({ config: {
  logo, company, slides, title, time, copy, sandbox
}}) {

  let [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} />
        </div>
        <h3>{company}</h3>
      </div>
      
      <div className={styles.slides}>
        <SwipeableViews index={index} onChangeIndex={setIndex}>
          <img className={styles.slide} src={slides[0]} />
          <img className={styles.slide} src={slides[1]} />
          <img className={styles.slide} src={slides[2]} />
        </SwipeableViews>
        
        <div className={styles.dots}>
          <div style={index === 0 ? { background: "#333641" } : null} className={styles.dot}></div>
          <div style={index === 1 ? { background: "#333641" } : null} className={styles.dot}></div>
          <div style={index === 2 ? { background: "#333641" } : null} className={styles.dot}></div>
        </div>

        {index > 0 ? (
          <div className={styles.arrowLeft} onClick={() => setIndex(--index)}>
            <img src="arrow.svg" />
          </div>
        ) : null}
        
        {index < 2 ? (
          <div className={styles.arrowRight} onClick={() => setIndex(++index)}>
            <img src="arrow.svg" />
          </div>
        ) : null}

      </div>

      <div className={styles.copyContainer}>
        <div className={styles.copyHeaders}>
          <h3>{title}</h3>
          <h3>{time}</h3>
        </div>
        <p>{copy}</p>
      </div>

      <a href={sandbox} className={styles.button}>
        View Sandbox
      </a>

    </div>
  )
}
