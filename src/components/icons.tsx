// SVG icons extracted verbatim from foam.org's Talent 2024 digital exhibition.
import type { SVGProps } from "react";

/** The foam wordmark (f · o · a · m). Inherits color via currentColor. */
export function FoamLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 427 138" fill="none" aria-label="foam" role="img" {...props}>
      <path
        fill="currentColor"
        d="M42.6837 134.143V61.4479H60.2243V35.3791H42.1996C41.7155 29.7557 44.6203 25.7337 50.5416 25.7337C53.5954 25.7337 57.4685 27.1861 60.1871 27.9681V2.90481C56.6492 1.78758 50.6906 0 45.8865 0C25.9625 0 13.226 13.8165 13.226 31.506V35.3791H0.415009V61.4479H13.3005V134.143H42.6837Z"
      />
      <path
        fill="currentColor"
        d="M309.517 77.3499C309.517 67.0714 314.656 59.5114 324.972 59.5114C333.165 59.5114 337.187 65.2838 337.187 74.2962V134.143H368.06V77.5361C368.06 67.5555 373.199 59.5114 383.329 59.5114C391.857 59.5114 396.028 65.2838 396.028 74.6313V134.143H426.417V66.5872C426.417 47.7804 414.202 33.4426 394.725 33.4426C379.605 33.4426 372.194 38.7308 363.367 49.3818C357.893 38.917 347.13 33.4426 335.548 33.4426C324.115 33.4426 313.986 40.1832 307.878 48.4135V35.3791H279.24V134.143H309.479V77.3499H309.517Z"
      />
      <path
        fill="currentColor"
        d="M113.628 33.4426C83.2394 33.4426 60.0754 56.1225 60.0754 85.7292C60.0754 114.517 83.3884 137.532 113.628 137.532C143.868 137.532 167.33 114.554 167.33 85.7292C167.33 56.1225 144.017 33.4426 113.628 33.4426ZM113.628 109.191C99.9607 109.191 89.9801 98.9126 89.9801 85.7292C89.9801 72.2107 99.1414 61.5969 113.628 61.5969C127.929 61.5969 137.425 72.2107 137.425 85.7292C137.425 98.9126 127.445 109.191 113.628 109.191Z"
      />
      <path
        fill="currentColor"
        d="M235.705 45.9929C227.512 37.9488 218.835 33.4426 207.253 33.4426C194.553 33.4426 183.455 37.9488 175.411 45.9929V124.162C183.455 132.057 194.702 136.563 207.253 136.563C218.835 136.563 227.512 131.908 235.705 123.864V134.18H265.311V35.3791H235.705V45.9929ZM213.174 108.893C199.506 108.893 189.675 98.7636 189.675 85.0961C189.675 71.4286 199.469 61.15 213.174 61.15C227.177 61.15 236.673 71.4286 236.673 85.0961C236.673 98.7636 227.177 108.893 213.174 108.893Z"
      />
    </svg>
  );
}

/** Close (×) — extracted from the filter overlay close button. */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path stroke="currentColor" d="M12.685 1.077.703 13.059M.704.862l11.982 11.982" />
    </svg>
  );
}

/** Play triangle — from the soundscape player button. */
export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1l12 11L1 23V1z" stroke="currentColor" strokeWidth="0.93" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Pause bars — from the soundscape player button. */
export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1v22M9 1v22" stroke="currentColor" strokeWidth="0.93" strokeLinecap="round" />
    </svg>
  );
}

/** Long left arrow — the artist-page back button. */
export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="64" height="14" viewBox="0 0 64 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M63 7H1M1 7l6-6M1 7l6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Plus / zoom indicator shown over zoomable images. */
export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
