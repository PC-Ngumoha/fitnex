import React from 'react';
import ContactForm from '@/components/ContactForm';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const ContactPage = () => {
  return (
    <MaxWidthWrapper className='flex items-center justify-center'>
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">Contact Us</h1>
        <ContactForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
