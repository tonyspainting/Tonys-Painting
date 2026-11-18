import { Instagram, Facebook } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/site/PageLayout";
import InnerHero from "@/components/site/InnerHero";
import ContactForm from "@/components/site/ContactForm";
import { Separator } from "@/components/ui/separator";
import PremiumMap from "@/components/site/PremiumMap";
import { BUSINESS, BUSINESS_CREDENTIALS, LOCATIONS, formatLocation, locationQuery } from "@/data/business";
import { SOCIAL } from "@/data/business";

const contactBlocks = [
  {
    label: "Phone",
    value: "508 982 9675",
    href: "tel:+15089829675",
  },
  {
    label: "Email",
    value: "Tonyspainting11@gmail.com",
    href: "mailto:Tonyspainting11@gmail.com",
  },
  {
    label: "Service Area",
    value: "New England",
    href: null,
  },
];

const trustItems = [
  "Licensed and Insured",
  "Free Estimates",
  "Serving Massachusetts Since 2004",
];

const Contact = () => {
  return (
    <PageLayout>
      <SEO
        title="Free Painting Estimate | Tony's Painting & Remodeling"
        description="Contact Tony's Painting & Remodeling for a free estimate. Interior and exterior painting and remodeling on Martha's Vineyard and Cape Cod. Call 508-982-9675."
        canonical="/contact"
        keywords="free painting estimate Massachusetts, painting quote Martha's Vineyard, contact painting contractor Cape Cod, hire painters South Shore MA"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Get a Free Estimate",
          description: "Request a free painting and remodeling estimate from Tony's team.",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Tony's Painting and Remodeling",
            telephone: "+15089829675",
            email: "Tonyspainting11@gmail.com",
            ...BUSINESS_CREDENTIALS,
            sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.googleReviews],
            location: LOCATIONS.map((location) => ({
              "@type": "Place",
              name: `Tony's Painting & Remodeling - ${location.label}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: location.street,
                addressLocality: location.city,
                addressRegion: location.region,
                ...(location.postalCode ? { postalCode: location.postalCode } : {}),
                addressCountry: "US",
              },
            })),
            address: {
              "@type": "PostalAddress",
              streetAddress: "11 Cook Rd",
              addressLocality: "Vineyard Haven",
              addressRegion: "MA",
              postalCode: "02568",
              addressCountry: "US",
            },
          },
        }}
      />
      <InnerHero
        title="Request a free estimate."
        subtitle="Tell us about your project and we'll follow up within one business day to schedule a visit."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-background">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
            padding: "40px 80px",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {/* Form card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E8E2D8",
              borderRadius: 8,
              padding: 20,
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Request a Free Estimate
            </h2>
            <p
              style={{
                marginTop: 4,
                fontFamily: "Montserrat, sans-serif",
                fontSize: 12,
                color: "#6B6560",
              }}
            >
              No commitment. We review every request and typically reply within one business day.
            </p>
            <div style={{ marginTop: 16 }}>
              <ContactForm compact />
            </div>
            <p
              style={{
                marginTop: 12,
                fontFamily: "Montserrat, sans-serif",
                fontSize: 11,
                letterSpacing: "0.04em",
                color: "#57514B",
                textAlign: "center",
              }}
            >
              MA HIC #{BUSINESS.hic.number} · Licensed &amp; insured ·{" "}
              {BUSINESS.insurance.generalLiability} general liability
            </p>
          </div>

          {/* Sidebar */}
          <aside>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Prefer to call?
            </h2>

            <div className="mt-6 space-y-5">
              {contactBlocks.map((b) => (
                <div key={b.label} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                    aria-hidden
                  />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {b.label}
                    </div>
                    {b.href ? (
                      <a
                        href={b.href}
                        className="mt-1 block text-foreground hover:text-primary transition-colors text-base"
                      >
                        {b.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-foreground text-base">{b.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <p className="text-sm text-muted-foreground leading-relaxed">
              We typically respond within one business day. For urgent requests, please call directly.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </aside>
        </div>

        {/* Mobile stack override */}
        <style>{`
          @media (max-width: 767px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              padding: 24px !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </section>


      {/* Trust strip */}
      <section className="bg-stone py-10">
        <div className="container flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden />
              <span className="text-sm md:text-base text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Three bases */}
      <section className="bg-background border-t border-border">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Where we work from</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Three bases, one crew.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We keep materials and crews on the Vineyard, in Pocasset and in East Bridgewater, which
              is how we reach the islands and the mainland without losing a day to travel.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((location) => (
              <div key={location.id} className="border border-border bg-surface p-6">
                <h3 className="font-display text-xl text-foreground">{location.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {formatLocation(location)}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(locationQuery(location))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Get directions →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PremiumMap variant="contact" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
