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
items-center
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

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-sm
[&>p]:text-wrap
[&>p]:font-lato
`;

export const InfoPhone = tw.article`
w-full
flex
gap-4
items-center
relative

[&>img]:w-[164px]
[&>img]:ml-10
`;

export const InfoTopButtonArea = tw.section`
flex
flex-col
gap-4
mt-8
`;

export const Main = tw.main`
w-full
py-12
bg-project-gray-100
text-project-white
text-center
flex
flex-col
gap-4
z-[11]

[&>h2]:text-2xl
[&>h2]:font-russo

[&>p]:text-sm
[&>p]:font-lato
[&>p]:text-wrap
`;

export const InfoBottom = tw.article`
w-full
flex
flex-col
gap-10
py-8
px-6
pb-10
text-project-white
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

[&>p]:text-sm
[&>p]:font-lato
[&>p]:text-wrap
[&>p]:w-full
[&>p]:text-left
`;

export const ButtonPlay = tw.article`
flex
items-center
justify-center
gap-2
font-lato
text-project-red-100
[&>svg]:text-xs
`;