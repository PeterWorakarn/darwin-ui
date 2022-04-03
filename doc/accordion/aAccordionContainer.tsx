import { useState } from 'react';
import { HiChevronUp } from 'react-icons/hi';
import Accordion from './bAccordion';

const FAQS: { question: string, answer: string }[] = [
  {
    question: 'What questions should be included in FAQ?',
    answer: `Sint sit ea adipisicing incididunt ad id id. 
    Ipsum quis labore enim nisi cupidatat qui Lorem voluptate reprehenderit `,
  },
  {
    question: 'What makes a good FAQ page?',
    answer: `Anim magna elit labore dolor in culpa id in 
    labore aliqua sit dolore duis. Dolore tempor fugiat enim ea et ad sunt c`,
  },
  {
    question: 'How do you answer FAQ questions?',
    answer: `Quis ipsum ad dolor consequat commodo ullamco 
    dolor officia non anim. Minim esse dolore mollit nisi. Aliqua veniam minim`,
  },
];

const AccordionContainer: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('');

  const accordionHandler = (selectValue: string) => {
    if (activeAccordion === selectValue) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(selectValue);
    }
  };

  return (
    <section className="flex flex-col w-full max-w-sm shadow rounded-md">
      {FAQS.map((faq, _idx) => {
        return (
          <Accordion
            key={faq.question}
            _idx={_idx}
            total={FAQS.length - 1}
            activeAccordion={activeAccordion}
            faq={faq}
            accordionHandler={(selectValue) => accordionHandler(selectValue)}
          />
        );
      })}
    </section>
  );
};

export default AccordionContainer;
