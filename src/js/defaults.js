export let Defaults = {
  a11y: true,
  allowHTML: true,
  animateFill: true,
  animation: 'shift-away',
  appendTo: () => document.body,
  arrow: false,
  arrowTransform: '',
  arrowType: 'sharp',
  content: '',
  delay: [0, 20],
  distance: 10,
  duration: [325, 275],
  flip: true,
  flipBehavior: 'flip',
  followCursor: false,
  hideOnClick: true,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  livePlacement: true,
  multiple: false,
  offset: 0,
  onHidden() {},
  onHide() {},
  onMount() {},
  onShow() {},
  onShown() {},
  performance: false,
  placement: 'top',
  popperOptions: {},
  shouldPopperHideOnBlur: () => true,
  showOnInit: false,
  size: 'regular',
  sticky: false,
  target: '',
  theme: 'dark',
  touch: true,
  touchHold: false,
  trigger: 'mouseenter focus',
  updateDuration: 200,
  wait: null,
  zIndex: 9999
}

export const setDefaults = partialDefaults => {
  Defaults = { ...Defaults, ...partialDefaults }
}

/**
 * If the set() method encounters one of these, the popperInstance must be
 * recreated
 */
export const POPPER_INSTANCE_RELATED_PROPS = [
  'arrowType',
  'distance',
  'flip',
  'flipBehavior',
  'offset',
  'placement',
  'popperOptions'
]
