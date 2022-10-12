import React from 'react';

const Blog = () => {
    return (
        <div className='md:grid lg:grid-cols-3 md:gap-16 m-8 md:mt-24 '>
            <div className='shadow-lg p-8 rounded-lg m-4 text-white bg-gradient-to-br from-cyan-500 to-blue-400'>
                <h3 className='font-bold text-3xl mb-4'>What is the purpose of React Router</h3>
                <p className=' font-normal text-lg '>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>
            <div className='shadow-lg p-8 rounded-lg m-4 text-white bg-gradient-to-br from-cyan-500 to-blue-400'>
                <h3 className='font-bold text-3xl mb-4'>How does Context API work</h3>
                <p className=' font-normal text-lg '>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.React.createContext() is all you need to create a context api. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. We can get the store data using useContext() in the specific component</p>
            </div>
            <div className='shadow-lg p-8 rounded-lg m-4 text-white bg-gradient-to-br from-cyan-500 to-blue-400'>
                <h3 className='font-bold text-3xl mb-4'>What is useRef hook</h3>
                <p className=' font-normal text-lg '>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;