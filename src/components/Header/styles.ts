import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
h-[94px]
flex
items-center
justify-between
p-4
fixed
z-[12]
top-0
right-0
bg-project-gray-100
`;

export const Logo = tw.div`
w-[44px]
h-[44px]
bg-red-400
`;

export const Nav = tw.nav`
h-full
w-full
flex
items-center
justify-end
`;

export const ButtonMenu = tw.div`


[&>svg]:text-project-white
[&>svg]:text-4xl
`;
