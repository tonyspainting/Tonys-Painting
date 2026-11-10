import LegalPage, { LegalSection } from "@/components/site/LegalPage";

const Accessibility = () => (
  <LegalPage
    title="Accessibility Statement"
    subtitle="How we work to keep this website usable for everyone, and how to tell us when something is not."
    crumb="Accessibility"
    canonical="/accessibility"
    seoTitle="Accessibility Statement | Tony's Painting and Remodeling"
    description="Our commitment to making this website usable for everyone, the standards we follow, known limitations and how to reach us with accessibility feedback."
    keywords="accessibility statement Tony's Painting, accessible website Massachusetts contractor"
    updated="November 9, 2026"
    schemaName="Accessibility Statement"
  >
    <p className="text-base text-foreground leading-relaxed">
      Tony&apos;s Painting and Remodeling wants everyone to be able to use this website, including
      people who use screen readers, keyboard navigation, magnification or reduced motion settings.
      This page explains what we have done, what still needs work and how to reach us.
    </p>

    <LegalSection title="Our commitment">
      <p>
        We are a small contractor, not a software company, but we treat access to our services as
        part of doing the job right. A person should be able to read about our work, request an
        estimate and contact us without being blocked by the way the site is built.
      </p>
    </LegalSection>

    <LegalSection title="Standards we aim for">
      <p>
        We aim for the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, published by the
        W3C. These guidelines cover text alternatives, keyboard access, color contrast, resizing,
        clear structure and predictable navigation.
      </p>
    </LegalSection>

    <LegalSection title="Conformance status">
      <p>
        The site is <strong className="text-foreground">partially conformant</strong> with WCAG 2.1
        AA. That means most pages meet the standard, but some content does not yet meet every
        success criterion. The known gaps are listed below.
      </p>
      <p>
        This is our own assessment. We have not commissioned an independent accessibility audit or
        certification.
      </p>
    </LegalSection>

    <LegalSection title="What we have done">
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Pages use semantic HTML with one main heading, a logical heading order and landmark
          regions for navigation, main content and footer.
        </li>
        <li>Images carry text alternatives, and decorative elements are hidden from assistive technology.</li>
        <li>
          Menus, forms, buttons and the portfolio image viewer can be operated with a keyboard. The
          image viewer closes with Escape and moves with the left and right arrow keys.
        </li>
        <li>Focus states are visible on links, buttons and form fields.</li>
        <li>
          Forms use labels tied to their inputs, and fields with an error show the message next to
          the field and are marked as invalid.
        </li>
        <li>Text and background colors are chosen for contrast, and body text can be enlarged with browser zoom.</li>
        <li>Layouts reflow on small screens and do not require horizontal scrolling on a phone.</li>
        <li>Animations respect the operating system setting for reduced motion.</li>
        <li>No video plays audio automatically, and the video players can be paused.</li>
        <li>
          Page content is delivered as pre-rendered HTML, so text, headings and links are available
          even before scripts finish loading.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Known limitations">
      <ul className="list-disc pl-5 space-y-2">
        <li>
          The map in the footer is an embedded Google Maps frame. Its controls and labels come from
          Google and may not fully meet WCAG. The street address, phone number and directions link
          are also provided as text, so the map is not required to find us.
        </li>
        <li>
          Project videos are muted and do not include captions or audio description. The same
          projects are presented in the photo galleries with written descriptions.
        </li>
        <li>
          Form error messages appear next to the field and are tied to it, but they are not
          announced through a live region by every screen reader yet.
        </li>
        <li>Some portfolio photographs have short alternative text that describes the image briefly rather than in detail.</li>
        <li>
          Links to Instagram, Facebook and Google Reviews lead to third-party sites whose
          accessibility we do not control.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="Feedback and contact">
      <p>
        If you find a page you cannot use, or something that does not work with your assistive
        technology, please tell us. Include the page address, what you were trying to do and the
        browser or device you were using, if you can. It helps us reproduce the problem.
      </p>
      <p>
        Call{" "}
        <a href="tel:+15089829675" className="text-primary hover:underline">
          508 982 9675
        </a>{" "}
        or email{" "}
        <a href="mailto:Tonyspainting11@gmail.com" className="text-primary hover:underline">
          Tonyspainting11@gmail.com
        </a>
        . We aim to respond within five business days.
      </p>
      <p>
        If you need information from this site in another format, we can read it to you by phone or
        send the details by email.
      </p>
    </LegalSection>

    <LegalSection title="Technical details">
      <p>
        The site is built with HTML, CSS and React, and is checked in current versions of Chrome,
        Safari, Firefox and Edge on desktop and mobile. We review pages with keyboard navigation,
        browser zoom and markup inspection for headings, labels and alternative text.
      </p>
      <p>
        Accessibility features depend on the browser and assistive technology in use. If your
        combination does not work as expected, the feedback channels above are the fastest way to
        reach us.
      </p>
    </LegalSection>

    <LegalSection title="Review">
      <p>
        We review this statement when the site changes significantly, and we update the date at the
        top of the page when we do. Known limitations are rechecked as we work through them.
      </p>
    </LegalSection>
  </LegalPage>
);

export default Accessibility;
