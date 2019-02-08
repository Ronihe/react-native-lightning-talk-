// render props

import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  state = { on: false };
  toggle = () => this.setState(({ on }) => ({ on: !on }));
  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle
    };
  }
  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

function Refactor() {
  const beforeR = (
    <img
      src="https://www.funkyjunkinteriors.net/wp-content/uploads/2017/08/2017-garden-shed-cleanup-1068.jpg"
      width="480"
      height="384"
      alt="beforeRefacoring"
    />
  );
  const afterR = (
    <img
      src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/1/21/0/HGOYD202H_party-ready-backyard-after.jpg.rend.hgtvcom.966.725.suffix/1400953186985.jpeg"
      width="480"
      height="384"
      alt="afterRefacoring"
    />
  );
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          {on ? 'After refactoring' : 'Before refactoring'}
          <Switch on={on} onClick={toggle} />
          <hr />

          {on ? afterR : beforeR}
        </div>
      )}
    </Toggle>
  );
}

export default Refactor;
