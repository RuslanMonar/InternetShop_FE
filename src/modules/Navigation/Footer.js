import { React } from 'react';
import classes from '../../css/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone , faSearchLocation , faEnvelope , faLock} from "@fortawesome/free-solid-svg-icons";

 const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.contactInfo}>
                <div className={classes.phoneNumber}>
                    <FontAwesomeIcon icon={faPhone} size="lg" color="gray" />
                    <div>
                        <span className={classes.listItemTitle}>Цілодобова підтримка</span>
                        <span className={classes.listItemTitle}>+380 689 4421</span>
                    </div>
                </div>
                <div className={classes.phoneNumber}>
                    <FontAwesomeIcon icon={faSearchLocation} size="lg" color="gray" />
                    <div>
                        <span className={classes.listItemTitle}>Адресса</span>
                        <span className={classes.listItemTitle}>Львів</span>
                    </div>
                </div>
                <div className={classes.phoneNumber}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
                    <div>
                        <span className={classes.listItemTitle}>Почта</span>
                        <span className={classes.listItemTitle}>InternetShop@gmail.com</span>
                    </div>
                </div>
                <div className={classes.phoneNumber}>
                    <FontAwesomeIcon icon={faLock} size="lg" color="gray" />
                    <div>
                        <span className={classes['listItemTitle' , 'privacy']}><a href="#">Політика конфіденційності</a></span>
                    </div>
                </div>
            </div>
            <div className={classes.headerList}>
                <div className={classes.listItem}>
                    <span className={classes.listItemTitle}>BASE + SHOP</span>
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <div className={classes.listItem}>
                    <span className={classes.listItemTitle}>Rainshternles</span>
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <div className={classes.listItem}>
                    <span className={classes.listItemTitle}>Homaposder</span>
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <div className={classes.listItem}>
                    <span className={classes.listItemTitle}>SupeActronic</span>
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <div className={classes.SocialMediaIconsFooter}>
                    <span>Ми у соціальних мережах:</span>
                    <div className={classes.iconItems}>
                        <FontAwesomeIcon icon={faGoogle} size="lg" color="gray" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" color="gray" />
                        <FontAwesomeIcon icon={faFacebook} size="lg" color="gray" />
                        <FontAwesomeIcon icon={faYoutube} size="lg" color="gray" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer