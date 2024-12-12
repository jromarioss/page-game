import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
h-[84px]
mt-[90px]
flex
gap-20
items-center
justify-center
bg-project-red-100
`;

export const Text = tw.div`
text-2xl
font-bold
text-yellow-300
animate-marquee
blink
`;