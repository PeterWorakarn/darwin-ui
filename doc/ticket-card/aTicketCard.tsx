import moment from 'moment-timezone';

const customWidth = 'w-52';
const customMainColor = 'bg-white';
const customOutsideColor = 'bg-gray-100';

const TicketCard: React.FC = () => {
  // Inspired by https://dribbble.com/shots/16448873-App-Concept-For-Booking-Tickets
  return (
    <div>
      <div className={`${customWidth} ${customMainColor} h-52 shadow-inner rounded-t-md 
      border-t-1 border-x-1 border-gray-500 flex flex-col gap-1  p-3`}
      >
        <div className="bg-primary-red font-black uppercase w-min  flex gap-1 justify-center
        text-white text-xs items-center border-none cursor-pointer pt-0.5 px-2.5 rounded-full"
        >
          Event
        </div>
        <h1 className="font-black text-xl border-b border-gray-200 pb-1">BKK.PY Meetup</h1>
        <p className="line-clamp-5 pt-1 text-base text-typo-minor">
          Elit voluptate est voluptate ea
          laboris id non incididunt sunt. Ut mollit adipisicing in velit
          non eu occaecat pariatur anim. Aliqua est laboris aliquip eiusmod
          elit qui ad cillum mollit. Do in fugiat irure consequat minim
          Lorem. Ad fugiat velit elit amet nulla proident exercitation reprehenderit
        </p>
      </div>
      <div className={`${customWidth} flex justify-between 
      relative gap-0 overflow-hidden`}
      >
        <div className={`${customOutsideColor} absolute -left-[10px] w-5 h-4 
        rounded-r-full border-1 border-gray-500 `}
        />
        <div className={`${customWidth} ${customMainColor} left-[10px] top-0 
        h-4 overflow-hidden px-3 flex items-center justify-evenly`}
        >
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
          <div className={`${customOutsideColor} 
          w-3 h-3 rounded-full shadow-inner`}
          />
        </div>
        <div className={`${customOutsideColor} absolute -right-[10px] w-5 h-4 
        rounded-l-full border-1 border-gray-500 `}
        />
      </div>
      <div className={`${customWidth} ${customMainColor} h-auto px-3 py-2 rounded-b-md 
      border-b-1 border-x-1 border-gray-500 `}
      >
        <p className="text-primary-navy font-nunito font-extrabold text-center
         text-xs"
        >
          {moment().format('D . MM . YYYY')}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
