import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageLayout from "./PageLayout";
import InnerHero from "./InnerHero";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

/** Bloco de título + texto usado nas páginas legais. */
export const LegalSection = ({ title, children }: LegalSectionProps) => (
  <section>
    <h2 className="font-display text-2xl md:text-3xl text-foreground leading-tight">{title}</h2>
    <div className="mt-4 space-y-4 text-base text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

interface LegalPageProps {
  /** Texto do H1. */
  title: string;
  subtitle: string;
  crumb: string;
  canonical: string;
  seoTitle: string;
  description: string;
  keywords?: string;
  updated: string;
  schemaName: string;
  children: ReactNode;
}

/**
 * Casca comum das páginas de conteúdo legal: mesmo PageLayout, InnerHero, SEO e
 * largura de leitura do resto do site. O conteúdo de cada página vem em children.
 */
const LegalPage = ({
  title,
  subtitle,
  crumb,
  canonical,
  seoTitle,
  description,
  keywords,
  updated,
  schemaName,
  children,
}: LegalPageProps) => (
  <PageLayout>
    <SEO
      title={seoTitle}
      description={description}
      canonical={canonical}
      keywords={keywords}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: schemaName,
        url: `https://tonyspaintingmv.com${canonical}`,
        description,
        inLanguage: "en-US",
        dateModified: "2026-11-09",
        isPartOf: { "@type": "WebSite", name: "Tony's Painting and Remodeling", url: "https://tonyspaintingmv.com" },
        publisher: {
          "@type": "LocalBusiness",
          name: "Tony's Painting and Remodeling",
          telephone: "+15089829675",
          url: "https://tonyspaintingmv.com",
        },
      }}
    />
    <InnerHero
      title={title}
      subtitle={subtitle}
      crumbs={[{ label: "Home", to: "/" }, { label: crumb }]}
    />

    <section className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: {updated}</p>

          <div className="mt-10 space-y-10">{children}</div>

          <div className="mt-14 border-t border-border pt-8">
            <p className="font-display text-2xl md:text-3xl text-foreground leading-tight">
              Questions about this page?
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Call{" "}
              <a href="tel:+15089829675" className="text-primary hover:underline">
                508 982 9675
              </a>{" "}
              or email{" "}
              <a href="mailto:Tonyspainting11@gmail.com" className="text-primary hover:underline">
                Tonyspainting11@gmail.com
              </a>
              . You can also use the form on the contact page.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-6 text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark transition-colors"
            >
              Go to the contact page
            </Link>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LegalPage;
