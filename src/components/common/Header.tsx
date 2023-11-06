import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Image
        loading='lazy'
        src='/images/3gem_logo.png'
        alt='Study Material'
        width='188'
        height='85'
      />
    </div>
  );
}
