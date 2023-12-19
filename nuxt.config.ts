import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		plugins: [vsharp()],
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/plausible', '@nuxtjs/tailwindcss', 'nuxt-simple-sitemap'],
	plausible: {
		domain: 'nutshell-lab.com',
		apiHost: 'https://plausible.nutshell-lab.com'
	},
	site: {
		url: 'https://nutshell-lab.com',
	},
	sitemap: {
		exclude: ['/mentions-legales'],
	},
	ignore: [
        process.env.CF_PAGES == "1" ? 'pages/dev/*' : '',
        process.env.CF_PAGES == "1" ? 'pages/cases/enterprise-resource-planning.vue' : ''
    ],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			script: [
				{
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': '{"token": "165b78a79b8741cea254d27e292c3442"}'
				}
			],
			link: [
				{
					rel: 'icon',
					href: '/favicon.ico'
				},
				{
					rel: 'apple-touch-icon',
					href: '/apple-touch-icon.png'
				}
			]
		}
	}
})
