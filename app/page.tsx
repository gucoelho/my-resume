import Image from 'next/image'
import { Inter } from 'next/font/google'
import { data } from './api/hello/data'
import { DetailsSection } from './components/sections/DetailsSection'
import { Section } from './components/sections/Section'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-8'>
      <h1 className='text-4xl font-bold text-center'>{data.name}</h1>
      <DetailsSection details={data.details} />
      <div className='flex flex-col'>
        <Section title='Summary'>
          <p className='text-base'>{data.summary}</p>
        </Section>
        <Section title='Experience'>
          {data.experience.map(e =>
            <div className='pb-3 last:pb-0' key={e.title}>
              <h5 className='text-xl font-semibold'>{e.title}</h5>
              <p className='text-xl pb-1'>{e.company}</p>
              {e.details.map((detail: string | string[]) =>
                Array.isArray(detail) ?
                  <ul key={detail.length} className='list-disc list-inside'>{detail.map(x => <li className='text-base pb-1' key={x}>{x}</li>)}</ul>
                  : <p className='text-base pb-1' key={detail}>{detail}</p>
              )}
            </div>
          )}
        </Section>
        <Section title='Education'>
          {data.education.map(education =>
            <div key={education.course}>
              <h5 className='text-xl font-semibold pr-1'>{education.course}</h5>
              <div className='flex flex-initial justify-start align-text-bottom items-baseline'>
                <div className='pr-1'>{education.school}</div> <small className='text-sm flex-grow-1 italic align-baseline'>({education.startYear} - {education.endYear})</small>
              </div>
            </div>)}
        </Section>

        <Section title='Skills'>
          <div className='columns-2'>
            {['backend', 'frontend', 'mobile', 'devops', 'cloud', 'agile'].map(category =>
              <div key={category} className='pb-1.5'>
                <h5 className='font-semibold capitalize'>{category}</h5>
                <ul>
                  {data.skills.filter(f => f.category == category).map(x => <li className='text-base' key={x.name}>{x.name}</li>)}
                </ul>
              </div>
            )}
          </div>
        </Section>
        <Section title='Languages'>
          {data.languages.map(lang =>
            <div key={lang.name}>
              <p className='text-base'>{lang.name}, {lang.level}</p>
            </div>)}
        </Section>
      </div>
    </main>
  )
}