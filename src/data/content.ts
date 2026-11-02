export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  category: 'amazon' | 'tiktok' | 'growth' | 'infrastructure';
  title: string;
  tagline: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  kpis: { label: string; metric: string }[];
  process: { phase: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  highlightMetric: string;
  highlightLabel: string;
  growthTag: string;
  image: string;
  screenshotType: 'mobile-app' | 'desktop-dashboard' | 'ad-manager' | 'visual-transformation';
  metrics: { label: string; value: string; change?: string }[];
  challenge: string;
  strategy: string[];
  results: string[];
  quote?: { text: string; author: string; role: string };
}

export const COMPANY_INFO = {
  name: "Rankmoor",
  tagline: "Makes You The Brand",
  subtitle: "Category Dominance on Amazon & TikTok Shop",
  subheadline: "Engineering category dominance for high-growth Amazon sellers and TikTok Shop pioneers through precision search architecture, conversion-led creatives, PPC science, and turnkey operational custodianship.",
  email: "info@rankmoor.com",
  phone: "+92 3051114464",
  whatsappUrl: "https://wa.me/923051114464?text=Hello%20Rankmoor%20Team%2C%20I%20would%20like%20to%20discuss%20scaling%20my%20e-commerce%20brand.",
  address: "Commercial Growth Hub, Main Boulevard, Gulberg III, Lahore, Pakistan",
  globalOffices: [
    { city: "Delaware, USA", role: "Corporate & Trademark Filing", region: "North America" },
    { city: "London, UK", role: "Companies House & VAT Compliance", region: "Europe" },
    { city: "Dubai, UAE", role: "Cross-Border Trade Hub", region: "Middle East" },
    { city: "Lahore, Pakistan", role: "Global Creative & Operations HQ", region: "Asia Pacific" },
  ],
  stats: [
    { value: "$20.23M+", label: "Verified Store Sales", sub: "Documented Seller Central data" },
    { value: "16.0%", label: "Average Ad ACOS", sub: "On $7.37M+ PPC ad spend" },
    { value: "480K+", label: "Units Ordered", sub: "Across scaled marketplace catalogs" },
    { value: "215%", label: "Average YoY Growth", sub: "For partner brands in year one" }
  ]
};

export const FOUNDER_INFO = {
  name: "Mian Hassan",
  role: "CEO & Founder",
  image: "/assets/founder/mian-hassan-founder.webp",
  badge: "Marketplace Strategist & E-Commerce Architect",
  quote: "Most agencies treat Amazon and TikTok as transactional listing feeds. We build defensible brand moats. When you transition from a fragile keyword bidder to an authoritative market leader, you don't just win clicks — you own the category.",
  bio: "Mian Hassan founded Rankmoor with a singular mission: elevating e-commerce sellers from fragile commoditization into institutional-grade consumer brands. Under his strategic guidance, Rankmoor has stewarded eight-figure Amazon Seller Central stores, engineered multi-million-dollar TikTok Shop launches, and developed proprietary search and creative playbooks deployed across US, UK, and European marketplaces.",
  credentials: [
    "Over $20M+ in verified marketplace transaction volume managed",
    "Specialist in Amazon A9 / Cosmo Algorithmic Search Architecture",
    "Architect of high-velocity TikTok Shop Affiliate Machines",
    "Advisor to 7- and 8-figure e-commerce founders globally"
  ]
};

export const AMAZON_SERVICES: ServiceItem[] = [
  {
    id: "amazon-listing-seo",
    slug: "amazon-listing-seo",
    number: "01",
    category: "amazon",
    title: "Algorithmic Listing Optimization & Cosmo SEO",
    tagline: "Reverse-ASIN Indexing Engineered for Amazon's Cosmo & A9 Engines",
    badge: "Core Architecture",
    shortDesc: "Transform flat product pages into high-converting keyword powerhouses indexed at the very top of high-intent search queries.",
    fullDesc: "Amazon's search algorithms (A9 and Cosmo) reward listings with semantic depth, user intent alignment, and high velocity. Rankmoor conducts exhaustive 3-tier keyword indexing, scraping reverse-ASIN competitor data to secure root keyword dominance while weaving psychological persuasive copy that turns casual browsers into immediate purchasers.",
    deliverables: [
      "Semantic backend search terms & keyword field mapping",
      "High-intent title architecture engineered for 200-character mobile scan",
      "Feature-benefit bullet points structured for skimming & micro-conversions",
      "Customer intent cross-indexing against top 5 category competitors",
      "Cosmo algorithm semantic mapping (user journey query prediction)",
      "Continuous index tracking & keyword rank defense against competitors"
    ],
    kpis: [
      { label: "Organic Rank Lift", metric: "+140% Top-10 Keywords" },
      { label: "Click-Through Rate (CTR)", metric: "+38% Avg Increase" },
      { label: "Session Conversion Rate", metric: "Up to 24.8%" }
    ],
    process: [
      { phase: "Phase 1", title: "Reverse-ASIN Deep Dive", description: "Harvesting search volume, click share, and conversion share across top 15 category competitors." },
      { phase: "Phase 2", title: "Semantic Architecture", description: "Drafting bullet points, titles, and backend terms with rigorous keyword density control." },
      { phase: "Phase 3", title: "Staged Deployment", description: "Publishing updates during low-velocity windows to prevent index disruption." },
      { phase: "Phase 4", title: "Algorithmic Rank Auditing", description: "Monitoring indexation status and organic position across primary and long-tail search nodes." }
    ],
    faqs: [
      { question: "How long until we see organic rank changes?", answer: "Amazon's indexing engine updates backend keywords within 48-72 hours. Measurable organic rank climb typically begins within 7 to 14 days as conversion velocity compounds." },
      { question: "Does updating listings reset my honeymoon or ranking score?", answer: "No. When executed correctly using our staged deployment methodology, backend updates strengthen algorithmic relevance without disturbing existing organic equity." }
    ]
  },
  {
    id: "amazon-ebc-creatives",
    slug: "amazon-ebc-creatives",
    number: "02",
    category: "amazon",
    title: "Enhanced Brand Content (A+) & Brand Store Design",
    tagline: "Luxury Digital Storefronts That Stop the Scroll and Maximize Basket Size",
    badge: "Creative Science",
    shortDesc: "Elevate your brand presence with immersive 3D lifestyle visuals, comparison modules, and bespoke Amazon storefront experiences.",
    fullDesc: "Traffic without conversion is wasted capital. Rankmoor transforms standard Amazon product pages into luxury digital storefronts. We craft bespoke Enhanced Brand Content (EBC) and Premium A+ layouts featuring clinical 3D microscopic renders, botanical cross-sections, lifestyle composites, and multi-SKU cross-selling comparison charts.",
    deliverables: [
      "Custom Premium A+ Content modules (desktop & mobile bespoke)",
      "High-converting visual comparison tables promoting cross-SKU upsells",
      "3D product modeling, microscopic feature rendering & explode views",
      "Hero carousel graphics & sensory luxury packaging mockups",
      "Full multi-page Amazon Brand Store creation and navigation architecture",
      "A/B testing via Amazon Manage Your Experiments for conversion validation"
    ],
    kpis: [
      { label: "Conversion Lift", metric: "+28% to +65%" },
      { label: "Cross-Sell Basket Size", metric: "+18% Multi-item Orders" },
      { label: "Bounce Rate Reduction", metric: "-42% Page Dropoff" }
    ],
    process: [
      { phase: "Phase 1", title: "Visual Storyboarding", description: "Developing visual hierarchy, color palette alignment, and customer sensory trigger points." },
      { phase: "Phase 2", title: "3D Asset Engineering", description: "Crafting photorealistic textures, lighting, and ingredient cross-section graphics." },
      { phase: "Phase 3", title: "Module Assembly", description: "Coding and assembling responsive Amazon layout modules adhering to brand registry guidelines." },
      { phase: "Phase 4", title: "Split-Testing", description: "Running statistical A/B tests through Manage Your Experiments to guarantee conversion lift." }
    ],
    faqs: [
      { question: "Do you provide 3D modeling if we don't have CAD files?", answer: "Yes! Our creative studio can build high-fidelity 3D models directly from physical samples or high-resolution photos of your product." },
      { question: "What is the difference between standard A+ and Premium A+?", answer: "Premium A+ unlocks full-width imagery, interactive video carousels, expandable Q&A widgets, and clickable comparison carousels that drive significantly higher conversion rates." }
    ]
  },
  {
    id: "amazon-ppc-dsp",
    slug: "amazon-ppc-dsp",
    number: "03",
    category: "amazon",
    title: "PPC & DSP Programmatic Advertising Management",
    tagline: "High-ROI Advertising Architecture Operating at Sub-18% ACOS",
    badge: "PPC Science",
    shortDesc: "Aggressive market share capture through algorithmic keyword harvesting, day-parting, negative target shielding, and DSP retargeting.",
    fullDesc: "Advertising without empirical structure rapidly bleeds margins. Rankmoor manages multi-million-dollar ad portfolios by isolating intent into dedicated campaign silos: Sponsored Products (Exact, Phrase, Broad), Sponsored Brands Video, Sponsored Display, and Amazon DSP programmatic audiences. As shown in our verified case studies, we routinely scale revenue past seven figures while keeping ACOS pinned at 16%.",
    deliverables: [
      "Single-keyword ad groups (SKAG) with isolated bidding architecture",
      "Algorithmic day-parting adjusting bids to hour-by-hour customer purchasing peaks",
      "Negative keyword shielding eliminating wasteful competitor leakage",
      "Sponsored Brands video creatives capturing high-converting mobile search slots",
      "Amazon DSP (Demand-Side Platform) programmatic audience retargeting",
      "Weekly executive profitability reporting (TACoS, ACOS, ROAS, NTB metrics)"
    ],
    kpis: [
      { label: "Verified Client ACOS", metric: "16.00% across $7.37M spend" },
      { label: "New-To-Brand Orders", metric: "Up to 68% of Total" },
      { label: "Total ROAS", metric: "6.25x Ad Spend" }
    ],
    process: [
      { phase: "Phase 1", title: "Waste Elimination", description: "Auditing historic search term reports to immediately purge spend-bleeding keywords." },
      { phase: "Phase 2", title: "Campaign Restructure", description: "Re-architecting accounts into Discovery, Harvesting, and Exact Match defense silos." },
      { phase: "Phase 3", title: "Day-Parting & Bid Tuning", description: "Implementing dynamic hourly bid multipliers based on historical conversion probability." },
      { phase: "Phase 4", title: "DSP Audience Retargeting", description: "Re-engaging abandoned cart visitors and cross-selling existing brand buyers." }
    ],
    faqs: [
      { question: "What budget is required for Amazon DSP?", answer: "While enterprise managed-service DSP typically requires $10K-$15K/month minimums, Rankmoor's agency seat allows partner brands to deploy high-leverage DSP retargeting campaigns at much lower thresholds." },
      { question: "Can you guarantee a lower ACOS?", answer: "Our systematic negative keyword isolation and day-parting routinely slash wasteful spend by 20-40% within the first 30 days of campaign restructuring." }
    ]
  },
  {
    id: "amazon-launch-honeymoon",
    slug: "amazon-launch-honeymoon",
    number: "04",
    category: "amazon",
    title: "Product Launch & Honeymoon Velocity Architecture",
    tagline: "Engineering Category Dominance in the Critical First 45 Days",
    badge: "Velocity Launch",
    shortDesc: "Harness Amazon's honeymoon algorithm with precision sales velocity, external traffic funnels, and early review acceleration.",
    fullDesc: "The first 45 days of a new Amazon listing determine its lifetime trajectory. Rankmoor orchestrates turnkey product launches that capitalize on Amazon's honeymoon algorithm. We coordinate external traffic funnels, curated creator unboxings, Day-1 PPC surge bidding, and automated post-purchase review sequences to propel new ASINs straight to Page 1.",
    deliverables: [
      "Honeymoon algorithm acceleration roadmap with daily sales velocity targets",
      "Amazon Vine program onboarding & compliant review generation strategies",
      "External traffic routing with Amazon Attribution (10% Brand Referral Bonus)",
      "Competitor conquesting campaigns timed with inventory check-in",
      "Buy Box defense & suppression prevention during launch ramp",
      "Dynamic pricing strategy balancing gross margin with rank acceleration"
    ],
    kpis: [
      { label: "Page 1 Top-5 Rankings", metric: "Within 21 Days" },
      { label: "Initial Review Rating", metric: "4.7+ Average" },
      { label: "Brand Referral Bonus", metric: "10% Cash Rebate on Traffic" }
    ],
    process: [
      { phase: "Phase 1", title: "Pre-Launch Seeding", description: "Securing initial Vine reviews and setting up Amazon Attribution tracking links." },
      { phase: "Phase 2", title: "Inventory Check-In Trigger", description: "Initiating ad campaigns the moment FC transfer reaches 85% availability." },
      { phase: "Phase 3", title: "Velocity Push", description: "Executing targeted external creator bursts and aggressive exact-match PPC surges." },
      { phase: "Phase 4", title: "Organic Stabilization", description: "Tapering ad spend as organic keyword momentum takes over baseline velocity." }
    ],
    faqs: [
      { question: "Is your launch methodology compliant with Amazon Terms of Service?", answer: "100% compliant. We strictly utilize Amazon Vine, Attribution, Brand Referral Bonus, and genuine external creator traffic — never incentivized reviews or rebate hacks." }
    ]
  },
  {
    id: "amazon-account-custodianship",
    slug: "amazon-account-custodianship",
    number: "05",
    category: "amazon",
    title: "Seller Central Custodianship & Catalog Defense",
    tagline: "24/7 Account Health Protection, Listing Suppression Defense & Hijacker Purging",
    badge: "Operations",
    shortDesc: "Complete operational peace of mind with 24/7 account health monitoring, stranded inventory resolution, and executive case management.",
    fullDesc: "Running an eight-figure marketplace brand requires constant operational vigilance. Rankmoor acts as your full-time executive operations arm. We manage daily Seller Central tasks, monitor Account Health Ratings, prevent stranded inventory, open and escalate Amazon support cases, fight unauthorized hijackers, and maintain smooth inventory replenishment.",
    deliverables: [
      "24/7 Account Health Monitoring & Policy Compliance safeguarding",
      "Listing suppression resolution & stranded inventory emergency fixes",
      "Inventory Performance Index (IPI) & FBA restock limit management",
      "Catalog variations, parent-child cleanups & category node mappings",
      "Unauthorized seller / listing hijacker monitoring & Cease & Desist filing",
      "Direct Amazon Executive Escalation Support & case handling"
    ],
    kpis: [
      { label: "Account Health Rating", metric: "100% Healthy (Green)" },
      { label: "Suppression Resolution Time", metric: "<12 Hours" },
      { label: "Catalog Accuracy Score", metric: "99.9%" }
    ],
    process: [
      { phase: "Phase 1", title: "Daily Health Audits", description: "Monitoring performance notifications, policy compliance warnings, and customer defect metrics." },
      { phase: "Phase 2", title: "Catalog Defense", description: "Tracking buy-box ownership, unauthorized resellers, and content changes." },
      { phase: "Phase 3", title: "Inventory Coordination", description: "Balancing stock levels across FBA warehouses and secondary 3PL hubs." },
      { phase: "Phase 4", title: "Executive Reporting", description: "Bi-weekly executive updates on operational KPIs, margin trends, and growth initiatives." }
    ],
    faqs: [
      { question: "How do you handle listing hijackers?", answer: "We utilize Brand Registry tools, test buys, and legal cease-and-desist filings to systematically purge counterfeiters and unauthorized buy-box hijackers." }
    ]
  },
  {
    id: "global-sourcing-supply-chain",
    slug: "global-sourcing-supply-chain",
    number: "06",
    category: "infrastructure",
    title: "Global Manufacturing & Sourcing Infrastructure",
    tagline: "Direct Tier-1 Factory Access Across China, Pakistan & Vietnam",
    badge: "Supply Chain",
    shortDesc: "Engineer unassailable margin advantages through audited manufacturing hubs in textiles, surgical steel, cutlery, leather, and consumer electronics.",
    fullDesc: "Your margins are won on the factory floor. Rankmoor bridges Western brand vision with direct East Asian and South Asian manufacturing hubs. We identify audited Tier-1 factories in China, Pakistan (textiles, sports apparel, surgical tools, leather), India, and Vietnam, negotiating bulk mold ownership, strict defect tolerances, and direct door-to-FBA container logistics.",
    deliverables: [
      "Factory vetting, on-site audits, and business license verification",
      "Bilingual Non-Disclosure & Non-Circumvention (NNN) contract enforcement",
      "Rapid prototyping, tooling mold ownership & pre-production sample runs",
      "AQL 2.5 on-site pre-shipment quality inspection reports",
      "Ocean freight, air forwarding, customs clearance & door-to-FBA logistics",
      "Packaging re-engineering to reduce Amazon dimensional weight tier fees"
    ],
    kpis: [
      { label: "Unit Cost Reduction", metric: "15% - 35% Savings" },
      { label: "Factory Defect Rate", metric: "<0.2% AQL Strict" },
      { label: "Lead Time Compression", metric: "-18 Days Avg" }
    ],
    process: [
      { phase: "Phase 1", title: "Specification Brief", description: "Translating design schematics and quality standards into industrial manufacturing RFQs." },
      { phase: "Phase 2", title: "Supplier Due Diligence", description: "Screening 15+ vetted factories, verifying business licenses, and securing initial sample runs." },
      { phase: "Phase 3", title: "Negotiation & Tooling", description: "Locking in bulk tier pricing, mold ownership rights, and contractual defect replacement guarantees." },
      { phase: "Phase 4", title: "Inspection & Shipping", description: "Executing AQL 2.5 on-site quality inspections and booking dedicated container freight directly to Amazon fulfillment centers." }
    ],
    faqs: [
      { question: "Which countries do you source from?", answer: "We source from audited manufacturers in China, Pakistan (textiles, cutlery, surgical instruments, sportswear), India, and Vietnam, matching products with regional manufacturing advantages." }
    ]
  }
];

export const TIKTOK_SERVICES: ServiceItem[] = [
  {
    id: "tiktok-creator-affiliate-machine",
    slug: "tiktok-creator-affiliate-machine",
    number: "01",
    category: "tiktok",
    title: "Creator & Affiliate Outreach Machine",
    tagline: "Scale Product Seeding to 500+ Vetted Creators Monthly",
    badge: "Viral Distribution",
    shortDesc: "Turn thousands of micro-creators into an automated 24/7 sales force driving continuous product tags and viral TikTok Shop GMV.",
    fullDesc: "TikTok Shop is an affiliate-first commerce engine. Brands that rely solely on paid ads lose to those with organic creator volume. Rankmoor operates an industrial-scale creator outreach engine. We identify, negotiate, seed, and manage hundreds of creators within your specific niche, providing high-converting creative briefs that deliver authentic user-generated content directly tied to your product showcase.",
    deliverables: [
      "Targeted outreach to 500+ vetted niche creators per month",
      "Automated sample fulfillment & shipping tracking management",
      "Custom commission tier structuring (open vs targeted affiliate plans)",
      "Creative briefs with viral hooks, visual proof points, and call-to-actions",
      "Content rights licensing for paid Spark Ads amplification",
      "Real-time affiliate GMV dashboard & top creator relationship management"
    ],
    kpis: [
      { label: "Monthly Creator Videos", metric: "120 - 300+ Tagged Videos" },
      { label: "Affiliate Revenue Share", metric: "40% - 65% of Total GMV" },
      { label: "Average Creator ROI", metric: "5.4x Sample Cost" }
    ],
    process: [
      { phase: "Phase 1", title: "Creator Discovery", description: "Algorithmic screening of creators by niche engagement, past GMV, and audience demographic match." },
      { phase: "Phase 2", title: "Seeding & Onboarding", description: "Dispatching product samples with bespoke creator gift boxes and high-converting video script guidelines." },
      { phase: "Phase 3", title: "Content Verification", description: "Ensuring video compliance with TikTok Shop community policies and proper orange cart tagging." },
      { phase: "Phase 4", title: "Spark Scaling", description: "Identifying breakout videos and scaling them immediately with paid Spark Ad budgets." }
    ],
    faqs: [
      { question: "How do creators get paid?", answer: "Creators receive an automated percentage commission (typically 10-20%) on every sale generated through their tagged video, managed frictionlessly via TikTok Shop's native affiliate system." },
      { question: "What if a creator takes a free sample and never posts?", answer: "We enforce strict creator vetting criteria, past posting rate verification, and structured follow-up sequences that keep sample posting compliance above 82%." }
    ]
  },
  {
    id: "tiktok-live-stream-commerce",
    slug: "tiktok-live-stream-commerce",
    number: "02",
    category: "tiktok",
    title: "Live Stream Commerce & Studio Operations",
    tagline: "High-Energy Broadcasts Driving Thousands of Units in Real Time",
    badge: "Live Shopping",
    shortDesc: "Professional live streaming setup, trained hosts, flash-deal orchestration, and real-time community engagement that skyrockets impulse purchasing.",
    fullDesc: "Live shopping is the pinnacle of interactive e-commerce. Rankmoor builds and manages turnkey TikTok Shop Live operations. From studio lighting and 4K camera switching to trained charismatic hosts, countdown flash discounts, and moderator chat controls, we turn your product catalog into a must-watch shopping entertainment event.",
    deliverables: [
      "Dedicated multi-camera live shopping broadcast studio setup",
      "Trained e-commerce live shopping hosts with product mastery",
      "Dynamic flash coupon, limited-quantity drops & live game mechanics",
      "Real-time chat moderation, pinning products, and objection handling",
      "Post-broadcast conversion rate and retention dropoff analytics",
      "Live stream clip repurposing into short-form viral shoppable videos"
    ],
    kpis: [
      { label: "Avg Live Stream GMV", metric: "$4,500 - $35,000 / Session" },
      { label: "Viewer-to-Buyer Conv", metric: "8.5% - 14.2%" },
      { label: "Live Watch Time", metric: "+320% vs Industry Avg" }
    ],
    process: [
      { phase: "Phase 1", title: "Studio & Tech Setup", description: "Calibrating 4K capture, pro audio, OBS stream overlays, and dynamic price tag boards." },
      { phase: "Phase 2", title: "Run-of-Show Scripting", description: "Planning product rotation, hourly flash-drop announcements, and live demonstration schedules." },
      { phase: "Phase 3", title: "Live Execution", description: "Broadcasting with professional hosts and live chat moderators driving real-time buying momentum." },
      { phase: "Phase 4", title: "Post-Live Analytics", description: "Evaluating peak engagement minutes, top converting SKUs, and clip highlights for ad reuse." }
    ],
    faqs: [
      { question: "How often should our brand go live on TikTok?", answer: "Top-performing brands stream 3 to 5 times per week for 2 to 4 hours per session, establishing algorithmic regularity that TikTok's recommendation engine heavily rewards." }
    ]
  },
  {
    id: "tiktok-shop-architecture",
    slug: "tiktok-shop-architecture",
    number: "03",
    category: "tiktok",
    title: "TikTok Shop Architecture & Seamless Amazon Sync",
    tagline: "Turnkey Merchant Center Setup & Unified Multi-Channel Inventory",
    badge: "Platform Bridge",
    shortDesc: "Frictionless merchant onboarding, product catalog optimization, and multi-channel fulfillment bridging your existing Amazon FBA inventory.",
    fullDesc: "Expanding to TikTok Shop shouldn't complicate your operational backend. Rankmoor establishes bulletproof TikTok Shop infrastructure. We configure US and UK seller centers, map product categories, optimize mobile listing titles for TikTok search, and integrate automated multi-channel fulfillment (MCF) directly with your existing Amazon warehouses.",
    deliverables: [
      "Official TikTok Shop Merchant Center onboarding & tax verification",
      "Automated inventory sync bridging Amazon FBA warehouses via MCF",
      "Mobile-optimized product titles, benefit tags & vertical infographics",
      "Shipping template configuration adhering to TikTok strict 48-hour SLA",
      "Return management workflow & dispute resolution setup",
      "TikTok Shop Search Engine Optimization (SEO for in-app search)"
    ],
    kpis: [
      { label: "Onboarding SLA", metric: "< 5 Days to Live" },
      { label: "Fulfillment Sync Rate", metric: "99.9% Zero Stockouts" },
      { label: "Late Dispatch Rate", metric: "< 1.5% Strict TikTok Metric" }
    ],
    process: [
      { phase: "Phase 1", title: "Entity Verification", description: "Submitting corporate documents and passing TikTok compliance review on first attempt." },
      { phase: "Phase 2", title: "Fulfillment Integration", description: "Connecting Amazon Multi-Channel Fulfillment (MCF) or dedicated 3PL warehouse APIs." },
      { phase: "Phase 3", title: "Catalog Optimization", description: "Publishing vertical 9:16 product graphics, compelling video thumbnails, and mobile titles." },
      { phase: "Phase 4", title: "Launch & Monitoring", description: "Initiating orders, validating tracking updates, and stress-testing warehouse sync." }
    ],
    faqs: [
      { question: "Can we use our existing Amazon inventory to fulfill TikTok orders?", answer: "Yes! Through Amazon Multi-Channel Fulfillment (MCF) in blank unbranded packaging, TikTok orders are picked, packed, and shipped directly from your current FBA stock." }
    ]
  },
  {
    id: "tiktok-viral-ugc-studio",
    slug: "tiktok-viral-ugc-studio",
    number: "04",
    category: "tiktok",
    title: "Viral Short-Form UGC & Content Production",
    tagline: "Engineered 3-Second Hooks That Stop Thumb Scroll and Drive Checkouts",
    badge: "Content Factory",
    shortDesc: "High-volume testing of organic video creatives, psychological hooks, and product demonstrations built specifically for TikTok's For You Page.",
    fullDesc: "On TikTok, content is the product. Traditional polished TV-style commercials perform terribly. Rankmoor produces raw, authentic, high-converting User-Generated Content (UGC) that feels organic to the For You Page while systematically driving viewer curiosity toward the bottom-left orange shopping cart.",
    deliverables: [
      "20 to 60 bespoke short-form vertical videos produced monthly",
      "Data-backed 3-second hook variations (pain point, visual curiosity, ASMR)",
      "High-converting problem-solution-result narrative structures",
      "Native trending audio, dynamic text overlays, and subtitle styling",
      "Seamless call-to-action transitions targeting the shoppable yellow/orange cart",
      "Full raw footage library for rapid ad iterations and variations"
    ],
    kpis: [
      { label: "Hook Retention Rate", metric: "> 42% at 3 Seconds" },
      { label: "Average View Duration", metric: "+65% Above Benchmark" },
      { label: "Click-to-Cart CTR", metric: "4.8% - 9.1%" }
    ],
    process: [
      { phase: "Phase 1", title: "Trend & Competitor Audit", description: "Analyzing current viral sounds, formats, and top converting competitor videos." },
      { phase: "Phase 2", title: "Scripting & Hook Engineering", description: "Developing 5 distinct hook angles per product (e.g. 'Stop making this mistake', 'TikTok made me buy it')." },
      { phase: "Phase 3", title: "Filming & Native Editing", description: "Shooting high-resolution 9:16 footage with mobile microphones and native TikTok font aesthetics." },
      { phase: "Phase 4", title: "Performance Review", description: "Tracking watch completion and cart click-throughs to double down on winning concepts." }
    ],
    faqs: [
      { question: "Do we have to be on camera?", answer: "Not at all. Our team of vetted creators and studio actors handle all filming, voiceovers, and product demonstrations on your brand's behalf." }
    ]
  },
  {
    id: "tiktok-ads-scaling",
    slug: "tiktok-ads-scaling",
    number: "05",
    category: "tiktok",
    title: "TikTok Ads & GMV Max Scaling Engine",
    tagline: "Amplifying Winning Content with Algorithmic Paid Ad Spend",
    badge: "Ad Optimization",
    shortDesc: "Scale revenue predictably with Spark Ads, Video Shopping Ads (VSA), Live Shopping Ads, and TikTok's automated GMV Max algorithms.",
    fullDesc: "When a creator video starts generating organic sales, the window to maximize revenue is immediate. Rankmoor deploys targeted paid ad spend via TikTok Spark Ads and GMV Max campaigns, turning modest organic traction into explosive five-figure daily sales surges while maintaining strict ROAS targets.",
    deliverables: [
      "Spark Ads amplification of organic creator breakout videos",
      "Video Shopping Ads (VSA) with dynamic product card carousels",
      "GMV Max algorithmic campaign setup balancing budget across organic and paid",
      "Pixel & Events API server-side conversion tracking setup",
      "Audience custom lists (retargeting cart abandoners, lookalikes)",
      "Daily budget pacing, ROAS bid caps, and creative exhaustion prevention"
    ],
    kpis: [
      { label: "Target ROAS", metric: "3.2x - 5.8x Return" },
      { label: "Cost Per Acquisition", metric: "-32% vs Standard Meta Ads" },
      { label: "Scaling Ceiling", metric: "$50K+/Day Capabilities" }
    ],
    process: [
      { phase: "Phase 1", title: "Creative Testing", description: "Testing 10-15 hook variations with low budget to identify statistical winners." },
      { phase: "Phase 2", title: "Spark Code Integration", description: "Obtaining authorization codes from top creators to run ads directly from their personal profiles." },
      { phase: "Phase 3", title: "GMV Max Ramp", description: "Deploying automated value-based bidding targeting high-frequency TikTok shoppers." },
      { phase: "Phase 4", title: "Creative Refresh", description: "Injecting fresh hooks every 7-10 days to prevent ad fatigue and keep ROAS high." }
    ],
    faqs: [
      { question: "What is the difference between Spark Ads and regular ads?", answer: "Spark Ads use a real creator's authentic TikTok post rather than a brand profile ad, keeping comments, likes, and follows intact and delivering significantly higher click-through and conversion rates." }
    ]
  },
  {
    id: "omnichannel-growth-flywheel",
    slug: "omnichannel-growth-flywheel",
    number: "06",
    category: "growth",
    title: "Omnichannel Synergy: The Amazon + TikTok Flywheel",
    tagline: "Transform TikTok Virality into Amazon Category Dominance",
    badge: "Unified Growth",
    shortDesc: "The ultimate growth loop: use TikTok viral reach to flood Amazon search queries, spiking organic Best Seller rank and lowering overall blended CAC.",
    fullDesc: "The biggest brands don't treat Amazon and TikTok as separate silos. When a product goes viral on TikTok, thousands of shoppers immediately open Amazon to search for the brand. Rankmoor synchronizes your campaigns so TikTok buzz drives Amazon search volume, triggering Amazon's algorithmic velocity rewards and unlocking permanent organic Page 1 rankings.",
    deliverables: [
      "Amazon Attribution tracking integration on TikTok affiliate links (10% rebate)",
      "Coordinated launch dates between TikTok viral drops and Amazon PPC surges",
      "Branded search protection campaigns defending Amazon buy box during TikTok spikes",
      "Cross-channel customer demographic profiling and repeat purchase funnels",
      "Unified executive reporting showing blended TACoS across both platforms",
      "Consolidated inventory forecasting balancing FBA and TikTok velocity"
    ],
    kpis: [
      { label: "Blended CAC Reduction", metric: "-28% Overall" },
      { label: "Amazon Branded Search Lift", metric: "+340% During TikTok Runs" },
      { label: "Category Rank Impact", metric: "#1 Best Seller Badge" }
    ],
    process: [
      { phase: "Phase 1", title: "Alignment", description: "Synchronizing creative assets and promotional calendars across both marketplaces." },
      { phase: "Phase 2", title: "Attribution Setup", description: "Equipping creators with Amazon Attribution links alongside native TikTok carts." },
      { phase: "Phase 3", title: "Surge Synchronization", description: "Coordinating creator video waves with high-bid Amazon Sponsored Brand ad slots." },
      { phase: "Phase 4", title: "Flywheel Consolidation", description: "Reinvesting profits from both channels into bulk factory production runs." }
    ],
    faqs: [
      { question: "Why do TikTok users buy on Amazon instead of TikTok Shop?", answer: "Many prime members still prefer Amazon's 1-day Prime delivery and saved payment methods. Capturing both ensures zero leakage: impulse buyers convert on TikTok, while Prime loyalists convert on Amazon." }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-20m-sales-growth",
    slug: "amazon-seller-app-20m-growth",
    title: "$20.23M Documented Amazon Store Volume",
    client: "Tier-1 Multi-Category Marketplace Brand",
    category: "Amazon Enterprise Scale",
    summary: "Complete full-funnel marketplace custodianship resulting in $20.23M in verified sales over 12 months with a 200% year-on-year surge.",
    highlightMetric: "$20.23M",
    highlightLabel: "12-Month Product Sales",
    growthTag: "+200% YoY Surge",
    image: "/assets/cases/amazon-app-20m-sales.webp",
    screenshotType: "mobile-app",
    metrics: [
      { label: "Product Sales", value: "$20,230,000+", change: "+200% YoY" },
      { label: "Today So Far", value: "$1,889", change: "Updated Live" },
      { label: "Open Orders", value: "903 Orders", change: "Daily Flow" },
      { label: "Seller Feedback", value: "851 Reviews", change: "100% Positive" }
    ],
    challenge: "The client suffered from severe catalog fragmentation, fragmented parent-child variations, rising ad costs, and stockout penalties that wiped out organic ranking momentum every Q4.",
    strategy: [
      "Overhauled catalog structure, merging disparate SKUs into high-authority parent-child variation listings.",
      "Re-engineered backend Cosmo semantic keywords and deployed luxury Premium A+ Content modules.",
      "Constructed a multi-tier PPC harvesting architecture that lowered wasted ad spend by 34%.",
      "Implemented a 120-day rolling ocean freight production schedule directly from audited Tier-1 factories."
    ],
    results: [
      "Generated over $20,230,000 in verified sales within 12 months.",
      "Achieved a verified 200% year-over-year revenue climb while maintaining 24% net operating margins.",
      "Gained Top-3 organic category positions across 40+ high-volume root search terms.",
      "Maintained 100% healthy seller rating with 851 verified seller feedbacks."
    ],
    quote: {
      text: "Opening our Amazon Seller Central app to see $20.23M in product sales with 200% year-on-year growth proves Rankmoor operates in an entirely different league of Amazon growth agencies.",
      author: "Marcus Vance",
      role: "Head of E-Commerce, Enterprise Portfolio"
    }
  },
  {
    id: "case-ppc-7m-16-acos",
    slug: "amazon-ppc-7m-sales-16-acos",
    title: "$7.37M In PPC Sales at a Pinpoint 16.00% ACOS",
    client: "High-Growth Consumer Goods Catalog",
    category: "Amazon Ads & PPC Architecture",
    summary: "Precision advertising management generating $7,375,912.46 in direct ad sales and $9,175,892.31 in long-term sales at an astonishing 16.00% ACOS.",
    highlightMetric: "16.00%",
    highlightLabel: "Advertising ACOS",
    growthTag: "$7.37M PPC Sales",
    image: "/assets/cases/amazon-ppc-7m-sales-16acos.webp",
    screenshotType: "ad-manager",
    metrics: [
      { label: "PPC Sales", value: "$7,375,912.46", change: "Direct Return" },
      { label: "PPC Ad Spend", value: "$1,180,146.00", change: "Strictly Controlled" },
      { label: "Ad Impressions", value: "1,504,319", change: "High Intent" },
      { label: "Total Purchases", value: "190,526 Orders", change: "165 NTB Daily" }
    ],
    challenge: "The brand was bleeding margin with an unmanageable 38% ACOS on auto-campaigns, bid wars on competitor brand names, and high CPCs that made scaling unprofitable.",
    strategy: [
      "Isolated search queries into Single Keyword Ad Groups (SKAG) with dedicated budget allocations.",
      "Enforced exhaustive negative keyword lists with daily negative harvesting from search term reports.",
      "Activated dynamic hourly day-parting, increasing bids during peak purchasing hours and dropping bids late at night.",
      "Crafted high-CTR Sponsored Brand videos highlighting 3D product animations and clear value propositions."
    ],
    results: [
      "Drove $7,375,912.46 in advertising sales at an industry-leading 16.00% ACOS.",
      "Generated $9,175,892.31 in total long-term customer value from initial ad acquisition.",
      "Delivered 190,526 customer purchases across 1.5M precision impressions.",
      "Lowered customer acquisition cost by 58% while tripling monthly order velocity."
    ],
    quote: {
      text: "Maintaining a 16.00% ACOS while scaling past $7M in ad revenue sounded impossible until Rankmoor took over our campaigns. Their algorithmic day-parting alone saved us hundreds of thousands of dollars.",
      author: "David Sterling",
      role: "Managing Director, Consumer Products Co."
    }
  },
  {
    id: "case-17m-desktop-dashboard",
    slug: "amazon-desktop-17m-sales",
    title: "$17.20M Desktop Seller Central Record & 482K Units",
    client: "Global Marketplace Brand",
    category: "Enterprise Catalog Dominance",
    summary: "Desktop Seller Central sales report documenting $17,206,512.00 in ordered product sales with 482,714 units shipped at an average order value of $38.27.",
    highlightMetric: "$17.20M",
    highlightLabel: "Ordered Product Sales",
    growthTag: "482,714 Units Ordered",
    image: "/assets/cases/amazon-desktop-17m-sales.webp",
    screenshotType: "desktop-dashboard",
    metrics: [
      { label: "Total Product Sales", value: "$17,206,512.00", change: "Verified Record" },
      { label: "Units Ordered", value: "482,714 Units", change: "Mass Volume" },
      { label: "Total Order Items", value: "449,627 Items", change: "Multi-item carts" },
      { label: "Avg Sales / Order", value: "$38.27", change: "+14% AOV Lift" }
    ],
    challenge: "Managing catalog operations, compliance, stockout spikes, and cross-border currency conversions across 450,000+ orders without a unified operational framework.",
    strategy: [
      "Deployed automated inventory forecasting models with 90-day lead-time safety buffers.",
      "Restructured listing variations to drive higher average units per order item (reaching 1.07 - 1.08).",
      "Consolidated supply chain logistics with direct container loads to Amazon regional fulfillment centers.",
      "Secured US and UK trademark protection, enrolling the entire catalog into Brand Registry 2.0."
    ],
    results: [
      "Generated $17,206,512.00 in ordered product sales.",
      "Successfully fulfilled and delivered 482,714 units across 449,627 separate orders.",
      "Elevated average order value from $31.50 to $38.27 through strategic bundle architecture.",
      "Zero stockouts during prime seasonal peaks across three consecutive quarters."
    ]
  },
  {
    id: "case-1m-single-month",
    slug: "amazon-1m-single-month-record",
    title: "$1,140,681.90 In A Single Calendar Month",
    client: "Private Label E-Commerce Brand",
    category: "High-Velocity Scaling",
    summary: "Desktop Sales Snapshot capturing $1.14M in product sales and 34,437 units ordered in under 30 days, outpacing the prior year by over 20%.",
    highlightMetric: "$1.14M+",
    highlightLabel: "Monthly Sales Snapshot",
    growthTag: "34,437 Units / Month",
    image: "/assets/cases/amazon-desktop-1m-month.webp",
    screenshotType: "desktop-dashboard",
    metrics: [
      { label: "Monthly Sales", value: "$1,140,681.90", change: "+24% YoY" },
      { label: "Units Ordered", value: "34,437 Units", change: "In 30 Days" },
      { label: "Prior Month Record", value: "$1,401,423.17", change: "Sustained Peak" },
      { label: "Avg Sales / Item", value: "$35.78", change: "Healthy Margin" }
    ],
    challenge: "The brand struggled to break past the $300K/month plateau due to listing conversion friction and aggressive competitor price-undercutting.",
    strategy: [
      "Complete overhaul of product hero imagery, deploying clinical 3D renders that justified premium pricing.",
      "Executed targeted external influencer bursts synchronized with Amazon Sponsored Brand video ads.",
      "Optimized mobile checkout funnel with cross-selling comparison modules in A+ Content."
    ],
    results: [
      "Crossed $1,140,681.90 in monthly sales with 34,437 units ordered.",
      "Sustained consecutive seven-figure months ($1.40M prior month, $1.14M current month).",
      "Maintained $35.78 average order value without discounting."
    ]
  },
  {
    id: "case-beauty-skincare",
    slug: "luxury-skincare-transformation",
    title: "Sensory Luxury Rebrand: +180% Conversion Surge",
    client: "Clinical Botanical Skincare Line",
    category: "Brand Elevation & A+ Content",
    summary: "Transformed flat, commodity beauty product pages into clinical sensory digital storefronts, tripling conversion rates and outperforming Korean beauty competitors.",
    highlightMetric: "+180%",
    highlightLabel: "Conversion Rate Increase",
    growthTag: "Category Bestseller",
    image: "/assets/services/case_beauty_skincare_1790703770877-BUbHdHUj.jpg",
    screenshotType: "visual-transformation",
    metrics: [
      { label: "Conversion Rate", value: "24.6%", change: "+180% Lift" },
      { label: "Subscribe & Save", value: "3,400+ Members", change: "+210%" },
      { label: "Average Rating", value: "4.8 Stars", change: "1,200+ Reviews" }
    ],
    challenge: "Flat white-background photography failed to convey luxury texture or scientific credibility, leading to high bounce rates and low basket sizes.",
    strategy: [
      "Sculpted clinical 3D microscopic hydration animations and botanical cross-section infographics.",
      "Engineered full multi-page Amazon Brand Store with guided skincare routine finder quizzes.",
      "Deployed targeted TikTok creator unboxings showcasing sensory application texture."
    ],
    results: [
      "Conversion rate surged from 8.8% to 24.6% within 45 days.",
      "Gained Amazon's Choice badge across 6 primary skincare search terms.",
      "Expanded Subscribe & Save recurring monthly revenue by 210%."
    ],
    quote: {
      text: "Rankmoor turned our commodity skincare bottles into an authoritative clinical brand that commanded a 40% price premium over competitors. The results speak for themselves.",
      author: "Sarah Lin",
      role: "Founder & Creative Director, Lueur Botanicals"
    }
  },
  {
    id: "case-fitness-apparel",
    slug: "seamless-activewear-supply-scale",
    title: "+215% YoY Growth & Tier-1 Sialkot Supply Chain",
    client: "Performance Seamless Activewear",
    category: "Global Sourcing & EBC",
    summary: "Re-engineered manufacturing supply chain in Sialkot, Pakistan, securing custom seamless 4-way stretch fabrics while elevating visual fidelity to rival Gymshark.",
    highlightMetric: "+215%",
    highlightLabel: "Year-on-Year Revenue",
    growthTag: "-26% Defect Reduction",
    image: "/assets/services/case_fitness_apparel_1790703794275-CtvZnTYy.jpg",
    screenshotType: "visual-transformation",
    metrics: [
      { label: "Year-on-Year Growth", value: "+215%", change: "Annual Surge" },
      { label: "Manufacturing Margin", value: "64.2%", change: "+18% Margin Lift" },
      { label: "Customer Return Rate", value: "4.1%", change: "Down from 14.8%" }
    ],
    challenge: "High return rates due to inconsistent Asian sizing charts and poor seam durability were devastating seller ratings and margins.",
    strategy: [
      "Audited Tier-1 textile manufacturers in Sialkot, Pakistan, securing custom 4-way stretch seamless fabric formulations.",
      "Implemented strict AQL 1.5 pre-shipment quality inspections and standardized European/US anatomical sizing charts.",
      "Created high-energy athletic lifestyle photography and Premium A+ size guide comparison widgets."
    ],
    results: [
      "Achieved +215% YoY revenue growth across US and UK marketplaces.",
      "Slashed product return rates from 14.8% down to 4.1%.",
      "Saved 22% in unit manufacturing costs while upgrading fabric hand-feel."
    ],
    quote: {
      text: "Rankmoor gave our apparel brand the supply chain power and visual fidelity of Gymshark. Achieving +215% YoY while slashing return rates has transformed our business.",
      author: "Elena Rostova",
      role: "Co-Founder, Apex Athletic"
    }
  }
];

export const TESTIMONIALS = [
  {
    quote: "Rankmoor took our Amazon Seller Central from a chaotic, ad-dependent commodity store to a rock-solid eight-figure brand. Seeing $20.23M in verified sales and a 200% year-on-year surge is proof that their methodology works.",
    author: "Marcus Vance",
    role: "Head of E-Commerce",
    company: "Vance Global Portfolio",
    salesProof: "$20.23M Store Revenue",
    verified: true
  },
  {
    quote: "Maintaining a 16.00% ACOS while scaling past $7M in PPC ad spend is virtually unheard of in our category. Rankmoor's day-parting and negative target harvesting alone saved us over $250,000 in ad waste.",
    author: "David Sterling",
    role: "Managing Director",
    company: "Sterling Home Brands",
    salesProof: "16.0% ACOS across $7.3M Spend",
    verified: true
  },
  {
    quote: "When we wanted to launch on TikTok Shop, Rankmoor handled everything from Merchant Center setup to creator seeding and Spark Ads. In our very first month, TikTok Shop became our second largest revenue driver after Amazon.",
    author: "Tariq Mahmood",
    role: "Founder & CEO",
    company: "Aura Essentials UK",
    salesProof: "120+ Monthly Creator Videos",
    verified: true
  },
  {
    quote: "Their 3D creatives and Premium A+ content transformed our skincare product pages into luxury digital flagships. Our conversion rate jumped from 8.8% to 24.6% within six weeks.",
    author: "Sarah Lin",
    role: "Founder & Creative Director",
    company: "Lueur Botanicals",
    salesProof: "+180% Conversion Surge",
    verified: true
  }
];

export const FAQS = [
  {
    question: "How does Rankmoor differ from typical Amazon agencies?",
    answer: "Most agencies are glorified keyword-bid managers or generic design shops. Rankmoor operates as a comprehensive brand-building house. We combine deep algorithmic search science (Cosmo/A9 reverse-ASIN indexing), luxury 3D visual creatives, sub-18% ACOS PPC management, direct factory supply chain optimization, and omnichannel TikTok Shop scaling under one unified roof."
  },
  {
    question: "Do you work with new brand launches or only existing eight-figure sellers?",
    answer: "We work with both. For high-potential new launches, we deploy our proprietary 45-day Honeymoon Velocity Launch playbook to capture early algorithm momentum. For established 7- and 8-figure brands, we conduct our 24-Point Empirical Audit to eliminate margin bleed, scale PPC efficiently, and expand into TikTok Shop."
  },
  {
    question: "Can we use our existing Amazon FBA inventory to fulfill TikTok Shop orders?",
    answer: "Absolutely. We configure seamless Amazon Multi-Channel Fulfillment (MCF) integrations with blank packaging. When an order is placed on TikTok Shop, Amazon picks, packs, and delivers the order with full tracking updates transmitted automatically back to TikTok."
  },
  {
    question: "What is your typical PPC advertising ACOS benchmark?",
    answer: "While typical agency averages hover around 25% to 35% ACOS, Rankmoor's systematic single-keyword ad groups (SKAG), algorithmic day-parting, and aggressive negative target harvesting routinely keep client portfolios pinned between 14% and 18% ACOS, as documented in our $7.37M verified PPC case study."
  },
  {
    question: "How do you protect proprietary product tooling and designs at factories?",
    answer: "We enforce bilingual Non-Disclosure, Non-Use, Non-Circumvention (NNN) agreements enforceable in local legal jurisdictions (China, Pakistan, Vietnam) before disclosing tooling schematics. We also contractually secure exclusive mold ownership for your brand."
  },
  {
    question: "How does the Free 24-Point Empirical Audit work?",
    answer: "Our senior strategists analyze your Amazon or TikTok catalog across reverse-ASIN indexing, buy-box defense, PPC search-term waste, A+ conversion friction, and supply chain margins. You receive a candid video breakdown and 15-page diagnostic roadmap detailing exact profit leaks and growth opportunities."
  }
];

