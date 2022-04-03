import { HiChevronUp } from 'react-icons/hi';

interface TAccordionProps {
  _idx: number;
  total: number
  accordionHandler: (selectValue: string) => void;
  activeAccordion: string
  faq: { question: string, answer: string };
}

const Accordion: React.FC<TAccordionProps> = (props) => {
  return (
    <article
      className={`
    ${props._idx === props.total && 'rounded-b-md'} 
    ${props._idx === 0 && 'rounded-t-md'} 
    ${props.activeAccordion === props.faq.question ? 'opacity-100 bg-opacity-100 bg-white' : 'opacity-50 bg-opacity-50 bg-white hover:opacity-100 hover:bg-opacity-100 w-full'}
  `}
    >
      <button
        className={`${props.activeAccordion !== props.faq.question && props._idx !== props.total && 'border-b'} 
      w-full flex justify-between items-center pt-5 pb-4 px-5 cursor-pointer select-none`}
        onClick={() => props.accordionHandler(props.faq.question)}
        type="button"
      >
        <p className="m-0 font-nunito text-left text-[14px] font-extrabold text-primary-navy">
          {props.faq.question}
        </p>
        <HiChevronUp className={`${props.activeAccordion === props.faq.question ? 'rotate-180' : 'rotate-0'} 
        text-base transform transition-all duration-75 ease-linear`}
        />
      </button>
      <div
        className={`${props.activeAccordion === props.faq.question ? 'opacity-100 max-h-96 h-auto pt-5 pb-4 px-5 border-t translate-y-0' : 'opacity-0 max-h-0 h-0 pb-0  px-5 -translate-y-3'} 
        transform transition-all duration-100 text-sm pointer-events-none select-text`}
      >
        {props.faq.answer}
      </div>
    </article>
  );
};

export default Accordion;
