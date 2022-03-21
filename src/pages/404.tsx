import type { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <>
      <main className="h-[80vh] w-full flex gap-6 justify-center items-center">
        <h1 className="text-5xl text-primary-navy text-center font-bold font-poppins">
          404
        </h1>
        <div className="h-14 w-0.5 bg-typo-main rounded-full" />
        <p className="font-poppins text-typo-minor">This page could not be found.</p>
      </main>
    </>
  );
};

export default NotFound;
