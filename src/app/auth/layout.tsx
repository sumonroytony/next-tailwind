import AuthFooter from '@/components/common/AuthFooter';
import Header from '@/components/common/Header';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='mb-[2%] mt-[2%] px-[15%] xl:px-[20%]'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <nav></nav>

      {children}

      <AuthFooter />
    </section>
  );
}
