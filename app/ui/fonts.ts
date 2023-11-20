import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Nunito-Light.ttf',
      weight: '400',
      style: 'light',
    },
    {
      path: './fonts/Nunito-Regular.ttf',
      weight: '500',
      style: 'regular',
    },
    {
      path: './fonts/Nunito-SemiBold.ttf',
      weight: '600',
      style: 'semiBold',
    },
  ],
});
