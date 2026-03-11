import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Imersão Nova Lei de Improbidade Administrativa | Plenum Brasil',
    template: '%s | Plenum Brasil',
  },
  description:
    'Imersão presencial sobre a Nova Lei de Improbidade Administrativa na Prática do STF, STJ e TSE. 14 e 15 de maio de 2026, Brasília/DF. Com Min. Teodoro Santos Silva, Min. Paulo Sérgio Domingues e Dr. Igor Pereira Pinheiro.',
  keywords: [
    'improbidade administrativa',
    'lei 14.230',
    'STF',
    'STJ',
    'TSE',
    'curso improbidade',
    'plenum brasil',
    'imersão jurídica',
    'direito administrativo',
  ],
  authors: [{ name: 'Grupo Plenum' }],
  creator: 'Grupo Plenum',
  publisher: 'Grupo Plenum',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Imersão Nova Lei de Improbidade Administrativa | Plenum Brasil',
    description:
      'Imersão presencial com ministros do STJ e promotor do MPCE. 14 e 15 de maio de 2026, Brasília/DF. 16h de carga horária.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imersão Nova Lei de Improbidade Administrativa | Plenum Brasil',
    description:
      'Imersão presencial sobre a Nova Lei de Improbidade Administrativa. 14 e 15 de maio de 2026, Brasília/DF.',
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
