/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const initialValue = [
  {
    id: 1,
    status: false,
  },
  {
    id: 2,
    status: false,
  },
  {
    id: 3,
    status: false,
  },
  {
    id: 4,
    status: false,
  },
  {
    id: 5,
    status: false,
  },
];

const Rating: React.FC = () => {
  const [rating, setRating] = useState(initialValue);
  const [isHover, setIsHover] = useState(false);
  const [tempRating, setTempRating] = useState(initialValue);

  const starHandler = (value: number) => {
    setRating(rating.map((each) => {
      if (each.id <= value) {
        return { ...each, status: true };
      }
      return { ...each, status: false };
    }));
  };

  const starHover = (value: number) => {
    setTempRating(tempRating.map((each) => {
      if (each.id <= value) {
        return { ...each, status: true };
      }
      return { ...each, status: false };
    }));
  };

  return (
    <>
      {isHover ? (
        // simulate Rating, set to review when click and un-mount when leave
        <div
          className="flex gap-2"
          onMouseLeave={() => { setTempRating(rating); setIsHover(false); }}
        >
          {tempRating.map((each_star) => {
            if (each_star.status) {
              return (
                <BsStarFill
                  key={each_star.id}
                  onMouseOver={() => starHover(each_star.id)}
                  onClick={() => starHandler(each_star.id)}
                  className="text-amber-300 text-2xl"
                />
              );
            }
            return (
              <BsStar
                key={each_star.id}
                onMouseOver={() => starHover(each_star.id)}
                className="text-amber-300 text-2xl"
              />
            );
          })}
        </div>
      ) : (
        <div onMouseOver={() => setIsHover(true)} className="flex gap-2">
          {rating.map((each_star) => {
            if (each_star.status) {
              return (
                <BsStarFill
                  key={each_star.id}
                  onClick={() => starHandler(each_star.id)}
                  className="text-amber-300 text-2xl"
                />
              );
            }
            return (
              <BsStar
                key={each_star.id}
                onClick={() => starHandler(each_star.id)}
                className="text-amber-300 text-2xl"
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Rating;
