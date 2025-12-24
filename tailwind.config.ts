import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--primary-font, "Mulish")', 'sans-serif'],
  			primary: 'var(--primary-font, "Mulish", sans-serif)'
  		},
  		spacing: {
  			'0': '0',
  			'5': '5px',
  			'10': '10px',
  			'15': '15px',
  			'20': '20px',
  			'25': '25px',
  			'30': '30px',
  			'35': '35px',
  			'40': '40px',
  			'45': '45px',
  			'50': '50px',
  			'55': '55px',
  			'60': '60px',
  			'65': '65px',
  			'70': '70px',
  			'75': '75px',
  			'80': '80px',
  			'85': '85px',
  			'90': '90px',
  			'95': '95px',
  			'100': '100px'
  		},
  		colors: {
  			white: 'var(--white)',
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--white)'
  			},
  			black: 'var(--black)',
  			stroke: 'var(--stroke)',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			'header-black': 'var(--header-black)',
  			'para-black': 'var(--para-black)',
  			'para-white': 'var(--para-white)',
  			'para-italic': 'var(--para-italic)',
  			'para-input': 'var(--para-input)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		boxShadow: {
  			'card-image': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  			blog: '0px 0px 20px 0px rgba(0, 0, 0, 0.16)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'slideInLeft': {
  				from: { opacity: '0', transform: 'translateX(-50px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slideInRight': {
  				from: { opacity: '0', transform: 'translateX(50px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'fadeInUp': {
  				from: { opacity: '0', transform: 'translateY(30px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fadeIn': {
  				from: { opacity: '0' },
  				to: { opacity: '1' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'bounceSoft': {
  				'0%, 100%': { transform: 'scale(1)' },
  				'50%': { transform: 'scale(1.05)' }
  			},
  			'pulseGlow': {
  				'0%, 100%': { boxShadow: '0 0 0 0 rgba(230, 90, 39, 0.4)' },
  				'50%': { boxShadow: '0 0 20px 10px rgba(230, 90, 39, 0.2)' }
  			},
  			'scaleIn': {
  				from: { opacity: '0', transform: 'scale(0.9)' },
  				to: { opacity: '1', transform: 'scale(1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
  			'slideInRight': 'slideInRight 0.6s ease-out forwards',
  			'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
  			'fadeIn': 'fadeIn 0.5s ease-out forwards',
  			'float': 'float 3s ease-in-out infinite',
  			'bounceSoft': 'bounceSoft 2s ease-in-out infinite',
  			'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
  			'scaleIn': 'scaleIn 0.5s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
