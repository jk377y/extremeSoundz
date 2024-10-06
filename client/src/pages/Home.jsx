import React from 'react';

const Home = () => {
    function handleClick() {
        console.log('The link was clicked. u r smart');
    }
    return(
        <>
            <h1>This is the Home page.</h1>
            <p>click the link, check dev tools in browser <a href="#" onClick={handleClick}>Click me</a></p>
        </>
    )
}

export default Home;