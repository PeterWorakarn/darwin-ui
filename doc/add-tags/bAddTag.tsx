/* eslint-disable jsx-a11y/control-has-associated-label */
import { HiXCircle } from 'react-icons/hi';

type AddTagProps = {
  tags: string[];
  setTag: (newTags: string[]) => void;
  removeTagHandler: (index: number) => void;
  inputHandler: (e: any) => void;
}

const AddTag: React.FC<AddTagProps> = (props) => {
  return (
    <div className="flex flex-col bg-white border border-neutral-200 p-[6px]
    w-auto max-w-[221px] text-typo-main outline-none rounded-md"
    >
      <div className="flex flex-row flex-wrap gap-1">
        {props.tags.map((tag, i) => (
          <span
            key={tag}
            className="pl-3 pr-1.5 py-0.5 gap-1 max-w-[210px] flex items-center
            justify-center bg-primary-navy text-white shadow-sm rounded-md"
          >
            <p className="text-sm">{tag}</p>
            <button
              className="outline-none"
              type="button"
              onClick={() => props.removeTagHandler(i)}
            ><HiXCircle />
            </button>
          </span>
        ))}
      </div>
      <input
        name="tag"
        placeholder="Add Tag"
        type="text"
        className={`${props.tags.length !== 0 && 'mt-2'} w-full outline-none
         bg-white pt-0 pb-0 px-2 transition-all duration-75`}
        onKeyDown={(e: any) => props.inputHandler(e)}
      />
    </div>
  );
};

export default AddTag;
