import tw from "tailwind-styled-components";

export const Container = tw.section`
w-full
py-16
flex
flex-col
items-center
justify-center
bg-project-gray-100
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
[&>p]:text-wrap

md:[&>h2]:text-4xl
md:[&>p]:text-lg
md:[&>p]:text-center
md:px-10
`;

export const Video = tw.div`
w-[300px]

[&>img]:w-full
[&>img]:h-full
[&>img]:rounded-xl
[&>img]:mt-4

md:w-[600px]
md:h-[400px]

xl:w-[800px]
xl:h-[550px]
xl:pb-16

2xl:w-[1000px]
2xl:h-[700px]
`;

export const VideoFrame = tw.video`
w-full
h-full
rounded-xl
mt-10
text-project-gray-100
font-lato
`;