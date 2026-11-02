import os
from PIL import Image, ImageDraw, ImageFont

out_dir = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\services\amazon"
os.makedirs(out_dir, exist_ok=True)

font_title = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 26)
font_xl = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 24)
font_lg = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 18)
font_bold = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 14)
font_md = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 15)
font_sm = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 12)

def draw_card(draw, xy, fill, outline=None, width=1, radius=16):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

def create_base_canvas(w=1100, h=700, title=""):
    im = Image.new("RGB", (w, h), (250, 250, 252))
    draw = ImageDraw.Draw(im)

    # Subtle grid
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=(242, 245, 249), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=(242, 245, 249), width=1)

    # Frame
    draw_card(draw, (40, 30, w-40, h-30), fill=(255, 255, 255), outline=(226, 232, 240), width=2, radius=24)
    draw_card(draw, (40, 30, w-40, 95), fill=(248, 250, 252), outline=(226, 232, 240), width=1, radius=24)
    draw.rectangle([(40, 75), (w-40, 95)], fill=(248, 250, 252))

    # Mac dots
    draw.ellipse((70, 54, 84, 68), fill=(239, 68, 68))
    draw.ellipse((92, 54, 106, 68), fill=(245, 158, 11))
    draw.ellipse((114, 54, 128, 68), fill=(16, 185, 129))

    draw.text((150, 50), title, fill=(15, 23, 42), font=font_lg)
    return im, draw

w, h = 1100, 700

# ==========================================
# 1. REVERSE-ASIN KEYWORD ARCHITECTURE & COSMO SEO
# ==========================================
im1, draw1 = create_base_canvas(w, h, "RANKMOOR COSMO SEARCH ENGINE - REVERSE-ASIN RELEVANCE")

# Search Bar Simulation
draw_card(draw1, (70, 120, 1030, 175), fill=(248, 250, 252), outline=(226, 232, 240), radius=14)
draw1.text((100, 137), "🔍 Search Query: [high intent buyer keywords]  |  Algorithm: Amazon Cosmo 2.0 & A9", fill=(100, 116, 139), font=font_md)
draw_card(draw1, (860, 128, 1015, 167), fill=(255, 107, 0), radius=10)
draw1.text((880, 138), "#1 Organic Rank", fill=(255, 255, 255), font=font_bold)

# 3 Keyword Metric Cards
draw_card(draw1, (70, 200, 365, 310), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw1.text((90, 215), "REVERSE-ASIN INDEXING", fill=(234, 88, 12), font=font_sm)
draw1.text((90, 238), "1,420+ KEYWORDS", fill=(15, 23, 42), font=font_xl)
draw1.text((90, 275), "Indexed in Top-10 organic placements", fill=(22, 163, 74), font=font_bold)

draw_card(draw1, (390, 200, 710, 310), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw1.text((410, 215), "PAGE 1 SHARE OF VOICE", fill=(22, 163, 74), font=font_sm)
draw1.text((410, 238), "84.2% VISIBILITY", fill=(15, 23, 42), font=font_xl)
draw1.text((410, 275), "+310 keyword spots won in 45 days", fill=(22, 163, 74), font=font_bold)

draw_card(draw1, (735, 200, 1030, 310), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw1.text((755, 215), "COSMO INTENT MAPPING", fill=(37, 99, 235), font=font_sm)
draw1.text((755, 238), "0.94 SEMANTIC FIT", fill=(15, 23, 42), font=font_xl)
draw1.text((755, 275), "Capturing latent long-tail buyer queries", fill=(37, 99, 235), font=font_bold)

# Keyword Silo Structure Diagram
draw_card(draw1, (70, 335, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw1.text((100, 355), "Algorithmic Keyword Indexing Silo", fill=(15, 23, 42), font=font_lg)

silos = [
    ("Tier 1: High-Volume Root Heads", "Exact-match high velocity keywords driving 60% of category demand", "Page 1 Top-3", (255, 107, 0)),
    ("Tier 2: High-Intent Mid-Tail", "Specific buyer modifiers (size, material, occasion, benefit)", "Organic #1", (22, 163, 74)),
    ("Tier 3: Cosmo Semantic Synonyms", "Amazon LLM generated behavioral associations & substitute queries", "99% Indexed", (37, 99, 235)),
    ("Tier 4: Competitor Conquest ASINs", "Targeted defensive & offensive reverse-ASIN keyword interception", "BuyBox Win", (147, 51, 234))
]
for idx, (title, desc, rank, col) in enumerate(silos):
    y_box = 400 + idx * 58
    draw_card(draw1, (100, y_box, 1000, y_box + 48), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw1.ellipse((120, y_box+16, 134, y_box+30), fill=col)
    draw1.text((150, y_box + 8), title, fill=(15, 23, 42), font=font_bold)
    draw1.text((150, y_box + 27), desc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw1, (860, y_box+10, 980, y_box+38), fill=(241, 245, 249), radius=6)
    draw1.text((880, y_box + 14), rank, fill=col, font=font_bold)

im1.save(os.path.join(out_dir, "amazon-cosmo-seo.webp"), "WEBP", quality=95)
print("Saved amazon-cosmo-seo.webp")


# ==========================================
# 2. 3D RENDERED A+ CONTENT & BRAND STOREFRONT
# ==========================================
im2, draw2 = create_base_canvas(w, h, "RANKMOOR STUDIO - 3D LUXURY A+ CREATIVES & STOREFRONT")

# 3 Top Creative Metric Cards
draw_card(draw2, (70, 120, 365, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw2.text((90, 135), "CONVERSION RATE LIFT", fill=(234, 88, 12), font=font_sm)
draw2.text((90, 158), "+42.5% CVR", fill=(15, 23, 42), font=font_xl)
draw2.text((90, 195), "Lift from standard listing to 3D A+", fill=(22, 163, 74), font=font_bold)

draw_card(draw2, (390, 120, 710, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw2.text((410, 135), "MAIN IMAGE CLICK-THROUGH", fill=(22, 163, 74), font=font_sm)
draw2.text((410, 158), "3.8% CTR (TOP 1%)", fill=(15, 23, 42), font=font_xl)
draw2.text((410, 195), "2.4x higher than category average", fill=(22, 163, 74), font=font_bold)

draw_card(draw2, (735, 120, 1030, 230), fill=(245, 243, 255), outline=(221, 214, 254), radius=16)
draw2.text((755, 135), "MOBILE BROWSE RATE", fill=(124, 58, 237), font=font_sm)
draw2.text((755, 158), "78% COMPLETION", fill=(15, 23, 42), font=font_xl)
draw2.text((755, 195), "Shoppers scroll full 7-module brand story", fill=(124, 58, 237), font=font_bold)

# Studio Render Showcase Mockups
draw_card(draw2, (70, 255, 530, 660), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw2.text((95, 275), "Exploded 3D Benefit Render", fill=(15, 23, 42), font=font_lg)
draw2.text((95, 302), "4K CAD visualization showing internal components", fill=(100, 116, 139), font=font_sm)

# Simulated product wireframe in card
draw_card(draw2, (95, 335, 505, 580), fill=(248, 250, 252), outline=(226, 232, 240), radius=12)
draw2.ellipse((230, 390, 370, 530), outline=(255, 107, 0), width=3)
draw2.ellipse((260, 420, 340, 500), outline=(15, 23, 42), width=2)
draw2.line([(140, 370), (240, 410)], fill=(255, 107, 0), width=2)
draw2.text((120, 350), "Aerospace Grade Core", fill=(255, 107, 0), font=font_bold)
draw2.line([(460, 490), (360, 470)], fill=(22, 163, 74), width=2)
draw2.text((380, 500), "Thermal Heat Dissipation", fill=(22, 163, 74), font=font_bold)

draw_card(draw2, (95, 600, 505, 645), fill=(255, 244, 235), radius=8)
draw2.text((115, 612), "✓ 100% Mobile Optimized Dimensions & Typography", fill=(234, 88, 12), font=font_bold)

# Right Side Storefront Grid
draw_card(draw2, (560, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw2.text((585, 275), "Brand Storefront Multi-Page Navigation", fill=(15, 23, 42), font=font_lg)

modules = [
    ("Hero Lifestyle Banner", "Cinematic 3000x600 banner with clear value prop", "+28% Add-to-Cart"),
    ("Comparison Matrix Module", "Cross-selling higher-tier bundles to boost AOV", "+35% Average Basket"),
    ("Brand Story Carousel", "Founding mission, manufacturing ethics & patents", "Brand Moat Built"),
    ("Interactive Shoppable Video", "Demonstrating unboxing and product in real life", "5.2x Engagement")
]
for idx, (mtitle, mdesc, mtag) in enumerate(modules):
    y_b = 320 + idx * 78
    draw_card(draw2, (585, y_b, 1005, y_b + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw2.text((605, y_b + 12), mtitle, fill=(15, 23, 42), font=font_bold)
    draw2.text((605, y_b + 34), mdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw2, (850, y_b+15, 990, y_b+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw2.text((860, y_b + 22), mtag, fill=(22, 163, 74), font=font_bold)

im2.save(os.path.join(out_dir, "amazon-3d-aplus.webp"), "WEBP", quality=95)
print("Saved amazon-3d-aplus.webp")


# ==========================================
# 3. ALGORITHMIC PPC & AMAZON DSP MEDIA BUYING
# ==========================================
im3, draw3 = create_base_canvas(w, h, "RANKMOOR ADS CONSOLE - ALGORITHMIC PPC & DSP MANAGEMENT")

# 3 Top Ads Metric Cards
draw_card(draw3, (70, 120, 365, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw3.text((90, 135), "AVERAGE AD ACOS", fill=(22, 163, 74), font=font_sm)
draw3.text((90, 158), "16.00% ACOS", fill=(15, 23, 42), font=font_xl)
draw3.text((90, 195), "Maintained across $7.37M total PPC spend", fill=(22, 163, 74), font=font_bold)

draw_card(draw3, (390, 120, 710, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw3.text((410, 135), "TOTAL AD-DRIVEN REVENUE", fill=(234, 88, 12), font=font_sm)
draw3.text((410, 158), "$7,370,000+", fill=(15, 23, 42), font=font_xl)
draw3.text((410, 195), "Empirical Seller Central Campaign data", fill=(234, 88, 12), font=font_bold)

draw_card(draw3, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw3.text((755, 135), "DSP RETARGETING ROAS", fill=(37, 99, 235), font=font_sm)
draw3.text((755, 158), "5.40X ROAS", fill=(15, 23, 42), font=font_xl)
draw3.text((755, 195), "Re-engaging off-Amazon category shoppers", fill=(37, 99, 235), font=font_bold)

# Dayparting & Negative Target Engine
draw_card(draw3, (70, 255, 530, 660), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw3.text((95, 275), "Algorithmic Dayparting Heatmap", fill=(15, 23, 42), font=font_lg)
draw3.text((95, 302), "Bid multipliers dynamically shift by hourly conversion probability", fill=(100, 116, 139), font=font_sm)

# Grid heatmap simulation
hours = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"]
for i, hr in enumerate(hours):
    y_h = 340 + i * 42
    draw3.text((95, y_h + 8), hr, fill=(100, 116, 139), font=font_bold)
    # Draw bars
    bar_w = [180, 290, 350, 310, 380, 360, 140][i]
    col = (255, 107, 0) if bar_w > 300 else (254, 215, 170)
    draw_card(draw3, (150, y_h, 150 + bar_w, y_h + 30), fill=col, radius=6)
    draw3.text((160 + bar_w, y_h + 6), f"+{bar_w//3}% Bid", fill=(15, 23, 42), font=font_sm)

# Right DSP Funnel
draw_card(draw3, (560, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw3.text((585, 275), "Full-Funnel Ad Architecture", fill=(15, 23, 42), font=font_lg)

funnels = [
    ("Sponsored Products (SP)", "Exact & Root-phrase keyword bid bidding at Page 1", "CVR 18.4%"),
    ("Sponsored Brands Video (SBV)", "Autoplaying high-CTR video in middle of search", "CTR 3.1%"),
    ("Sponsored Display (SD)", "Conquesting competitor ASIN detail pages directly", "ACOS 14.8%"),
    ("Amazon DSP Retargeting", "Audiences who viewed listing but didn't buy in 30d", "ROAS 5.4x")
]
for idx, (ftitle, fdesc, fstat) in enumerate(funnels):
    y_f = 330 + idx * 75
    draw_card(draw3, (585, y_f, 1005, y_f + 64), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw3.text((605, y_f + 12), ftitle, fill=(15, 23, 42), font=font_bold)
    draw3.text((605, y_f + 34), fdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw3, (880, y_f+16, 990, y_f+46), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw3.text((895, y_f + 23), fstat, fill=(22, 163, 74), font=font_bold)

im3.save(os.path.join(out_dir, "amazon-ppc-dsp.webp"), "WEBP", quality=95)
print("Saved amazon-ppc-dsp.webp")


# ==========================================
# 4. HONEYMOON VELOCITY LAUNCH & BESTSELLER ENGINEERING
# ==========================================
im4, draw4 = create_base_canvas(w, h, "RANKMOOR LAUNCHPAD - 45-DAY HONEYMOON VELOCITY PROTOCOL")

# Top KPI Badges
draw_card(draw4, (70, 120, 365, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw4.text((90, 135), "PAGE 1 RANK TIMELINE", fill=(234, 88, 12), font=font_sm)
draw4.text((90, 158), "DAY 18 TARGET", fill=(15, 23, 42), font=font_xl)
draw4.text((90, 195), "Securing Top-5 keyword placement", fill=(22, 163, 74), font=font_bold)

draw_card(draw4, (390, 120, 710, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw4.text((410, 135), "VINE REVIEW RATING", fill=(22, 163, 74), font=font_sm)
draw4.text((410, 158), "4.8 / 5.0 STARS", fill=(15, 23, 42), font=font_xl)
draw4.text((410, 195), "30 authentic verified Vine reviews seeded", fill=(22, 163, 74), font=font_bold)

draw_card(draw4, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw4.text((755, 135), "BRAND REFERRAL BONUS", fill=(37, 99, 235), font=font_sm)
draw4.text((755, 158), "10% CASH REBATE", fill=(15, 23, 42), font=font_xl)
draw4.text((755, 195), "Direct Amazon cash payout on external sales", fill=(37, 99, 235), font=font_bold)

# Velocity Curve Chart
draw_card(draw4, (70, 255, 620, 660), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw4.text((95, 275), "Honeymoon Velocity Ramp (Units/Day)", fill=(15, 23, 42), font=font_lg)

# Axis lines
for y_l in [350, 420, 490, 560]:
    draw4.line([(95, y_l), (590, y_l)], fill=(245, 247, 250), width=1)

pts_launch = [(110, 560), (180, 540), (250, 500), (320, 440), (400, 360), (480, 290), (560, 230)]
for i in range(len(pts_launch)-1):
    x1, y1 = pts_launch[i]
    x2, y2 = pts_launch[i+1]
    poly = [(x1, 580), (x1, y1), (x2, y2), (x2, 580)]
    draw4.polygon(poly, fill=(255, 244, 235))
    draw4.line([(x1, y1), (x2, y2)], fill=(255, 107, 0), width=4)

draw_card(draw4, (380, 310, 590, 355), fill=(255, 107, 0), radius=8)
draw4.text((395, 323), "🚀 #1 Bestseller Badge Won", fill=(255, 255, 255), font=font_bold)

# Right Protocols
draw_card(draw4, (650, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw4.text((675, 275), "Launch Protocols Active", fill=(15, 23, 42), font=font_lg)

protocols = [
    ("Pre-Launch Seeding", "Amazon Vine enrollments + Parent-child structure"),
    ("Inventory In-Stock Trigger", "Ad blitz starts exactly at 85% FC check-in"),
    ("Attribution Link Tracking", "10% cash rebate on all creator sales"),
    ("Organic Rank Lock", "Tapering ad bids as organic flywheel kicks in")
]
for idx, (ptitle, psub) in enumerate(protocols):
    y_p = 330 + idx * 75
    draw_card(draw4, (675, y_p, 1005, y_p + 64), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw4.text((695, y_p + 12), ptitle, fill=(15, 23, 42), font=font_bold)
    draw4.text((695, y_p + 34), psub, fill=(100, 116, 139), font=font_sm)

im4.save(os.path.join(out_dir, "amazon-honeymoon-launch.webp"), "WEBP", quality=95)
print("Saved amazon-honeymoon-launch.webp")


# ==========================================
# 5. SELLER CENTRAL CUSTODIANSHIP & CATALOG DEFENSE
# ==========================================
im5, draw5 = create_base_canvas(w, h, "RANKMOOR GUARDIAN - 24/7 ACCOUNT CUSTODIANSHIP & IP DEFENSE")

# 3 Top Security Badges
draw_card(draw5, (70, 120, 365, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw5.text((90, 135), "ACCOUNT HEALTH RATING", fill=(22, 163, 74), font=font_sm)
draw5.text((90, 158), "1,000 / 1,000", fill=(15, 23, 42), font=font_xl)
draw5.text((90, 195), "Perfect green health score across all stores", fill=(22, 163, 74), font=font_bold)

draw_card(draw5, (390, 120, 710, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw5.text((410, 135), "BUYBOX RETENTION", fill=(234, 88, 12), font=font_sm)
draw5.text((410, 158), "99.8% WIN RATE", fill=(15, 23, 42), font=font_xl)
draw5.text((410, 195), "Zero lost revenue to unauthorized resellers", fill=(234, 88, 12), font=font_bold)

draw_card(draw5, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw5.text((755, 135), "SUPPRESSION RESOLUTION", fill=(37, 99, 235), font=font_sm)
draw5.text((755, 158), "< 12 HOURS", fill=(15, 23, 42), font=font_xl)
draw5.text((755, 195), "Executive case escalation management", fill=(37, 99, 235), font=font_bold)

# Protection Status Center
draw_card(draw5, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw5.text((95, 275), "Live Operational Health & Defense Radar", fill=(15, 23, 42), font=font_lg)

guards = [
    ("Listing Hijacker & Counterfeit Defense", "Automated Brand Registry Project Zero reporting; test buys filed immediately.", "Active (Shield On)", (22, 163, 74)),
    ("Stranded & Suppressed Inventory Recovery", "Root cause audit of packaging/weight mismatches, re-categorizing nodes in <12h.", "0 Stranded Units", (22, 163, 74)),
    ("Inventory Performance Index (IPI) Guard", "Forecasting restock limits to eliminate excess storage fee surcharges.", "IPI Score 680+", (255, 107, 0)),
    ("Direct Amazon Executive Escalation", "Dedicated SPN direct ticketing and account manager advocacy.", "Priority Support", (37, 99, 235))
]
for idx, (gtitle, gdesc, gstatus, gcol) in enumerate(guards):
    y_g = 320 + idx * 78
    draw_card(draw5, (95, y_g, 1005, y_g + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw5.text((120, y_g + 12), gtitle, fill=(15, 23, 42), font=font_bold)
    draw5.text((120, y_g + 34), gdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw5, (820, y_g+15, 985, y_g+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw5.text((835, y_g + 22), gstatus, fill=gcol, font=font_bold)

im5.save(os.path.join(out_dir, "amazon-seller-custodianship.webp"), "WEBP", quality=95)
print("Saved amazon-seller-custodianship.webp")


# ==========================================
# 6. GLOBAL MANUFACTURING & SOURCING INFRASTRUCTURE
# ==========================================
im6, draw6 = create_base_canvas(w, h, "RANKMOOR SOURCING - TIER-1 GLOBAL MANUFACTURING & LOGISTICS")

# 3 Top Sourcing Metric Cards
draw_card(draw6, (70, 120, 365, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw6.text((90, 135), "LANDED UNIT COST SAVINGS", fill=(22, 163, 74), font=font_sm)
draw6.text((90, 158), "-28.4% SAVED", fill=(15, 23, 42), font=font_xl)
draw6.text((90, 195), "Direct factory contract vs trading agents", fill=(22, 163, 74), font=font_bold)

draw_card(draw6, (390, 120, 710, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw6.text((410, 135), "DEFECT RATE CEILING", fill=(234, 88, 12), font=font_sm)
draw6.text((410, 158), "< 0.35% DEFECT", fill=(15, 23, 42), font=font_xl)
draw6.text((410, 195), "Rigorous on-site AQL 2.5 factory inspections", fill=(234, 88, 12), font=font_bold)

draw_card(draw6, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw6.text((755, 135), "FACTORY PAYMENT TERMS", fill=(37, 99, 235), font=font_sm)
draw6.text((755, 158), "NET-60 TERMS", fill=(15, 23, 42), font=font_xl)
draw6.text((755, 195), "Preserving cash flow during rapid inventory scale", fill=(37, 99, 235), font=font_bold)

# Supply Chain Nodes
draw_card(draw6, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw6.text((95, 275), "End-to-End Global Supply Chain Pipeline", fill=(15, 23, 42), font=font_lg)

nodes_sc = [
    ("Tier-1 Factory Sourcing (China, Pakistan, Vietnam)", "Direct audited factories, raw material price locks, NDA brand protection", "Step 1: Production", (255, 107, 0)),
    ("Rigorous On-Site Quality Control (AQL 2.5)", "Independent engineers inspect batch integrity, packaging, and barcodes", "Step 2: Quality", (22, 163, 74)),
    ("Customs Clearance & DDP Freight Logistics", "Fast sea/air shipping directly into Amazon FBA & 3PL fulfillment hubs", "Step 3: Freight", (37, 99, 235)),
    ("90-Day Predictive Demand Forecasting", "Preventing out-of-stock rank death while avoiding Amazon overage fees", "Step 4: Restock", (147, 51, 234))
]
for idx, (stitle, sdesc, sstep, scol) in enumerate(nodes_sc):
    y_s = 320 + idx * 78
    draw_card(draw6, (95, y_s, 1005, y_s + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw6.text((120, y_s + 12), stitle, fill=(15, 23, 42), font=font_bold)
    draw6.text((120, y_s + 34), sdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw6, (820, y_s+15, 985, y_s+45), fill=(255, 255, 255), outline=(226, 232, 240), radius=6)
    draw6.text((835, y_s + 22), sstep, fill=scol, font=font_bold)

im6.save(os.path.join(out_dir, "amazon-global-sourcing.webp"), "WEBP", quality=95)
print("Saved amazon-global-sourcing.webp")

