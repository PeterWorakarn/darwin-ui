import SubBtn from "./SubBtn";

const Btn: React.FC = () => {
  return (
    <>
    <button 
      onClick={() => console.log('Hello')} 
      type="button" 
      className="bg-blue-500 w-full flex justify-center items-center px-3 py-1 rounded-xl"
    >
      Click
      <SubBtn />
    </button>
    </>
  );
};

export default Btn;