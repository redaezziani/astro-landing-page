/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            colors:{
                primary:'#a52a2a',
                secondary:'#fcd34d',
            }
            ,
            animation: {
              gradient: "gradient 8s linear infinite",
              border: 'border 4s linear infinite',
              'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
              gradient: {
                to: {
                  backgroundPosition: "var(--bg-size) 0",
                },
              },

              border: {
                to: { '--border-angle': '360deg' },
              },
              'infinite-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
              },
            },
          },
	},
	plugins: [],
}


