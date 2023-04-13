import { PropsWithChildren } from "react"

type SectionProps = PropsWithChildren & {
    title: string
}

export const Section = ({ title, children }: SectionProps) =>
    <section className="pb-3">
        {title && <h3 className="text-2xl font-bold mb-1">{title}</h3>}
        {children}
    </section>