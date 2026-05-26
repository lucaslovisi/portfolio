/**
 * Shared easing curves typed as cubic-bezier tuples
 * so they satisfy motion's `Easing` type without inference issues.
 */
export const EASE_OUT_EXPO: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];
export const EASE_IN_OUT_QUART: [number, number, number, number] = [
  0.76, 0, 0.24, 1,
];
