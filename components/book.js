import React, { Component } from 'react';

// Use a functional component whenever possible. Esp for presentational components with no state or logic.
// Use class components high up in containers because they need state (if not using redux) and logic.


// const Book = (props) => <li key={props.title}><img src={props.cover} /></li>
// destructured version of the above:
const Book = ({title, cover}) => <li key={title}><img src={cover} /></li>

export default Book;
