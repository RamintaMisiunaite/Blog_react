import React from 'react';
import { Link } from 'react-router-dom';
import './Subsections.css'

function Subsections() {
  return (
    <div class='subsections-container'>
      <ul class='subsections-list-ul'>
        <li class='subsection-li'>
            <Link to='/' className ='sub-links'>Home</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/' className ='sub-links'>bbb</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/' className ='sub-links'>ccc</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/' className ='sub-links'>ddd</Link>
        </li>
        </ul>
    </div>
  )
}

export default Subsections
