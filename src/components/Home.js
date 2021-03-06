import React from 'react';

function Home () {
    return (
        <>
            <div className="container">
                <h2>Welcome to my React/Redux Calculator Project!</h2>
                    <h3>About the project</h3>
                        <p>
                            I've built this calculator web app over the course of a week while attending the TECHCareers Full-Stack Software Developer program. This is actually the third iteration of the base calculator assignment. As we progressed in our lessons from first glimpses at React to using Redux and React Router, the difficulty-level of the assignments also increased. Every day or so there was a new set of practice requirements and challenges to tackle! 
                        </p>
                        <p>
                            My first iteration was basically just two simple React components, a title and a calculator, one loading below the other. This calculator was able to take in two number variables, an operator from a dropdown (addition, subtraction, multiplication, or division), and - on button-click - displayed the result for the user. The title element was a prop passed down from the parent component and the variables were all local. 
                        </p> 
                        <p>
                            I started from scratch with my second iteration. I added a Redux store right at the beginning so I could display session history for the user via another component. Having global state available opened up so many new possibilities! 
                        </p>
                        <p>
                            The third iteration of my calculator was, again, built from scratch. I added React Router to the project, making it easy to navigate between pages/components. The home page - the one you are currently reading - serves as an introduction to the project, and is followed by instructions for the calculator. I implemented a navigation bar using React Router to make the project more user-friendly and easy to navigate.
                        </p>
            </div>
        </>
    );
}

export default Home;