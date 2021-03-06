/**
 * Copyright 2016 Reza (github.com/rghorbani).
 *
 * @flow
 */

'use strict';

const Containers = require('./containers');
const Images = require('./images');
const Inputs = require('./inputs');
const KeyboardAware = require('./keyboard-aware');
const NavIcons = require('./nav-icons');
const Touchables = require('./touchables');

module.exports = {
  ...Containers,
  ...Images,
  ...Inputs,
  ...KeyboardAware,
  ...NavIcons,
  ...Touchables,
  get Badge() { return require('./badge'); },
  get Button() { return require('./button'); },
  get Carousel() { return require('./carousel'); },
  get ConnectionStatusBar() { return require('./connection'); },
  get Dialog() { return require('./dialog'); },
  get Header() { return require('./header'); },
  get KeyboardSpacer() { return require('./KeyboardSpacer'); },
  get LoadingView() { return require('./loading'); },
  get Picker() { return require('./picker'); },
  get PureListView() { return require('./PureListView'); },
  get Stepper() { return require('./stepper'); },
  get TabBar() { return require('./tab-bar'); },
  get Text() { return require('./text'); },
  get Toast() { return require('./toast'); },
  get View() { return require('./view'); },
  get WheelPickerDialog() { return require('./wheel-picker-dialog'); },
  // Other
  get Navigator() { return require('./navigator/Navigator'); },
  // Old
  get DrawerLayout() { return require('./DrawerLayout'); },
  get InfiniteScrollView() { return require('./InfiniteScrollView'); },
  get ItemsWithSeperator() { return require('./ItemsWithSeperator'); },
  // get ListContainer() { return require('./ListContainer'); },
  get PageControl() { return require('./PageControl'); },
  get Popover() { return require('./Popover'); },
  get ProgressBar() { return require('./ProgressBar'); },
  get SegmentedControl() { return require('./SegmentedControl'); },
  get SettingsList() { return require('./SettingsList'); },
  get StyleSheet() { return require('./StyleSheet'); },
  get ViewPager() { return require('./ViewPager'); },
};
