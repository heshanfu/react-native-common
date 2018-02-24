/**
 * Copyright 2016 Reza (github.com/rghorbani)
 *
 * @flow
 */

'use strict';

const _ = require('lodash');

export function isItemSelected(childValue, selectedValue) {
  let isSelected = false;

  if (Array.isArray(selectedValue)) {
    isSelected = _.includes(selectedValue, childValue);
  } else {
    isSelected = childValue === selectedValue;
  }
  return isSelected;
}

export function getItemValue(props) {
  if (_.isArray(props.value)) {
    return props.getItemValue ?
      _.map(props.value, item => props.getItemValue(item)) :
      _.map(props.value, 'value');
  } else if (!_.isObject(props.value)) {
    return props.value;
  }
  return _.invoke(props, 'getItemValue', props.value) || _.get(props.value, 'value');
}
