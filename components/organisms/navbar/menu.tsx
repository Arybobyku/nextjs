import React from 'react'
import cx from 'classnames'
import Link from 'next/link';
import { UrlObject } from 'url';

interface MenuProps {
    title: String;
    href: string | UrlObject;
    isActive?: boolean;
}

export default function Menu(props: Partial<MenuProps>) {
    const { title, isActive, href = "#" } = props;

    const classTitle = cx({
        'nav-link': true,
        'active': isActive,
    });
    return (
        <li className="nav-item my-auto">
            <Link className={classTitle} aria-current="page" href={href}>
                {title}
            </Link>
        </li>
    )
}
