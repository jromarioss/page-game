import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-14
flex
flex-col
items-center
justify-center
bg-project-blue-100

text-project-gray-100

2xl:py-16
`;

export const Text = tw.article`
flex
flex-col
gap-4
items-center
px-8

[&>h2]:font-russo 
[&>h2]:text-2xl

[&>p]:font-lato
[&>p]:text-base
[&>p]:font-semibold
[&>p]:text-wrap

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:[&>p]:text-center
md:px-10

lg:w-[800px]

xl:w-[900px]
`;

export const Subscribe = tw.div`
flex
flex-col
items-center
gap-4
mt-10

md:flex-row
md:gap-0
`;

export const Input = tw.input`
border-zinc-500
rounded-md
py-1
pl-2
w-[300px]
border-2

md:text-lg
`;

export const Button = tw.button`
w-[120px]
h-[36px]
bg-project-red-100
text-project-white
font-lato
flex
items-center
justify-center
text-sm
rounded-lg

md:h-[44px]
md:text-base
md:-ml-2
`;