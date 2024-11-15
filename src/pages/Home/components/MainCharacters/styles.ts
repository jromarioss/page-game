import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-16
flex
flex-col
items-center
justify-center
bg-project-gray-100
`;

export const Text = tw.article`
flex
flex-col
gap-4
items-center

[&>h2]:font-russo 
[&>h2]:text-3xl

[&>p]:font-lato
[&>p]:text-base
[&>p]:font-semibold
[&>p]:text-wrap
[&>p]:text-project-red-100

md:[&>h2]:text-4xl
md:[&>p]:text-lg
`;

export const Cards = tw.article`
w-full
py-8
px-6
flex
flex-col
items-center
gap-10
text-project-white

xl:flex-row
xl:justify-center
`;

export const Card = tw.article`
w-[300px]
h-[332px]
flex
flex-col
gap-2
items-center
rounded-xl
relative
bg-red-600

md:w-[600px]
md:h-[650px]

xl:w-[480px]
xl:h-[500px]
`;

export const CardImg = tw.article`
w-full
h-full
overflow-hidden
`;

export const CardInfo = tw.article`
absolute
bottom-4
left-4
flex
flex-col
gap-1
items-center
justify-start

[&>h2]:text-xl
[&>h2]:w-full
[&>h2]:text-left
[&>h2]:text-project-white
[&>h2]:font-russo

[&>p]:text-sm
[&>p]:font-lato
[&>p]:w-full
[&>p]:text-left

md:[&>h2]:text-2xl
md:[&>p]:text-base
md:gap-2
`;

export const Wrapp = tw.div`
flex
flex-col
gap-10

md:flex-row
md:flex-wrap
md:items-center
md:justify-center
md:gap-8

lg:w-[600px]
`;

export const Card2 = tw.article`
w-[300px]
h-[332px]
flex
flex-col
gap-2
items-center
rounded-xl
relative
bg-red-600

md:w-[280px]

xl:w-[260px]
xl:h-[234px]
`;

export const CardInfo2 = tw.article`
absolute
bottom-4
left-4
flex
flex-col
gap-1
items-center
justify-start

[&>h2]:text-xl
[&>h2]:w-full
[&>h2]:text-left
[&>h2]:text-project-white
[&>h2]:font-russo

[&>p]:text-sm
[&>p]:font-lato
[&>p]:w-full
[&>p]:text-left

xl:[&>h2]:text-lg
xl:[&>p]:text-xs
xl:gap-2
`;

export const Type = tw.article`
self-start
px-3
py-1
flex
items-center
justify-center
gap-2
rounded-2xl
font-lato
text-sm
bg-project-red-100
text-project-white

xl:text-xs
`;