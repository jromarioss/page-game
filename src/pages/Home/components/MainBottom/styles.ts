import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-16
flex
flex-col
items-center
justify-center
bg-project-red-100
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
`;

export const Button = tw.button`
mt-10
bg-project-white
text-project-gray-100
font-lato
px-8
py-2
rounded-lg
`;