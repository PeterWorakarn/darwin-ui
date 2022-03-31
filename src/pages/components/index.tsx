import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Fragment } from 'react';
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
        {ROUTES.filter(i => i.type === 'component').sort((a, b) => (a.hightlight ? 0 : 1) - (b.hightlight ? 0 : 1)).map((route) => {
          if (route.type === 'component') {
            return (
              <div className="relative" key={route.slug}>
                {route.hightlight && (
                  <div className="absolute top-0 -right-[6px]  z-50">
                    <span className="flex h-4 w-4 rounded-full relative ml-auto">
                      <span className="-mt-2 animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-navy opacity-75" />
                      <span className="-mt-2 relative inline-flex rounded-full h-4 w-4 bg-primary-navy" />
                    </span>
                  </div>
                )}
                <Link href={`/components/${route.type === 'component' && route.slug}`}>
                  <div className={`${route.hightlight && 'border-double border-[2px] rounded-md border-primary-navy'} relative`}>
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
