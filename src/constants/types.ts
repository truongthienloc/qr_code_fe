export type QRCodeShape =
    | 'rounded'
    | 'dots'
    | 'classy'
    | 'classy-rounded'
    | 'square'
    | 'extra-rounded';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
