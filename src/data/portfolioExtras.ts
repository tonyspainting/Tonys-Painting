// Conteúdo complementar das coleções de portfólio.
// Fica separado do portfolio.ts para não misturar dados do projeto com copy.
// Regra: nada de fatos inventados sobre obras específicas — só método, materiais,
// clima da região e manutenção.

export interface PortfolioExtra {
  paragraphs: string[];
  related: { label: string; to: string }[];
}

export const PORTFOLIO_EXTRAS: Record<string, PortfolioExtra> = {
  decks: {
    paragraphs: [
      "Deck surfaces take more weather than any other part of a house. On Martha's Vineyard and Cape Cod, boards face salt air, strong summer UV and a freeze-thaw cycle that opens seams and lifts finish. So deck work is mostly preparation: we wash the surface to remove mildew and grey fiber, let the wood dry completely, sand the profile back, and replace boards that have softened or rotted at the joists. A finish applied over damp or dirty wood fails within a season.",
      "Choosing the finish matters as much as applying it. A transparent or semi-transparent stain keeps the grain visible but needs attention more often. A solid stain hides color variation between boards and holds up longer on a deck that gets full sun. New pressure-treated lumber needs time to dry before it accepts a stain, so we usually schedule that coat weeks after installation. Railings, stairs and spindles get the same prep as the field of the deck, because those are the parts people touch.",
      "Maintenance in New England is a cycle, not a one-time job: inspect each spring, clean off pollen and salt, and touch up the walking areas before they wear through. We also check fasteners, stair stringers and railing connections while we are on site, since a loose rail is a safety issue long before it is a cosmetic one. For homeowners weighing wood against composite, we walk through cost over time, heat underfoot and how each material ages in coastal conditions.",
    ],
    related: [
      { label: "Deck and Stairs", to: "/services/deck-stairs" },
      { label: "Exterior Painting", to: "/services/exterior-painting" },
      { label: "Fence", to: "/services/fence" },
    ],
  },
  "hardwood-floors": {
    paragraphs: [
      "Not every worn floor needs replacing. If the boards are structurally sound and thick enough to sand, refinishing restores the surface for a fraction of the cost of new flooring and keeps the original character of the house. We check for cupping, crowning and water damage first, because sanding a floor that has moved can leave dips that never flatten out. When a board is beyond saving, we replace that section and blend it into the surrounding wood before sanding.",
      "The sanding sequence is what produces an even surface: a coarse pass to remove the old finish, then progressively finer grits to erase the marks from the previous pass. Stain is applied by hand and worked in sections so edges do not dry unevenly. The topcoat is where the durability comes from. A water-based polyurethane dries clear and fast with low odor, while an oil-modified finish adds a warm amber tone and takes longer to cure. Coastal humidity affects both, so we monitor temperature and moisture before each coat.",
      "Practically, a refinishing project means empty rooms and a few days of drying. Furniture comes out, foot traffic stays off until the finish has cured, and felt pads go under legs when it does. A floor that is cared for (swept, damp-mopped, kept out of standing water) holds its finish for years. If your floors have gone grey or the finish is worn through in traffic lanes, it is usually the right moment to refinish rather than wait for the wood to stain.",
    ],
    related: [
      { label: "Flooring", to: "/services/flooring" },
      { label: "General Carpentry", to: "/services/carpentry" },
      { label: "Remodeling", to: "/services/remodeling" },
    ],
  },
  "kitchen-and-bath-remodeling": {
    paragraphs: [
      "A remodel succeeds or fails on sequencing. We open walls once, rough in electrical and plumbing, and get inspections done before insulation and drywall close everything back up. Tile and waterproofing come next, then cabinets, then countertops measured to the installed boxes, then paint and fixtures. Planning that order up front is what keeps a project from waiting weeks for a trade to come back and reopen a finished wall.",
      "Bathrooms deserve extra attention to water. Cement board behind tile, a properly sloped pan and a sealed membrane are not optional details. They are what prevents the callbacks that show up a year later as soft drywall or loose tile. Ventilation matters just as much, because a bathroom that stays humid keeps the finish and the grout under stress. We size the fan and the layout together rather than treating them as separate decisions.",
      "In kitchens, the long lead items are cabinets, countertops and appliances, so those decisions come first and everything else is scheduled around them. We give a written scope and a phase-by-phase timeline before demolition, and we flag decision deadlines so materials arrive when the crew needs them. If you are planning a kitchen, bath or storage remodel, we can review the layout and put together a detailed estimate for the full scope.",
    ],
    related: [
      { label: "Remodeling", to: "/services/remodeling" },
      { label: "Countertop", to: "/services/countertop" },
      { label: "Ceramic Tile", to: "/services/ceramic-tile" },
    ],
  },
  "kitchens-and-cabinetry": {
    paragraphs: [
      "Cabinet work is one of the few places where refinishing beats replacement for both budget and downtime. If the boxes are square and the doors are solid, keeping them avoids the cost of new cabinetry, the wait for delivery and the demolition that goes with it. We assess the existing finish first: grease and cooking residue have to come off completely, or the new coating will fail at the edges where hands touch most.",
      "From there the process is prep, prime and finish. Doors and drawer fronts come off and are finished flat, which gives a smoother result than painting them in place. A sprayed finish lays down more evenly than a brush on flat panels, and the coating we specify is chosen for kitchen conditions: heat, moisture and frequent wiping. Drying time between coats is respected rather than rushed, because a soft finish under a hard topcoat will eventually show.",
      "Refinishing also changes the details: new hardware, new hinges, soft-close dampers where they fit. It is a good moment to reconsider color, especially in a kitchen that gets little natural light. The result reads as a new kitchen without the disruption of a full replacement, and it keeps the original layout that the house was built around.",
    ],
    related: [
      { label: "Countertop", to: "/services/countertop" },
      { label: "Remodeling", to: "/services/remodeling" },
      { label: "Interior Painting", to: "/services/interior-painting" },
    ],
  },
  "interior-living-spaces": {
    paragraphs: [
      "Interior painting is mostly preparation. Walls get patched, sanded and wiped down; gaps at trim are caulked; stains get a stain-blocking primer so they do not bleed through a fresh coat. On older New England homes, plaster can be uneven and trim can have decades of buildup, and that is where a careful prep phase shows in the final result far more than the paint itself.",
      "Sheen is a practical decision as much as a visual one. Ceilings are usually flat, walls sit well in an eggshell or matte that hides minor imperfections, and trim takes a satin or semi-gloss that wipes clean. In rooms with strong afternoon light, a lower sheen reads softer; in hallways and kitchens, a washable finish earns its keep. We test colors on the actual wall rather than choosing from a chip under store lighting.",
      "For occupied homes we plan around the household: rooms are finished in sequence so at least one part of the house stays usable, furniture is moved and covered, and low-odor products are used where sensitive family members or pets are present. Most single rooms take a couple of days; a whole floor is scheduled in zones so the disruption stays predictable.",
    ],
    related: [
      { label: "Interior Painting", to: "/services/interior-painting" },
      { label: "Plastering", to: "/services/plastering" },
      { label: "General Carpentry", to: "/services/carpentry" },
    ],
  },
  "exterior-painting-and-siding": {
    paragraphs: [
      "Exterior work in coastal Massachusetts starts with an honest assessment of the surface. Paint fails where water gets in, so we look for soft trim, failed caulk joints, gaps at window casings and bare wood. Washing comes first to remove salt, pollen and mildew, then scraping and sanding to a sound edge, then spot priming every bare area. Skipping the primer is the fastest way to watch a new coat peel within two seasons.",
      "Substrate changes the approach. Cedar shingles need a breathable coating that lets moisture out, or the shingle faces will cup and the finish will fail from behind. Clapboard and trim can take a harder film built for durability. On homes near the water, the salt film that settles over winter is the main enemy, and a finish that sheds it cleanly keeps the house looking maintained far longer.",
      "The weather window matters as much as the product: exterior coatings need moderate temperatures and dry wood, which in this region points to late spring through early fall. We schedule around that, protect plantings and walkways, and leave a punch list of any areas to revisit. A house painted with proper prep typically holds for several years before it needs a maintenance coat rather than a full repaint.",
    ],
    related: [
      { label: "Exterior Painting", to: "/services/exterior-painting" },
      { label: "General Carpentry", to: "/services/carpentry" },
      { label: "Deck and Stairs", to: "/services/deck-stairs" },
    ],
  },
  "deck-restoration": {
    paragraphs: [
      "Restoration makes sense when the structure is sound but the surface has given up. We test the framing and the ledger connection first, because a deck that is soft at the house is a rebuild, not a coating job. If the bones are good, the work is stripping the failed finish, sanding back to clean wood, brightening the surface after stripping, and replacing individual boards that have rotted at the fastener line.",
      "Once the wood is clean and dry, the finish choice decides how the deck ages. A penetrating stain feeds the fiber and wears gradually, so touch-ups blend in. A film-forming coating gives a more uniform look but shows wear as it fails. On stairs and railings we use the same system as the field so the whole deck ages at the same rate instead of showing patchy sections after one winter.",
      "Most restorations take a few days spread over drying windows, and the deck can typically be used again within a couple of days of the final coat. After that it is maintenance: a spring clean, a check of fasteners and a light recoat on the walking surface before it wears through. That rhythm is what keeps a restored deck out of the rebuild category.",
    ],
    related: [
      { label: "Deck and Stairs", to: "/services/deck-stairs" },
      { label: "Exterior Painting", to: "/services/exterior-painting" },
      { label: "Fence", to: "/services/fence" },
    ],
  },
  "commercial-school-painting": {
    paragraphs: [
      "Commercial and school work is scheduled around the calendar, not the other way around. Summer breaks and holiday windows are short, so the scope is broken into phases that can be completed and handed back cleanly. We walk the building first, map which areas can be closed at which time, and build the sequence around the days the building is actually empty.",
      "Product choice follows occupancy. Low-odor, low-VOC coatings let sections reopen sooner, and scrubbable finishes hold up in corridors and classrooms where walls get touched and washed. Drying time is planned into the schedule rather than discovered at the end, and coverage is estimated from measured wall area so material arrives in the right quantity instead of in a second order.",
      "Safety and communication run alongside the work: barricades and signage, protected floors and furniture, daily cleanup, and a single point of contact for the facilities team. School buildings also tend to have older plaster and trim, which means patching and priming get as much attention as the paint itself. The goal is a building that looks freshly finished on the first day back.",
    ],
    related: [
      { label: "Interior Painting", to: "/services/interior-painting" },
      { label: "Construction Cleaning", to: "/services/construction-cleaning" },
      { label: "Plastering", to: "/services/plastering" },
    ],
  },
  "residential-interior-martha-s-vineyard": {
    paragraphs: [
      "Working on the island adds logistics to every project. Materials come over on the ferry, so we plan quantities up front and stage deliveries rather than making repeated trips. Crew scheduling accounts for boat times and traffic, which is why island projects are scoped with more buffer than mainland ones. A missing gallon should not cost a day.",
      "Island housing stock also shapes the work. Many homes are older, with plaster walls, original trim and layers of finish that need careful prep before anything new goes on. Homes built before 1978 require lead-safe practices, and we handle those surfaces accordingly. Coastal humidity affects drying times, so we watch moisture rather than assuming a mainland schedule applies.",
      "Most island work is done in occupied homes, which means protecting furniture, keeping at least part of the house usable and cleaning up at the end of each day. We schedule around ferry-dependent deliveries and the homeowner's calendar, and we keep the punch list small by walking the job together before we call it finished.",
    ],
    related: [
      { label: "Interior Painting", to: "/services/interior-painting" },
      { label: "Plastering", to: "/services/plastering" },
      { label: "Remodeling", to: "/services/remodeling" },
    ],
  },
};
