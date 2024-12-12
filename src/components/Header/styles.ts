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
-top-1
right-0
bg-project-gray-100

md:p-8
md:h-[100px]

lg:px-10
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

md:[&>svg]:text-5xl

lg:hidden
`;

export const NavButtons = tw.div`
hidden

lg:flex
lg:items-center
lg:justify-center
lg:gap-8
`;

export const Button = tw.button`
hidden

lg:flex
lg:text-2xl
`;

export const ButtonA = tw.a`
hidden

lg:flex
lg:text-2xl
`;