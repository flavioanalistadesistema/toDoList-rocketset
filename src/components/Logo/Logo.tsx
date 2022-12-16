import { ImgHTMLAttributes } from 'react'

import styles from './Logo.module.css'


export function Logo({...props}: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className={styles.logo}>
            <img 
                {...props}
            />
        </div>
    )
}