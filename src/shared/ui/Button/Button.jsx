import styles from './Button.module.scss'
import { getStyle } from '../../lib/getStyle/getStyle'
import { Ellipsis } from 'lucide-react'

export const Button = ({
    children,
    className,
    color = 'primary',
    circle = false,
    cta = false,
    loading = false,
    disabled = false,
    ...props
}) => {
    const isDisabled = disabled || color === "disabled";

    const buttonClasses = getStyle(
        styles.button,
        {
            [styles.circle]: circle,
            [styles.cta]: cta,
            [styles.disabled]: isDisabled,
        },
        [
            color !== "disabled" ? styles[color] : null,
            className
        ]
    );

    const showUnderline =
    !cta && (color === "primary" || color === "outline");


    return(
        <button 
        {...props}
        className={buttonClasses}
        disabled={isDisabled}
        >
        {loading ? (
            <Ellipsis
            className={getStyle(styles.loader, {}, [styles.waiting])}
            />
        ) : (
            children
        )}
        {showUnderline && <span className={styles.underLine}/>}
        </button>
    )
}