'use client';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/buttons/Button';

export default function RegisterPage() {
  const handleSubmit = () => {
    console.log('Register');
  };
  return (
    <div className='my-16 rounded-2xl bg-white'>
      <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
        <div className='relative flex w-[57%] flex-col  max-md:ml-0 max-md:w-full'>
          <Image
            loading='lazy'
            src='/images/register_image.svg'
            // className=' h-full w-full grow overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full'
            height={682}
            width={747}
            alt='Image description'
            // layout='fill'
            // objectFit='cover'
          />
        </div>
        <div className='ml-5 flex w-[43%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
          <div className='my-auto flex flex-col max-md:mt-10 max-md:max-w-full'>
            <h1 className='self-center whitespace-nowrap text-5xl font-black leading-[63.84px] text-black'>
              Sign up
            </h1>
            <p className='mt-3 self-stretch text-center text-2xl font-medium text-stone-600 max-md:max-w-full'>
              An authentication for identity verification will be sent. Enter an
              email address that can be received
            </p>
            <form
              className='mt-11 flex grow flex-col items-center justify-center self-stretch pb-5 max-md:mt-10 max-md:max-w-full'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col items-center self-stretch max-md:max-w-full'>
                <label
                  htmlFor='email'
                  className='self-stretch whitespace-nowrap text-base font-medium leading-6 tracking-tight text-zinc-800 max-md:max-w-full'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='grow self-stretch rounded-xl bg-zinc-100 py-5 pl-6 pr-20 text-base font-medium leading-6 tracking-tight text-neutral-500 max-md:max-w-full max-md:px-5'
                  placeholder='Email'
                />
              </div>
              <Button
                type='submit'
                className='mt-12 w-[74px] max-w-full grow items-center self-center whitespace-nowrap rounded-xl  px-5 py-3 text-base font-medium text-white max-md:mt-10'
              >
                Next
              </Button>
            </form>
            <div className='mt-12 flex max-w-full items-start gap-2.5 self-center max-md:mt-10'>
              <div className='text-base font-medium text-zinc-800'>
                Have an account?
              </div>
              <Link href='/auth/login'>Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
