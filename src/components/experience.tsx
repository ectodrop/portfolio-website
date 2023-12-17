import { ExperienceProps } from "@/proptypes";

export default function Experience(props: ExperienceProps) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1>{props.company}</h1>
                <div>{props.startDate} - {props.endDate}</div>
            </div>
            <div className='text-primary-400'>
                {props.position}
            </div>
            <span className="space-x-2">
                {props.skills.map((skill, i) => {
                    return <span key={i} className="bg-primary-300 p-1 text-sm text-black">{skill}</span>
                })}
            </span>
            <div className='ml-4 leading-8 text-slate-500 text-sm'>
                {props.description}
            </div>
        </div>
    )
}