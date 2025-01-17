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
top-2
right-2

[&>svg]:text-white
[&>svg]:text-2xl

md:[&>svg]:text-4xl
`;

export const Main = tw.div`
bg-project-gray-100
w-[280px]
h-[280px]
flex
p-8
justify-center
items-center
relative
rounded-xl
border-2
border-project-gray-200

md:w-[400px]
md:h-[400px]
`;

export const QrCode = tw.div`
w-[180px]
h-[180px]
bg-red-500

[&>img]:w-full
[&>img]:h-full

md:w-[250px]
md:h-[250px]
`;