import { useEffect } from 'react'
import Head from 'next/head'
import Post from '../components/Post';
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    let placeholder = document.querySelector("#headshot-container");
    let smallImg = placeholder.querySelector("IMG");

    let initImage = new Image();
    initImage.src = smallImg.src;
    initImage.onload = () => smallImg.style.opacity = 1;

    let largeImg = new Image();
    largeImg.src = placeholder.dataset.large;
    largeImg.onload = () => setTimeout(() => largeImg.style.opacity = 1, 500);

    placeholder.appendChild(largeImg);
  }, []);

  return (
    <div>
      <Head>
        <title>William Cox</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <div className={styles.header}>

          <div className={styles.circleContainer}>
            <div id="headshot-container" className={styles.circle} data-large="me.png">
              <img className={styles.smallImg} src="smallme.png" />
            </div>
          </div>

          <h1>William Cox</h1>

        </div>

        <div className={styles.socialContainer}>
          <a href="https://github.com/WilliamCox7" className={styles.socialItem}>
            <img src="github.svg" />
            <h2>WilliamCox7</h2>
          </a>
          <a href="https://www.linkedin.com/in/william-cox/" className={styles.socialItem}>
            <img src="linkedin.svg" />
            <h2>/in/william-cox</h2>
          </a>
        </div>

        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <img src="react.svg" />
            <h3>React.js</h3>
          </div>
          <div className={styles.icon}>
            <img src="node.svg" />
            <h3>Node.js</h3>
          </div>
          <div className={styles.icon}>
            <img src="nextjs.svg" />
            <h3>Next.js</h3>
          </div>
          <div className={styles.icon}>
            <img src="mysql.svg" />
            <h3>MySQL</h3>
          </div>
          <div className={styles.icon}>
            <img src="express.svg" />
            <h3>Express</h3>
          </div>
        </div>
        
        <Post config={{
          logo: "textilegraphix.svg",
          company: "Textile Graphix",
          slides: [
            "textilegraphix-slide-1.png",
            "textilegraphix-slide-2.png",
            "textilegraphix-slide-3.png"
          ],
          title: "Full Stack Engineer",
          time: "Sep 2017 - Jan 2019",
          copy: "I was hired to create a web application that allowed clients like the Utah Jazz to custom design and order t-shirts. Check out the sandbox to explore my app!",
          sandbox: "/textilegraphix"
        }} />

        <Post config={{
          logo: "devmountain.svg",
          company: "DevMountain",
          slides: [
            "devmountain-slide-1.png",
            "devmountain-slide-2.png",
            "devmountain-slide-3.png"
          ],
          title: "Jr Full Stack Engineer",
          time: "May 2017 - Sep 2019",
          copy: "As a student turned employee, I built their housing portal from scratch. My first web app!",
          sandbox: "/devmountain"
        }} />

      </main>
    </div>
  )
}
