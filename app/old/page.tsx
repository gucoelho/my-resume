import Image from 'next/image'
import { Inter } from 'next/font/google'
import { data } from '../api/hello/data'

const inter = Inter({ subsets: ['latin'] })

export default function Old() {
  const handleDetails = (detail: string | string[]) => {
    if (Array.isArray(detail))
      return <ul key={detail.length} className='list-disc list-inside'>{detail.map(x => <li key={x}>{x}</li>)}</ul>
    else return <p key={detail}>{detail}</p>
  }

  const calculateAge = () => {
    var dob = new Date(data.details.birthdate);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var month = today.getMonth() - dob.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      <h1 className='text-4xl font-bold text-center'>{data.name}</h1>
      <div className='flex gap-6 min-h-screen sm:flex-row'>
        <aside className='flex flex-col text-right'>
          <section>
            <p className='text-base'>{calculateAge()}, {data.details.local}, {data.details.country} </p>

            <br />

            <h5>Contact</h5>
            <p>{data.details.contact.phone}</p>
            <p>{data.details.contact.email}</p>
            <h5>LinkedIn</h5>
            <a href={`https://www.linkedin.com${data.details.contact.github}`}>{data.details.contact.linkedin}</a>
            <h5>GitHub</h5>
            <a href={`https://github.com/${data.details.contact.github}`}>@{data.details.contact.github}</a>
          </section>

          <section>
            <h3 className='text-xl font-bold'>Education</h3>
            {data.education.map(education =>
              <div key={education.course}>
                <div>{education.course}</div>
                <div>{education.school}</div>
                <div>({education.startYear} - {education.endYear})</div>
              </div>)}
          </section>

          <section>
            <h3 className='text-xl font-bold'>Skills</h3>
            {['backend', 'frontend', 'mobile', 'devops', 'cloud', 'agile'].map(x =>
              <div key={x}>
                <h5>{x.substring(0, 1).toUpperCase() + x.substring(1, x.length).toLowerCase()}</h5>
                <p>{data.skills.filter(f => f.category == x).map(x => x.name).join(', ')}</p>
              </div>)}
          </section>
          <section>
            <h3 className='text-xl font-bold'>Language</h3>
            {data.languages.map(lang =>
              <div key={lang.name}>
                <p>{lang.name}, {lang.level}</p>
              </div>)}
          </section>
        </aside>
        <div className='flex flex-col'>
          <section>
            <h3 className='text-xl font-bold'>Summary</h3>
            <p className='text-base'>{data.summary}</p>
          </section>
          <section>
            <h3 className='text-xl font-bold'>Experience</h3>
            {data.experience.map(e => <div key={e.title}>
              <h5>{e.title}</h5>
              <p>{e.company}</p>
              <br />
              {e.details.map(handleDetails)}
              <br />
            </div>)}
          </section>
        </div>
      </div>
    </main>
  )
}