'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/buttons/Button';

export default function VerifyPage() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push('/');
  };
  return (
    <section className='flex flex-col rounded-2xl bg-white px-20 max-md:px-5'>
      <div className='mb-20 mt-4 flex w-[425px] max-w-full flex-col self-center max-md:mb-10'>
        <h1 className='self-center whitespace-nowrap text-5xl font-black leading-[63.84px] text-black'>
          Verify Email
        </h1>
        <p className='mt-2.5 self-stretch text-center text-2xl font-medium text-stone-600 max-md:max-w-full'>
          An authentication verification token has been sent to
          example@gmail.com. Please enter the verification token.
        </p>
        <div className='mt-11 flex w-[325px] max-w-full grow flex-col items-center justify-center self-center max-md:mt-10'>
          <div className='flex items-start gap-4 self-stretch max-md:justify-center'>
            <div className='flex-1 self-stretch whitespace-nowrap rounded-2xl bg-zinc-100 py-7 pl-7 pr-8 text-2xl font-medium tracking-wider text-neutral-500 max-md:px-5'>
              3
            </div>
            <div className='flex-1 self-stretch whitespace-nowrap rounded-2xl bg-zinc-100 py-7 pl-7 pr-8 text-2xl font-medium tracking-wider text-neutral-500 max-md:px-5'>
              5
            </div>
            <div className='flex-1 self-stretch whitespace-nowrap rounded-2xl bg-zinc-100 py-7 pl-7 pr-7 text-2xl font-medium tracking-wider text-neutral-500 max-md:px-5'>
              8
            </div>
            <div className='flex-1 self-stretch whitespace-nowrap rounded-2xl bg-zinc-100 py-7 pl-7 pr-7 text-2xl font-medium tracking-wider text-neutral-500 max-md:px-5'>
              9
            </div>
          </div>
          <div className='mt-12 flex w-[263px] max-w-full items-start justify-center gap-2 self-center max-md:mt-10'>
            <button className='w-[76px] max-w-full items-center self-stretch whitespace-nowrap rounded-xl bg-zinc-100 px-5 py-3 text-base font-medium text-neutral-500'>
              Back
            </button>
            <Button
              type='button'
              onClick={handleSubmit}
              className='bg-primary-50 w-[179px] max-w-full items-center self-stretch whitespace-nowrap rounded-xl px-5 py-3 text-base font-medium text-white'
            >
              Verify Identification
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
