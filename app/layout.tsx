export const metadata: Metadata = {
  metadataBase: new URL("https://jamia-imam-navavi.vercel.app"),

  title: {
    default: "Jamia Imam Navavi (RA)",
    template: "%s | Jamia Imam Navavi (RA)",
  },

  description:
    "Official website of Jamia Imam Navavi (RA), a distinguished Islamic institution dedicated to excellence in Islamic education, Qur'an, Hadith, Arabic studies, and moral values.",

  keywords: [
    "Jamia Imam Navavi",
    "Jamia Imam Nawawi",
    "Islamic College Kerala",
    "Islamic Education",
    "Arabic College",
    "Islamic Studies",
    "Quran",
    "Hadith",
    "Ahlussunnathi Wal Jama'ah",
    "Kerala",
    "Thrissur",
  ],

  authors: [
    {
      name: "Jamia Imam Navavi (RA)",
    },
  ],

  creator: "Jamia Imam Navavi (RA)",

  publisher: "Jamia Imam Navavi (RA)",

  verification: {
    google: "jAqtQliZod7TpaVaMVGikOpuETDt7eSzEwaHuZz8QRk",
  },

  openGraph: {
    title: "Jamia Imam Navavi (RA)",
    description:
      "Official website of Jamia Imam Navavi (RA), an institution dedicated to Islamic education and excellence.",
    url: "https://jamia-imam-navavi.vercel.app",
    siteName: "Jamia Imam Navavi (RA)",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jamia Imam Navavi (RA)",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jamia Imam Navavi (RA)",
    description:
      "Official website of Jamia Imam Navavi (RA).",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};