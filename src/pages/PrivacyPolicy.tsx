import LegalPage, { LegalSection } from "@/components/site/LegalPage";

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    subtitle="What we collect through this website, why we collect it, and the choices you have."
    crumb="Privacy Policy"
    canonical="/privacy"
    seoTitle="Privacy Policy | Tony's Painting and Remodeling"
    description="How Tony's Painting and Remodeling collects, uses and protects the information you share through this website, including estimate requests and analytics."
    keywords="privacy policy Tony's Painting, website privacy Massachusetts painting contractor"
    updated="November 9, 2026"
    schemaName="Privacy Policy"
  >
    <p className="text-base text-foreground leading-relaxed">
      Tony&apos;s Painting and Remodeling respects your privacy. This page explains what
      information we collect when you use tonyspaintingmv.com, how we use it, who we share it
      with and how you can ask us to change or delete it.
    </p>

    <LegalSection title="Who we are">
      <p>
        Tony&apos;s Painting and Remodeling is a painting and remodeling contractor based at 11
        Cook Rd, Vineyard Haven, MA 02568. We serve Martha&apos;s Vineyard, Cape Cod and the
        South Shore of Massachusetts.
      </p>
      <p>
        You can reach us at{" "}
        <a href="tel:+15089829675" className="text-primary hover:underline">
          508 982 9675
        </a>{" "}
        or{" "}
        <a href="mailto:Tonyspainting11@gmail.com" className="text-primary hover:underline">
          Tonyspainting11@gmail.com
        </a>
        . This policy covers this website and the estimate forms on it.
      </p>
    </LegalSection>

    <LegalSection title="Information you give us">
      <p>
        When you send an estimate request, we collect the details you type into the form: your
        name, phone number, email address, property address, the service you are interested in,
        how you heard about us and any project description you choose to add.
      </p>
      <p>
        We ask for the property address because it helps us understand the building and prepare a
        useful estimate. The project description is optional. We do not ask for payment card
        details, Social Security numbers or other financial information on this site.
      </p>
    </LegalSection>

    <LegalSection title="Information collected automatically">
      <p>
        Like most websites, ours records technical information when a page loads: an approximate
        location based on IP address, browser and device type, the pages you view, the page that
        referred you and the date and time of your visit.
      </p>
      <p>
        We use Google Analytics and the Meta (Facebook and Instagram) pixel to measure traffic and
        advertising performance. These tools may set cookies in your browser. They do not give us
        your name or contact details unless you submit a form.
      </p>
    </LegalSection>

    <LegalSection title="How we use the information">
      <ul className="list-disc pl-5 space-y-2">
        <li>Respond to your estimate request and answer your questions.</li>
        <li>Schedule site visits, prepare quotes and carry out approved work.</li>
        <li>Keep a record of the estimates and jobs we have discussed with you.</li>
        <li>Understand which pages and ads bring inquiries, so we can improve the site.</li>
        <li>Protect the site against spam and abuse and keep it running reliably.</li>
      </ul>
      <p>
        We do not use the information you submit to make automated decisions about you, and we do
        not send marketing emails to people who only asked for an estimate.
      </p>
    </LegalSection>

    <LegalSection title="Legal basis for processing">
      <p>
        When you submit a form, we process the information because you asked us to respond to your
        request. We also process limited technical data because we have a legitimate interest in
        operating and improving the website. Where the law requires consent for analytics or
        advertising cookies, you can accept, refuse or withdraw that consent through your browser
        settings as described below.
      </p>
    </LegalSection>

    <LegalSection title="Who we share it with">
      <p>We do not sell or rent your personal information.</p>
      <p>We share information only with service providers that help us run the site and the business:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong className="text-foreground">Supabase</strong> stores the estimate requests in our
          database.
        </li>
        <li>
          <strong className="text-foreground">Resend</strong> delivers the email notification when a
          new request arrives.
        </li>
        <li>
          <strong className="text-foreground">Lovable</strong> hosts this website.
        </li>
        <li>
          <strong className="text-foreground">Google Analytics</strong> measures traffic and page
          performance.
        </li>
        <li>
          <strong className="text-foreground">Meta</strong> measures advertising on Facebook and
          Instagram.
        </li>
        <li>
          <strong className="text-foreground">Google Maps</strong> and{" "}
          <strong className="text-foreground">Google Fonts</strong> provide the embedded map and the
          fonts used on the site.
        </li>
      </ul>
      <p>
        These providers process data under their own privacy policies. We may also disclose
        information if the law requires it, or to protect our rights, property or safety.
      </p>
    </LegalSection>

    <LegalSection title="Cookies and tracking">
      <p>
        Cookies are small files stored by your browser. We use them for two purposes: measuring
        traffic (Google Analytics, typically a cookie named <code>_ga</code>) and measuring
        advertising (Meta pixel, typically a cookie named <code>_fbp</code>). The site also stores a
        login session in your browser if you sign in to the private dashboard, but visitors do not
        need an account to use any public page.
      </p>
      <p>You can control cookies in your browser:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Block or delete cookies in your browser settings.</li>
        <li>Install the Google Analytics opt-out browser add-on.</li>
        <li>Adjust your ad preferences in your Google and Meta accounts.</li>
      </ul>
      <p>
        Blocking cookies does not prevent you from reading the site or sending an estimate request.
        The forms work without them.
      </p>
    </LegalSection>

    <LegalSection title="How long we keep information">
      <p>
        We keep estimate requests for as long as we need them to answer you, quote the work and
        complete a project, and afterwards for the period we are required to keep business, tax and
        insurance records. When information is no longer needed, we delete it or remove the details
        that identify you.
      </p>
      <p>
        Analytics data is retained according to the settings of each provider rather than on our
        own servers.
      </p>
    </LegalSection>

    <LegalSection title="How we protect information">
      <p>
        The site runs over HTTPS. Access to the lead database is limited to authorized staff, and
        the database enforces row level security so that only signed-in team members can read the
        requests. We do not store payment data on the site.
      </p>
      <p>
        No method of transmission or storage is completely secure, but we take reasonable steps to
        protect the information you share with us.
      </p>
    </LegalSection>

    <LegalSection title="Your choices and rights">
      <p>
        You can ask us to confirm what personal information we hold about you, correct it, or delete
        it. Write to{" "}
        <a href="mailto:Tonyspainting11@gmail.com" className="text-primary hover:underline">
          Tonyspainting11@gmail.com
        </a>{" "}
        with the details of your request and we will respond within a reasonable time. We may need
        to keep some records where the law requires it, and we may ask you to verify your identity
        before acting on a request.
      </p>
      <p>
        Depending on where you live, you may have additional rights under local privacy law. We do
        not sell personal information, so there is no sale to opt out of.
      </p>
    </LegalSection>

    <LegalSection title="Children">
      <p>
        Our services are for property owners and adults arranging work on their property. This site
        is not directed to children under 13, and we do not knowingly collect personal information
        from them. If you believe a child has sent us information, contact us and we will delete it.
      </p>
    </LegalSection>

    <LegalSection title="Links to other sites">
      <p>
        This site links to Instagram, Facebook, Google Maps and Google Reviews. Once you leave our
        site, the privacy policy of the destination applies. We are not responsible for how those
        platforms handle your information.
      </p>
    </LegalSection>

    <LegalSection title="Changes to this policy">
      <p>
        We may update this policy when the site or our tools change. The date at the top of the page
        shows when it was last revised. If a change is significant, we will make it clear on this
        page.
      </p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>
        Questions about this policy can go to{" "}
        <a href="mailto:Tonyspainting11@gmail.com" className="text-primary hover:underline">
          Tonyspainting11@gmail.com
        </a>
        , by phone at{" "}
        <a href="tel:+15089829675" className="text-primary hover:underline">
          508 982 9675
        </a>
        , or by mail to Tony&apos;s Painting and Remodeling, 11 Cook Rd, Vineyard Haven, MA 02568.
      </p>
    </LegalSection>
  </LegalPage>
);

export default PrivacyPolicy;
