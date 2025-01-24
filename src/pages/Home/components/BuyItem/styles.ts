import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-14
flex
flex-col
items-center
relative
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
[&>h2]:text-center

[&>p]:font-lato
[&>p]:text-base
[&>p]:font-semibold
[&>p]:text-wrap
[&>p]:text-center

md:[&>h2]:text-4xl
md:[&>p]:text-2xl
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

export const Ovo = tw.div`
w-[150px]
h-[150px]
absolute
-bottom-4
-right-12
z-[1]

[&>img]:w-full
[&>img]:object-cover
[&>img]:h-full

md:-bottom-4
md:-right-14
md:w-[200px]
md:h-[200px]

lg:right-[30%]
`;

export const Button = tw.button`
w-[200px]
h-[48px]
flex
items-center
justify-center
gap-2
bg-project-yellow-100
border-2
border-yellow-500
rounded-lg
text-lg
font-bold
text-white

md:w-[250px]
`;