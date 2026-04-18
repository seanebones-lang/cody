import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    tagline,
    bookingUrl,
    instagramUrl,
    facebookUrl,
    contactEmail
  }
`;

export const featuredPortfolioQuery = groq`
  *[_type == "portfolioPiece" && featured == true] | order(_createdAt desc)[0...9]{
    _id,
    title,
    "slug": slug.current,
    styleTags,
    images
  }
`;
