import styles from './about.module.css';

function About() {
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>About</h1>
            <blockquote className={styles.bio}>Indigo the founder of the Armaki Corporation got his start as a entry level intern at a company called Arasaka in Night City! Raised as a orphan he jumped hurdles that statistically would seem almost impossible for any average child in those circumstances. After 3 years he was given a management position at the the company, by 26 he felt he knew enough to create his own corporation and thats exactly what he did next. Noone quite knows where he got the capitol to start said Corporation but clearly someone believed enough in him and clearly they were correct to do so. This also caused controversy over the legitimacy of the company which has landed Indigo into several court rooms for answers!</blockquote>
        </div>

    );
}

export default About;