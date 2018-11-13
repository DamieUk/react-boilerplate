import * as React from 'react';

const imagePlaceholder = '/images/icons/icon-user.svg';

interface UserIconProps {
  imageUrl: string | null;
}

class UserIcon extends React.PureComponent<UserIconProps, {}> {
  render() {
    const { imageUrl, ...otherProps } = this.props;
    return (
      <div
        className="user-image-preview center-block"
        {...otherProps}
      >
        <div className="user-image" style={{backgroundImage: `url(${imageUrl || imagePlaceholder})`}}/>
        <div className="icon-plus">+</div>
      </div>
    );
  }
}

export default UserIcon;
