import React from 'react';
import Button from '../components/Button.jsx/Button';
import SocialLogin from '../components/SignUp-Section/SocialLogin';
import LoginImageSection from '../components/SignUp-Section/LoginImageSection';
import { Link } from 'react-router';
import { signUpSectionData, socialLoginData } from '../utils/signUpSectionData';
import OrSeperator from '../components/SignUp-Section/OrSeperator';
import MultipleAuthInputField from '../components/SignUp-Section/MultipleAuthInputField';
import AuthPageHeading from '../components/SignUp-Section/AuthPageHeading';
import LeftSideImage from '../assets/AuthenticationSection-Images/Image.svg';

const SignUpPage = () => {
  return (
    <div className="row h-screen  w-full gap-14 px-24  py-14">
      <LoginImageSection image={LeftSideImage}></LoginImageSection>
      <div className=" flex w-full  justify-center ">
        <div className=" flex flex-col w-full gap-8 max-w-[500px]">
          <AuthPageHeading title={'FOSCO'} description={'Create Account'}></AuthPageHeading>
          <div className="row justify-between pr-12 ">
            {socialLoginData.map(item => (
              <SocialLogin key={item.id} icon={item.image} text={item.name}></SocialLogin>
            ))}
          </div>
          <OrSeperator></OrSeperator>
          {signUpSectionData.map(data => (
            <MultipleAuthInputField key={data.id} placeholder={data.placeholders}></MultipleAuthInputField>
          ))}
          <div className="w-full px-5 column gap-3">
            <Button
              className={'w-full  bg-black  cursor-pointer text-center py-4 text-xs rounded-md text-white'}
              children={'Create Account'}></Button>
              
            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/signIn" className="text-[#5B86E5] cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
