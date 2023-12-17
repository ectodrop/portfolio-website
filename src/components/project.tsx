import { ProjectProps } from "@/proptypes"

export default function ProjectDescription(props: ProjectProps) {
    const path = props.picture;
    const style = {'--image-url': `url(${path})`} as React.CSSProperties
    return (
        <>
            <div className="grid grid-cols-6 gap-4 items-center">
                <a
                    target="_blank"
                    href={props.url}
                    style={style}
                    className={`block aspect-[16/9] col-span-2 bg-primary-600 overflow-hidden shadow-[-20px_-20px_#0f172a]
                                bg-cover bg-center bg-no-repeat bg-blend-overlay hover:bg-transparent duration-300 bg-[image:var(--image-url)]`}
                    >
                </a>
                <div className="col-span-4 gap-2 flex flex-col z-10">
                    <a href={props.url} target="_blank" className='text-xl'><b>{props.title} </b> </a>
                    <div className="col-span-5 text-left text-primary-400">{props.description}</div>
                </div>
            </div>
        </>

    )
}