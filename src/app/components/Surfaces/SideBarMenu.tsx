import Styles from './SidebarMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    {
        name: 'Início',
        icon: <i className="ri-home-line"></i>,
        href: '',
    },
    {
        name: 'Pesquisar',
        icon: <i className="ri-search-line"></i>,
        href: '',
    },
    {
        name: 'Categorias',
        icon: <i className="ri-tv-line"></i>,
        href: '',
    },
    {
        name: 'Favoritos',
        icon: <i className="ri-heart-line"></i>,
        href: '',
    },
] as const;

export const SideBarMenu: React.FC = () => {
    return (
        <div className={Styles.container}>
            <Image
                src="/logo.svg"
                alt="Logo do projeto"
                width={56}
                height={56}
            />
            <nav>
                <ul className={Styles.navList}>
                    {navLinks.map((item, index) => (
                        <li key={index} className={Styles.navButton}>
                            <Link href={item.href} title={item.name}>
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
