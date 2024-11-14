import tw from 'tailwind-styled-components';

export const Container = tw.div`
absolute
top-0
z-[10]
right-0
w-lvw
h-lvh
bg-project-shadow
flex
items-center
justify-center
`;

export const Content = tw.div`
w-[300px]
z-[12]
h-[200px]
bg-zinc-700
rounded-xl
relative
p-4
flex
flex-col
gap-4
border-2
border-zinc-600

[&>h2]:mt-4
[&>h2]:text-xl
[&>h2]:text-center
`;

export const Main = tw.div`
w-full
flex
flex-col
gap-4
`;

export const Row = tw.div`
flex
gap-8
items-center
justify-center
`;

export const ButtonClose = tw.div`
absolute
top-1
right-1
w-8
h-8
flex
items-center
justify-center
border-2
border-zinc-600
bg-zinc-900
rounded-full
`;

export const Image = tw.div`
w-10
h-10
p-1
rounded-lg
bg-white
`;

export const ButtonConnect = tw.button`
text-base
font-semi-bold
coursor-pointer

`;