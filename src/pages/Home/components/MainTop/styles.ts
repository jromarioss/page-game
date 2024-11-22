import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
flex
flex-col
items-center
justify-center
bgMainTop
`;

export const InfoTop = tw.article`
w-full
mt-[200px]
flex
flex-col
gap-16
justify-center
text-project-white

lg:items-center

xl:flex-row
xl:gap-8
`;

export const Info = tw.article`
w-full
px-4
flex
flex-col
gap-4
items-center
text-center

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-base
[&>p]:text-wrap
[&>p]:font-lato

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:px-8

xl:w-[600px]
xl:items-start
xl:px-0
xl:gap-6
xl:[&>p]:mb-8
`;

export const InfoPhone = tw.article`
flex
gap-4
items-center
justify-center
relative
-mb-2

[&>img]:w-[300px]

md:[&>img]:w-[450px]
md:-mb-8

lg:w-[800px]

xl:w-[500px]
xl:justify-start
`;

export const Main = tw.main`
w-full
py-12
px-4
flex
flex-col
items-center
gap-4
z-[11]
text-center
bg-project-gray-100
text-project-white

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-base
[&>p]:font-lato
[&>p]:text-wrap

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:px-10
md:py-14

2xl:py-16

lg:[&>h2]:w-[800px]
lg:[&>p]:w-[800px]

xl:[&>h2]:w-[900px]
xl:[&>p]:w-[900px]
`;

export const InfoBottom = tw.article`
w-full
py-8
px-6
flex
flex-col
items-center
gap-10
bg-project-shadow
text-project-white

md:py-14

xl:flex-row
xl:justify-center

2xl:py-16
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