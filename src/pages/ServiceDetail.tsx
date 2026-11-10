import { responsiveSource } from "@/lib/responsiveImage";
import { Link, useParams, Navigate } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/site/PageLayout";
import InnerHero from "@/components/site/InnerHero";
import FadeUpSection from "@/components/site/FadeUpSection";
import { Button } from "@/components/ui/button";
import BeforeAfter from "@/components/site/BeforeAfter";
import { SERVICE_CONTENT, ESTIMATE_LINK, ESTIMATE_SENTENCE, getPortfolioTitle } from "@/data/serviceContent";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { SERVICE_FAQS } from "@/data/serviceFaqs";
import deck01 from "@/assets/deck-IMG_2914.jpg.asset.json";
import deck02 from "@/assets/deck-IMG_2900.jpg.asset.json";
import deck03 from "@/assets/deck-IMG_2916.jpg.asset.json";
import deck04 from "@/assets/deck-IMG_2905.jpg.asset.json";
import deck05 from "@/assets/deck-IMG_2913.jpg.asset.json";
import deck06 from "@/assets/deck-IMG_2904.jpg.asset.json";
import deck07 from "@/assets/deck-IMG_2896.jpg.asset.json";
import deck08 from "@/assets/deck-project-07.jpg.asset.json";

interface SeoEntry {
  title: string;
  description: string;
  h1: string;
  h2: string;
  keywords: string;
  schema?: object;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
}

const SEO_BY_SLUG: Record<string, SeoEntry> = {
  "interior-painting": {
    title: "Interior Painting in Massachusetts | Tony's Painting",
    description:
      "Professional interior painting for homes in Martha's Vineyard and Cape Cod. Surface prep, clean work and a final walkthrough. Free estimates. Call 508-982-9675.",
    h1: "Interior painting services for Massachusetts homeowners.",
    h2: "What our interior painting work includes.",
    keywords:
      "interior painting Martha's Vineyard MA, interior painters Cape Cod, house painters Martha's Vineyard, interior painting Edgartown, interior painting Falmouth MA",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interior Painting",
      provider: {
        "@type": "LocalBusiness",
        name: "Tony's Painting & Remodeling",
        telephone: "+15089829675",
      },
      areaServed: "Massachusetts, USA",
      description:
        "Interior painting for residential and commercial spaces across Massachusetts. Walls, ceilings, trim, accent walls and more.",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
    },
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Interior Painting", url: "https://tonyspaintingmv.com/services/interior-painting" },
    ],
  },
  "exterior-painting": {
    title: "Exterior Painting Contractor in Massachusetts | Tony's",
    description:
      "Exterior painting for homes on Martha's Vineyard, Cape Cod and the South Shore. Coastal grade coatings and a written scope. Free estimates. Call 508-982-9675.",
    h1: "Exterior house painting in Massachusetts.",
    h2: "How we approach exterior painting projects.",
    keywords:
      "exterior painting Martha's Vineyard MA, exterior painters Cape Cod, house painting Martha's Vineyard, exterior painting Edgartown, exterior painting Falmouth MA, exterior painting cost Massachusetts",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Exterior Painting",
      provider: {
        "@type": "LocalBusiness",
        name: "Tony's Painting & Remodeling",
        telephone: "+15089829675",
      },
      areaServed: "Massachusetts, USA",
      description:
        "Exterior painting with premium paints built for Massachusetts weather. Siding, trim, decks, fences and more.",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
    },
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Exterior Painting", url: "https://tonyspaintingmv.com/services/exterior-painting" },
    ],
  },
  remodeling: {
    title: "Remodeling Contractor in Massachusetts | Tony's Painting",
    description:
      "Kitchen, bathroom and living space remodeling on Martha's Vineyard and Cape Cod. One crew, multiple trades. Free estimates. Call 508-982-9675.",
    h1: "Home remodeling services in Massachusetts.",
    h2: "What we handle on remodeling projects.",
    keywords:
      "home remodeling Martha's Vineyard MA, remodeling contractor Cape Cod, kitchen bathroom remodel Martha's Vineyard, flooring tile Martha's Vineyard MA",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Remodeling",
      provider: {
        "@type": "LocalBusiness",
        name: "Tony's Painting & Remodeling",
        telephone: "+15089829675",
      },
      areaServed: "Massachusetts, USA",
      description:
        "Full remodeling services including flooring, tile, plastering, carpentry and countertop installation.",
      offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
    },
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Remodeling", url: "https://tonyspaintingmv.com/services/remodeling" },
    ],
  },
  "deck-stairs": {
    title: "Deck Staining and Repair in Massachusetts | Tony's Painting",
    description:
      "Deck and stair cleaning, sanding, staining and repair for homes in Martha's Vineyard, Cape Cod and the South Shore. Free estimates. Call 508-982-9675.",
    h1: "Deck and stair work in Massachusetts.",
    h2: "What we check and do before we stain.",
    keywords:
      "deck staining Massachusetts, deck repair Massachusetts, deck sealing Massachusetts, outdoor deck refinishing MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Deck and Stairs", url: "https://tonyspaintingmv.com/services/deck-stairs" },
    ],
  },
  flooring: {
    title: "Flooring Installation and Refinishing | Tony's Painting",
    description:
      "Hardwood, vinyl plank and engineered wood flooring on Martha's Vineyard and Cape Cod. Subfloor assessment included. Free estimates. Call 508-982-9675.",
    h1: "Flooring installation and refinishing in Massachusetts.",
    h2: "What goes into a flooring project.",
    keywords:
      "flooring installation Massachusetts, hardwood floors Massachusetts, vinyl flooring Massachusetts, floor refinishing MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Flooring", url: "https://tonyspaintingmv.com/services/flooring" },
    ],
  },
  "ceramic-tile": {
    title: "Ceramic Tile Installation in Massachusetts | Tony's Painting",
    description:
      "Bathroom and kitchen tile installation on Martha's Vineyard and Cape Cod. Level lines and sealed grout. Free estimates. Call 508-982-9675.",
    h1: "Ceramic tile installation in Massachusetts.",
    h2: "How we set tile on every project.",
    keywords:
      "tile installation Massachusetts, ceramic tile Massachusetts, bathroom tile Massachusetts, kitchen backsplash MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Ceramic Tile", url: "https://tonyspaintingmv.com/services/ceramic-tile" },
    ],
  },
  plastering: {
    title: "Plastering and Skim Coating in MA | Tony's Painting",
    description:
      "Plaster repair, skim coating and drywall patching on Martha's Vineyard and Cape Cod. A smooth finish ready for paint. Free estimates. Call 508-982-9675.",
    h1: "Plastering and wall repair in Massachusetts.",
    h2: "What we address before we leave the wall.",
    keywords:
      "plastering Massachusetts, skim coating Massachusetts, plaster repair Massachusetts, drywall patching MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Plastering", url: "https://tonyspaintingmv.com/services/plastering" },
    ],
  },
  carpentry: {
    title: "General Carpentry in Massachusetts | Tony's Painting",
    description:
      "Trim, moldings, built-ins and wood repairs on Martha's Vineyard and Cape Cod. Proper cuts and fastening. Free estimates. Call 508-982-9675.",
    h1: "General carpentry for Massachusetts homeowners.",
    h2: "What we build and repair.",
    keywords:
      "carpentry Massachusetts, trim moldings Massachusetts, general carpentry Massachusetts, built-in shelving MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Carpentry", url: "https://tonyspaintingmv.com/services/carpentry" },
    ],
  },
  fence: {
    title: "Fence Installation and Repair in MA | Tony's Painting",
    description:
      "Wood and vinyl fence installation and repair on Martha's Vineyard and Cape Cod. Properly set posts. Free estimates. Call 508-982-9675.",
    h1: "Fence installation and repair in Massachusetts.",
    h2: "How we build and repair fences.",
    keywords:
      "fence installation Massachusetts, fence repair Massachusetts, wood vinyl fence Massachusetts, fence contractor MA",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Fence", url: "https://tonyspaintingmv.com/services/fence" },
    ],
  },
  countertop: {
    title: "Countertop Installation in Massachusetts | Tony's Painting",
    description:
      "Kitchen and bathroom countertop installation on Martha's Vineyard and Cape Cod. Accurate measurements and a clean finish. Free estimates. Call 508-982-9675.",
    h1: "Countertop installation in Massachusetts.",
    h2: "How we measure and install countertops.",
    keywords:
      "countertop installation Massachusetts, kitchen countertop Massachusetts, bathroom vanity countertop Massachusetts",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      { name: "Countertop", url: "https://tonyspaintingmv.com/services/countertop" },
    ],
  },
  "construction-cleaning": {
    title: "Post Construction Cleaning in MA | Tony's Painting",
    description:
      "Post construction cleaning for homes on Martha's Vineyard and Cape Cod. We leave the space ready to use. Free estimates. Call 508-982-9675.",
    h1: "Post construction cleaning in Massachusetts.",
    h2: "What a post construction clean covers.",
    keywords:
      "construction cleaning Massachusetts, post construction cleanup Massachusetts, construction cleaning Massachusetts",
    breadcrumbs: [
      { name: "Home", url: "https://tonyspaintingmv.com/" },
      { name: "Services", url: "https://tonyspaintingmv.com/services" },
      {
        name: "Construction Cleaning",
        url: "https://tonyspaintingmv.com/services/construction-cleaning",
      },
    ],
  },
};

interface ServiceData {
  slug: string;
  name: string;
  heroTitle?: string;
  description: string;
  includes: string[];
}

const SERVICES: Record<string, ServiceData> = {
  "interior-painting": {
    slug: "interior-painting",
    name: "Interior Painting",
    heroTitle: "Interior Painting in Martha's Vineyard",
    description:
      "Whether you are repainting a single room or the entire house, we start with proper surface prep. We fill holes, sand rough spots and prime where the finish coat needs a solid base. We protect your floors and furniture before we pick up a brush, keep the work area clean throughout and do a final walkthrough with you before we leave.",
    includes: [
      "Living rooms and bedrooms",
      "Kitchens and bathrooms",
      "Ceilings and trim",
      "Accent walls",
      "Commercial offices and retail spaces",
      "New construction interiors",
      "Color consultation",
    ],
  },
  "exterior-painting": {
    slug: "exterior-painting",
    name: "Exterior Painting",
    heroTitle: "Exterior Painting in Martha's Vineyard",
    description:
      "The condition of your siding and trim tells you a lot about how a paint job will hold up. We inspect every surface before we start, scrape and sand areas where paint is peeling, and prime bare wood before applying the finish coat. We work around the weather and use exterior paints formulated for the Massachusetts climate, including cold winters, humid summers and coastal salt air.",
    includes: [
      "Full exterior walls and siding",
      "Porches and decks",
      "Fences and gates",
      "Trim and shutters",
      "Commercial buildings",
      "Power washing and surface preparation",
      "Benjamin Moore premium paints",
    ],
  },
  remodeling: {
    slug: "remodeling",
    name: "Remodeling",
    heroTitle: "Remodeling in Martha's Vineyard",
    description:
      "Sometimes a fresh coat of paint is just the beginning. Our remodeling crew handles flooring installation and refinishing, tile work, plastering, carpentry and related trades, so you do not need to manage multiple contractors or coordinate schedules across a project. We have completed kitchen and bathroom updates and larger living space renovations for homeowners in Martha's Vineyard, Cape Cod and the South Shore.",
    includes: [
      "Hardwood and vinyl flooring",
      "Ceramic and porcelain tile",
      "Plastering and drywall",
      "General carpentry",
      "Countertop installation",
      "Finish work and moldings",
    ],
  },
  "deck-stairs": {
    slug: "deck-stairs",
    name: "Deck and Stairs",
    description:
      "Decks and exterior stairs take more abuse than almost anything else on a house. Before we sand or stain anything, we check for soft spots, rot and loose fasteners, because a good finish on structurally sound wood is what makes the project last. We clean the surface, let it dry properly and apply a stain or sealer suited to the wood type and exposure.",
    includes: [
      "Deck staining and sealing",
      "Deck board repair and replacement",
      "Stair repair and refinishing",
      "Railing inspection and repair",
      "Power washing and surface preparation",
      "New deck finishing after construction",
    ],
  },
  "construction-cleaning": {
    slug: "construction-cleaning",
    name: "Construction Cleaning",
    description:
      "Construction leaves behind fine dust, adhesive residue, caulk smears and debris that standard cleaning will not address. We do a complete post construction clean for residential spaces, covering surfaces, fixtures, floors and windows, so the space is ready to use when we are done.",
    includes: [
      "Dust and debris removal",
      "Window and glass cleaning",
      "Floor cleanup after construction",
      "Cabinet and surface wipe down",
      "Paint splatter and adhesive removal",
      "Final walkthrough inspection",
    ],
  },
  carpentry: {
    slug: "carpentry",
    name: "General Carpentry",
    description:
      "Trim, molding, built-ins and structural wood repairs that are cut to fit and fastened properly. Good carpentry is what separates a renovation that holds together from one that looks rushed six months later. We measure twice and cut once.",
    includes: [
      "Interior trim and moldings",
      "Door and window frame repair",
      "Built-in shelving and cabinetry",
      "Baseboards and crown molding",
      "Structural wood repair",
      "Deck framing and carpentry",
    ],
  },
  flooring: {
    slug: "flooring",
    name: "Flooring",
    description:
      "We install and refinish hardwood, vinyl plank, laminate and engineered wood floors. Before we start, we assess the subfloor for levelness and moisture issues, because the finish coat is only as good as what is underneath. Sanding is done evenly across the whole floor, not just the visible wear spots.",
    includes: [
      "Hardwood floor installation",
      "Hardwood floor refinishing and staining",
      "Vinyl and LVP installation",
      "Subfloor repair and leveling",
      "Floor transition and trim",
      "Historic floor restoration",
    ],
  },
  "ceramic-tile": {
    slug: "ceramic-tile",
    name: "Ceramic Tile",
    description:
      "Tile is one of those finishes where being off by an eighth of an inch shows. We lay out the pattern before we set anything, use a flat and properly prepared substrate and apply grout that is sealed against moisture. Bathrooms, kitchens, mudrooms and entryways.",
    includes: [
      "Bathroom floor and wall tile",
      "Kitchen backsplash",
      "Shower and tub surround",
      "Entryway and mudroom tile",
      "Outdoor tile installation",
      "Tile repair and re-grouting",
    ],
  },
  fence: {
    slug: "fence",
    name: "Fence",
    description:
      "A fence that lists or has loose posts is not doing its job. We set posts at the right depth for the soil conditions, make sure the fence is level and plumb, and finish the wood or vinyl to match the property. Repairs and full installations.",
    includes: [
      "Wood fence installation",
      "Vinyl fence installation",
      "Fence repair and board replacement",
      "Post repair and reinforcement",
      "Gate installation and adjustment",
      "Fence staining and sealing",
    ],
  },
  plastering: {
    slug: "plastering",
    name: "Plastering",
    description:
      "Cracks, holes and uneven walls are common in older Massachusetts homes, and they need to be addressed properly before you paint over them. We repair plaster and drywall, apply skim coats where the wall needs to be evened out and sand to a consistent surface. The goal is a wall that looks right under any lighting.",
    includes: [
      "Crack and hole repair",
      "Skim coating over damaged plaster",
      "Drywall patching and finishing",
      "Texture matching on older homes",
      "Full wall re-plastering",
      "Paint ready surface preparation",
    ],
  },
  countertop: {
    slug: "countertop",
    name: "Countertop",
    description:
      "A countertop is only as level and tight as the measurement and installation that put it there. We take accurate field measurements, fit the pieces to the actual cabinet run and finish the edges and seams cleanly. Kitchen and bathroom surfaces.",
    includes: [
      "Kitchen countertop installation",
      "Bathroom vanity countertop",
      "Laundry and utility surfaces",
      "Seam and edge finishing",
      "Backsplash preparation",
      "Old countertop removal and disposal",
    ],
  },
};

export const SERVICE_SLUGS = () => Object.keys(SERVICES);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES[slug] : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const seo = slug ? SEO_BY_SLUG[slug] : undefined;
  const content = slug ? SERVICE_CONTENT[slug] : undefined;
  const portfolioTitle = getPortfolioTitle(content?.portfolioSlug);
  // Páginas que ainda não têm conteúdo novo mantêm as FAQs de reserva (texto + FAQPage).
  const faqs = content?.faqs ?? SERVICE_FAQS[slug ?? ""] ?? [];
  const includes = content?.included ?? service.includes;

  return (
    <PageLayout>
      {seo && (
        <SEO
          title={seo.title}
          description={seo.description}
          canonical={`/services/${slug}`}
          keywords={seo.keywords}
          schema={seo.schema}
          breadcrumbs={seo.breadcrumbs}
          faqs={faqs}
        />
      )}
      <InnerHero
        variant="image"
        title={seo?.h1 || service.heroTitle || service.name}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      />

      <section className="bg-background">
        <div className="container py-16 md:py-24 grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Overview</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
              {content?.overviewHeading ?? seo?.h2}
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              {content?.answer ?? service.description}
            </p>
            {content?.priceFactors.map((factor) => (
              <p key={factor} className="mt-4 text-base text-muted-foreground leading-relaxed">
                {factor}
              </p>
            ))}
            {content && (
              <div className="mt-8 border-l-2 border-primary pl-6">
                <p className="text-base text-foreground leading-relaxed">{ESTIMATE_SENTENCE}</p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary-dark rounded-sm h-12 px-8"
                >
                  <Link to={ESTIMATE_LINK.to}>{ESTIMATE_LINK.label}</Link>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Or call 508-982-9675. We answer the phone during business hours.
                </p>
              </div>
            )}
          </div>

          <aside className="bg-stone p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">What is included</p>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check size={16} className="text-primary mt-1 shrink-0" strokeWidth={2.5} />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="bg-background border-t border-border">
          <div className="container py-16 md:py-24 grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Questions and answers
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-10">
                What homeowners ask before they hire us.
              </h2>
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <FadeUpSection key={faq.question}>
                    <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </FadeUpSection>
                ))}
              </div>
            </div>

            <aside className="bg-stone p-8 md:p-10 h-fit">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
                Areas we serve
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We work across Martha's Vineyard, Cape Cod and Plymouth County. Choose your town to
                see local conditions, housing stock and recent work.
              </p>
              <ul className="space-y-2">
                {SERVICE_AREAS.map((area) => (
                  <li key={area.slug}>
                    <Link
                      to={`/painting-contractor-${area.slug}`}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      House painting in {area.city}, MA
                    </Link>
                  </li>
                ))}
              </ul>
              {content?.portfolioSlug && portfolioTitle && (
                <Link
                  to={`/portfolio/${content.portfolioSlug}`}
                  className="inline-block mt-6 text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark transition-colors"
                >
                  See our {portfolioTitle.toLowerCase()} project
                </Link>
              )}
            </aside>
          </div>
        </section>
      )}

      {/* Links internos entre serviços: ajuda o rastreamento e distribui autoridade */}
      <section className="bg-background border-t border-border">
        <div className="container py-14 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">More services</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
            Other work we do across Massachusetts.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {SERVICE_SLUGS()
              .filter((s) => s !== service.slug)
              .map((s) => (
                <Link
                  key={s}
                  to={`/services/${s}`}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {SERVICES[s].name}
                </Link>
              ))}
            <Link
              to="/services"
              className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Recent Work</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Selected projects.</h2>
            </div>
          </div>
          {(() => {
            const gallery: Record<string, string[]> = {
              "interior-painting": ["/images/interior-04.jpg", "/images/interior-03.jpg", "/images/interior-05.jpg", "/images/interior-01.jpg", "/images/interior-02.jpg", "/images/project-05.jpg"],
              "exterior-painting": ["/images/project-02.jpg", "/images/project-12.jpg", "/images/project-14.jpg", "/images/project-13.jpg", "/images/project-03.jpg", "/images/project-01.jpg"],
              "remodeling": ["/images/remodeling-02.jpg", "/images/flooring-01.jpg", "/images/project-04.jpg", "/images/project-16.jpg", "/images/project-15.jpg"],
              "flooring": ["/images/flooring-01.jpg", "/images/flooring-03.jpg", "/images/flooring-02.jpg"],
              "countertop": ["/images/interior-02.jpg", "/images/interior-01.jpg", "/images/interior-04.jpg", "/images/project-16.jpg"],
              "deck-stairs": [deck01.url, deck02.url, deck03.url, deck04.url, deck05.url, deck06.url, deck07.url, deck08.url]
            };
            const images = content?.gallery ?? (service.slug ? (gallery[service.slug] || []) : []);
            return (
              <>
                {/* Mobile: one-photo slide carousel */}
                <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/5] w-[82%] sm:w-[70%] shrink-0 snap-center bg-background overflow-hidden rounded-sm"
                    >
                      <img {...responsiveSource(src)} sizes="(max-width: 767px) 50vw, 33vw" alt={`Tony's ${service.name} project detail`} className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={1000} style={{ objectPosition: "center" }} />
                    </div>
                  ))}
                </div>
                {/* Desktop: 3-column grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[4/5] bg-background overflow-hidden"
                    >
                      <img {...responsiveSource(src)} sizes="(max-width: 767px) 50vw, 33vw" alt={`Tony's ${service.name} project detail`} className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={1000} style={{ objectPosition: "center" }} />
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
          {service.slug === "deck-stairs" && (
            <div className="mt-8">
              <Link
                to="/portfolio/deck-restoration"
                className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark transition-colors"
              >
                View the full Deck Restoration project
              </Link>
            </div>
          )}
        </div>
      </section>

      {service.slug === "deck-stairs" && (
        <section className="bg-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-2xl mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Before and After</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                From weathered to warm.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The same deck, before and after. Sanded, cleaned and finished with a rich
                protective stain. Drag the handle to see the change.
              </p>
            </div>
            <BeforeAfter
              beforeSrc={deck07.url}
              afterSrc={deck06.url}
              beforeAlt="Deck before restoration, weathered gray boards and benches"
              afterAlt="Deck after restoration, rich brown stained boards and benches"
              className="max-w-4xl"
            />
          </div>
        </section>
      )}

      <section className="bg-dark">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-background leading-tight max-w-2xl mx-auto">
            Interested in this service?
          </h2>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary-dark rounded-sm h-12 px-10"
          >
            <Link to="/contact">Request a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetail;
