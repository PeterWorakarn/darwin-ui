import { TBlockType } from '../../../constant-enum-type/doc';

interface TBlock {
  type: TBlockType
}

const ComponentBlock:React.FC<TBlock> = (props) => {
  return (
    <section className={`${props.type === 'square' ? 'h-[320px]' : 'h-[520px]'} mx-auto max-w-xs w-full flex justify-center items-center rounded-xl overflow-hidden bg-gray-100 shadow-inner`}>
      {props.children}
    </section>
  );
};

export default ComponentBlock;
