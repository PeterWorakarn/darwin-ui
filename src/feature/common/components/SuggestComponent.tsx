import Link from 'next/link';
import * as React from 'react';
import { TComponentName } from '../../../constant-enum-type/component';
import ROUTES from '../../../constant-enum-type/route';
import Card from './Card';

export interface ISuggestComponentProps {
  currentComponent: TComponentName
}

export default function SuggestComponent(props: ISuggestComponentProps) {
  return (
    <div className="w-full px-4 xl:px-2 pt-24 pb-44 xl:pb-56 bg-primary-navy">
      <div className="w-of-container mx-auto flex justify-between items-center">
        <h2 className="text-white text-2xl font-nunito tracking-wider">Related Component</h2>
        <Link href="/components">
          <a className="text-gray-400 mr-1">All</a>
        </Link>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto w-of-container py-5">
        {/* Loop components */}
        {ROUTES.filter(each => each.type === 'component' && each.title !== props.currentComponent).filter((i, idx) => idx <= 6).map((route) => {
          if (route.type === 'component') {
            return (
              <div className="relative" key={route.slug}>
                <Link href={`/components/${route.type === 'component' && route.slug}`}>
                  <div>
                    <a className="absolute w-full h-full opacity-0" />
                    <Card customClassName="h-[90px]" isPublish={route.publish}>{route.type === 'component' && route.component}</Card>
                  </div>
                </Link>
              </div>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
}
