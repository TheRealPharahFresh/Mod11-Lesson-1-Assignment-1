import styles from './header.module.css';

function Header() {
    return (
        <div>
            <header className={styles.bg}>
                <p className={styles.header}>Indigo Armaki</p>
            </header>
        </div>
    );
}

export default Header;
