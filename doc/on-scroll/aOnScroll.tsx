import { useRef } from 'react';
import useOnScreen from './use-on-screen';

const OnScroll: React.FC = () => {
  const coverRef = useRef<HTMLDivElement>(null);
  const isSeen = useOnScreen(coverRef);

  return (
    <div className={`w-[300px] ${isSeen ? 'bg-primary-navy text-white' : 'bg-gray-100'} 
    transition-all duration-75 mx-auto h-full overflow-y-scroll scroll-bar p-5`}
    >
      <div className="h-[500px]">
        <p className="text-lg font-bold">
          Scroll to see animation
        </p>
        Consectetur quis ipsum Lorem in fugiat officia.
        Incididunt sunt nisi reprehenderit veniam.
      </div>
      <div ref={coverRef} className="font-bold text-lg">Animation</div>
    </div>
  );
};

export default OnScroll;
