import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
h-full
flex
items-center
justify-center
fixed
top-0
right-0
z-[100]
bg-project-shadow
`;

export const Close = tw.div`
absolute
top-1
right-1

[&>svg]:text-white
[&>svg]:text-2xl

md:[&>svg]:text-4xl
md:top-2
md:right-2
`;

export const Main = tw.div`
bg-project-gray-100

flex
flex-col
gap-4
p-6
justify-center
items-center
relative
rounded-xl
border-2
z-[200]
border-project-gray-200


md:p-10
md:gap-8
`;

export const QrCode = tw.div`
w-[180px]
h-[180px]
flex
items-center
justify-center
rounded-xl
bg-project-white

md:w-[232px]
md:h-[232px]
`;

export const ButtonCopy = tw.button`
border-2
rounded-xl
px-8
py-2
border-project-white
text-xl
font-semibold
transition
duration-300
ease-in-out
hover:scale-110

md:text-2xl
`;