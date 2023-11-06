export default function Dashboard() {
  return (
    <div className='max-h-full bg-white'>
      <div className='flex gap-0'>
        <div className='flex items-start gap-0'>
          <div className='flex w-20 max-w-full flex-col items-center self-stretch bg-yellow-400 px-4 pb-[813px] pt-28 max-md:py-24'>
            <div className='mb-0 flex flex-col items-center justify-center self-stretch max-md:mb-2.5'>
              <img loading='lazy' srcSet='/images/avatar.png' />
              <img
                loading='lazy'
                src='/images/plus_icon.svg'
                className='mt-4 aspect-[1.26] w-full grow self-stretch overflow-hidden object-contain object-center'
              />
            </div>
          </div>
          <div className='flex w-[200px] max-w-full flex-col items-center self-stretch bg-stone-600 pb-[650px] pt-28 max-md:py-24'>
            <div className='ml-5 flex w-[119px] max-w-full flex-col items-start self-start max-md:ml-2.5'>
              <div className='self-stretch whitespace-nowrap text-xl font-bold tracking-tight text-white'>
                Tohidul Islam
              </div>
              <div className='mt-1 justify-center self-stretch text-sm tracking-tight text-white'>
                Managing Director
              </div>
            </div>
            <div className='mb-0 mt-16 flex w-full flex-col items-start self-start max-md:mb-2.5 max-md:mt-10'>
              <div className='flex w-full items-start gap-2 self-stretch bg-stone-600 pr-20 max-md:pr-5'>
                <img
                  loading='lazy'
                  src='/images/yellow_arrow_right.svg'
                  className='aspect-[0.15] w-[7px] max-w-full self-stretch overflow-hidden fill-yellow-400 object-contain object-center'
                />
                <img
                  loading='lazy'
                  src='/images/overview_icon.svg'
                  className='my-auto aspect-square w-6 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center'
                />
                <div className='my-auto self-center whitespace-nowrap text-base font-bold tracking-tight text-yellow-400'>
                  Overview
                </div>
              </div>
              <div className='mt-5 flex grow flex-col self-stretch pl-5 pr-20 max-md:pr-5'>
                <div className='flex w-[86px] max-w-full items-start gap-2 self-start'>
                  <img
                    loading='lazy'
                    src='/images/projects_icon.svg'
                    className='aspect-square w-6 max-w-full items-center justify-center self-start overflow-hidden object-contain object-center'
                  />
                  <div className='mt-1.5 self-start whitespace-nowrap text-base tracking-tight text-white'>
                    Projects
                  </div>
                </div>
                <div className='mt-9 flex w-[86px] max-w-full items-start gap-2 self-start'>
                  <img loading='lazy' src='/images/setting_icon.svg' />
                  <div className='self-start whitespace-nowrap text-base tracking-tight text-white'>
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-5 flex  w-full  basis-full flex-col'>
          <div className='mt-7 flex flex-col max-md:max-w-full'>
            <div className='flex w-full items-start justify-between gap-5 self-center px-5 max-md:max-w-full max-md:flex-wrap'>
              <img
                loading='lazy'
                srcSet='/images/3gem_logo.png'
                className='aspect-[2.21] w-[188px] max-w-full self-end overflow-hidden object-contain object-center'
              />
              <div className='mt-9 flex  max-w-full items-start justify-between gap-5 self-end'>
                <div className='flex w-[350px] max-w-full shrink grow basis-auto items-start justify-between gap-5 self-stretch rounded-xl border-[0.7px] border-solid border-gray-400 px-4 py-3.5'>
                  <div className='text-base text-gray-600'>
                    Search your project here...
                  </div>
                  <img
                    loading='lazy'
                    src='/images/search_icon.svg'
                    className='fill-opacity-0 aspect-square w-6 max-w-full self-stretch overflow-hidden fill-black object-contain object-center'
                  />
                </div>
                <img
                  loading='lazy'
                  src='/images/notification_icon.svg'
                  className='my-auto aspect-square w-8 max-w-full self-center overflow-hidden object-contain object-center'
                />
              </div>
            </div>
            <div className='mt-9 flex w-full items-start justify-between gap-5 self-center px-5 max-md:max-w-full max-md:flex-wrap'>
              <div className='mt-2 shrink grow basis-auto self-start text-4xl font-bold text-black max-md:max-w-full'>
                Good evening, tohidul islam
              </div>
              <div className='w-[178px] max-w-full items-center justify-center self-start whitespace-nowrap rounded-xl bg-stone-600 px-5 py-3 text-center text-base font-medium text-white'>
                Create new project
              </div>
            </div>
            <div className='mt-11 flex grow flex-col items-start self-stretch px-5 max-md:mt-10 max-md:max-w-full'>
              <div className='flex w-full  flex-col items-start self-center pr-20 max-md:max-w-full max-md:pr-5'>
                <div className='flex w-[654px] max-w-full items-start justify-between gap-5 self-start max-md:flex-wrap max-md:justify-center'>
                  <div className='flex w-[115px] flex-col items-start self-stretch'>
                    <div className='flex items-start justify-between gap-3 self-stretch'>
                      <div className='self-stretch text-base font-medium tracking-tight text-indigo-400'>
                        All Project
                      </div>
                      <div className='w-8 max-w-full items-center justify-center self-stretch whitespace-nowrap rounded-xl bg-violet-50 px-3 py-1 text-center text-xs font-medium tracking-normal text-indigo-400'>
                        9
                      </div>
                    </div>
                    <div className='mt-2.5 flex h-0.5 w-full flex-col self-stretch bg-indigo-400' />
                  </div>
                  <div className='flex w-[100px] flex-col items-start self-stretch'>
                    <div className='flex items-start justify-between gap-3 self-stretch'>
                      <div className='self-stretch text-base tracking-tight text-zinc-500'>
                        Pending
                      </div>
                      <div className='w-[31px] max-w-full items-center justify-center self-stretch whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-1 text-center text-xs font-medium tracking-normal text-zinc-900'>
                        3
                      </div>
                    </div>
                    <div className='mt-2.5 flex h-0.5 w-full flex-col self-stretch bg-white bg-opacity-0' />
                  </div>
                  <div className='flex w-[119px] flex-col items-start self-stretch'>
                    <div className='flex items-start justify-between gap-3 self-stretch'>
                      <div className='self-stretch text-base tracking-tight text-zinc-500'>
                        In Progress
                      </div>
                      <div className='w-[31px] max-w-full items-center justify-center self-stretch whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-1 text-center text-xs font-medium tracking-normal text-zinc-900'>
                        3
                      </div>
                    </div>
                    <div className='mt-2.5 flex h-0.5 w-full flex-col self-stretch bg-white bg-opacity-0' />
                  </div>
                  <div className='flex w-[119px] flex-col items-start self-stretch'>
                    <div className='flex items-start justify-between gap-3 self-stretch'>
                      <div className='self-stretch text-base tracking-tight text-zinc-500'>
                        Completed
                      </div>
                      <div className='w-[31px] max-w-full items-center justify-center self-stretch whitespace-nowrap rounded-xl bg-zinc-100 px-3 py-1 text-center text-xs font-medium tracking-normal text-zinc-900'>
                        3
                      </div>
                    </div>
                    <div className='mt-2.5 flex h-0.5 w-full flex-col self-stretch bg-white bg-opacity-0' />
                  </div>
                </div>
              </div>
              <div className='mt-5 w-[893px] max-w-full self-start'>
                <div className='flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0'>
                  <div className='flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
                    <div className='flex w-full max-w-[248px] grow flex-col rounded-xl border-[0.45px] border-solid border-neutral-400 py-5 pl-5 pr-5 max-md:mt-10 '>
                      <div className='flex w-full items-start justify-between gap-5 self-stretch pr-px'>
                        <div className='mt-1.5 text-xl font-bold tracking-tight text-stone-600'>
                          Advertising
                        </div>
                        <div className='w-[66px] max-w-full items-center justify-center self-start whitespace-nowrap rounded-xl bg-stone-50 px-3 py-1 text-center text-xs font-medium tracking-normal text-amber-500'>
                          Pending
                        </div>
                      </div>
                      <div className='mt-3 self-stretch text-base font-medium leading-6 text-zinc-900'>
                        Optimize and test all of your ads
                      </div>
                      <div className='mt-6 flex items-start justify-between gap-0 self-stretch pr-5'>
                        <div className='self-start text-base font-bold text-black'>
                          View Project
                        </div>
                        <img
                          loading='lazy'
                          src='/images/black_arrow_right.svg'
                          className='aspect-square w-6 max-w-full self-start overflow-hidden object-contain object-center'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
                    <div className='mx-auto flex w-full max-w-[248px] grow flex-col rounded-xl border-[0.45px] border-solid border-neutral-400 px-5 py-5 max-md:mt-10'>
                      <div className='flex w-full items-start justify-between gap-5 self-stretch'>
                        <div className='mt-1.5 flex-1 text-xl font-bold tracking-tight text-stone-600'>
                          Innovation
                        </div>
                        <div className='flex-1 items-center self-stretch whitespace-nowrap rounded-xl bg-teal-50 py-1 pl-2.5 pr-2 text-xs font-medium tracking-tight text-emerald-500'>
                          Completed
                        </div>
                      </div>
                      <div className='mt-3.5 self-stretch text-base font-medium leading-6 text-zinc-900'>
                        Create a Design System for Enum Workspace.
                      </div>
                      <div className='mt-6 flex items-start justify-between gap-0 self-stretch pr-5'>
                        <div className='self-start text-base font-bold text-black'>
                          View Project
                        </div>
                        <img
                          loading='lazy'
                          src='/images/black_arrow_right.svg'
                          className='aspect-square w-6 max-w-full self-start overflow-hidden object-contain object-center'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full'>
                    <div className='mx-auto flex w-full max-w-[248px] grow flex-col rounded-xl border-[0.45px] border-solid border-neutral-400 px-5 py-5 max-md:mt-10'>
                      <div className='flex items-start justify-between gap-1.5 self-stretch'>
                        <div className='mt-1.5 text-xl font-bold tracking-tight text-stone-600'>
                          Brand & Market
                        </div>
                        <div className='w-[66px] max-w-full items-center justify-center self-start whitespace-nowrap rounded-xl bg-stone-50 px-3 py-1 text-center text-xs font-medium tracking-normal text-amber-500'>
                          Pending
                        </div>
                      </div>
                      <div className='mt-3.5 self-stretch text-base font-medium leading-6 text-zinc-900'>
                        Create a Design System for Enum Workspace.
                      </div>
                      <div className='mt-6 flex items-start justify-between gap-0 self-stretch pr-5'>
                        <div className='self-start text-base font-bold text-black'>
                          View Project
                        </div>
                        <img
                          loading='lazy'
                          src='/images/black_arrow_right.svg'
                          className='aspect-square w-6 max-w-full self-start overflow-hidden object-contain object-center'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
