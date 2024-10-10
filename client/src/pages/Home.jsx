import { Navbar } from "../components/Navbar"

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto mt-10'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to Redx-Rect-App!
      </h1>
      <p className='mb-4 text-slate-700'>
        Redx-Rect-App is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. Tailwind CSS is used for styling the application.
        Redux is used for state management. Firebase is used for google authentication. 
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
        This app consist of user side and admin side. A user can login to the system 
        by either using credentials or by google authentication. Admin can update and 
        delete the user details. It includes authentication features that allow users
        to sign up, log in, and log out, and provides access to protected routes only 
        for authenticated users.
      </p>
     
      <p className='mb-4 text-slate-700'>
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack.
      </p>
    </div>
  );
}
