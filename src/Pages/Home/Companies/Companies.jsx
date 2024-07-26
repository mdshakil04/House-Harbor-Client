/* eslint-disable no-unused-vars */
import React from 'react';
import companyLogo1 from '../../../assets/images/CompanyLogo/image1.jpg'
import companyLogo2 from '../../../assets/images/CompanyLogo/image2.jpg'
import companyLogo3 from '../../../assets/images/CompanyLogo/image3.jpg'
import companyLogo4 from '../../../assets/images/CompanyLogo/image4.jpg'
import companyLogo5 from '../../../assets/images/CompanyLogo/image5.jpg'
import companyLogo6 from '../../../assets/images/CompanyLogo/image6.jpg'
import companyLogo7 from '../../../assets/images/CompanyLogo/image7.jpg'
import companyLogo8 from '../../../assets/images/CompanyLogo/image8.jpg'

const Companies = () => {
    return (
        <div className=' container mx-auto my-8'>
            <div className=' title-container'>
                <h1 className=' text-5xl text-center'>Property management companies in Dhaka, BD</h1>
            </div>
            <div className=' image-container grid lg:grid-cols-4 grid-cols-2 my-4 p-4'>
                <div className=' border border-t-0 border-l-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo1} alt="logo" />
                </div>
                <div  className=' border border-t-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo2} alt="logo" />
                </div>
                <div  className=' border border-t-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo3} alt="logo" />
                </div>
                <div  className=' border border-t-0 border-r-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo4} alt="logo" />
                </div>
                <div  className=' border border-b-0 border-l-0 p-4'>
                    <img className=' w-[300px] h-[60px]' src={companyLogo5} alt="logo" />
                </div>
                <div  className=' border border-b-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo6} alt="logo" />
                </div>
                <div  className=' border border-b-0 p-4'>
                    <img className=' w-[300px] h-[80px]' src={companyLogo7} alt="logo" />
                </div>
                <div  className=' border border-b-0 border-r-0 p-4'>
                    <img className=' w-[300px] h-[60px]' src={companyLogo8} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Companies;