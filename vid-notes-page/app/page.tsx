import Image from 'next/image'
import SubmitLink from './components/SubmitLink';
import Navbar from './components/Navbar';

export default function Home() {
  const imageSettings = 'w-48 m-auto mt-10 mb-10';

  return (
    <>
      <Navbar/>
      <img className={`${imageSettings}`} src='/vid2notes.svg'/>
      <SubmitLink/>
      <div id='usage'>

      </div>
    </>
  );
}
