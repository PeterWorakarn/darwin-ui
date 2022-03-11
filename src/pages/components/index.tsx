import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../../doc/button/Button';
import Checkbox from '../../../doc/checkbox/Checkbox';
import DatePickerContainer from '../../../doc/datepicker/aDatePickerContainer';
import ROUTES from '../../constant-enum-type/route';
import Card from '../../feature/common/components/Card';

const Component: NextPage = () => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-9 mx-auto max-w-4xl py-5">
        {/* Loop components */}
        {ROUTES.filter(i => i.type === 'component').map((route) => {
          if (route.type === 'component') {
            return (
              <Link href={`/components/${route.type === 'component' && route.slug}`}>
                <a>
                  <Card isPublish={route.publish}>{route.type === 'component' && route.component}</Card>
                </a>
              </Link>
            );
          }
          return null;
        })}
      </section>
    </>
  );
};

export default Component;
