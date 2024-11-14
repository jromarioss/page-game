import tw from 'tailwind-styled-components';

export const Content = tw.div`
w-full
`;

export const ButtonScrool = tw.button`
w-[44px]
h-[44px]
border-2
rounded-md
bg-project-white
border-zinc-300
fixed
bottom-4
right-4
flex
items-center
justify-center
z-[20]

[&>svg]:text-project-red-100
[&>svg]:text-3xl
`;