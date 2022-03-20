import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ROUTES from '../../constant-enum-type/route';
// import Card from '../../feature/common/components/Card';

const Card = dynamic(import('../../feature/common/components/Card'), { ssr: true });

const Component: NextPage = () => {
  return (
    <>
      <section className="h-[430px] pt-20 pb-16 bg-gradient-to-br from-white to-blue-100">
        <div className="w-full w-of-container mx-auto h-full px-4 xl:px-0">
          <div className="max-w-lg flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-7xl font-poppins leading-tight font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-primary-navy">
              Components
            </h1>
            <p className="pl-1 text-base font-nunito">Components are the fundamental building blocks of an interface.</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto w-of-container px-4 xl:px-0 py-5">
        {/* Loop components */}
        {ROUTES.filter(i => i.type === 'component').map((route) => {
          if (route.type === 'component') {
            return (
              <div className="relative" key={route.slug}>
                <Link href={`/components/${route.type === 'component' && route.slug}`}>
                  <div>
                    <a className="absolute w-full h-full opacity-0" />
                    <Card isPublish={route.publish}>{route.type === 'component' && route.component}</Card>
                  </div>
                </Link>
              </div>
            );
          }
          return null;
        })}
      </section>
    </>
  );
};

export default Component;
