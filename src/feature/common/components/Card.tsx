import React from 'react';

interface TCard {
  isPublish: boolean;
  customClassName?: string;
}

const Card: React.FC<TCard> = (props) => {
  return (
    <>
      {
        props.isPublish
          ? (
            <article className={`${props.customClassName} rounded-md xl:opacity-75 hover:opacity-100 hover:shadow-lg h-[260px] w-full flex justify-center items-center bg-white shadow transition-all`}>
              <div className="pointer-events-none select-none">
                {props.children}
              </div>
            </article>
          )
          : null
      }
    </>
  );
};

Card.defaultProps = {
  customClassName: '',
};

export default Card;
