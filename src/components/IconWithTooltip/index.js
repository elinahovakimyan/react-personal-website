import React from 'react';
import { Tooltip } from 'antd';

import './index.scss';

const IconWithTooltip = React.memo(function MyComponent({ iconSrc, text }) {
  return (
    <Tooltip title={text}>
      <div className="icon-with-text flex-column-center">
        <img src={iconSrc} alt={text} className="icon" />
      </div>
    </Tooltip>
  )
});

export { IconWithTooltip };