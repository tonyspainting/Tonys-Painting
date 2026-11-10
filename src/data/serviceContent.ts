import { getCollectionBySlug } from "./portfolio";

export interface ServiceAnswer {
  question: string;
  answer: string;
}

export interface BudgetLink {
  label: string;
  to: string;
}

/** Bloco de conteúdo longo: um H2 e seus parágrafos. */
export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

/** Etapa do processo exibida em colunas numeradas. */
export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceContent {
  /** Direct answer to the buyer intent question. Rendered as the Overview paragraph. */
  answer: string;
  /** What the price depends on. Rendered as short paragraphs under the answer. */
  priceFactors: string[];
  /** Overview H2. Written as the question the buyer actually types into Google. */
  overviewHeading: string;
  /** Result oriented list used in the "What is included" column. Falls back to the service list. */
  included?: string[];
  /** Step by step process rendered as a numbered row. */
  process?: ServiceStep[];
  /** Long form sections rendered after the overview. */
  sections?: ServiceSection[];
  /** Answers rendered on screen and marked up as FAQPage. */
  faqs: ServiceAnswer[];
  /** Service slugs shown as next steps. */
  relatedServices: string[];
  /** Portfolio collection shown as a link to the work. */
  portfolioSlug?: string;
  /** Images used by the "Selected projects" gallery. */
  gallery?: string[];
}

/** Shared closing line. Links to the estimate form instead of quoting a price. */
export const ESTIMATE_LINK: BudgetLink = {
  label: "Request a written estimate",
  to: "/contact",
};

export const ESTIMATE_SENTENCE =
  "Every project starts with a written estimate at no cost. We measure the space, list what the work covers and put the full scope in writing, so you know exactly what you are approving before anything begins.";

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "exterior-painting": {
    overviewHeading: "What does an exterior painting estimate include in Massachusetts?",
    answer:
      "Exterior painting is quoted after we walk the house, not over the phone. You receive a written estimate at no cost that lists every surface, the preparation required and the coating specified for each material, so the scope is clear before any work is approved. We measure the exterior, inspect all four sides and flag any wood or caulk that needs repair.",
    priceFactors: [
      "Preparation drives the scope more than paint does. Scraping, sanding, caulking and priming take more hours than rolling paint, and they decide whether the finish survives one winter or ten. The estimate shows how much preparation your home needs.",
      "Siding material changes the approach. Cedar and older wood absorb differently than vinyl, shingles or fiber cement, and each one needs its own primer and finish schedule. The estimate names the primer and the finish coat we will apply.",
      "Coastal exposure on Martha's Vineyard adds real work. Salt air, wind driven rain and sun on the south and west walls break down coatings faster, so those faces are called out separately in the scope.",
      "Height and access shape the schedule. Three story walls, tight lots, roof lines and dormers require ladders, staging or lifts, and the estimate states how access is handled.",
      "Weather windows set the start date. We paint when surface and air temperature stay above fifty degrees and dry conditions hold long enough for the coating to cure. Your written estimate includes a realistic finish window.",
    ],
    included: [
      "A written scope that lists every surface before work begins",
      "Power washing that removes chalk, pollen and mildew instead of painting over it",
      "Scraping, sanding and spot priming of bare or failing wood",
      "Caulking and sealing joints, gaps and penetrations that let water in",
      "Benjamin Moore exterior products matched to siding material and exposure",
      "Trim, shutters, doors, soffits and fascia finished to the same standard as the walls",
      "Daily cleanup, walkthrough and a closed touch up list before we leave",
    ],
    faqs: [
      {
        question: "How much does exterior house painting cost in Massachusetts?",
        answer:
          "The cost depends on the size of the home, siding condition and how much preparation the surface needs. We do not quote a number without seeing the property, because a phone estimate would either be too high or too low. Request a free written estimate and we will measure the house, inspect every side and list the full scope with pricing before you commit.",
      },
      {
        question: "How long does exterior house painting take in Massachusetts?",
        answer:
          "A typical single family home takes five to ten working days once preparation begins. Larger homes, extensive scraping or coastal properties with difficult access can run two to three weeks. We give you a start date and a realistic finish window before the crew arrives.",
      },
      {
        question: "How often should a house in Massachusetts be repainted?",
        answer:
          "Most wood sided homes need a full repaint every seven to ten years. Homes on Martha's Vineyard and along the Cape often sit closer to the seven year mark because salt air and wind driven rain wear the south and west walls first. A light recoat of the trim every four to five years extends the life of the whole job.",
      },
      {
        question: "Do you repair damaged siding and rotten trim before painting?",
        answer:
          "Yes. We inspect the exterior for soft wood, rot and loose caulk during the estimate. Minor repairs are folded into the paint scope. Larger carpentry is quoted separately in the written estimate, so you see the cost and decide before any work starts.",
      },
      {
        question: "Can you paint in winter or during rain?",
        answer:
          "We paint when the surface and air temperature stay above fifty degrees and the surface is dry. Rain days pause the work rather than compromise the finish. In colder months we schedule weather windows and tell you in advance how they affect your dates.",
      },
      {
        question: "Is your exterior painting work insured?",
        answer:
          "Yes. Tony's Painting and Remodeling is licensed and insured. We protect plants, walks and decks for the duration of the project and carry insurance while the work is underway.",
      },
    ],
    relatedServices: ["interior-painting", "deck-stairs", "carpentry"],
    portfolioSlug: "exterior-painting-and-siding",
    gallery: [
      "/images/project-02.jpg",
      "/images/project-12.jpg",
      "/images/project-14.jpg",
      "/images/project-13.jpg",
      "/images/project-03.jpg",
      "/images/project-01.jpg",
    ],
  },
  "interior-painting": {
    overviewHeading: "How much does interior painting cost in Massachusetts?",
    answer:
      "Interior painting is priced room by room, after we see the walls. A written estimate at no cost lists every room, the preparation each surface needs and the products we will use, so nothing appears later as a surprise. Two rooms of the same size can take very different amounts of work: one has clean drywall and the other has patched plaster, old wallpaper glue and trim that needs sanding. We measure first and quote what the house actually needs.",
    priceFactors: [
      "Room count and ceiling height set the base. A bedroom with an eight foot ceiling is a different job from a stairwell or a room with a vaulted ceiling that needs staging.",
      "Surface condition decides the preparation. Nail holes, cracks, water stains and peeling paint all have to be filled, sanded and primed before the finish coat, and that is where most of the labor sits.",
      "Trim, doors and windows are slow work. Baseboards, casings, crown molding and paneled doors take careful masking and a brush, so a trim-heavy room costs more than an open wall.",
      "Color changes and finish type matter. Going from a dark wall to white can need an extra coat, and a washable matte or a satin enamel on trim costs more than a standard flat paint.",
      "Occupied homes take longer. We work around furniture, protect floors daily and often paint in phases so the family can keep using the house.",
    ],
    process: [
      {
        title: "Walkthrough and written estimate",
        description:
          "We walk the rooms with you, measure, and note every surface that needs repair. You get a written scope with each room listed before anything is scheduled.",
      },
      {
        title: "Protection and preparation",
        description:
          "Furniture is moved and covered, floors are protected, and trim, windows and hardware are masked. Holes and cracks are filled and sanded.",
      },
      {
        title: "Priming and patching",
        description:
          "Repaired areas and bare spots are primed so the finish coats read evenly. Water stains and dark existing colors get a blocking coat.",
      },
      {
        title: "Walls, trim and doors",
        description:
          "Edges are cut in by hand, walls are rolled in two coats, and trim, doors and casings are brushed for a smooth finish.",
      },
      {
        title: "Final walkthrough",
        description:
          "We walk the job with you in daylight, touch up anything you point out, and leave the rooms clean with furniture back in place.",
      },
    ],
    sections: [
      {
        heading: "What interior painting covers in a Massachusetts home",
        paragraphs: [
          "Walls, ceilings, trim, doors, window casings and the areas between them. Most projects are a set of rooms, a full floor or a whole house between tenants or before a sale. We paint occupied homes and empty ones, and we handle the patching and sanding that has to happen before a finish coat. If a room needs plaster work, it is scoped in the same estimate so the painter is not working over a surface that is still moving.",
        ],
      },
      {
        heading: "Preparation decides how the paint looks a year later",
        paragraphs: [
          "Paint fails at the edges first: cracked caulk around trim, nail holes that were never filled, grease above a stove, sanding dust left on a baseboard. Preparation starts with washing and dulling the surface, then filling and sanding, then caulking the gaps between trim and wall. We prime repairs and bare drywall. It is the slow part of the job, and it is the reason a finish still looks tight after a few winters.",
        ],
      },
      {
        heading: "Choosing the right paint and sheen",
        paragraphs: [
          "Walls in a family house usually get a washable matte. Bathrooms and kitchens do better with satin, which resists moisture and wipes clean. Trim and doors take a satin or semi-gloss enamel that can be scrubbed. Ceilings get a flat product that hides imperfections. We bring color and sheen samples, and we can match an existing color from a chip or a painted piece if you want to keep what you have.",
        ],
      },
      {
        heading: "How long interior painting takes",
        paragraphs: [
          "A single room is usually one day, including preparation and two coats. A full interior takes three to seven working days, longer when plaster repairs need drying time between coats. We give a start date and a finish window in writing, and we tell you which rooms are out of use on which days so the household can plan around the work.",
        ],
      },
      {
        heading: "Older homes, plaster and lead paint",
        paragraphs: [
          "Plaster walls are common in Massachusetts homes and they behave differently from drywall. They take patching well but need careful sanding and a skim coat where cracks have opened. In homes built before 1978 we treat sanding dust as a lead risk: we talk through the age of the paint, keep dust contained, and recommend testing before any dry sanding on painted trim or walls.",
        ],
      },
      {
        heading: "What the estimate includes",
        paragraphs: [
          "Every estimate lists the rooms, the surfaces in each room, the preparation planned and the products specified. It states what is excluded, such as wallpaper removal or major plaster repair, so there are no surprises later. The price does not change because a room took longer than expected unless you approve a change in scope.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you paint ceilings?",
        answer:
          "Yes. Ceilings are included when they are part of the scope, and we use a flat ceiling product that hides roller marks and small imperfections. Stained ceilings get a blocking primer first so the stain does not come back through the paint.",
      },
      {
        question: "Can you match my existing wall color?",
        answer:
          "Yes. Bring a chip, a paint can label or a sample of the painted surface. If the color is unknown we can match from a section of wall, and we test the match in the room before buying the full quantity.",
      },
      {
        question: "Do you repair cracks and nail holes?",
        answer:
          "Yes, filling and sanding are part of the preparation. Larger cracks, water damage or loose plaster are quoted separately if they need more than a patch, and we tell you before we start.",
      },
      {
        question: "How soon can furniture go back after painting?",
        answer:
          "Walls are usually safe to touch within a few hours. We wait until the finish is fully dry before moving furniture back, typically the next day, and we place everything where it was unless you ask otherwise.",
      },
      {
        question: "How much does interior painting cost in Massachusetts?",
        answer:
          "Most single rooms land between a few hundred and roughly a thousand dollars, depending on size, ceiling height and how much preparation the walls need. A whole house is priced from the room list, not from a square foot average. We give a written estimate with each room listed before any work starts.",
      },
      {
        question: "How long does interior painting take?",
        answer:
          "A single room is usually one day. A full interior takes three to seven working days, more in older homes with plaster repairs. We give a start date and a finish window before the crew arrives, and we keep to it unless we find something behind the wall.",
      },
      {
        question: "Do you move furniture and protect floors?",
        answer:
          "Yes. We move and cover furniture, lay drop cloths over floors and mask trim and windows before we open a can. Everything goes back at the end of the job.",
      },
      {
        question: "Which paint do you use for interiors?",
        answer:
          "We use Benjamin Moore and Sherwin-Williams interior products. Walls usually get a washable matte and trim gets a durable satin or semi-gloss. If you have a color or product you already trust, we will work with it.",
      },
      {
        question: "Is it safe to stay in the house while you paint?",
        answer:
          "Yes. We work room by room, keep the work area contained and ventilate as we go. Low-VOC products are available on request, and we tell you which days each room is unavailable.",
      },
    ],
    relatedServices: ["plastering", "carpentry", "exterior-painting"],
    portfolioSlug: "residential-interior-martha-s-vineyard",
  },
  remodeling: {
    overviewHeading: "What does a remodeling project involve in Massachusetts?",
    answer:
      "Remodeling is one crew handling several trades, not a schedule full of separate contractors. We start with a walkthrough, a written scope and a realistic timeline, then take the project from demolition through flooring, tile, carpentry, plastering and paint. On an island or Cape property, coordinating materials and deliveries is half the work, and that coordination is part of what we do.",
    priceFactors: [
      "Scope is the first variable. A bathroom refresh with new tile and a vanity is a different project from moving plumbing or opening a wall.",
      "Layout changes cost more than finishes. Moving a drain, adding an outlet or taking down a wall adds trades, inspections and time.",
      "Materials range widely. Standard tile and stock cabinetry sit at one end, custom millwork and natural stone at the other, and the estimate names what is specified.",
      "Existing conditions show up once the wall is open. Old plumbing, uneven framing or moisture behind tile has to be fixed before finishes go on, and we price what we can see plus a defined approach for what we find.",
    ],
    process: [
      {
        title: "Walkthrough and scope",
        description:
          "We walk the space, measure, and list every trade involved. At this stage we also flag whether the work needs a permit and what the inspections will cover.",
      },
      {
        title: "Written estimate and schedule",
        description:
          "You receive the scope, the materials specified and a milestone schedule. Nothing is ordered until you approve the estimate in writing.",
      },
      {
        title: "Demolition and rough work",
        description:
          "The work area is sealed off from the rest of the house. Walls open, framing and mechanical work happen, and inspections are scheduled before anything is closed up.",
      },
      {
        title: "Finishes",
        description:
          "Tile, flooring, carpentry, plaster and paint go in sequence. Each trade is checked before the next one covers it.",
      },
      {
        title: "Closeout",
        description:
          "We paint, close the punch list, clean the space and walk it with you. Any warranty question goes through the same contact you had from day one.",
      },
    ],
    sections: [
      {
        heading: "What a Tony's remodel covers",
        paragraphs: [
          "Kitchens, bathrooms, basements, living spaces and the connective work between them: flooring, tile, carpentry, plastering, paint and the repairs that only show up once a wall is open. Because the trades are in house, a bathroom remodel does not wait for a separate flooring crew or a painter booked three weeks out. The same crew that sets the tile preps the wall behind it and finishes the trim in front of it.",
        ],
      },
      {
        heading: "One crew instead of five",
        paragraphs: [
          "Most remodeling delays come from handoffs. One contractor finishes, the next is not available, and the schedule slides by a week. We keep the sequence inside our own team, which means the person who framed the wall is talking to the person who tiles it. It also means one point of contact for questions, changes and punch list items, instead of a group text with five companies.",
        ],
      },
      {
        heading: "Materials, lead times and island logistics",
        paragraphs: [
          "On Martha's Vineyard and the outer Cape, the delivery is part of the project. Cabinetry, tile and stone are ordered against a real lead time, and anything coming by ferry is scheduled so a missed boat does not stop the crew. We confirm quantities before ordering, store materials on site where there is room, and inspect deliveries for damage before installation day.",
        ],
      },
      {
        heading: "Living through a remodel",
        paragraphs: [
          "Most clients stay in the house. We contain dust with plastic barriers and negative air where possible, keep a path through the home, and protect floors along the route. Water and power shutoffs are scheduled in advance and kept short. On a kitchen project we set up a temporary prep area so the household is not eating out for a month.",
        ],
      },
      {
        heading: "Permits and inspections in Massachusetts",
        paragraphs: [
          "Structural, plumbing, electrical and gas work generally needs a permit in Massachusetts towns, and so do many bathroom and kitchen remodels. We tell you at the estimate stage what your town requires, pull the permits we are responsible for, and schedule inspections so they do not hold up the finish work. If your town has historic district rules, we plan for that review as well.",
        ],
      },
      {
        heading: "How the budget is built",
        paragraphs: [
          "The estimate separates labor, materials and allowances. Allowances cover items you have not chosen yet, such as tile or fixtures, and they are adjusted with your approval when you pick. A contingency line covers what is found behind the wall. You see the full number before work starts, and any change is priced and approved in writing before it is built.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work with my designer or architect?",
        answer:
          "Yes. We build from drawings and specifications, flag anything that will not work in the field, and coordinate directly with the designer so decisions do not stall the schedule.",
      },
      {
        question: "Do you supply materials or should I buy them?",
        answer:
          "Either way. We can supply and warranty the materials as part of the contract, or install what you purchase. When you buy, we confirm quantities and check the delivery before installation.",
      },
      {
        question: "What happens if you find water damage or old wiring?",
        answer:
          "We stop, photograph it and show you before covering anything. The repair is priced as a change order and approved in writing, so the surprise is visible and priced before it is fixed.",
      },
      {
        question: "How are payments scheduled?",
        answer:
          "The contract sets a deposit and payments tied to milestones, not to dates. You always pay for work that has been completed, and the final payment follows the punch list and walkthrough.",
      },
      {
        question: "Do you handle full remodels or only single rooms?",
        answer:
          "Both. We take on a single bathroom or kitchen and larger living space renovations. Because flooring, tile, carpentry, plastering and painting are in house, you deal with one schedule and one point of contact.",
      },
      {
        question: "How long does a bathroom or kitchen remodel take?",
        answer:
          "A bathroom typically runs one to two weeks. A kitchen usually takes two to four weeks, depending on cabinetry lead time and layout changes. You get a milestone schedule before demolition starts.",
      },
      {
        question: "Do you pull permits?",
        answer:
          "When the work requires a permit, we tell you at the estimate stage and handle the paperwork with the local building department. The scope and timeline reflect the inspection schedule.",
      },
      {
        question: "Can we live in the house during the remodel?",
        answer:
          "Often yes. We contain dust with plastic and negative pressure where possible, keep a working path through the house and tell you in advance which days the water or power will be off.",
      },
      {
        question: "Do you provide a written estimate for remodeling?",
        answer:
          "Yes. We visit, measure and put the scope, materials and price in writing at no cost. Nothing starts until you approve it in writing.",
      },
    ],
    relatedServices: ["flooring", "ceramic-tile", "carpentry"],
    portfolioSlug: "kitchen-and-bath-remodeling",
  },
  "deck-stairs": {
    overviewHeading: "How much does deck staining and repair cost in Massachusetts?",
    answer:
      "A deck is inspected before anything is applied. Boards that are soft, cupped or loose get repaired or replaced first, because a stain over failing wood will not hold. After that we clean the surface, let it dry to the right moisture level and apply a product matched to the wood and the exposure, whether that is a penetrating oil on cedar or a semi-transparent stain on pressure treated pine.",
    priceFactors: [
      "Square footage and layout set the base. Multi level decks, built-in benches and long railings add surface area and time.",
      "Wood condition decides the preparation. Gray, weathered boards need cleaning and sanding; peeling solid stain may need stripping before a new coat.",
      "Previous coatings limit the options. A deck with old film-forming stain has to be brought back before a penetrating product will soak in evenly.",
      "Exposure and access matter. Waterfront decks on Martha's Vineyard and the Cape take more sun and salt, and decks with difficult access need more setup.",
    ],
    process: [
      {
        title: "Deck inspection",
        description:
          "Every board, railing and stair is checked for rot, movement and loose fasteners. Repairs are quoted before any finish is applied.",
      },
      {
        title: "Cleaning and brightening",
        description:
          "The wood is washed to remove dirt, mildew and the gray oxidized layer, then brightened so the grain takes the finish evenly.",
      },
      {
        title: "Repairs",
        description:
          "Soft or cracked boards are replaced, fasteners are reset or replaced, and railings are tightened so the structure is sound.",
      },
      {
        title: "Sanding and preparation",
        description:
          "Boards, benches and rails are sanded to open the grain, then dust is removed completely before any product goes on.",
      },
      {
        title: "Staining and cure",
        description:
          "The finish is applied in the right number of coats for the wood and the exposure, with drying time built into the schedule.",
      },
    ],
    sections: [
      {
        heading: "What we check before staining",
        paragraphs: [
          "A finish on a failing deck is money thrown away. Before we open a can we walk every board, check for soft spots and cupping, and test fasteners and railings. Stairs get particular attention because a loose tread is a safety issue, not a cosmetic one. If something needs replacing, it is quoted before the stain goes on so the repair and the finish are scheduled together.",
        ],
      },
      {
        heading: "Cleaning and brightening weathered wood",
        paragraphs: [
          "Gray wood is not dirty, it is oxidized. Washing removes dirt, pollen and mildew, and a wood brightener lifts the gray layer so the grain can take the finish. Pressure has to be controlled: too much and the soft grain is gouged, which shows through a transparent stain. After washing, the wood has to dry to the right moisture level, and that drying time is part of the schedule.",
        ],
      },
      {
        heading: "Oil, semi-transparent or solid stain",
        paragraphs: [
          "A penetrating oil soaks into the wood and leaves the grain visible, which suits cedar and mahogany. A semi-transparent stain adds color and some UV protection while keeping texture. A solid stain covers like a thin paint and lasts longer, but it builds a film that has to be maintained. We match the product to the wood, the exposure and how much maintenance you want to do.",
        ],
      },
      {
        heading: "Stairs, railings and built-in benches",
        paragraphs: [
          "The parts people touch take the most wear. Handrails, stair treads and bench seats are sanded and finished with the same care as the field of the deck, and we check the connections where railings meet posts. A deck that looks good but has a loose railing is not finished, so those details are part of the walkthrough.",
        ],
      },
      {
        heading: "Weather, drying and the right window",
        paragraphs: [
          "Stain needs dry wood and a couple of days without rain to cure properly. We watch the forecast, avoid applying late in the day when dew will sit on the surface, and stop if conditions turn. In coastal towns that means scheduling around wind and salt fog as well as rain, and telling you honestly when a date has to move.",
        ],
      },
      {
        heading: "Keeping a deck ahead of the weather",
        paragraphs: [
          "A light clean and a recoat every two to four years costs far less than a restoration. We suggest a maintenance window, note which faces fade fastest, and leave touch up material when there is any. Decks near the water on the Vineyard and the Cape usually need attention first on the south and west sides.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should a deck be resealed?",
        answer:
          "Every two to four years in this climate. Decks in full sun or near the water fade faster, and a light recoat before the wood goes gray is the cheapest way to keep it protected.",
      },
      {
        question: "Can you stain a brand new deck?",
        answer:
          "Pressure treated wood needs to dry and weather before it will absorb a finish, usually a few weeks to a couple of months. New cedar can be finished sooner. We test a small area to confirm the wood is ready.",
      },
      {
        question: "Do you work on composite decks?",
        answer:
          "We clean and maintain composite decking, and we repair railings and stairs. Composite is not stained, so the work is cleaning, hardware and structure rather than a new finish coat.",
      },
      {
        question: "Do you repair stairs and railings?",
        answer:
          "Yes. Loose treads, wobbly railings, rotted posts and failing fasteners are repaired before staining. If a stair structure needs rebuilding, that is quoted separately and scheduled with the finish work.",
      },
      {
        question: "How much does deck staining cost in Massachusetts?",
        answer:
          "Most residential decks fall between roughly eight hundred and three thousand dollars, depending on size, condition and whether repairs are needed. We look at the deck in person and give a written estimate before any work begins.",
      },
      {
        question: "How long does deck stain last here?",
        answer:
          "Two to four years for most decks in this climate. South and west facing boards and decks near the water fade first. Cleaning and a light sanding before each recoat is what keeps the finish working.",
      },
      {
        question: "Do you repair boards before staining?",
        answer:
          "Yes. We inspect every board and the framing we can reach. Cracked, warped or soft boards are replaced and quoted separately, and railings and stairs are checked for loose fasteners.",
      },
      {
        question: "When is the best time to stain a deck?",
        answer:
          "Late spring through early fall, when the wood is dry and temperatures stay above fifty degrees for a couple of days. We schedule around rain and tell you if the forecast pushes the date.",
      },
      {
        question: "Do you power wash before staining?",
        answer:
          "Yes, and we let the wood dry fully afterward. Washing too close to staining traps moisture and the finish fails early, so drying time is part of the schedule, not an afterthought.",
      },
    ],
    relatedServices: ["exterior-painting", "carpentry", "fence"],
    portfolioSlug: "deck-restoration",
  },
  flooring: {
    overviewHeading: "How much does floor refinishing or installation cost in Massachusetts?",
    answer:
      "Floors are only as good as the subfloor underneath. Before we quote, we check for level, squeaks, moisture and any previous patch work, because sanding and finishing will not fix a floor that moves. For refinishing, we sand the whole floor evenly rather than only the worn spots, then stain and build the finish coats that match how the room is used.",
    priceFactors: [
      "Square footage drives both labor and material. Open first floor plans cost less per square foot than a set of small rooms with closets and transitions.",
      "Subfloor condition is the hidden variable. Leveling, patching or replacing a section adds work before the first board goes down.",
      "Wood species and grade change the price. Oak, maple, engineered and luxury vinyl plank each have their own installation method and material cost.",
      "Finish choice matters. A matte oil finish, a water based polyurethane and a hard wax oil wear differently and take different application time.",
    ],
    faqs: [
      {
        question: "What flooring do you install?",
        answer:
          "Hardwood, engineered hardwood, laminate and luxury vinyl plank. We also sand, stain and refinish existing hardwood. If the subfloor is not suitable, we say so before you buy material.",
      },
      {
        question: "How long does installation take?",
        answer:
          "A typical room takes one to two days. A full home usually takes three to five days, plus drying time for finish coats when we are refinishing.",
      },
      {
        question: "Should I refinish or replace my hardwood floors?",
        answer:
          "If the boards are solid and have enough thickness left, refinishing is usually cheaper and keeps the original wood. If boards are cupped, heavily damaged or too thin to sand again, replacement makes more sense. We check before recommending.",
      },
      {
        question: "How much dust does sanding create?",
        answer:
          "Less than it used to. We seal doorways and use dust collection on the sanders, then clean the area at the end of each day. Some fine dust is unavoidable, so we plan the sequence with you.",
      },
      {
        question: "When can furniture go back on new floors?",
        answer:
          "Usually after twenty four to seventy two hours, depending on the finish. We tell you the exact window and leave felt pads for the furniture legs.",
      },
    ],
    relatedServices: ["remodeling", "carpentry", "ceramic-tile"],
    portfolioSlug: "hardwood-floors",
  },
  "ceramic-tile": {
    overviewHeading: "How much does tile installation cost in Massachusetts?",
    answer:
      "Tile work is decided before the first piece is set. We lay out the pattern from a fixed starting line, check that the substrate is flat and sound, and waterproof wet areas before tile goes down. A good installation is judged months later, when the grout lines are still straight and nothing has moved, so the layout and the substrate get as much attention as the tile itself.",
    priceFactors: [
      "Area and layout set the base. A straight set in a small bathroom is one job; a herringbone pattern across a large floor with many cuts is another.",
      "Substrate preparation is where quality is won or lost. Backer board, leveling and waterproofing add work but prevent cracked tile and failed grout.",
      "Tile type and size affect labor. Large format porcelain and natural stone need different thinset and more careful support than standard ceramic.",
      "Removal and disposal of old tile adds time, and so do niches, benches and shower details.",
    ],
    faqs: [
      {
        question: "How long does a tile project take?",
        answer:
          "A bathroom floor is usually one day. A full bathroom with walls and a shower surround takes two to four days. A kitchen backsplash is often done in a day, plus grout and cure time.",
      },
      {
        question: "Do you waterproof showers?",
        answer:
          "Yes. Wet areas get a waterproof membrane before tile, and we follow the manufacturer's system for seams, corners and the drain connection. That layer is what keeps water out of the framing.",
      },
      {
        question: "Should grout be sealed?",
        answer:
          "Yes for cement based grout, especially in showers and on kitchen floors. Sealer buys time against staining and is easy to reapply. Epoxy grout is another option we can discuss.",
      },
      {
        question: "Can you install tile over existing tile?",
        answer:
          "Sometimes, if the existing tile is sound and the added height does not create a problem at doors or transitions. In most bathrooms we remove the old tile so we can check and prepare the substrate.",
      },
      {
        question: "Do you install heated floors?",
        answer:
          "Yes. We install electric radiant mats under tile in bathrooms and kitchens, with the thermostat placed where you want it. It has to be planned before the substrate goes down.",
      },
    ],
    relatedServices: ["remodeling", "flooring", "plastering"],
    portfolioSlug: "kitchen-and-bath-remodeling",
  },
  plastering: {
    overviewHeading: "How much does plaster repair cost in Massachusetts?",
    answer:
      "Older Massachusetts homes have plaster walls that outlast drywall but crack, sag and pull away from the lath over time. We repair the cause first, whether that is a loose section, a water stain or a bad patch from an earlier repair, then skim the area so the wall reads flat under raking light. The goal is a surface that disappears once it is painted, not a patch you can find by looking for it.",
    priceFactors: [
      "The extent of the damage sets the price. A hairline crack is a small repair; a ceiling that has sagged or a wall with failed keys is a bigger one.",
      "Texture matching takes time. Older plaster has a slight variation that a smooth skim can make obvious, so we match the surrounding surface.",
      "Height and access matter. Ceilings, stairwells and rooms full of furniture need staging and protection before work starts.",
      "Paint readiness is included. We sand, prime and leave the surface ready for the painter rather than handing back a dusty wall.",
    ],
    faqs: [
      {
        question: "Can plaster walls be repaired instead of replaced?",
        answer:
          "Usually yes. Original plaster is often stronger than modern drywall, and repairing it keeps the character of an older house. We only recommend replacement when the plaster has lost its grip across a large area.",
      },
      {
        question: "What is skim coating?",
        answer:
          "A thin layer of joint compound or plaster applied over a wall to create a smooth, even surface. It is the right fix for walls with many small cracks, old texture or a patch that shows under paint.",
      },
      {
        question: "How long does plaster repair take?",
        answer:
          "Small repairs are done in a day. Skim coating a room usually takes two to three days because each coat has to dry before the next and the final surface needs sanding.",
      },
      {
        question: "Will there be dust?",
        answer:
          "Some, yes. Sanding plaster creates fine dust, so we seal doorways, cover floors and clean at the end of each day. We tell you which rooms to keep closed while the work is active.",
      },
      {
        question: "Do you match texture on older walls?",
        answer:
          "Yes. We match the surrounding texture and sheen so the repair does not stand out. On historic homes we take extra care with corners, arches and the original profile.",
      },
    ],
    relatedServices: ["interior-painting", "carpentry", "remodeling"],
    portfolioSlug: "interior-living-spaces",
  },
  carpentry: {
    overviewHeading: "What does general carpentry cost in Massachusetts?",
    answer:
      "Carpentry is measured twice and cut once. Trim, casings, crown molding and built-ins are fitted to the actual walls, floors and corners of your house, which are rarely square in older homes. We match profiles where millwork already exists, fasten with the right method for the material, and leave the work ready for paint instead of hiding gaps with caulk.",
    priceFactors: [
      "Scope and linear footage drive the price. A single doorway casing is a small job; a full house of baseboard and crown is measured in hundreds of feet.",
      "Material choice matters. Paint grade pine, primed finger joint, oak and custom milled profiles sit at different price points.",
      "Matching existing trim takes time. On historic homes we identify the profile, source or mill a match and blend the new work with what is already there.",
      "Site conditions add work. Out of square corners, uneven floors and walls that need furring out all require fitting rather than simple installation.",
    ],
    faqs: [
      {
        question: "Do you install crown molding and baseboards?",
        answer:
          "Yes. We install baseboards, crown molding, door and window casings, chair rail and wainscoting, and we cope inside corners so the joints stay tight.",
      },
      {
        question: "Can you match trim in an older home?",
        answer:
          "Usually. We take a profile from an existing piece and match it, or source the closest modern equivalent and adapt it. Martha's Vineyard and Cape homes often have profiles that are no longer stocked.",
      },
      {
        question: "Do you build custom built-ins?",
        answer:
          "Yes. Bookcases, window seats, mudroom benches and closet systems are built to the space, then painted or finished to match the room.",
      },
      {
        question: "Do you replace doors and windows?",
        answer:
          "We repair and replace interior door slabs, frames and casings. Window replacement that involves the exterior envelope is scoped separately so the flashing and trim are handled correctly.",
      },
      {
        question: "How long does trim work take?",
        answer:
          "A room of baseboard and casing is usually one to two days. A full house takes several days, plus paint. We give a schedule with the estimate.",
      },
    ],
    relatedServices: ["interior-painting", "remodeling", "plastering"],
    portfolioSlug: "kitchens-and-cabinetry",
  },
  fence: {
    overviewHeading: "How much does fence installation cost in Massachusetts?",
    answer:
      "A fence is only as good as its posts. We set posts below the frost line, in concrete where the soil calls for it, and check the line for level and plumb before the first panel goes on. Wood and vinyl each behave differently in New England weather, so the material, the spacing and the finish are chosen for the site rather than from a catalog page.",
    priceFactors: [
      "Linear footage is the base measurement. Corners, gates and changes in direction add posts and time.",
      "Material choice ranges from pressure treated pine to cedar to vinyl, each with its own cost and maintenance profile.",
      "Terrain matters. Slopes need stepped panels, and rocky soil on the Cape and the islands can slow post setting considerably.",
      "Removal of an old fence and disposal adds a line to the estimate, and so does staining or sealing a new wood fence.",
    ],
    faqs: [
      {
        question: "Wood or vinyl fence, which is better here?",
        answer:
          "Wood suits traditional New England homes and can be repaired board by board. Vinyl needs less maintenance and holds color, but it costs more up front and can crack in extreme cold. We look at the property and the budget before recommending.",
      },
      {
        question: "How deep do you set fence posts?",
        answer:
          "Below the local frost line, typically three to four feet, with concrete in most soils. Depth is what keeps a fence straight through freeze and thaw.",
      },
      {
        question: "How long does fence installation take?",
        answer:
          "A standard residential fence takes one to two days. Long runs, rocky ground or multiple gates extend that, and we say so in the estimate.",
      },
      {
        question: "Do I need a permit for a fence?",
        answer:
          "It depends on the town and the height and location of the fence. We tell you at the estimate stage whether your town requires one and what the setback rules are.",
      },
      {
        question: "Can you repair a fence instead of replacing it?",
        answer:
          "Yes. Post replacement, board repair, gate adjustment and re-staining are common repairs. If most posts are sound, repair is almost always the better value.",
      },
    ],
    relatedServices: ["deck-stairs", "carpentry", "exterior-painting"],
  },
  countertop: {
    overviewHeading: "How much does countertop installation cost in Massachusetts?",
    answer:
      "A countertop is only as good as the measurement behind it. We measure the actual cabinet run in the field, check that the cabinets are level and straight, and plan the seams and overhangs before anything is cut. On a remodel, that measurement happens after the cabinets are set, not from a drawing, because small differences in the wall are what create gaps at the backsplash.",
    priceFactors: [
      "Material sets the range. Laminate, butcher block and solid surface sit at one end, quartz and natural stone at the other.",
      "Linear footage and depth matter, including islands, peninsulas and the number of cutouts for sinks and cooktops.",
      "Edge profiles and seams add fabrication time. A simple eased edge costs less than a built-up edge, and seam placement affects the layout.",
      "Removal and disposal of the old top adds a line, and so does any cabinet repair needed to support the new surface.",
    ],
    faqs: [
      {
        question: "What countertop materials do you install?",
        answer:
          "Laminate, solid surface, butcher block and prefabricated stone. For custom quartz or granite we coordinate with a local fabricator and manage the template and install.",
      },
      {
        question: "How long does countertop installation take?",
        answer:
          "Most installations are one day once the material is on site. Custom stone adds template and fabrication time, usually one to two weeks from template to install.",
      },
      {
        question: "Do you remove the old countertop?",
        answer:
          "Yes. Removal and disposal are included in the scope, and we check the cabinet tops and plumbing while the old top is off.",
      },
      {
        question: "Can you install a countertop over existing cabinets?",
        answer:
          "Usually, if the cabinets are level and secure. If they are not, we tell you before ordering material, because a stone top will crack over a cabinet run that flexes.",
      },
      {
        question: "Do you cut for sinks and cooktops?",
        answer:
          "Yes, cutouts are planned from the actual appliance and sink templates. Undermount sinks are dry fitted before the top is set.",
      },
    ],
    relatedServices: ["remodeling", "carpentry", "ceramic-tile"],
    portfolioSlug: "kitchens-and-cabinetry",
  },
  "construction-cleaning": {
    overviewHeading: "What does post construction cleaning include?",
    answer:
      "Construction leaves a layer of fine dust that settles everywhere, including inside cabinets and on top of door frames. A post construction clean is a sequence, not a quick vacuum: we work from the ceiling down, remove adhesive and paint splatter from glass and floors, wipe every surface and finish with a walkthrough under good light. The space is ready to use when we leave.",
    priceFactors: [
      "Square footage and the number of rooms set the base time, with kitchens and bathrooms taking longer per square foot.",
      "The stage of the project matters. A final clean after punch list work is different from a mid project clean while trades are still active.",
      "Finishes determine the method. Natural stone, glass, brushed metal and matte paint each need a different product so the clean does not damage the surface.",
      "The amount of construction residue drives the hours. Adhesive, grout haze and overspray take longer than dust alone.",
    ],
    faqs: [
      {
        question: "When should post construction cleaning happen?",
        answer:
          "After the trades are finished and the punch list is closed, and before furniture or a photographer arrives. Cleaning earlier means the dust comes back when the last outlet cover goes on.",
      },
      {
        question: "What is included in the clean?",
        answer:
          "Dust and debris removal, window and glass cleaning, floor cleaning, cabinet and surface wipe down, paint splatter and adhesive removal, and a final walkthrough. Fixtures and appliances are included inside and out.",
      },
      {
        question: "How long does it take?",
        answer:
          "A single room or small apartment is usually one day. A full house takes two to four days depending on size and how much residue there is.",
      },
      {
        question: "Do you clean for a move-in date?",
        answer:
          "Yes. We schedule around your move in and can stage the clean by floor or by room if the schedule is tight.",
      },
      {
        question: "Can you handle renovation dust in an occupied home?",
        answer:
          "Yes. We contain the work area, use HEPA vacuums and clean room by room so the rest of the house stays usable.",
      },
    ],
    relatedServices: ["remodeling", "interior-painting", "flooring"],
  },
};

export function getServiceContent(slug: string | undefined): ServiceContent | undefined {
  if (!slug) return undefined;
  return SERVICE_CONTENT[slug];
}

/** Resolves a collection slug to its display title, so internal links always print a real label. */
export function getPortfolioTitle(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  return getCollectionBySlug(slug)?.title;
}
