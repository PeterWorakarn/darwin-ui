import React from 'react';

interface TCard {
  isPublish: boolean;
}

const Card: React.FC<TCard> = (props) => {
  return (
    <article className="rounded-md opacity-75 hover:opacity-100 hover:shadow-lg h-[260px] w-full flex justify-center items-center bg-white shadow transition-all">
      {props.isPublish
        ? (
          <div className="pointer-events-none select-none">
            {props.children}
          </div>
        )
        : <>xx</>}
    </article>
  );
};

export default Card;
