import "@/styles/globals.scss"

export const metadata = {
  title: {
    template: '%s | Trainer',
    default: 'Fitness Verden - Trainer',
  },
  description: 'The fitness app Trainer is made for you to join new and exciting fitness classes!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
