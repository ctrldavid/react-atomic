import React from 'react';
import { Heading } from '../atoms/Heading.jsx';
import { Copy } from '../atoms/Copy.jsx';
import { SelectedBehaviour } from '../atoms/SelectedBehaviour.jsx';
import { Select, Option } from '../molecules/Select.jsx';
import { Paginator } from '../organisms/Paginator.jsx';
import Headers from '../atoms/Header';
import './Testpage.css';

export const TestPage = () => (
  <div>
    <Headers.H1.Default>default?</Headers.H1.Default>
    <Headers.H1.Alt>Alt?</Headers.H1.Alt>
    <Heading text="Unselected"></Heading>
    <SelectedBehaviour>
      <Heading text="Selected"></Heading>
    </SelectedBehaviour>
    lasers sdf
    <Select>
      <Option>
        <Heading text="One"></Heading><Copy>test</Copy>
      </Option>
      <Option>
        <Heading text="Two"></Heading><Copy>sdfsdf</Copy>
        <Copy>sdfgsdfg sdfg sdfg sdfg sdfgsd fgsdf</Copy>
      </Option>
      <Option>
        <Heading text="Three"></Heading><Copy>234235</Copy>
      </Option>
    </Select>
    <Paginator start="1" end="4" data={['test', 'students','test', 'students','test', 'students','test', 'students','test', 'students', 'whatever']}>
      { (items) => items.map((item, index) => <span key={index}>BLAR[{item}]</span>) }
    </Paginator>

  </div>
);
