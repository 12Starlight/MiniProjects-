import React from 'react';


export default ({todos}) => Object.keys(todos).map((_, i) => <li key={i} >{todos[i].title}</li>)