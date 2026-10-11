import styles from './Button.module.scss'
import { getStyle } from '../../lib/getStyle/getStyle'
import { Ellipsis } from 'lucide-react'

export const Button = ({
    children,
    className,
    //color = 'primary' | 'secondary' | 'outline' | 'transperent' |
    color,
    circle,
    cta, 
    loading,
    underline,
    disabled, 
    ...otherProps
}) => {
   
    const buttonClasses = getStyle(
        styles.button,
        {
            [styles.circle]: circle,
            [styles.cta]: cta,
            [styles.disabled]: disabled,
        },
        [
            styles[color],
            className,
        ]
    );

    return(
        <button 
        {...otherProps}
        className={buttonClasses}
        disabled={disabled}
        >
        {loading ? (
            <Ellipsis
            className={getStyle(
                styles.loader, 
                {},
                 [styles.waiting]
                )}
            />
        ) : (
            children
        )}
        {underline && <span className={styles.underline}/>}
        </button>
    )
}