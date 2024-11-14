import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-16
bg-project-gray-100
flex
flex-col
items-center
justify-center


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
`;

export const Cards = tw.article`
w-full
flex
flex-col
items-center
gap-10
py-8
px-6
text-project-white
`;

export const Card = tw.article`
w-[300px]
h-[332px]
bg-red-600
flex
flex-col
gap-2
items-center
rounded-xl
relative
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
`;

export const Type = tw.article`
self-start
flex
items-center
justify-center
gap-2
px-3
py-1
rounded-2xl
font-lato
bg-project-red-100
text-sm
text-project-white
`;