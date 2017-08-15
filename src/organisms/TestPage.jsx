import React from 'react';
import { Heading } from '../atoms/Heading.jsx';
import { Copy } from '../atoms/Copy.jsx';
import { SelectedBehaviour } from '../atoms/SelectedBehaviour.jsx';
import { Select, Option } from '../molecules/Select.jsx';

export const TestPage = () => (
  <div>
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
  </div>
);
