import { title } from 'process';
import React from 'react'
interface ReachedItemProps {
    title:String;
    category:String;
}
export default function ReachedItem(props:ReachedItemProps) {
    const {title, category} = props;
    return (
        <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">{category}</p>
        </div>
    )
}
