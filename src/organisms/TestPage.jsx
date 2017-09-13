import React from 'react';
import { Heading } from '../atoms/Heading.jsx';
import { Copy } from '../atoms/Copy.jsx';
import { SelectedBehaviour } from '../atoms/SelectedBehaviour.jsx';
import { Select, Option } from '../molecules/Select.jsx';

const items = [
  {title: 'text one', copy: 'sdfkjshdfaasdf'},
  {title: 'text two', copy: 'sdfkjshdfaasdf'},
  {title: 'text three', copy: 'sdfkjshdfaasdf'},
  {title: 'text four', copy: 'sdfkjshdfaasdf'},
];

export const TestPage = () => (
  <div>
    <Heading text="Unselected"></Heading>
    <SelectedBehaviour>
      <Heading text="Selected"></Heading>
    </SelectedBehaviour>
    lasers sdf
    <Select>
      {items.map((o, i) => <div key={i}>
        <Heading text={o.title}></Heading><Copy>{o.copy}</Copy>
      </div>)}
    </Select>
    {items.map((o, i) => <div key={i}>
      <Heading text={o.title}></Heading><Copy>{o.copy}</Copy>
    </div>)}

  </div>
);
