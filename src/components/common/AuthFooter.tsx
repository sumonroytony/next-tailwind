import Image from 'next/image';
// import { useState } from "react";

export default function AuthFooter() {
  // const [studyContent, setStudyContent] = useState("");

  const handleButtonClick = () => {
    // Handle button click event here
  };

  return (
    <>
      <div className='mt-7 min-h-[1px] w-full self-stretch bg-neutral-200 max-md:max-w-full' />
      <div className='mt-11 flex flex-col'>
        <section className='-mr-5 w-full justify-between self-stretch max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex w-[42%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
              <div className='flex grow flex-col items-start self-stretch max-md:mt-10'>
                <button>
                  <Image
                    loading='lazy'
                    src='/images/3gem_logo.png'
                    alt='Study Material'
                    width='188'
                    height='85'
                  />
                </button>
                <div className='mt-6 self-start text-base leading-6 text-zinc-800'>
                  You can record your study content by study material by study
                  time and amount of study.
                </div>
              </div>
            </div>
            <div className='ml-5 flex w-[22%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
              <div className='mt-1.5 flex flex-col items-start max-md:mt-10'>
                <button className='self-stretch whitespace-nowrap text-base text-zinc-800'>
                  Community Guidelines
                </button>
                <button className='mt-5 self-stretch whitespace-nowrap text-base text-zinc-800'>
                  Terms of use
                </button>
                <button className='mt-5 self-stretch whitespace-nowrap text-base text-zinc-800'>
                  Copyright Policy
                </button>
              </div>
            </div>
            <div className='ml-5 flex w-[19%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
              <div className='my-auto flex flex-col items-start max-md:mt-10'>
                <button className='self-stretch whitespace-nowrap text-base text-zinc-800'>
                  Privacy Policy
                </button>
                <button className='mt-5 self-stretch whitespace-nowrap text-base text-zinc-800'>
                  FAQ
                </button>
                <button className='mt-5 self-stretch whitespace-nowrap text-base text-zinc-800'>
                  About Company
                </button>
                <button className='mt-5 self-stretch whitespace-nowrap text-base text-zinc-800'>
                  Teams
                </button>
              </div>
            </div>
            <div className='ml-5 flex w-[17%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
              <div className='flex w-full max-w-[200px] items-start justify-between gap-5 max-md:mt-10 max-md:justify-center'>
                <button>
                  <Image
                    loading='lazy'
                    src='/images/facebook_icon.png'
                    alt='facebook'
                    width='40'
                    height='40'
                  />
                </button>
                <button>
                  <Image
                    loading='lazy'
                    src='/images/whatsapp_icon.svg'
                    alt='whatsapp'
                    width='40'
                    height='40'
                  />
                </button>
                <button>
                  <Image
                    loading='lazy'
                    src='/images/linkedin_icon.svg'
                    alt='linked in'
                    width='40'
                    height='40'
                  />
                </button>
                <button>
                  <Image
                    loading='lazy'
                    alt='instagram'
                    src='/images/instagram_icon.svg'
                    width='40'
                    height='40'
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='-mr-5 mt-7 min-h-[1px] w-full self-stretch bg-neutral-200 max-md:max-w-full' />
        <div className='mt-11 self-center whitespace-nowrap text-base text-neutral-500 max-md:mt-10'>
          Copyright @ 2023 All right reserve 3Gem
        </div>
      </div>
    </>
  );
}
