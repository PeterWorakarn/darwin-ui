import { useEffect } from "react";

const SubBtn: React.FC = () => {
  useEffect(() => {
    console.log('Hello useEffect')
  }, [])
  return (
  <>
    <p className="bg-red-500 px-3 py-1 rounded-lg text-white">😆</p>
  </>
  );
};

export default SubBtn;