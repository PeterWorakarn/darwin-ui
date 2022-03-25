/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import OTP from './bOTP';

const OTPContainer: React.FC = () => {
  const [otpValues, setOtpValues] = useState<string[]>([...Array(4)].map(() => ''));
  return (
    <div className="otp flex flex-row justify-center text-center gap-2">
      {otpValues.map((_, index) => {
        return <OTP key={index} index={index} values={otpValues} setValues={setOtpValues} />;
      })}
    </div>
  );
};

export default OTPContainer;
