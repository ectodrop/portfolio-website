export type ProjectProps = {
    title: string,
    description?: string,
    picture: string,
    url: string,
}

export type ExperienceProps = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    description: string,
    skills: string[],
}