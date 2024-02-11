/** @type {import('tailwindcss').Config} */
module.exports={
    content:['./src/**/*/*.{astro,html,ts,jsx,tsx,vue,svelte}'],
    theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}