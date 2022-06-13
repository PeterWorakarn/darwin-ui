import { useRef, useState } from 'react';
import { HiOutlinePaperClip, HiOutlineXCircle, HiXCircle } from 'react-icons/hi';

const fileSizeValidation = (file: File) => {
  const isLt10M = file.size / 1024 / 1024 < 10;
  return isLt10M;
};
const fileTypeValidation = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  return isJpgOrPng;
};

const Upload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [validation, setValidation] = useState({
    size: false,
    type: false,
  });
  const [imageData, setImageData] = useState<{
    file: File | undefined,
    file_name: string;
    base64: string;
  }>({
    file: undefined,
    file_name: '',
    base64: '',
  });

  const handleClickUpload = () => {
    if (inputRef !== null) {
      inputRef.current?.click();
    }
  };

  const isfileValid = (image: File) => {
    setValidation({ size: false, type: false });
    if (!fileTypeValidation(image)) {
      setValidation({ ...validation, type: true });
    }
    if (!fileSizeValidation(image)) {
      setValidation({ ...validation, size: true });
    }
    if (!fileTypeValidation(image) || !fileSizeValidation(image)) {
      return false;
    }
    return true;
  };

  const resetImage = () => {
    setImageData(
      {
        file: undefined,
        file_name: '',
        base64: '',
      },
    );
  };

  const dataImageHandler = (data: FileList | null) => {
    if (data?.length !== 0 && data !== null) {
      const singleImage = data[0];
      if (isfileValid(singleImage)) {
        const reader = new FileReader();
        reader.readAsDataURL(singleImage);
        reader.onloadend = function () {
          const base64data = reader.result as string;
          setImageData({
            file: singleImage,
            file_name: singleImage.name,
            base64: base64data,
          });
        };
      } else {
        resetImage();
      }
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickUpload()}
        className="py-2 px-5 w-full justify-center text-center flex gap-2 items-center
        rounded-xl text-primary-navy font-bold bg-primary-navy bg-opacity-5"
      >
        <HiOutlinePaperClip className="text-primary-navy" />
        Upload image
      </button>
      <input
        ref={inputRef}
        className="sr-only"
        type="file"
        onChange={(e) => dataImageHandler(e.target.files as FileList | null)}
      />
      <div className="p-1">
        {validation.size && (
          <div className="text-primary-red flex gap-1 items-center font-semibold">
            <HiOutlineXCircle /> invalid file size
          </div>
        )}
        {validation.type && (
          <div className="text-primary-red flex gap-1 items-center font-semibold">
            <HiOutlineXCircle /> invalid file type
          </div>
        )}
      </div>
      {imageData.file && (
        <div className="relative mt-3">
          <HiXCircle
            onClick={() => resetImage()}
            className="absolute -top-2 -right-2 w-5 h-5 text-primary-navy cursor-pointer"
          />
          <div
            style={{ backgroundImage: `url(${imageData.base64})` }}
            className="rounded-xl bg-center bg-cover bg-no-repeat w-[200px] h-[200px] border-2 border-typo-minor"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
