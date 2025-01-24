import styles from "./contact.module.css";

function Contact() {
    return(
        <div className={styles.container}>
            <h2>Contact Information</h2>
            <p>Email: @indigoarmaki@amarkicorporation.com</p>
            <p>Phone Number: 229-931-2625</p>
            <a href="www.linkedin.com/IndigoArmaki">Indigo Armaki</a>
            
        </div>
    );
}

export default Contact;