/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react';
import bible from '../assets/bible.png';
import whitelogo from '../assets/white_logo.png';
import { useState } from 'react';
import Input from '../components/Input';
import loginField from '../constant/formField';

interface Field {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Login: React.FC = () => {
  const fields: Field[] = loginField;
  let fieldState: { [key: string]: string } = {};

  fields.forEach((field: Field) => {
    fieldState = {
      ...fieldState,
      [field.name]: '',
    };
  });
  const [form, setForm] = useState(fieldState);
  return (
    <div className="flex items-center justify-center lg:justify-normal my-12 lg:my-0 lg:flex-row lg:gap-9">
      <div className=" hidden lg:flex ">
        <img src={bible} alt="Bible Image" className="w-[467px]" />
      </div>
      <div className="flex items-center flex-col lg:m-8">
        <div className="flex flex-col items-center mb-8">
          <img src={whitelogo} alt="church" className="w-16 lg:w-28" />
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
                <a
                  href="#"
                  className="text-[#BD1424] text-[14px] font-semibold"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button className="bg-[#BD1424] text-white w-full py-2 rounded-md my-8">
                Sign In
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-[#434343]">
                Don't have an account?{' '}
                <a href="#" className="text-[#BD1424] font-semibold">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
