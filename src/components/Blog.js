import React from 'react';

const Blog = () => {
   return (
      <div className="bg-gray-100 min-h-screen">
         <div className="bg-gray-100 text-gray-800 ">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 pt-10">
               <div className="flex items-center justify-between mt-20">
                  <span className="text-sm text-gray-600"></span>
               </div>
               <div className="mt-3">
                  <h1 className="text-2xl font-bold hover:underline">What is CORS?</h1>
                  <p className="mt-2">
                     <strong>Cross-Origin REsource Sharing (CORS) </strong> is an http based security mechanism based on
                     web browser. which means it controls and enforce by the client browser. It allows a api to
                     determine which client can request resource from it other than its own. It has been designed in
                     response to the same origin policy means it will throw an error if localhost:3000 try to access the
                     resourse from localhost:8000.
                  </p>
               </div>
               {/* Blog 2 */}
               <div className="mt-24">
                  <h1 className="text-2xl font-bold hover:underline">
                     Why are you using firebase? What other options do you have to implement authentication?
                  </h1>
                  <p className="mt-2">
                     Firebase is a backend development tool from google that allow us to speed up development process.
                     Firebase is simple, lightweight and friendly. Firebase can turn any javascript framworks into a
                     serverless app in no time. It also removes the need of manage the databases. it's pretty simple in
                     firebase to connect and use built in third party authentication providers, including Google,
                     Facebook twitter and github. Some firebase alternative is Back4App, Parse, Aws Amplify, backendless
                     etc
                  </p>
               </div>
               <div className="mt-24">
                  <h1 className="text-2xl font-bold hover:underline">How does the private route work</h1>
                  <p className="mt-2">
                     The react private route component renders child components if the user is logged in. If the user is
                     not logged in the user is redirected to the login page with the return url passed in the location
                     state which can be used to redirect user where he tries to visit before
                  </p>
               </div>
               <div className="mt-24">
                  <h1 className="text-2xl font-bold hover:underline">What is Node? How does Node work?</h1>
                  <p className="mt-2">
                     The react private route component renders child components if the user is logged in. If the user is
                     not logged in the user is redirected to the login page with the return url passed in the location
                     state which can be used to redirect user where he tries to visit before
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;
