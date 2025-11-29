// components/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function NavLink({ href, children, onClick, className = '' }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            // Добавляем класс 'group', чтобы при наведении на ссылку мы могли менять стили полоски (span)
            className={`
        group relative block w-fit transition-all duration-200 uppercase tracking-wide
        ${className} 
        ${isActive
                    ? 'text-white md:text-primary-cafe' // Активный: Моб = белый, Десктоп = синий
                    : ' text-white md:text-dark-cafe hover:text-amber-300 md:hover:text-primary-cafe' // Обычный: Моб = белый, Десктоп = темный
                }
      `}
        >
            {children}

            {/* Линия подчеркивания */}
            <span
                className={`
          absolute left-0 -bottom-1 h-[2px] transition-all duration-300
          
          /* ЦВЕТ ЛИНИИ: */
          bg-white md:bg-primary-cafe 
          /* На мобильном линия белая (т.к. фон синий), на десктопе синяя */

          /* АНИМАЦИЯ ШИРИНЫ: */
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
            />
        </Link>
    );
}