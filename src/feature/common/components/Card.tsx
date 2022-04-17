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
            <article className={`${props.customClassName} h-[270px] w-full flex justify-center items-center bg-white rounded-md`}>
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
