import Image from 'next/image'
import { Inter } from 'next/font/google'
import { data } from './api/hello/data'
import { SectionTitle } from './components/SectionTitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleDetails = (detail: string | string[]) => {
    if(Array.isArray(detail))
      return <ul key={detail.length} className="list-disc list-inside">{detail.map(x => <li className='text-base' key={x}>{x}</li>)}</ul>
    else return <p className='text-base' key={detail}>{detail}</p>
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
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
    <h1 className="text-4xl font-bold text-center">{ data.name }</h1>
        <section className="flex flex-wrap justify-center pb-2">
          <p className="text-base p-2 text-center w-full">{ calculateAge() }, {data.details.local}, {data.details.country} </p>

          <div className='text-base p-2 text-center w-full'>
            <p>{data.details.contact.phone}</p>
            <p>{data.details.contact.email}</p>
          </div>
          <div className='text-base flex flex-row p-2 text-center'>
            <img src='/linkedin.svg' width={24} height={24} title="LinkedIn icon" />
            <a href={`https://www.linkedin.com${data.details.contact.linkedin}`}>{data.details.contact.linkedin}</a>
          </div>

          <div className='text-base flex flex-row p-2 text-center'>
            <img src='/github.svg' width={24} height={24} title="GitHub icon" />
            <a href={`https://github.com/${data.details.contact.github}`}>@{data.details.contact.github}</a>
          </div>
        </section>

        <div className='flex flex-col'>
        <section className="pb-1.5">
          <h3 className="text-2xl font-bold mb-1">Summary</h3>
          <p className="text-base">{ data.summary }</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Experience</h3>
          <br/>
          {data.experience.map(e => <div key={e.title}>
            <h5 className='text-xl font-semibold'>{e.title}</h5>
            <p className='text-xl'>{e.company}</p>
            {e.details.map(handleDetails)}
            <br/>
          </div>)}
        </section>
        <section>
          <h3 className="text-xl font-bold">Education</h3>
          {data.education.map(education => 
          <div key={education.course}>
            <div>{education.course}</div>
            <div>{education.school}</div>
            <div>({education.startYear} - {education.endYear})</div>
          </div>)}
        </section>

        <section>
          <h3 className="text-xl font-bold">Skills</h3>
          {['backend', 'frontend', 'mobile', 'devops', 'cloud', 'agile'].map(x => 
          <div key={x}>
            <h5>{x.substring(0,1).toUpperCase() + x.substring(1, x.length).toLowerCase()}</h5>
            <p>{data.skills.filter(f => f.category == x).map(x => x.name).join(', ')}</p>
          </div>)}
        </section>
        <section>
          <h3 className="text-xl font-bold">Languages</h3>
          {data.languages.map(lang => 
          <div key={lang.name}>
            <p>{lang.name}, {lang.level}</p>
          </div>)}
        </section>
      </div>
    </main>
  )
}