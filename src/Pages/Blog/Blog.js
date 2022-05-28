import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-semibold mt-3'>Q1: How will you improve the performance of a React Application?</h2>
            <p>
                1. Using Immutable Data Structures <br />
                2. Dependency optimization <br />
                3. Use React.Fragments to Avoid Additional HTML Element Wrappers <br />
                4. Avoid using Index as Key for map <br />
                5. Avoiding Props in Initial States <br />
                6. Spreading props on DOM elements <br />
                7. Using a CDN
            </p>
            <h2 className='font-semibold mt-3'>Q2: What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state you need to properly manage React apps:</p>
            <p>
                1. Local state : Local state is data to manage in one or another component <br />
                2. Global state : Global state is data to manage across multiple components.
                3. Server state : Data that comes from an external server that must be integrated with UI state.
                4. URL state : Data that exists on URLs, including the pathname and query parameters.
            </p>
            <h2 className='font-semibold mt-3'>Q3: How does prototypical inheritance work?</h2>
            <p>prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                All JavaScript objects inherit properties and methods from a prototype: <br />
                1. Date objects inherit from Date.prototype. <br />
                2. Array objects inherit from Array.prototype. <br />
                3. Player objects inherit from Player.prototype.
            </p>
            <h2 className='font-semibold mt-3'>Q4: Why you do not set the state directly in React?</h2>
            <p>We don't set state directly because if we do this then optimizing components might not re-render and the rendering bugs will be tricky to track down. Instead set state directly, always create new objects and arrays when we call setState.</p>
            <h2 className='font-semibold mt-3'>Q5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p>First I'll make input field to take the value. Then I send the value in server by GET method using query or others formula and receive the value from body. After receiving the value I'll find the product by setting the value of "find()" function which will find the product in database. This is how I'll make a search field.</p>
            <h2 className='font-semibold mt-3'>Q6: What is a unit test? Why should write unit tests?</h2>
            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.</p>
            <p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
        </div>
    );
};

export default Blog;