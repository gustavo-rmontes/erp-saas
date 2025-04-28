
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1ebcc3',
					light: '#4FD8DF',
					dark: '#16898E',
				},
				secondary: {
					DEFAULT: '#333333',
					foreground: '#f8f9fa'
				},
				destructive: {
					DEFAULT: '#FF5252',
					foreground: '#ffffff'
				},
				warning: {
					DEFAULT: '#FFC107',
					foreground: '#212121'
				},
				success: {
					DEFAULT: '#4CAF50',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#2a2a2a',
					foreground: '#a0a0a0'
				},
				accent: {
					DEFAULT: '#1ebcc3',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: '#1e1e1e',
					foreground: '#f8f9fa'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [],
} satisfies Config;
