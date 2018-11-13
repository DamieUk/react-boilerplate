import * as React from 'react';

interface UserIconProps {
  size: 'medium';
}

class UserIcon extends React.PureComponent<UserIconProps, {}> {
  render() {
    return (
      <div className="dp-icon icon-user">

      </div>
    )
  }
}

export default UserIcon;
