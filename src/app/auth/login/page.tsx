'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/buttons/Button';

export default function LoginPage() {
  const [passwordType, setPasswordType] = useState('password');
  const router = useRouter();
  const handleShowPassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleSubmit = () => {
    router.push('/auth/verify');
  };
  return (
    <section className='my-16 rounded-2xl bg-white '>
      <div className='flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0'>
        <div className='flex w-[43%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
          <div className='my-auto flex flex-col max-md:mt-10 max-md:max-w-full'>
            <h1 className='self-center whitespace-nowrap text-5xl font-black leading-[63.84px] text-black'>
              Login
            </h1>
            <p className='mt-2.5 self-stretch text-center text-2xl font-medium text-stone-600 max-md:max-w-full'>
              Ut eget tempor luctus Lorem nibh malesuada Sed dignissim, nibh
              massa consectetur.
            </p>
            <form className='mt-7 flex w-full grow flex-col items-center justify-center self-stretch pb-5 max-md:max-w-full'>
              <div className='flex w-full flex-col items-center self-stretch max-md:max-w-full'>
                <div className='flex flex-col items-start self-stretch max-md:max-w-full'>
                  <label
                    htmlFor='email'
                    className='self-stretch whitespace-nowrap text-base font-medium leading-6 tracking-tight text-zinc-800 max-md:max-w-full'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    value='test@gmail.com'
                    className='grow self-stretch rounded-xl py-5 pl-6 pr-20 text-base font-medium leading-6 tracking-tight text-neutral-500 max-md:max-w-full max-md:px-5'
                    placeholder='Email'
                  />
                </div>
                <div className='relative mt-4 flex flex-col items-start self-stretch max-md:max-w-full'>
                  <label
                    htmlFor='password'
                    className='self-stretch whitespace-nowrap text-base font-medium leading-6 tracking-tight text-zinc-800 max-md:max-w-full'
                  >
                    Password
                  </label>
                  <input
                    type={passwordType}
                    id='password'
                    value='test123'
                    className='grow self-stretch rounded-xl py-5 pl-6 pr-20 text-base font-medium leading-6 tracking-tight text-neutral-500 max-md:max-w-full max-md:px-5'
                    placeholder='Password'
                  />
                  <div
                    onClick={handleShowPassword}
                    className='absolute inset-y-0 right-[4px] top-[24px] flex cursor-pointer py-1.5 pr-1.5'
                  >
                    <Image
                      src='/images/eye_icon.svg'
                      alt='Password'
                      // className='aspect-[1.57] w-full max-w-[22px] flex-1 overflow-hidden object-contain object-center'
                      loading='lazy'
                      width={22}
                      height={14}
                    />
                  </div>
                </div>

                <div className='mt-7 flex w-full items-start justify-between gap-5 self-stretch max-md:flex-wrap'>
                  <div className='flex items-start justify-between gap-2.5 self-stretch'>
                    <input
                      type='checkbox'
                      id='remember'
                      className='my-auto flex h-[17px] w-[17px] shrink-0 grow basis-auto flex-col self-center rounded-md border border-solid border-neutral-500'
                    />
                    <label
                      htmlFor='remember'
                      className='self-stretch whitespace-nowrap text-base font-medium text-neutral-500'
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href='#'
                    className='self-stretch whitespace-nowrap text-base font-medium text-slate-600'
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <Button
                type='button'
                onClick={handleSubmit}
                className='mt-12 w-20 max-w-full grow items-center self-center whitespace-nowrap rounded-xl  px-5 py-3 text-base font-medium text-white max-md:mt-10'
              >
                Login
              </Button>
            </form>
            <div className='mt-12 flex max-w-full items-start gap-2.5 self-center max-md:mt-10'>
              <p className='text-base font-medium text-zinc-800'>
                Don’t have an account?
              </p>
              <Link href='/auth/signup'>Click here</Link>
            </div>
          </div>
        </div>
        <div className='ml-5 flex hidden w-[57%] flex-col items-stretch max-md:ml-0 max-md:w-full lg:block'>
          <div className='mx-auto flex w-full grow flex-col rounded-none bg-amber-300 pb-0 pl-14 pt-20 max-md:mt-10 max-md:max-w-full max-md:pl-5'>
            <Image
              src='/images/auth_login_image.svg'
              alt='Image'
              // className="aspect-[1.1] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              width={747}
              height={682}
              loading='lazy'
              // layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
