import React from 'react';
import { Link } from 'react-router-dom';
import './Subsections.css'

function Subsections() {
  return (
    <div class='subsections-container'>
      <ul class='subsections-list-ul'>
        <li class='subsection-li'>
            <Link to='/knygos' className ='sub-links'>Knygos</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/diet' className ='sub-links'>Fuck Diet Culture</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/vasara' className ='sub-links'>Vasaros special</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/' className ='sub-links'>Istorijų žurnalas</Link>
        </li>
        <li class='subsection-li'>
            <Link to='/post' className ='sub-links'>TEMP post</Link>
        </li>
        </ul>
    </div>
  )
}

export default Subsections
