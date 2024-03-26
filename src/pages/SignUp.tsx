/* eslint-disable prettier/prettier */
import React from 'react';
import bible from '../assets/bible2.png';
import whitelogo from '../assets/white_logo.png';
import { useState } from 'react';
import Input from '../components/Input';
import { signUpField } from '../constant/formField';
import { Link } from 'react-router-dom';

interface Field {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const SignUp: React.FC = () => {
  const fields: Field[] = signUpField;
  let fieldState: { [key: string]: string } = {};

  fields.forEach((field: Field) => {
    fieldState = {
      ...fieldState,
      [field.name]: '',
    };
  });
  const [form, setForm] = useState(fieldState);
  return (
    <div className="flex justify-center lg:justify-normal my-12  lg:my-0 lg:flex-row">
      <div className=" hidden lg:flex ">
        <img
          src={bible}
          alt="Bible Image"
          className="xl:w-[640px] lg:w-[600px] lg:h-[600px] xl:h-[650px] overflow-hidden"
        />
      </div>
      <div className="flex flex-col xl:mx-32 lg:mx-20 lg:my-8">
        <div className="flex flex-col mb-8 items-center">
          <img src={whitelogo} alt="church" className="w-16 lg:w-36" />
          <p className="text-[#434343] lg:text-xl">
            Welcome, Sign in for worship.
          </p>
        </div>
        <div className="flex flex-col">
          <form>
            {fields.map((field: Field) => (
              <>
                <Input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  // label={field.label}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setForm({
                      ...form,
                      [field.name]: e.target.value,
                    });
                  }}
                />
              </>
            ))}
            <div className="flex justify-end">
              <div>
                <Link
                  to="/forgot-password"
                  className="text-[#BD1424] text-[14px] font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div>
              <button className="bg-[#BD1424] text-white w-full py-2 rounded-md my-8">
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-[#434343]">
                Already have an account?{' '}
                <Link to="/login" className="text-[#BD1424] font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
