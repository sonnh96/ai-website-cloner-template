import type { SVGProps } from "react";

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.85711 13.0711C10.013 13.0711 12.5714 10.5128 12.5714 7.35686C12.5714 4.20095 10.013 1.64258 6.85711 1.64258C3.70119 1.64258 1.14282 4.20095 1.14282 7.35686C1.14282 10.5128 3.70119 13.0711 6.85711 13.0711Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.857 15.3573L11.4285 11.9287"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289L20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071L14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929L17.5858 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L17.5858 11L13.2929 6.70711C12.9024 6.31658 12.9024 5.68342 13.2929 5.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.73 2H9.27002V6.36H14.73V2Z"
        fill="currentColor"
      />
      <path
        d="M16.23 2V6.36H21.87C21.36 3.61 19.33 2.01 16.23 2Z"
        fill="currentColor"
      />
      <path
        d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z"
        fill="currentColor"
      />
      <path
        d="M7.76988 2C4.66988 2.01 2.63988 3.61 2.12988 6.36H7.76988V2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Hand-drawn squiggle arrow used next to "Cuộn để khám phá" (scroll-to-explore hint) in the hero. */
export function ScrollHintArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="41"
      height="66"
      viewBox="0 0 41 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.24 1.197c5.348 6.983 9.774 16.17 7.829 25.19-1.244 5.763-6.601 10.861-12.484 11.46-5.557.566-11.42-1.197-13.644-6.685-1.16-2.86-.916-5.866 1.842-7.675 4.213-2.762 10.897-.263 14.445 2.49 11.073 8.593 17.646 24.69 15.127 38.544M39.715 56.138c-1.266 2.11-4.304 6.836-6.33 8.862M33.385 65c-1.266-2.11-4.304-6.836-6.33-8.862"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
