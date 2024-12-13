import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
h-lvh
p-4
fixed
top-0
z-[20]
right-0
bg-project-gray-100
flex
items-center
justify-center
`;

export const Main = tw.div`
w-full
h-full
py-12
px-4
flex
flex-col
items-start
gap-4

md:gap-8
`;

export const ButtonClose = tw.div`
absolute
top-6
right-3
flex
items-center
justify-center

[&>svg]:text-project-white
[&>svg]:text-5xl

md:right-8
`;

export const Buttons = tw.button`
text-lg
font-semibold
coursor-pointer

md:text-3xl
`;

export const ButtonA = tw.a`
text-lg
font-semibold
coursor-pointer

md:text-3xl
`;
