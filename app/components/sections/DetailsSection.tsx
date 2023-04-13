type DetailsProps = {
  details: Details
}

const calculateAge = (birthdate: string) => {
  var dob = new Date(birthdate);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();
  var month = today.getMonth() - dob.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
}

export const DetailsSection = ({ details }: DetailsProps) => {
  const { birthdate, local, country, contact } = details


  return <section className="flex flex-wrap justify-center pb-2">
    <p className="text-base p-2 text-center w-full">{calculateAge(birthdate)}, {local}, {country} </p>

    <div className='text-base p-2 text-center w-full'>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
    <div className='text-base flex flex-row p-2 text-center'>
      <img src='/linkedin.svg' width={24} height={24} title="LinkedIn icon" />
      <a href={`https://www.linkedin.com${contact.linkedin}`}>{contact.linkedin}</a>
    </div>

    <div className='text-base flex flex-row p-2 text-center'>
      <img src='/github.svg' width={24} height={24} title="GitHub icon" />
      <a href={`https://github.com/${contact.github}`}>@{contact.github}</a>
    </div>
  </section>
}
