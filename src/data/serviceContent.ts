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
    process: [
      {
        title: "Walk the house",
        description:
          "We inspect all four sides, note failing caulk and soft wood, and measure the surfaces to be painted. The estimate lists each material and the coating specified for it.",
      },
      {
        title: "Wash and prepare",
        description:
          "Siding is washed to remove chalk, pollen and mildew. Loose paint is scraped and edges are sanded so the new coat has something sound to bond to.",
      },
      {
        title: "Repair and prime",
        description:
          "Gaps are caulked, bare wood and repairs are primed, and any carpentry is completed before the finish coats begin.",
      },
      {
        title: "Finish coats",
        description:
          "Walls, trim, doors, shutters and soffits are coated by brush, roller or spray according to the surface, with the specified number of coats.",
      },
      {
        title: "Final walk",
        description:
          "We walk the exterior with you, check every elevation in daylight, close the touch up list and clean up around the house.",
      },
    ],
    sections: [
      {
        heading: "What we paint on a Massachusetts exterior",
        paragraphs: [
          "Clapboard and shingle siding, trim, fascia, soffits, doors, shutters, porches, decks and the occasional outbuilding. Each surface takes a different product and a different amount of preparation. Cedar shingles need a breathable coating, vinyl and fiber cement need their own primer and finish, and older wood siding often needs more scraping than anyone expects from the outside.",
        ],
      },
      {
        heading: "Washing, scraping and sanding",
        paragraphs: [
          "Most exterior failures start with what is under the new paint, not with the paint itself. We wash to remove chalk, pollen, salt and mildew, then scrape loose coating and sand the edges so they feather into the sound paint. Bare wood gets sanded and dusted before primer. Skipping this work is the fastest way to have peeling again in two winters.",
        ],
      },
      {
        heading: "Primer and the right coating for each surface",
        paragraphs: [
          "Primer is chosen for the material and the condition. Bare wood, factory primed siding, masonry and metal each need a different base, and knots need a stain blocking primer or the resin will bleed through. On top of that goes a finish coat rated for New England weather, with the sheen matched to the surface so trim does not read chalky next to the walls.",
        ],
      },
      {
        heading: "Coastal exposure on the Vineyard and the Cape",
        paragraphs: [
          "Salt air, wind driven rain and strong sun on south and west walls break coatings down faster than inland conditions. Homes within sight of the water usually need a full repaint closer to seven years than ten, and trim near the shore fails first. We call out those elevations separately in the scope so the budget goes where the wear actually is.",
        ],
      },
      {
        heading: "Weather windows and scheduling",
        paragraphs: [
          "Exterior coatings need dry surfaces, temperatures above fifty degrees and enough time to cure before dew or rain. We build the schedule around the forecast, start on the elevations that dry first, and pause rather than apply a coat into conditions that will fail. That is why a start date comes with a finish window instead of a single day.",
        ],
      },
      {
        heading: "How long an exterior paint job lasts",
        paragraphs: [
          "Seven to ten years for most wood sided homes with proper preparation. Coastal properties sit at the shorter end, inland homes at the longer end. A light recoat of trim every four to five years extends the life of the whole job, and washing the siding once a year keeps pollen and salt from eating into the finish.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you spray or brush the exterior?",
        answer:
          "It depends on the surface and the siding profile. Spraying is fast on large flat areas, and we back roll or brush to work the coating into the surface. Trim and doors are usually brushed for control. The estimate states the method for each area.",
      },
      {
        question: "Do you repair rotten wood before painting?",
        answer:
          "Yes. Soft trim, rotted sill boards and loose caulk are identified during the estimate. Minor repairs are folded into the paint scope, and larger carpentry is quoted separately so you can approve it before work starts.",
      },
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
    process: [
      {
        title: "Inspect the subfloor",
        description:
          "We check level, moisture, squeaks and previous patches. What is under the floor decides whether sanding or installation will actually last.",
      },
      {
        title: "Clear and protect",
        description:
          "Furniture moves out, appliances are disconnected where needed, and the work area is sealed from the rest of the house.",
      },
      {
        title: "Sand or install",
        description:
          "Existing floors are sanded evenly across the whole area, or new material is laid and fitted to the room and its transitions.",
      },
      {
        title: "Stain and seal",
        description:
          "Stain is applied to the agreed color and the finish coats are built up, with drying time between coats.",
      },
      {
        title: "Cure and walkthrough",
        description:
          "We protect the floor while it cures, walk the job with you, and tell you exactly when furniture can go back.",
      },
    ],
    sections: [
      {
        heading: "What we install and refinish",
        paragraphs: [
          "Solid hardwood, engineered hardwood, laminate and luxury vinyl plank, plus sanding, staining and refinishing of existing hardwood. We also handle the transitions between rooms, the stair nosings and the thresholds that make a floor feel finished. If a floor is not worth saving, we say so and show you why before you spend on refinishing.",
        ],
      },
      {
        heading: "Why the subfloor decides the job",
        paragraphs: [
          "A finished floor follows whatever is under it. If the subfloor is out of level, the boards will telegraph it; if there is moisture, the finish will fail from below. We check moisture content, look for soft spots and confirm the joists are sound. Fixing the base is not glamorous, but it is the difference between a floor that lasts and one that squeaks and cups.",
        ],
      },
      {
        heading: "Sanding, staining and finish coats",
        paragraphs: [
          "We sand through the grits evenly across the whole floor rather than only the worn paths, because a floor sanded unevenly takes stain unevenly. Stain is applied and wiped to the agreed color, then the finish coats go on with drying time between each. Matte, satin and semi-gloss each show wear differently, which is worth deciding before the first coat.",
        ],
      },
      {
        heading: "Humidity and seasonal movement",
        paragraphs: [
          "Wood moves with the seasons, and Massachusetts homes swing from dry winter heat to humid summer air. That is normal, but it is why a floor needs room at the walls and why we check indoor conditions before installing. A floor installed tight into a humid season can cup or buckle when the heat comes on.",
        ],
      },
      {
        heading: "Dust, furniture and living through it",
        paragraphs: [
          "Sanding creates fine dust, so we seal doorways, use dust collection and clean at the end of each day. Rooms are out of use while finish cures, usually a few days. We plan the sequence with you so at least one path through the house stays open, and we tell you when to move furniture back and what to put under the legs.",
        ],
      },
      {
        heading: "Refinish or replace",
        paragraphs: [
          "Refinishing keeps original wood and usually costs less. Replacement makes sense when boards are cupped, heavily damaged, patched with different species or too thin to sand again. We measure the remaining thickness and show you the worn areas before recommending, because sanding through a floor is a mistake you cannot undo.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many times can hardwood floors be sanded?",
        answer:
          "Solid hardwood can usually take several sandings over its life, depending on the thickness and how much was removed before. Engineered floors have a wear layer that can often be refinished once. We check the thickness before quoting.",
      },
      {
        question: "Do you move appliances and furniture?",
        answer:
          "We move furniture and disconnect appliances that need to come out, such as a refrigerator or washer. Very heavy items like a piano or a safe are handled with you so nothing is damaged moving it.",
      },
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
    process: [
      {
        title: "Layout and substrate check",
        description:
          "We check that the surface is flat and sound, then lay out the pattern from a fixed starting line so cuts fall where they should.",
      },
      {
        title: "Waterproofing",
        description:
          "Showers and wet areas get a waterproof membrane with seams, corners and the drain connection detailed before any tile goes down.",
      },
      {
        title: "Setting tile",
        description:
          "Tile is set with the correct thinset for the material, checked for level and spacing, and left to cure before grouting.",
      },
      {
        title: "Grout and seal",
        description:
          "Grout is packed and shaped uniformly, the surface is cleaned, and cement based grout is sealed once it has cured.",
      },
      {
        title: "Clean and walkthrough",
        description:
          "We clean the haze off the tile, check the job with you and explain how to care for the grout.",
      },
    ],
    sections: [
      {
        heading: "What we tile",
        paragraphs: [
          "Bathroom floors, shower walls and pans, kitchen backsplashes, mudrooms, entryways and fireplace surrounds. We work with ceramic, porcelain, natural stone and large format tile, and we plan the layout around fixtures, outlets and the room's sight lines. The tile you choose matters, but the setting materials and the preparation under it matter more.",
        ],
      },
      {
        heading: "Layout before the first piece",
        paragraphs: [
          "The difference between a professional tile job and a homeowner attempt is usually visible at the edges: half inch slivers of tile at a door, cuts that do not line up with the faucet, grout joints that drift. We set a control line, work out where the cuts go, and adjust the layout so the visible walls carry full tiles and the cuts land where they are least seen.",
        ],
      },
      {
        heading: "Substrate and waterproofing",
        paragraphs: [
          "Tile needs a flat, stable surface and wet areas need a membrane. We check the substrate for flatness, screw down loose board, and prime or level where required. In a shower, the waterproofing goes on before tile and wraps the corners and drain flange. That layer, not the tile, is what keeps the framing dry.",
        ],
      },
      {
        heading: "Grout, sealant and long term",
        paragraphs: [
          "Grout choice affects maintenance. Cement based grout needs sealing in wet rooms and on floors; epoxy grout resists staining but is harder to work with. Change of plane joints get flexible sealant rather than grout so movement does not crack the line. With the right grout and a light cleaning routine, a tile floor can look the same in ten years.",
        ],
      },
      {
        heading: "Removal, dust and scheduling",
        paragraphs: [
          "Taking out old tile is dusty work. We seal the room, cover surfaces and remove debris daily. A bathroom is out of use for the duration, so we plan the schedule with you and tell you when the water can go back on. If a second bathroom exists, we sequence work so the household is never without a shower.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build and tile showers?",
        answer:
          "Yes. We build shower pans, waterproof the walls and floor, and tile the surround. Niches, benches and glass openings are planned before the membrane goes on so the details line up.",
      },
      {
        question: "Can you install tile I already bought?",
        answer:
          "Yes, if the material is suitable for the location and there is enough quantity to allow for cuts and breakage. We check the tile and the coverage before scheduling, so a shortage does not stop the job.",
      },
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
    process: [
      {
        title: "Diagnose the cause",
        description:
          "We check whether the crack is cosmetic or whether the plaster has separated from the lath, and look for water or movement behind it.",
      },
      {
        title: "Stabilize and patch",
        description:
          "Loose plaster is secured or removed, the base is prepared, and the area is filled and built back to the surrounding plane.",
      },
      {
        title: "Skim coat",
        description:
          "A thin coat is applied across the repaired area or the full wall, feathered into the existing finish.",
      },
      {
        title: "Sand and check",
        description:
          "The surface is sanded flat and checked under raking light, because that is where imperfections show once paint goes on.",
      },
      {
        title: "Prime and handoff",
        description:
          "The repair is primed and left ready for paint, with the room clean and the dust removed.",
      },
    ],
    sections: [
      {
        heading: "Why old plaster cracks",
        paragraphs: [
          "Plaster on wood lath moves with the house. Over decades the keys that hold it to the lath can break, and the coat separates in long cracks or a sagging ceiling. Water from a roof leak or an old bathroom fan makes it worse. Repairing only the visible crack without addressing the loose area is why patches reopen, so we test the surrounding surface before filling anything.",
        ],
      },
      {
        heading: "Skim coating versus patching",
        paragraphs: [
          "A patch fixes a defined area. A skim coat resets the finish across a wall or ceiling, which is what you want when there are many small cracks, a previous repair that still shows, or a texture that has been sanded unevenly. Skim coating costs more per square foot but often saves a wall that would otherwise be replaced with drywall, and it keeps the original plaster.",
        ],
      },
      {
        heading: "Matching texture in older homes",
        paragraphs: [
          "Older plaster is not perfectly flat, and a smooth patch on a slightly textured wall reads as a bright spot under paint. We match the surrounding texture and sheen so the repair disappears. On historic homes we also take care with the profile at corners, arches and trim, where a heavy patch would erase detail that took a hundred years to accumulate.",
        ],
      },
      {
        heading: "Dust control",
        paragraphs: [
          "Sanding plaster makes fine dust that settles everywhere. We seal doorways with plastic, cover floors and furniture, and clean at the end of each day. Rooms under repair stay closed while work is active, and we tell you when each one can be used again. If someone in the house has asthma or allergies, say so and we plan around it.",
        ],
      },
      {
        heading: "When replacement is the right answer",
        paragraphs: [
          "If plaster has lost its grip across a large ceiling, is crumbling to the touch or has been patched so many times that the surface is unstable, replacement is cheaper than repeated repairs. That is a drywall scope rather than a plaster one, and we tell you honestly when it is the better value instead of selling another patch.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you repair a plaster ceiling?",
        answer:
          "Yes. Sagging or cracked ceilings are common in older homes. We secure or remove the loose section, rebuild the plane and skim it, then prime it for paint. A ceiling that has dropped across a large area is assessed for replacement.",
      },
      {
        question: "How long before a repaired wall can be painted?",
        answer:
          "Once the final coat is dry and sanded, usually a day or two depending on humidity. We prime the repair so the paint reads evenly, and we can coordinate with the painter so the room is not left half finished.",
      },
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
    process: [
      {
        title: "Measure and match",
        description:
          "We measure the actual openings, check the walls for square and take a profile from any trim that has to match.",
      },
      {
        title: "Material selection",
        description:
          "You choose the material and profile, or we source a match for existing millwork. We confirm quantities before ordering.",
      },
      {
        title: "Fabrication",
        description:
          "Pieces are cut and fitted in the shop where possible, which keeps the house cleaner and the installation faster.",
      },
      {
        title: "Installation",
        description:
          "Trim, doors, casings and built-ins are fastened with the right method for the substrate and adjusted until the gaps are even.",
      },
      {
        title: "Finish and walkthrough",
        description:
          "We fill, sand and leave the work paint ready, then walk it with you to check alignment and operation.",
      },
    ],
    sections: [
      {
        heading: "What carpentry covers in an older Massachusetts home",
        paragraphs: [
          "Baseboards, crown molding, door and window casings, chair rail, wainscoting, built-in shelving, window seats, closet systems, stair parts and the structural wood repairs that show up around windows and doors. In older homes the carpentry is often where a renovation succeeds or fails, because that is where new work meets walls that have moved for a century.",
        ],
      },
      {
        heading: "Trim and moldings that match the house",
        paragraphs: [
          "Matching existing trim is part detective work. We take a profile from a piece that is already there, measure the reveal and the thickness, and either source a modern equivalent or have it milled. Blending new and old matters most in hallways and stairwells, where two profiles meet in the same sight line and a mismatch reads immediately.",
        ],
      },
      {
        heading: "Doors, windows and frames",
        paragraphs: [
          "A door that sticks, a frame that is out of square or a casing that has pulled away are common repair items. We adjust hinges, plane edges and reset frames rather than replacing what can be saved. When replacement is needed, the new unit is fitted to the existing opening and the casing is rebuilt to match the room.",
        ],
      },
      {
        heading: "Built-ins and storage",
        paragraphs: [
          "Bookcases, mudroom benches, window seats and closet systems are built to the space rather than bought to approximate it. We plan shelves for the things they will hold, allow for baseboard and outlets, and finish the unit so it reads as part of the room. On an island property, building on site avoids shipping a large cabinet across the water.",
        ],
      },
      {
        heading: "Wood repairs and rot",
        paragraphs: [
          "Soft sills, rotted thresholds and water damaged fascia are found during painting and carpentry work. We remove the damaged section, treat or replace it, and rebuild the detail so water sheds the way it should. Covering rot with caulk and paint is a short term fix that fails within a season or two.",
        ],
      },
      {
        heading: "Finishing ready for paint",
        paragraphs: [
          "Carpentry is not finished until it is ready for the painter. We set nails, fill the holes, sand the joints and caulk the seams that should be caulked, leaving the caulk lines that should not be visible clean. That preparation is what makes trim look crisp under a semi-gloss instead of wavy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you mill trim to match an old profile?",
        answer:
          "In many cases yes. We take a sample or a rubbing of the existing profile and either find a stock match or have a mill run it. Lead times are longer for custom profiles, so we plan that early in the project.",
      },
      {
        question: "Do you repair water damage around windows and doors?",
        answer:
          "Yes. We open the area, replace softened wood, check the flashing and rebuild the trim. If the damage reaches the framing or sheathing, we scope that repair before closing it up and finishing.",
      },
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
    process: [
      {
        title: "Line and layout",
        description:
          "We walk the property line, agree the height and spacing, and mark post locations before anything is dug.",
      },
      {
        title: "Post setting",
        description:
          "Posts are set below the frost line and braced while they cure, so the fence stays straight through freeze and thaw.",
      },
      {
        title: "Rails and panels",
        description:
          "Rails, panels and pickets are installed level and plumb, with the spacing checked as the run goes up.",
      },
      {
        title: "Gates and hardware",
        description:
          "Gates are hung to swing freely, latches are aligned and posts that carry a gate are set deeper for support.",
      },
      {
        title: "Finish and walkthrough",
        description:
          "New wood is stained or sealed when specified, and we walk the finished fence with you, including every gate.",
      },
    ],
    sections: [
      {
        heading: "Choosing a fence for a New England property",
        paragraphs: [
          "Privacy, pets, property lines and pool code all point to different fences. A six foot privacy fence along a property line, a four foot picket in front of a Cape home and a pool barrier each have their own rules and their own look. We talk through the purpose first, because the right fence for a dog is not always the right fence for a view.",
        ],
      },
      {
        heading: "Posts, frost and soil",
        paragraphs: [
          "Every fence problem starts at the post. Massachusetts frost depth moves the ground every winter, so posts go below the frost line and are set in concrete in most soils. Rocky ground on the Cape and the islands can change the method, and we note that before quoting rather than discovering it on day one.",
        ],
      },
      {
        heading: "Wood versus vinyl",
        paragraphs: [
          "Wood suits older homes, can be repaired board by board and takes a stain that changes with the house. It also needs maintenance every few years. Vinyl holds color with almost no upkeep and costs more up front, though very cold weather can make it brittle. We price both from the same layout so the comparison is honest.",
        ],
      },
      {
        heading: "Gates, corners and slopes",
        paragraphs: [
          "Gates are the part of a fence that gets used, and the part that fails first. Gate posts are set deeper, hardware is chosen for the weight of the gate, and the swing is checked on site. On slopes we step the fence rather than letting panels rack, so the line stays level and the gaps stay even.",
        ],
      },
      {
        heading: "Repairing an existing fence",
        paragraphs: [
          "If most posts are sound, repair is almost always the better value. We replace broken pickets, reset loose posts, rebuild gates and re-stain sections that have weathered. When several posts have rotted at the ground line, replacement is usually cheaper than chasing repairs for another few years.",
        ],
      },
      {
        heading: "Staining and sealing a new fence",
        paragraphs: [
          "New pressure treated wood needs to dry before it will absorb a finish, usually several weeks. Cedar can be finished sooner. A penetrating stain on a new fence protects the wood without building a film, and a recoat every few years keeps it looking new rather than gray.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a wood fence last in Massachusetts?",
        answer:
          "Fifteen to twenty years for cedar or pressure treated posts set properly, depending on soil and maintenance. Posts fail before the panels do, which is why the setting method matters more than the board choice.",
      },
      {
        question: "Do you remove and dispose of an old fence?",
        answer:
          "Yes. Removal, hauling and disposal are included when you ask for them, and we check for buried posts and concrete before starting so the site is left clean.",
      },
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
    process: [
      {
        title: "Measure the installed cabinets",
        description:
          "We measure the actual cabinet run, check level and straightness, and note any repairs needed before templating.",
      },
      {
        title: "Choose material and edge",
        description:
          "Material, thickness, edge profile and seam locations are decided together, with samples in the room under its light.",
      },
      {
        title: "Template and fabricate",
        description:
          "For stone we template on site, then the fabricator cuts. For other materials we order to the confirmed dimensions.",
      },
      {
        title: "Remove and install",
        description:
          "The old top comes out, plumbing is disconnected, the new top is set, leveled and the sink or cooktop is fitted.",
      },
      {
        title: "Seal and walkthrough",
        description:
          "Seams and edges are finished, the surface is cleaned, and we walk the kitchen with you before the plumber returns.",
      },
    ],
    sections: [
      {
        heading: "What we install",
        paragraphs: [
          "Laminate, solid surface, butcher block and prefabricated stone, plus coordination with a local fabricator for custom quartz and granite. We handle the removal of the old top, the cutouts for sinks and cooktops, the seam layout and the final seal. Bathroom vanities are scoped the same way, with the same attention to the plumbing opening.",
        ],
      },
      {
        heading: "Measuring after the cabinets, not before",
        paragraphs: [
          "A countertop cut from a drawing will not fit a house. Walls are rarely straight, and cabinets settle. We measure the installed run in the field, check the corner angles and confirm the cabinet tops are level and secure. That measurement is what prevents the gap at the backsplash and the seam that lands in the middle of the sink.",
        ],
      },
      {
        heading: "Seams, overhangs and edges",
        paragraphs: [
          "Every seam is a decision. We place seams where they are least visible, away from the sink and the edge of the room, and confirm the overhang for seating or appliances. The edge profile changes both the look and the price, and it should be chosen with the cabinet door style in mind rather than from a sample board alone.",
        ],
      },
      {
        heading: "Sinks, cooktops and cutouts",
        paragraphs: [
          "Cutouts are planned from the actual appliance template, not a nominal size. Undermount sinks are dry fitted to confirm the reveal before the top is set, and faucet holes are drilled after the sink position is final. A small error here means a new top, so we check twice.",
        ],
      },
      {
        heading: "Removal and disposal",
        paragraphs: [
          "Old tops come out carefully to protect the cabinets and the floor. Plumbing is disconnected and capped, debris is hauled away, and we check the cabinet tops and the wall behind the old backsplash for damage before the new surface goes on.",
        ],
      },
      {
        heading: "Care by material",
        paragraphs: [
          "Laminate and solid surface tolerate most cleaners; stone needs a pH neutral product and periodic sealing; butcher block needs oil. We leave care instructions for the material installed and tell you what to avoid, because most countertop damage comes from the wrong cleaner rather than from daily use.",
        ],
      },
      {
        heading: "What we check before ordering material",
        paragraphs: [
          "Before a single piece is cut we confirm the cabinet run is level, the walls are straight enough for the backsplash, and the appliance openings match the appliances. On a remodel this happens after the cabinets are installed, never from a drawing. Catching a problem at this stage costs a conversation; catching it after fabrication costs a new top.",
        ],
      },
      {
        heading: "Living without a kitchen during the change",
        paragraphs: [
          "A countertop swap takes the kitchen out of service for at least a day, sometimes two when plumbing and a backsplash are involved. We tell you which days, keep the sink connected as late as possible and restore it as early as possible, and leave the room clean enough to use at the end of each day.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a new countertop go on existing cabinets?",
        answer:
          "Usually yes, if the cabinets are level, secure and the right height. If they are not, we tell you before ordering material, because stone will crack over a run that flexes and a laminate top will show the unevenness.",
      },
      {
        question: "Do you install a backsplash with the countertop?",
        answer:
          "Yes. Tile or slab backsplash can be part of the same project, and we plan the height and the cutouts before the top is fabricated so the two line up cleanly.",
      },
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
      {
        question: "Do stone countertops need sealing?",
        answer:
          "Natural stone is sealed at installation and then every year or two depending on the material. Quartz does not need sealing. We leave the right product and explain how often to reapply it.",
      },
      {
        question: "How do you protect the new top during the rest of the remodel?",
        answer:
          "We cover it with a padded board while other trades are still working and ask that nothing heavy be set on the seams. The protection comes off at the final clean.",
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
    process: [
      {
        title: "Walkthrough and scope",
        description:
          "We walk the space, note the finishes that need special products and agree what is included before the crew arrives.",
      },
      {
        title: "Dust removal, top down",
        description:
          "Ceilings, light fixtures, ledges and door frames are cleaned first so dust does not fall onto surfaces already finished.",
      },
      {
        title: "Surfaces and glass",
        description:
          "Cabinets are wiped inside and out, windows and glass are cleaned, and adhesive and paint splatter are removed without scratching.",
      },
      {
        title: "Floors and detail",
        description:
          "Floors are vacuumed and washed last, with edges and corners done by hand rather than by machine.",
      },
      {
        title: "Final walkthrough",
        description:
          "We walk the space with you under good light and correct anything the punch list turns up before we leave.",
      },
    ],
    sections: [
      {
        heading: "What post construction cleaning actually removes",
        paragraphs: [
          "Fine drywall dust, sawdust, adhesive residue, caulk smears, paint splatter, grout haze, fingerprints on new fixtures and the film that settles on glass. This is not a housekeeping clean. It is a construction clean, and it takes different tools and different products than routine cleaning because the residue is bonded to the surface.",
        ],
      },
      {
        heading: "Why the order of work matters",
        paragraphs: [
          "Dust falls. If floors are washed before ceilings and trim are cleaned, the floors get dirty again. We work from the top of the room down and from the back of the space toward the exit, so nothing is recleaned. Bathrooms and kitchens come last because that is where the fine dust collects on horizontal surfaces.",
        ],
      },
      {
        heading: "Materials that need different products",
        paragraphs: [
          "Natural stone etches with acidic cleaners. Brushed metal scratches with abrasive pads. Matte paint marks with the wrong cloth. Glass cleaner leaves a film on some coatings. We match the product to the finish and test in a hidden spot when the material is unfamiliar, because a cleaning mistake on a new countertop is expensive to correct.",
        ],
      },
      {
        heading: "Working around the punch list",
        paragraphs: [
          "Trades often return for small items after the first clean. We schedule around the punch list so a final visit happens after the last outlet cover and the last touch of paint. Cleaning before that point means the dust comes back and the work is paid for twice.",
        ],
      },
      {
        heading: "Preparing for photos or move-in",
        paragraphs: [
          "A real estate photographer needs surfaces clear, glass streak free and floors without footprints. A move in needs the same plus cabinets and closets ready to receive belongings. We ask which one it is, because it changes where the last hour of detail goes.",
        ],
      },
      {
        heading: "What is not included in a construction clean",
        paragraphs: [
          "We do not haul away construction debris, demolition material or old appliances, and we do not repair damaged finishes. Our job is to remove the residue the trades leave behind. If you need debris removal, we can coordinate it with the contractor or quote it separately so the space is empty before we clean.",
        ],
      },
      {
        heading: "Scheduling around the final trades",
        paragraphs: [
          "The last week of a project is when the dust is worst and the schedule is least predictable. We hold a cleaning slot that can move by a day without breaking, and we keep a second short visit available for the touch ups that always appear after the punch list. That way the clean happens once, at the right moment, instead of twice.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you clean inside cabinets and drawers?",
        answer:
          "Yes. New cabinetry is wiped inside and out, including shelves, drawer boxes and the tracks. We remove construction dust and adhesive before anything is put away.",
      },
      {
        question: "Can you remove paint and adhesive from glass?",
        answer:
          "Usually. We use a blade at a shallow angle or a solvent matched to the residue, and we test first on coated or textured glass. Overspray on windows is one of the most common items on a post construction clean.",
      },
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
      {
        question: "Do you bring your own supplies and equipment?",
        answer:
          "Yes. We bring vacuums with HEPA filters, cloths and the products matched to each surface. You do not need to supply anything.",
      },
      {
        question: "What if dust settles again a few days later?",
        answer:
          "Some dust always settles after a clean as air moves through the house. We explain what to expect and can schedule a light re-clean once the final trades have left.",
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
