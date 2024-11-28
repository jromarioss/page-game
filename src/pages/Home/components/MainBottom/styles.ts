import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-14
flex
flex-col
items-center
justify-center
bgMainMiddle

2xl:py-16
`;

export const Text = tw.article`
flex
flex-col
gap-4
items-center
px-8
mb-4

[&>h2]:font-russo 
[&>h2]:text-2xl

[&>p]:font-lato
[&>p]:text-base
[&>p]:text-wrap

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:[&>p]:text-center
md:px-10

lg:w-[800px]

xl:w-[900px]
`;