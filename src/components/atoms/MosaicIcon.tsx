import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const MosaicIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 5v14c0 1.1.89 2 2 2h6V3H5c-1.11 0-2 .9-2 2zm16-2h-6v8h8V5c0-1.1-.9-2-2-2zm-6 18h6c1.1 0 2-.9 2-2v-6h-8v8z" />
  </SvgIcon>
);

export default MosaicIcon;
