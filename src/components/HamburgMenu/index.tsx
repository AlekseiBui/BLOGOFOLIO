import LoginPlate from '../LoginPlate'
import LightTheme from '../../assets/Light.png'
import DarkTheme from '../../assets/Dark.png'
import styles from './styles.module.scss'
import './styles.module.scss'
import { useAuthContext } from '../../hoc/AuthProvider'
import { Link } from 'react-router-dom'

type Props = {
    isOpen: boolean
}

const HamburgMenu = (props: Props) => {
    let BurgMenuStyle = ''
    if (props.isOpen) { BurgMenuStyle = styles.BurgerMenuOpen } else {
        BurgMenuStyle = styles.BurgerMenuClose
    }

    const OpenCloseMenu = () => { return BurgMenuStyle = styles.BurgerMenuClose }

    const { isAuthorized, login, logout } = useAuthContext()

    if (isAuthorized) {
        return (
            <div className={BurgMenuStyle}>
                <div className={`${styles.BurgerMenu_Top}`}>
                    <LoginPlate username='Alexey Buinevich' isAuthorized={true} />
                    <Link to='/'><button>Home</button></Link>
                    <button >Add post</button>
                    <button >Profile</button>
                </div>
                <div className={`${styles.BurgerMenu_Bottom}`}>
                    <div>
                        <button><img src={`${LightTheme}`} alt="Sun" /></button>
                        <button><img src={`${DarkTheme}`} alt="Moon" /></button>
                    </div>
                    <button onClick={logout}>Log out</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={BurgMenuStyle}>
                <div className={`${styles.BurgerMenu_Top}`}>
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className={`${styles.BurgerMenu_Bottom}`}>
                    <div>
                        <button><img src={`${LightTheme}`} alt="" /></button>
                        <button><img src={`${DarkTheme}`} alt="" /></button>
                    </div>
                    <Link to='/SignIn'><button>Sign in</button></Link>
                </div>
            </div>
        )
    }
}

export default HamburgMenu