import os
from PIL import Image, ImageDraw, ImageFont

graphics_dir = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\graphics"
os.makedirs(graphics_dir, exist_ok=True)

font_xl = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 28)
font_lg = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 19)
font_bold = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 14)
font_md = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 15)
font_sm = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 12)

def draw_card(draw, xy, fill, outline=None, width=1, radius=16):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

w, h = 1200, 760

# ==========================================
# 1. AMAZON DOMINANCE GRAPHIC
# ==========================================
im = Image.new("RGB", (w, h), (250, 250, 252))
draw = ImageDraw.Draw(im)

for x in range(0, w, 40):
    draw.line([(x, 0), (x, h)], fill=(241, 245, 249), width=1)
for y in range(0, h, 40):
    draw.line([(0, y), (w, y)], fill=(241, 245, 249), width=1)

draw_card(draw, (50, 30, 1150, 730), fill=(255, 255, 255), outline=(226, 232, 240), width=2, radius=24)
draw_card(draw, (50, 30, 1150, 95), fill=(248, 250, 252), outline=(226, 232, 240), width=1, radius=24)
draw.rectangle([(50, 75), (1150, 95)], fill=(248, 250, 252))

draw.ellipse((80, 54, 94, 68), fill=(239, 68, 68))
draw.ellipse((102, 54, 116, 68), fill=(245, 158, 11))
draw.ellipse((124, 54, 138, 68), fill=(16, 185, 129))

draw.text((160, 50), "RANKMOOR SUITE - AMAZON SEARCH DOMINANCE & PPC ARCHITECTURE", fill=(15, 23, 42), font=font_lg)

draw_card(draw, (80, 120, 410, 240), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw.text((105, 135), "TOP-OF-SEARCH SHARE", fill=(234, 88, 12), font=font_sm)
draw.text((105, 155), "84.6% #1 RANK", fill=(15, 23, 42), font=font_xl)
draw.text((105, 205), "+312 organic keyword ranks won in 45 days", fill=(22, 163, 74), font=font_bold)

draw_card(draw, (435, 120, 765, 240), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw.text((460, 135), "BLENDED TACOS REDUCTION", fill=(22, 163, 74), font=font_sm)
draw.text((460, 155), "11.40% TACOS", fill=(15, 23, 42), font=font_xl)
draw.text((460, 205), "Reduced from 34.2% prior to Rankmoor takeover", fill=(22, 163, 74), font=font_bold)

draw_card(draw, (790, 120, 1120, 240), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw.text((815, 135), "BUYBOX RETENTION", fill=(37, 99, 235), font=font_sm)
draw.text((815, 155), "99.8% WIN RATE", fill=(15, 23, 42), font=font_xl)
draw.text((815, 205), "Project Zero & automated IP defense active", fill=(37, 99, 235), font=font_bold)

draw_card(draw, (80, 265, 710, 700), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw.text((105, 285), "Gross Cumulative Monthly Volume Growth ($)", fill=(15, 23, 42), font=font_lg)
draw.text((105, 312), "Demonstrating organic search velocity and PPC scaling curve", fill=(100, 116, 139), font=font_sm)

for y_line in [380, 450, 520, 590, 650]:
    draw.line([(105, y_line), (685, y_line)], fill=(245, 247, 250), width=1)

chart_pts = [
    (125, 640), (180, 625), (240, 605), (300, 575), (360, 530),
    (420, 475), (480, 425), (540, 385), (600, 355), (665, 335)
]
for i in range(len(chart_pts)-1):
    x1, y1 = chart_pts[i]
    x2, y2 = chart_pts[i+1]
    poly = [(x1, 660), (x1, y1), (x2, y2), (x2, 660)]
    draw.polygon(poly, fill=(255, 244, 235))
    draw.line([(x1, y1), (x2, y2)], fill=(255, 107, 0), width=4)

for pt in chart_pts:
    draw.ellipse((pt[0]-5, pt[1]-5, pt[0]+5, pt[1]+5), fill=(255, 107, 0), outline=(255, 255, 255), width=2)

draw_card(draw, (380, 360, 660, 405), fill=(255, 107, 0), radius=10)
draw.text((395, 375), "Rankmoor Takeover ($20.23M Scale)", fill=(255, 255, 255), font=font_bold)

draw_card(draw, (735, 265, 1120, 700), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw.text((760, 285), "ENGINEERING DELIVERABLES", fill=(15, 23, 42), font=font_lg)

items = [
    ("Root Keyword Search Architecture", "Algorithmic exact/phrase silo indexing"),
    ("Sponsored Products, Brands & Video", "Dayparted automated bid management"),
    ("Amazon DSP Retargeting", "Off-Amazon cross-channel shopper retargeting"),
    ("3D Rendered A+ Content & Story", "Studio 4K render modules for +35% CVR"),
    ("Brand Storefront Redesign", "Category navigation that boosts basket size"),
    ("Turnkey FBA Inventory Planning", "90-day predictive supply chain models"),
    ("Brand Registry 2.0 & IP Moat", "Hijacker eviction & MAP policy enforcement"),
    ("100% Real Seller Central Exports", "Real-time transparent P&L visibility")
]
for idx, (title, desc) in enumerate(items):
    y_pos = 330 + idx * 45
    draw.ellipse((760, y_pos+3, 774, y_pos+17), fill=(22, 163, 74))
    draw.text((785, y_pos), title, fill=(15, 23, 42), font=font_bold)
    draw.text((785, y_pos + 18), desc, fill=(100, 116, 139), font=font_sm)

im.save(os.path.join(graphics_dir, "amazon-dominance-graphic.webp"), "WEBP", quality=95)
print("Saved amazon-dominance-graphic.webp")

# ==========================================
# 2. TIKTOK SHOP FLYWHEEL GRAPHIC
# ==========================================
im2 = Image.new("RGB", (w, h), (250, 250, 252))
draw2 = ImageDraw.Draw(im2)

for x in range(0, w, 40):
    draw2.line([(x, 0), (x, h)], fill=(241, 245, 249), width=1)
for y in range(0, h, 40):
    draw2.line([(0, y), (w, y)], fill=(241, 245, 249), width=1)

draw_card(draw2, (50, 30, 1150, 730), fill=(255, 255, 255), outline=(226, 232, 240), width=2, radius=24)
draw_card(draw2, (50, 30, 1150, 95), fill=(248, 250, 252), outline=(226, 232, 240), width=1, radius=24)
draw2.rectangle([(50, 75), (1150, 95)], fill=(248, 250, 252))

draw2.ellipse((80, 54, 94, 68), fill=(239, 68, 68))
draw2.ellipse((102, 54, 116, 68), fill=(245, 158, 11))
draw2.ellipse((124, 54, 138, 68), fill=(16, 185, 129))

draw2.text((160, 50), "TIKTOK SHOP ENTERPRISE - CREATOR & LIVE SHOPPING FLYWHEEL", fill=(15, 23, 42), font=font_lg)

draw_card(draw2, (80, 120, 410, 240), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw2.text((105, 135), "CREATOR SEEDING NETWORK", fill=(13, 148, 136), font=font_sm)
draw2.text((105, 155), "4,200+ CREATORS", fill=(15, 23, 42), font=font_xl)
draw2.text((105, 205), "Active ambassadors generating authentic UGC", fill=(13, 148, 136), font=font_bold)

draw_card(draw2, (435, 120, 765, 240), fill=(255, 241, 242), outline=(254, 205, 211), radius=16)
draw2.text((460, 135), "LIVE BROADCAST RUN-RATE", fill=(225, 29, 72), font=font_sm)
draw2.text((460, 155), "$480,000 / MO", fill=(15, 23, 42), font=font_xl)
draw2.text((460, 205), "Generated through multi-host studio streams", fill=(225, 29, 72), font=font_bold)

draw_card(draw2, (790, 120, 1120, 240), fill=(245, 243, 255), outline=(221, 214, 254), radius=16)
draw2.text((815, 135), "SPARK ADS ROAS", fill=(124, 58, 237), font=font_sm)
draw2.text((815, 155), "4.85X BLENDED", fill=(15, 23, 42), font=font_xl)
draw2.text((815, 205), "Direct amplification of top performing videos", fill=(124, 58, 237), font=font_bold)

draw_card(draw2, (80, 265, 710, 700), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw2.text((105, 285), "Viral Commerce Acceleration Loop", fill=(15, 23, 42), font=font_lg)

nodes = [
    (220, 390, "1. Sample Seeding", "Outreach to top 5% niche creators", (13, 148, 136)),
    (570, 390, "2. Viral Video Surge", "High volume UGC sparks buyer trust", (225, 29, 72)),
    (570, 580, "3. Spark Ads Fuel", "Scale top converting creator videos", (255, 107, 0)),
    (220, 580, "4. Live Stream Events", "Flash sales & broadcast studios", (124, 58, 237))
]

for (nx, ny, title, sub, color) in nodes:
    draw_card(draw2, (nx-115, ny-45, nx+115, ny+45), fill=(255, 255, 255), outline=color, width=2, radius=14)
    draw2.text((nx-95, ny-30), title, fill=color, font=font_bold)
    draw2.text((nx-95, ny-5), sub, fill=(100, 116, 139), font=font_sm)

draw2.line([(340, 390), (450, 390)], fill=(15, 23, 42), width=3)
draw2.line([(570, 440), (570, 530)], fill=(15, 23, 42), width=3)
draw2.line([(450, 580), (340, 580)], fill=(15, 23, 42), width=3)
draw2.line([(220, 530), (220, 440)], fill=(15, 23, 42), width=3)

draw_card(draw2, (345, 455, 445, 515), fill=(15, 23, 42), radius=14)
draw2.text((365, 470), "GMV\nBOOST", fill=(255, 255, 255), font=font_bold)

draw_card(draw2, (735, 265, 1120, 700), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw2.text((760, 285), "TIKTOK SHOP BLUEPRINT", fill=(15, 23, 42), font=font_lg)

items_tt = [
    ("Official TSP Governance", "Tier-1 TikTok Shop Partner verification & safety"),
    ("Automated Sample Seeding", "Dispatching 500+ free samples monthly to creators"),
    ("Commission & Affiliate Tiering", "Dynamic commission tiers incentivizing top sellers"),
    ("Dedicated Live Studios", "Professional lighting, hosts, and streaming scripts"),
    ("TikTok Spark Ads Scaler", "Whitelisting creator handles for targeted paid ads"),
    ("Product Showcase Merchandising", "Custom bundles, flash discounts, and store design"),
    ("US Warehouse Fast Dispatch", "Ensuring 48-hour fulfillment to protect seller score"),
    ("Violation Dispute Handling", "Fast strike removals and account health monitoring")
]
for idx, (title, desc) in enumerate(items_tt):
    y_pos = 330 + idx * 45
    draw2.ellipse((760, y_pos+3, 774, y_pos+17), fill=(13, 148, 136))
    draw2.text((785, y_pos), title, fill=(15, 23, 42), font=font_bold)
    draw2.text((785, y_pos + 18), desc, fill=(100, 116, 139), font=font_sm)

im2.save(os.path.join(graphics_dir, "tiktok-shop-flywheel-graphic.webp"), "WEBP", quality=95)
print("Saved tiktok-shop-flywheel-graphic.webp")

# ==========================================
# 3. 24-POINT AUDIT BLUEPRINT GRAPHIC
# ==========================================
im3 = Image.new("RGB", (w, h), (250, 250, 252))
draw3 = ImageDraw.Draw(im3)

for x in range(0, w, 40):
    draw3.line([(x, 0), (x, h)], fill=(241, 245, 249), width=1)
for y in range(0, h, 40):
    draw3.line([(0, y), (w, y)], fill=(241, 245, 249), width=1)

draw_card(draw3, (50, 30, 1150, 730), fill=(255, 255, 255), outline=(226, 232, 240), width=2, radius=24)
draw_card(draw3, (50, 30, 1150, 95), fill=(248, 250, 252), outline=(226, 232, 240), width=1, radius=24)
draw3.rectangle([(50, 75), (1150, 95)], fill=(248, 250, 252))

draw3.ellipse((80, 54, 94, 68), fill=(239, 68, 68))
draw3.ellipse((102, 54, 116, 68), fill=(245, 158, 11))
draw3.ellipse((124, 54, 138, 68), fill=(16, 185, 129))

draw3.text((160, 50), "CONFIDENTIAL AUDIT DOSSIER - 24-POINT MARKETPLACE DIAGNOSTIC", fill=(15, 23, 42), font=font_lg)

draw_card(draw3, (80, 120, 380, 370), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw3.text((110, 145), "OVERALL AUDIT SCORE", fill=(234, 88, 12), font=font_bold)
draw3.text((110, 175), "94 / 100", fill=(15, 23, 42), font=font_xl)
draw3.text((110, 230), "Grade: HIGH CONVERSION POTENTIAL", fill=(22, 163, 74), font=font_bold)
draw3.text((110, 260), "Estimated Unclaimed Revenue:\n$18,400 - $42,000 / month", fill=(71, 85, 105), font=font_sm)
draw_card(draw3, (110, 310, 340, 345), fill=(255, 107, 0), radius=8)
draw3.text((125, 320), "ACTION BLUEPRINT INCLUDED", fill=(255, 255, 255), font=font_bold)

pillars = [
    (410, 120, 750, 235, "1. PPC & TACOS Wastage Audit", "28 non-converting search terms draining $3.2k/mo budget.\nNegative keyword isolation recommended.", (239, 68, 68)),
    (780, 120, 1120, 235, "2. Listing CVR & A+ Content", "Main image CTR benchmarked at 1.4% (Industry top is 3.1%).\nMissing 3D exploded benefit render modules.", (245, 158, 11)),
    (410, 255, 750, 370, "3. BuyBox & Hijacker Defense", "2 unauthorized resellers identified undercutting price.\nBrand Registry Project Zero report ready to fire.", (37, 99, 235)),
    (780, 255, 1120, 370, "4. TikTok Shop Omnichannel Fit", "Product form factor highly viral.\n14 verified TikTok creators identified with 85k-400k followers.", (16, 185, 129))
]
for (x1, y1, x2, y2, ptitle, pdesc, pcol) in pillars:
    draw_card(draw3, (x1, y1, x2, y2), fill=(248, 250, 252), outline=(226, 232, 240), radius=14)
    draw3.text((x1+20, y1+15), ptitle, fill=pcol, font=font_bold)
    draw3.text((x1+20, y1+45), pdesc, fill=(71, 85, 105), font=font_sm)

draw_card(draw3, (80, 395, 1120, 700), fill=(255, 255, 255), outline=(226, 232, 240), radius=16)
draw3.text((110, 420), "PREDICTED 90-DAY TURNAROUND TRAJECTORY", fill=(15, 23, 42), font=font_lg)

milestones = [
    ("Day 1 - 7: Immediate Stop-Loss", "Isolate bleeding keywords, fix broken variations, file MAP notices.", "Save $4,200/mo waste"),
    ("Day 8 - 30: Creative & Listing Overhaul", "Deploy 3D A+ content, high-CTR infographics, update search terms.", "CVR jumps from 9.4% to 18.2%"),
    ("Day 31 - 60: Algorithmic Scaling", "Aggressive sponsored ranking on top 5 keywords + Dayparting.", "Organic #1 badges secured"),
    ("Day 61 - 90: Omnichannel Flywheel", "Launch 50-creator TikTok Shop seeding + Spark Ads retargeting.", "Blended revenue doubles")
]
for idx, (mtitle, mdesc, mest) in enumerate(milestones):
    y_box = 465 + idx * 52
    draw_card(draw3, (110, y_box, 1090, y_box + 44), fill=(248, 250, 252), outline=(226, 232, 240), radius=8)
    draw3.text((130, y_box + 12), mtitle, fill=(15, 23, 42), font=font_bold)
    draw3.text((450, y_box + 12), mdesc, fill=(100, 116, 139), font=font_sm)
    draw3.text((880, y_box + 12), mest, fill=(22, 163, 74), font=font_bold)

im3.save(os.path.join(graphics_dir, "marketplace-audit-blueprint.webp"), "WEBP", quality=95)
print("Saved marketplace-audit-blueprint.webp")
