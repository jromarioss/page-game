import tw from 'tailwind-styled-components';

export const Container = tw.footer`
w-full
flex
flex-col
items-center
gap-10
justify-between
py-10
bg-project-gray-100

md:py-14
`;

export const ButtonsAreas = tw.section`
flex
gap-4

[&>p]:font-lato

md:gap-8
`;

export const EmailArea = tw.section`
flex
flex-col
gap-2
items-center
justify-center

[&>p]:font-lato

md:[&>p]:text-lg
`;

export const Logo = tw.section`
w-[32px]
h-[32px]
rounded-md
bg-project-red-100
`;

export const RedesArea = tw.section`
flex
mb-4
gap-4

md:[&>p]:text-lg
`;

export const Icon = tw.div`
flex
items-center
justify-center
rounded-md
bg-project-red-100
w-[32px]
h-[32px]

[&>svg]:text-xl

md:w-[44px]
md:rounded-xl
md:h-[44px]
`;