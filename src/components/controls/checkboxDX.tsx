import React, { useState } from 'react';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '../ui/checkbox';
import { CheckIcon } from '../ui/icon';

const CheckboxDX = (props: any) => {

  return (
    <Checkbox
      size="sm"
      isInvalid={props.isInvalid}
      isDisabled={props.isDisabled}
      value={''}
      className={props.className}
      isChecked={props.isChecked}
      onChange={props.onChange}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} className="text-white bg-blue-500" />
      </CheckboxIndicator>
      <CheckboxLabel className={props.classNamelabel}>{props.labelText}</CheckboxLabel>
    </Checkbox>
  );
};

export default CheckboxDX;