import React from 'react';

const Faq = () => {
   return (
      <div>
         <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
               <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
               <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                  Frequently Asked Questions
               </h2>
               <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                  <details>
                     <summary className="py-2 outline-none cursor-pointer focus:underline">
                        What do SkilledPro courses include?
                     </summary>
                     <div className="px-4 pb-4">
                        <p>
                           Each SkilledPro course is created, owned and managed by the instructor(s). The foundation of
                           each SkilledPro course are its lectures, which can include videos, slides, and text. In
                           addition, instructors can add resources and various types of practice activities, as a way to
                           enhance the learning experience of students.{' '}
                        </p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 outline-none cursor-pointer focus:underline">
                        How do I take a SkilledPro course?
                     </summary>
                     <div className="px-4 pb-4">
                        <p>
                           SkilledPro courses are entirely on-demand and they can be accessed from several different
                           devices and platforms, including a desktop, laptop, and our mobile app. After you enroll in a
                           course, you can access it by clicking on the course link you will receive in your
                           confirmation email (provided you’re logged into your SkilledPro account). You can also begin
                           the course by logging in and navigating to your My learning page.{' '}
                        </p>
                     </div>
                  </details>
                  <details>
                     <summary className="py-2 outline-none cursor-pointer focus:underline">
                        Where can I go for help?
                     </summary>
                     <div className="px-4 pb-4 space-y-2">
                        <p>
                           If you find you have a question about a paid course while you’re taking it, you can search
                           for answers to your question in the Q&A or ask the instructor. Our Help Center has extensive
                           information regarding SkilledPro’s various features, and articles with troubleshooting steps
                           to help you quickly resolve any issues you encounter. Our support team is also happy to help.{' '}
                        </p>
                     </div>
                  </details>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Faq;
