import moment from 'moment-timezone';
import { HiUserCircle } from 'react-icons/hi';

const CARDCONTENT = {
  title: 'App Store Awards honor the best apps and games of 2021',
  description: `Excepteur laborum sit eiusmod incididunt tempor consectetur 
  aliquip irure excepteur cupidatat tempor cupidatat et. Ut eu veniam ut`,
  category: 'update',
  author: 'John Doe',
};

const CompactCard: React.FC = () => {
  return (
    <article
      className="rounded-md  max-w-xs w-60 h-[245px] flex flex-col mx-1"
      style={{
        backgroundImage: 'url(https://mdbootstrap.com/img/new/standard/nature/184.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.75)',
      }}
    >
      <div className="px-5 py-4 w-full h-full flex flex-col justify-between">
        <span className="mb-0 text-sm font-semibold opacity-50 text-white w-full text-left uppercase">
          {CARDCONTENT.category}
        </span>
        <div>
          <h2 className="text-xl font-bold text-white w-full text-left line-clamp-2">
            {CARDCONTENT.title}
          </h2>
          <p className="mt-1 text-base font-normal opacity-80 text-white w-full text-left line-clamp-2">
            {CARDCONTENT.description}
          </p>
          <div className="opacity-50 flex justify-between">
            <span className="flex gap-1 items-center mt-2 text-sm font-semibold text-white w-full text-left">
              <HiUserCircle className="w-5 h-5" />{CARDCONTENT.author}
            </span>
            <span className="mt-2 text-sm font-semibold text-white w-full text-right">
              {moment().format('D MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CompactCard;
