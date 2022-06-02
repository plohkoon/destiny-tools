import React from 'react';
import '../styles/optionListItem.scss'

export default function OptionListItem({name, selectContent, active}) {
  return (
    <li className={`listItem ${active ? 'active' : ''}`} onClick={selectContent}>
      {name}
    </li>
  )
}