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
h-[350px]
flex
flex-col
gap-16
justify-center
text-project-white

md:h-[650px]

lg:h-[700px]
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
txtShadow

[&>h2]:text-4xl
[&>h2]:font-bold
[&>h2]:font-russo
[&>h2]:txtShadow

[&>p]:text-lg
[&>p]:text-wrap
[&>p]:font-lato
[&>p]:txtShadow

md:px-8

xl:w-[800px]
xl:items-center
xl:px-0
xl:gap-6
xl:[&>p]:mb-8
xl:[&>p]:text-3xl
xl:[&>p]:font-semibold
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
xl:[&>p]:text-2xl
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

export const ButtonPlay = tw.a`
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