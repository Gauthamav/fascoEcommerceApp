import React from 'react'
import Button from '../components/Button.jsx/Button';
import SocialLogin from '../components/SignUp-Section/SocialLogin';
import LoginImageSection from '../components/SignUp-Section/LoginImageSection';
import { Link } from 'react-router';
import {  socialLoginData } from '../utils/signUpSectionData';
import OrSeperator from '../components/SignUp-Section/OrSeperator';
import AuthPageHeading from '../components/SignUp-Section/AuthPageHeading';
import LeftSideImage from '../assets/AuthenticationSection-Images/image2.svg';
import { signInSectionData } from '../utils/signInSectionData';
import SingleAuthInputField from '../components/SignUp-Section/SingleAuthInputField';

const SignInPage = () => {
  return (
    <div className="flex h-screen  w-full gap-14 px-24  py-14">
      <LoginImageSection image={LeftSideImage}></LoginImageSection>
      <div className="flex w-full justify-center ">
        <div className=" flex w-full flex-col gap-10   max-w-[500px]">
          <AuthPageHeading title={'FOSCO'} description={'Sign In To FASCO'}></AuthPageHeading>
          <div className="row justify-between pr-14 ">
            {socialLoginData.map(item => (
              <SocialLogin key={item.id} icon={item.image} text={item.name}></SocialLogin>
            ))}
          </div>
          <OrSeperator></OrSeperator>
          {signInSectionData.map(data => (
            <SingleAuthInputField key={data.id} placeholder={data.placeholders}></SingleAuthInputField>
          ))}
          <div className="w-full px-5 column gap-3">
            <Button
              className={'w-full  bg-black h-[50px] cursor-pointer text-center py-4 text-xs rounded-md text-white'}
              children={'Create Account'}></Button>
                <Button
                            className={'w-full h-[48px] bg-white  cursor-pointer text-center border border-[#5B86E5] py-4 text-xs rounded-md text-[#5B86E5]'}
                            children={'Register Now'}></Button>
            <p className="text-right w-full text-sm">
              <Link to="/forgetPassword" className="text-[#5B86E5] cursor-pointer">
            Forget Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
