import Link from "next/link";
import classes from './main-navigation.module.css'
import Logo from '../../component/layout/logo'

function MainNavigation()
{
    return <header className={classes.header}>
        <Link href='/'>
        <Logo/>
        </Link>
        <nav>
            <ul>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/contact">contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;