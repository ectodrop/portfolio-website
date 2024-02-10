import { ProjectProps } from "@/proptypes"

export default function ProjectDescription(props: ProjectProps) {
    const path = props.picture;
    const style = {'--image-url': `url(${path})`} as React.CSSProperties
    return (
        <div className="group">
            <a
                target="_blank"
                href={props.url}
                style={style}
                className={`block aspect-square bg-primary-600 overflow-hidden 
                            bg-cover bg-center bg-no-repeat bg-blend-multiply group-hover:bg-transparent duration-300 bg-[image:var(--image-url)]`}
                >
            </a>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center duration-300 group-hover:text-transparent">
                <a href={props.url} target="_blank" className='text-xl'><b>{props.title} </b> </a>
                <div className="col-span-5 text-left text-primary-400">{props.description}</div>
            </div>
        </div>

    )
}