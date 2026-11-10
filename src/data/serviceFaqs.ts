// FAQ de reserva por serviço.
// Usadas enquanto serviceContent.ts não tiver conteúdo próprio para o slug.
// Garantem que o FAQPage (schema) e a seção de perguntas continuem em todas as páginas de serviço.
import type { ServiceAnswer } from "./serviceContent";

export const SERVICE_FAQS: Record<string, ServiceAnswer[]> = {
  "interior-painting": [
    { question: "How much does interior painting cost in Massachusetts?", answer: "Interior painting costs vary based on room size, ceiling height and number of coats. Most rooms range from $300 to $800. We provide free estimates with no obligation." },
    { question: "How long does an interior painting project take?", answer: "A single room typically takes one day. A full home interior takes 3 to 7 days depending on size and complexity. We provide a timeline before starting." },
    { question: "Do you move furniture before painting?", answer: "Yes. Our team moves and protects all furniture before starting. We cover floors and surfaces and move everything back when the job is done." },
    { question: "What paint brands do you use for interior projects?", answer: "We use Benjamin Moore and Sherwin-Williams premium interior paints. We also accept customer-supplied paint if you have a specific product in mind." },
  ],
  "exterior-painting": [
    { question: "How much does exterior painting cost in Massachusetts?", answer: "Exterior painting costs depend on the size of the home, siding material and condition. Most homes range from $2,500 to $8,000. We provide free on-site estimates." },
    { question: "What is the best time of year to paint exterior in Massachusetts?", answer: "Late spring through early fall is ideal. We paint when temperatures are consistently above 50 degrees Fahrenheit and conditions are dry. We work within safe weather windows year-round." },
    { question: "How long does exterior paint last in Massachusetts?", answer: "With proper preparation and premium paint, exterior paint lasts 7 to 10 years in Massachusetts. Proper surface prep is the most important factor in paint longevity." },
    { question: "Do you pressure wash before exterior painting?", answer: "Yes. Power washing and surface preparation are included in every exterior project. Clean, properly prepped surfaces are essential for paint to bond and last." },
  ],
  "remodeling": [
    { question: "Do you handle full home remodels or only specific rooms?", answer: "We handle both. From a single bathroom to a full home renovation, our team manages flooring, tile, carpentry, plastering and more without requiring multiple contractors." },
    { question: "How long does a remodeling project take?", answer: "A bathroom remodel typically takes 1 to 2 weeks. A kitchen can take 2 to 4 weeks. We provide a detailed timeline and milestone schedule before starting." },
    { question: "Do you offer free estimates for remodeling projects?", answer: "Yes. We visit the site, assess the scope and provide a written estimate at no cost. There is no obligation to proceed after the estimate." },
  ],
  "deck-stairs": [
    { question: "How much does deck staining cost in Massachusetts?", answer: "Deck staining costs vary based on the size and condition of the deck. Most residential decks range from $800 to $3,000. We provide free on-site estimates before any work begins." },
    { question: "How long does deck stain last in Massachusetts?", answer: "With proper preparation and a quality stain, deck finish typically lasts 2 to 4 years in Massachusetts' climate. Power washing and light sanding before each coat extends the life significantly." },
    { question: "Do you repair deck boards before staining?", answer: "Yes. We inspect every board before staining and replace any that are cracked, warped or unsafe. Repairs are quoted separately and can be included in the same project." },
  ],
  "flooring": [
    { question: "What types of flooring do you install in Martha's Vineyard?", answer: "We install hardwood, engineered hardwood and luxury vinyl plank. We also refinish and stain existing hardwood floors. We work on both new construction and renovation projects." },
    { question: "How long does hardwood floor installation take?", answer: "A typical room takes one to two days. A full home floor installation usually takes three to five days depending on square footage and subfloor condition." },
    { question: "Do you refinish existing hardwood floors?", answer: "Yes. We sand, stain and apply multiple finish coats. Most refinishing projects are completed in two to three days and can transform worn floors without full replacement." },
  ],
  "ceramic-tile": [
    { question: "Do you install tile in bathrooms and kitchens in Martha's Vineyard?", answer: "Yes. We handle floor tile, wall tile, shower surrounds, kitchen backsplashes and entryway installations throughout Martha's Vineyard and Cape Cod." },
    { question: "How long does a tile installation project take?", answer: "A bathroom floor typically takes one day. A full bathroom tile with walls and shower takes two to four days. Kitchen backsplash projects are usually done in one day." },
  ],
  "plastering": [
    { question: "Do you repair plaster walls in historic homes?", answer: "Yes. We have extensive experience with older Massachusetts homes that have original plaster walls. We match textures and finish surfaces ready for paint without visible patches." },
    { question: "What is skim coating and when do I need it?", answer: "Skim coating is a thin layer of plaster applied over damaged or uneven walls to create a smooth, paint-ready surface. It is ideal when walls have extensive cracking, previous texture removal or multiple layers of old paint." },
  ],
  "carpentry": [
    { question: "Do you install crown molding and trim in Martha's Vineyard?", answer: "Yes. We install interior trim, baseboards, crown molding, door casings and custom built-ins throughout Martha's Vineyard and Cape Cod." },
    { question: "Can you match existing trim on historic homes?", answer: "Yes. We source matching profiles and work carefully to blend new trim with existing millwork on historic homes. We have worked on a number of period properties on Martha's Vineyard." },
  ],
  "fence": [
    { question: "What types of fence do you install in Massachusetts?", answer: "We install wood, vinyl and cedar fences. We also repair existing fences including post replacement, board repair and gate adjustment." },
    { question: "How long does fence installation take?", answer: "A standard residential fence installation takes one to two days. Larger projects or those requiring post-hole digging in rocky soil may take longer. We provide a timeline with your estimate." },
  ],
  "countertop": [
    { question: "Do you remove and dispose of old countertops?", answer: "Yes. Old countertop removal and disposal is included in our countertop installation service. We handle the entire process from removal to final installation and cleanup." },
    { question: "What countertop materials do you install?", answer: "We install laminate, solid surface, butcher block and prefabricated stone countertops. For custom stone such as granite or quartz, we coordinate with local fabricators." },
  ],
  "construction-cleaning": [
    { question: "What is included in post-construction cleaning?", answer: "We remove dust, debris, paint splatter and adhesive residue from all surfaces. We clean windows, wipe down cabinets, clean floors and do a final walk-through to ensure the space is move-in ready." },
    { question: "How soon after construction can you clean?", answer: "We can schedule within one to two days after construction is complete. For large projects, we can stage the cleaning as work is finished in each area." },
  ],
};
