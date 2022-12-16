import styles from './Header.module.css'

import imgLogo from '../../assets/Logo.svg'
import { Logo } from '../Logo/Logo'

export function Header() {
    return (
        <header className={styles.header}>
            <Logo 
                src={imgLogo}
                title='Logo do projeto'
            />
        </header>
    )
}