import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
bg-red-500
flex
flex-col
items-center
justify-center
`;

export const InfoTop = tw.article`
w-full
flex
mt-[200px]
flex-col
gap-16
justify-center
text-project-white
`;

export const Info = tw.article`
w-full
flex
flex-col
gap-4
items-center
text-center
px-4

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-base
[&>p]:text-wrap
[&>p]:font-lato

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:px-8
`;

export const InfoPhone = tw.article`
flex
gap-4
items-center
justify-center
relative

[&>img]:w-[180px]
[&>img]:mr-20

md:[&>img]:w-[250px]
`;

export const InfoTopButtonArea = tw.section`
flex
flex-col
gap-4
mt-8

md:flex-row
md:gap-8
`;

export const Main = tw.main`
w-full
py-12
px-4
bg-project-gray-100
text-project-white
text-center
flex
flex-col
gap-4
z-[11]

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-base
[&>p]:font-lato
[&>p]:text-wrap

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:px-10
md:py-14
`;

export const InfoBottom = tw.article`
w-full
flex
bg-project-shadow
flex-col
items-center
gap-10
py-8
px-6
text-project-white

md:py-14
`;

export const InfoBottomText = tw.article`
w-full
flex
flex-col
gap-4
items-center

[&>h2]:text-xl
[&>h2]:w-full
[&>h2]:text-left
[&>h2]:text-project-red-100
[&>h2]:font-russo

[&>p]:text-base
[&>p]:font-lato
[&>p]:text-wrap
[&>p]:w-full
[&>p]:text-left

md:w-[332px]
md:[&>h2]:text-2xl
md:[&>p]:text-lg
`;

export const ButtonPlay = tw.article`
flex
items-center
justify-center
gap-2
font-lato
text-base
text-project-red-100
[&>svg]:text-base

md:text-xl
md:[&>svg]:text-lg
`;