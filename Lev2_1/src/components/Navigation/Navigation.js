import { Link } from "react-router-dom";
import styles from '../../styles';
import { useParams } from "react-router-dom";
import { useState } from "react";


function Navigation() {
    const [state, setState] = useState(useParams());
    return (
        <div style={styles.header}>
            <div style={styles.logoBereich}>
                <h1 style={styles.navText}>Kim's Café Köln</h1>
            </div>
            <ul style={styles.rechtButtons}>
                <Link style={state === "speisekarte" ? styles.dunkelButton : styles.hellButton} onClick={() => setState("speisekarte")} to="/speisekarte">Speisekarte</Link>
                <Link style={state === "kontakt" ? styles.dunkelButton : styles.hellButton} onClick={() => setState("kontakt")} to="/kontakt">Kontakt</Link>
                <Link style={state === "oeffnungszeiten" ? styles.dunkelButton : styles.hellButton} onClick={() => setState("oeffnungszeiten")} to="/oeffnungszeiten">Öffnungszeiten</Link>
                <Link style={state === "galarie" ? styles.dunkelButton : styles.hellButton} onClick={() => setState("galarie")} to="/galarie">Galerie</Link>
            </ul>
        </div >
    );
};

export default Navigation;


