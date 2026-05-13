export const site = {
  business: {
    name: "Daniel Hood Roofing Systems",
    shortName: "Daniel Hood Roofing",
    owner: "Daniel Hood",
    city: "Knoxville",
    region: "Tennessee",
    regionShort: "TN",
    phone: "865-851-5002",
    phoneHref: "tel:+18658515002",
    email: "info@danielhoodroofingsystems.com",
    hours: "Mon–Sun · 8 AM – 8 PM · After-hours emergency service",
    yearsInBusiness: 25,
    license: "BC-21 Licensed Contractor",
    certification: "GAF Certified Plus Contractor",
    awards: ["Cityview Best of the Best 2024", "BBB Accredited"],
    rating: 4.8,
    ratingGafReviews: 389,
    googleReviews: "220+",
    totalFiveStarReviews: "2,100+",
    domain: "danielhoodroofingsystems.com",
    tagline: "Knoxville's Most-Trusted Roofer Since 2000",
    promise: "Lifetime no-leak guarantee. Free inspections. Same-week installs.",
  },
  areas: [
    { name: "Knox County", slug: "knox-county", primary: true, cities: ["Knoxville", "Farragut", "Powell", "Halls"] },
    { name: "Blount County", slug: "blount-county", primary: true, cities: ["Maryville", "Alcoa", "Friendsville"] },
    { name: "Sevier County", slug: "sevier-county", primary: true, cities: ["Sevierville", "Pigeon Forge", "Gatlinburg"] },
    { name: "Anderson County", slug: "anderson-county", primary: false, cities: ["Oak Ridge", "Clinton"] },
    { name: "Loudon County", slug: "loudon-county", primary: false, cities: ["Lenoir City", "Loudon"] },
  ],
  services: [
    { name: "Roof Replacement", slug: "roof-replacement", featured: true, blurb: "Full tear-off and replacement with GAF shingles or standing-seam metal. Property-protected installs.", icon: "shingles" },
    { name: "Roof Repair", slug: "roof-repair", featured: true, blurb: "Targeted repairs for leaks, missing shingles, storm damage. Lifetime no-leak guarantee.", icon: "wrench" },
    { name: "Metal Roofing", slug: "metal-roofing", featured: true, blurb: "Standing seam and through-fastened metal systems built to outlast 3 shingle roofs.", icon: "metal" },
    { name: "Emergency Roof Repair", slug: "emergency-repair", featured: true, blurb: "After-hours tarp-and-patch for storm damage. Residential, commercial, industrial.", icon: "lightning" },
    { name: "Shingle Roofing", slug: "shingle-roofing", featured: false, blurb: "Architectural and designer GAF shingles backed by manufacturer warranty.", icon: "shingles" },
    { name: "Gutter Repair & Replacement", slug: "gutters", featured: false, blurb: "Seamless gutters and gutter guards. Keep water away from your foundation.", icon: "drop" },
    { name: "Roof Cleaning", slug: "roof-cleaning", featured: false, blurb: "Soft-wash treatment for algae streaks. Restore curb appeal without damaging shingles.", icon: "spray" },
    { name: "Free Roof Inspection", slug: "free-inspection", featured: false, blurb: "No-obligation 21-point inspection with photos and a written estimate.", icon: "clipboard" },
  ],
  reviews: [
    {
      name: "Sam Hassen",
      text: "The replacement was done perfectly, on time, and when they were done, it was like they were never here, except a beautiful new roof.",
      stars: 5,
      timeAgo: "2 weeks ago",
      area: "Knoxville",
    },
    {
      name: "Karen M.",
      text: "Daniel's crew showed up exactly when they said. Tore off the old roof and had us buttoned up before the storm hit Tuesday. Couldn't ask for more.",
      stars: 5,
      timeAgo: "1 month ago",
      area: "Farragut",
    },
    {
      name: "James R.",
      text: "After hail damage, three other roofers ghosted us. Daniel came out the next morning, worked with our insurance, and replaced everything. Honest people.",
      stars: 5,
      timeAgo: "1 month ago",
      area: "Maryville",
    },
    {
      name: "Tina B.",
      text: "Standing-seam metal install on a tricky pitch. Beautiful craftsmanship and the cleanup was spotless. Worth every dollar.",
      stars: 5,
      timeAgo: "3 months ago",
      area: "Sevierville",
    },
  ],
  faqs: [
    {
      q: "How much does a new roof cost in Knoxville?",
      a: "Most Knox County asphalt-shingle replacements run $9,500–$18,000 depending on square footage, pitch, and tear-off layers. Metal roofs run higher. We give written, flat-rate quotes after a free on-site inspection — no surprise add-ons.",
    },
    {
      q: "How long does a roof replacement take?",
      a: "An average single-family home in East Tennessee is one to two days from tear-off to cleanup. Larger or steeper roofs and metal installs can take three to five days.",
    },
    {
      q: "Do you work with insurance after storm damage?",
      a: "Yes. We document damage with photos, meet your adjuster on-site, and handle the paperwork. Most storm jobs in Knox, Blount, and Sevier counties qualify for full insurance coverage.",
    },
    {
      q: "What warranty do you offer?",
      a: "All replacements include our lifetime no-leak workmanship guarantee plus the GAF manufacturer warranty (up to 50 years on materials with our GAF Certified Plus status).",
    },
    {
      q: "Can you handle emergency repairs after hours?",
      a: "Yes. We run after-hours emergency tarp-and-patch service across Knox, Blount, Sevier, Anderson, and Loudon counties. Call 865-851-5002 anytime.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes — flexible financing options with approved credit, including 0% promotional plans. We'll walk you through what fits your budget at the estimate.",
    },
  ],
  nav: [
    { label: "Services", href: "/services/" },
    { label: "Areas Served", href: "/areas/" },
    { label: "Reviews", href: "/#reviews" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  trustBadges: [
    { label: "GAF Certified Plus", sub: "Top 3% of roofers in U.S." },
    { label: "BC-21 Licensed", sub: "Fully licensed & insured" },
    { label: "BBB Accredited", sub: "A+ rating" },
    { label: "Cityview Best of the Best", sub: "2024 Winner" },
  ],
};

export type Service = typeof site.services[number];
export type Area = typeof site.areas[number];
export type Review = typeof site.reviews[number];
