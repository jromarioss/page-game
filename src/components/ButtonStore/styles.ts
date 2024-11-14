import tw from "tailwind-styled-components";

export const Container = tw.button`
w-[136px]
h-[48px]
flex
items-center
justify-center
gap-2
bg-project-gray-200
border-2
border-zinc-700
rounded-md

[&>img]:w-[28px]
`;

export const Text = tw.section`
flex
flex-col

[&>p]:text-[10px]
[&>span]:text-base
[&>span]:-mt-1
`;