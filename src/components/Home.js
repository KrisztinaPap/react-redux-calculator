import React from 'react';
import '../css/home.css';

function Home () {
    return (
        <>
            <div class="container">
                <h2>Welcome to my React/Redux Calculator Project!</h2>
                    <h3>About the project</h3>
                        <p>
                            I've built this calculator web app over the course of a week while attending the TECHCareers Full-Stack Software Developer program. This is actually the fourth iteration of the base calculator assignment. As we progressed in our lessons from first introductions to React to using Redux and React Router, the difficulty-level of our assignments gradually increased. 
                        </p>
                        <p>
                            The first iteration of the React calculator nothing fancy. It was basically two basic React components loading one below the other. It had no functionality, just some styling.
                        </p> 
                        <p>
                            The second iteration was able to take in two number variables, an operator from a dropdown (select), and displayed the result for the user.
                        </p> 
                        <p>
                            The third iteration had a Redux store so our newly-added global state could display a session history of the user's calculations via another component. At this time, I've also added light and dark-themes using an additonal reducer utilizing combineReducer. 
                        </p>

                        <h4>Technologies used and lessons learned</h4>
                        <h4>Components (with screenshots)</h4>
                    <h3>How to use the calculator</h3>
                        <h4>Basic (separate inputs) calculator</h4>
                        <h4>Advanced (one input) calculator</h4>
                        <h4>History (session history)</h4>
            </div>
        </>
    );
}

export default Home;