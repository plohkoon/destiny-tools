import React from 'react';

export default function OptionListItem({name, openModal}) {
  return (
    <button onClick={openModal}>
      {name}
    </button>
  )
}