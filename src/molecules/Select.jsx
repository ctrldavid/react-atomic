import React, {Component, Children} from 'react';
import css from './Select.css';
import { SelectedBehaviour } from '../atoms/SelectedBehaviour.jsx';

// This should probably be an organism.

export class Select extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0,
      open: false,
      includeSelected: props.includeSelected || false,
    };
    this.toggle = this.toggle.bind(this);
  }

  select(index) {
    this.setState({selected: index});
  }

  toggle() { this.setState({open: !this.state.open}); }

  render () {
    const {children} = this.props;
    let selectedComponent = null;
    Children.forEach(children, (component, idx) => {
      if (idx === this.state.selected) {
        selectedComponent = component;
      }
    });

    const enhancedChildren = Children.map(children, (component, idx) => {
      if (!this.state.includeSelected && idx == this.state.selected) {
        return null;
      }
      return <Option onClick={() => this.select(idx)}>
        {component}
      </Option>;
    });


    return <div className={css.select} onClick={this.toggle}>
      <div>
        <SelectedBehaviour>
          {selectedComponent}
        </SelectedBehaviour>
      </div>
      {this.state.open?<div className={css.options}>
        {enhancedChildren}
      </div>:null}
    </div>;
  }
}

export const Option = ({children, onClick}) => <div onClick={onClick} className={css.option}>{children}</div>;

