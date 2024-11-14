import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
h-full
p-4
absolute
top-0
z-[10]
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
`;

export const ButtonClose = tw.div`
absolute
top-6
right-4
flex
items-center
justify-center


[&>svg]:text-project-white
[&>svg]:text-5xl
`;

export const Buttons = tw.button`
text-lg
font-semibold
coursor-pointer
`;

export const ButtonWallet = tw.button`
text-lg
py-2
px-4
mt-4
rounded-3xl
font-semibold
coursor-pointer
bg-project-yellow-100
`;