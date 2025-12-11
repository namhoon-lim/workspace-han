module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // 디자인 토큰: 레이아웃 높이
      height: {
        'status-bar': '47px',
        'nav-header': '54px',
        'input-field': '50px',
        'heading': '21px',
        'row': '18px',
        'coupon': '68px',
        'shadow-card': '23px',
        'card-action': '40px',
        'card-action-row': '29.69px',
        'divider': '19.8px',
        'footer-spacer': '16px',
        'home-indicator': '5px',
        'status-content': '20px',
      },
      // 디자인 토큰: 레이아웃 너비
      width: {
        'screen-min': '375px',
        'status-content': '333px',
        'clock-time': '54px',
        'mini-logo': '87px',
        'coupon-label': '63px',
        'country-flag': '30px',
        'home-indicator': '134px',
        'footer-spacer': '360px',
        'divider': '1px',
      },
      // 디자인 토큰: 최소 높이/너비
      minHeight: {
        'screen': '773px',
      },
      minWidth: {
        'screen': '375px',
        'input-container': '300px',
      },
      // 디자인 토큰: 갭/스페이싱
      gap: {
        '3px': '3px',
        '5px': '5px',
        '13px': '13px',
        '22': '22px',
      },
      // 디자인 토큰: 패딩
      padding: {
        '7px': '7px',
        '8.5': '8.5px',
        '15': '15px',
        '22': '22px',
        '105': '105px',
      },
      // 디자인 토큰: 마진
      margin: {
        '-1': '-1px',
        '-8.5': '-8.5px',
        '-16.5': '-16.5px',
        '140': '140px',
      },
      // 디자인 토큰: 포지셔닝
      spacing: {
        '11': '11px',
        '19': '19px',
        '23': '23px',
        '26': '26px',
        '77': '77px',
      },
      // 디자인 토큰: border-radius
      borderRadius: {
        'bottom-16': '0 0 16px 16px',
        'pill': '20px',
        'full-100': '100px',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // 디자인 토큰: box-shadow
      boxShadow: {
        'card-sm': '0px 4px 10px rgba(0, 0, 0, 0.1)',
        'card': '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        "variable-collection-basic-black":
          "var(--variable-collection-basic-black)",
        "variable-collection-basic-white":
          "var(--variable-collection-basic-white)",
        "variable-collection-BG-03-f4f7fd":
          "var(--variable-collection-BG-03-f4f7fd)",
        "variable-collection-BG-09-dfe3ec":
          "var(--variable-collection-BG-09-dfe3ec)",
        "variable-collection-blue-01-0d1458":
          "var(--variable-collection-blue-01-0d1458)",
        "variable-collection-error-color-red":
          "var(--variable-collection-error-color-red)",
        "variable-collection-grayscale-01-0b0c0e":
          "var(--variable-collection-grayscale-01-0b0c0e)",
        "variable-collection-grayscale-02-1c253f":
          "var(--variable-collection-grayscale-02-1c253f)",
        "variable-collection-grayscale-03-5e616b":
          "var(--variable-collection-grayscale-03-5e616b)",
        "variable-collection-grayscale-05-717682":
          "var(--variable-collection-grayscale-05-717682)",
        "variable-collection-grayscale-06-85888e":
          "var(--variable-collection-grayscale-06-85888e)",
        "variable-collection-grayscale-07-a3a8bf":
          "var(--variable-collection-grayscale-07-a3a8bf)",
        "variable-collection-grayscale-10-d3d6e2":
          "var(--variable-collection-grayscale-10-d3d6e2)",
        "variable-collection-primary-primary-0d56e4":
          "var(--variable-collection-primary-primary-0d56e4)",
        "variable-collection-sub-title01-003fbb":
          "var(--variable-collection-sub-title01-003fbb)",
        // 추가 색상 토큰
        "variable-collection-grayscale-04-3a3f47":
          "var(--variable-collection-grayscale-04-3a3f47)",
        "variable-collection-grayscale-08-6e7781":
          "var(--variable-collection-grayscale-08-6e7781)",
        "variable-collection-blue-02-3182f6":
          "var(--variable-collection-blue-02-3182f6)",
        "variable-collection-blue-03-1b64da":
          "var(--variable-collection-blue-03-1b64da)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-14-b": "var(--body-14-b-font-family)",
        "body-14-r": "var(--body-14-r-font-family)",
        "body-14-SB": "var(--body-14-SB-font-family)",
        "body-16-r": "var(--body-16-r-font-family)",
        "body-bold": "var(--body-bold-font-family)",
        "caption-title-13-b": "var(--caption-title-13-b-font-family)",
        "caption-title-13-r": "var(--caption-title-13-r-font-family)",
        "navigation-12-r": "var(--navigation-12-r-font-family)",
        "navigation-12-SB": "var(--navigation-12-SB-font-family)",
        "title-16-b": "var(--title-16-b-font-family)",
        "title-18-b": "var(--title-18-b-font-family)",
        "title-20-b": "var(--title-20-b-font-family)",
        "title-24-b": "var(--title-24-b-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
