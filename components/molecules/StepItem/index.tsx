import Image, { StaticImageData } from "next/image";

interface StepItemProps {
    icon: 'step1' | 'step2' | 'step3';
    title:String;
    desc1:String;
    desc2?:String;
}

export default function StepItem(props: Partial<StepItemProps>) {
    const { icon , title, desc1, desc2} = props;
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <img src={`/icon/${icon}.svg`}  alt="step1" className="mb-30" height={80} width={80}/>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
                <p className="text-lg color-palette-1 mb-0">{desc1}<br />{desc2}</p>
            </div>
        </div>
    )
}
