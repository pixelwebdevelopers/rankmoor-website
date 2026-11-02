import os
from PIL import Image, ImageDraw, ImageFont

out_dir = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\services\tiktok"
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

    # Grid
    for x in range(0, w, 40):
        draw.line([(x, 0), (x, h)], fill=(242, 245, 249), width=1)
    for y in range(0, h, 40):
        draw.line([(0, y), (w, y)], fill=(242, 245, 249), width=1)

    # Frame
    draw_card(draw, (40, 30, w-40, h-30), fill=(255, 255, 255), outline=(226, 232, 240), width=2, radius=24)
    draw_card(draw, (40, 30, w-40, 95), fill=(248, 250, 252), outline=(226, 232, 240), width=1, radius=24)
    draw.rectangle([(40, 75), (w-40, 95)], fill=(248, 250, 252))

    # Window dots
    draw.ellipse((70, 54, 84, 68), fill=(239, 68, 68))
    draw.ellipse((92, 54, 106, 68), fill=(245, 158, 11))
    draw.ellipse((114, 54, 128, 68), fill=(16, 185, 129))

    draw.text((150, 50), title, fill=(15, 23, 42), font=font_lg)
    return im, draw

w, h = 1100, 700

# ==========================================
# 1. CREATOR & AFFILIATE OUTREACH MACHINE
# ==========================================
im1, draw1 = create_base_canvas(w, h, "TIKTOK AFFILIATE ENGINE - 500+ CREATOR SEEDING MACHINE")

# Top KPI Badges
draw_card(draw1, (70, 120, 365, 230), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw1.text((90, 135), "MONTHLY CREATOR SEEDING", fill=(13, 148, 136), font=font_sm)
draw1.text((90, 158), "500+ CREATORS", fill=(15, 23, 42), font=font_xl)
draw1.text((90, 195), "120 - 300+ tagged shoppable videos", fill=(13, 148, 136), font=font_bold)

draw_card(draw1, (390, 120, 710, 230), fill=(255, 241, 242), outline=(254, 205, 211), radius=16)
draw1.text((410, 135), "AFFILIATE REVENUE SHARE", fill=(225, 29, 72), font=font_sm)
draw1.text((410, 158), "40% - 65% GMV", fill=(15, 23, 42), font=font_xl)
draw1.text((410, 195), "Organic commission-based viral engine", fill=(225, 29, 72), font=font_bold)

draw_card(draw1, (735, 120, 1030, 230), fill=(245, 243, 255), outline=(221, 214, 254), radius=16)
draw1.text((755, 135), "SAMPLE OUTREACH ROI", fill=(124, 58, 237), font=font_sm)
draw1.text((755, 158), "5.4X SAMPLE ROI", fill=(15, 23, 42), font=font_xl)
draw1.text((755, 195), "Over 82% sample posting compliance", fill=(124, 58, 237), font=font_bold)

# Creator Pipeline Status
draw_card(draw1, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw1.text((95, 275), "Bespoke Creator Affiliate Workflow", fill=(15, 23, 42), font=font_lg)

steps1 = [
    ("Niche Discovery & Screening", "Screening by follower engagement, past video GMV, and US/UK demographics", "500+ Screened", (13, 148, 136)),
    ("Bespoke PR Gift Box Seeding", "Dispatching premium sample packages with high-converting video script guides", "82% Post Rate", (22, 163, 74)),
    ("Dynamic Tiered Commissioning", "15% - 25% commission plans incentivizing creators with top sales volume", "Tiered Plans", (255, 107, 0)),
    ("Orange Cart Compliance Verification", "Verifying TikTok policy adherence and correct product showcase tagging", "100% Policy Pass", (37, 99, 235))
]
for idx, (title, desc, tag, col) in enumerate(steps1):
    y_b = 320 + idx * 78
    draw_card(draw1, (95, y_b, 1005, y_b + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw1.text((120, y_b + 12), title, fill=(15, 23, 42), font=font_bold)
    draw1.text((120, y_b + 34), desc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw1, (830, y_b+15, 985, y_b+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw1.text((845, y_b + 22), tag, fill=col, font=font_bold)

im1.save(os.path.join(out_dir, "tiktok-creator-machine.webp"), "WEBP", quality=95)
print("Saved tiktok-creator-machine.webp")


# ==========================================
# 2. LIVE STREAM COMMERCE & STUDIO OPERATIONS
# ==========================================
im2, draw2 = create_base_canvas(w, h, "RANKMOOR LIVE - TURNKEY LIVE STREAM SHOPPING BROADCASTS")

# Top KPI Badges
draw_card(draw2, (70, 120, 365, 230), fill=(255, 241, 242), outline=(254, 205, 211), radius=16)
draw2.text((90, 135), "AVERAGE LIVE GMV", fill=(225, 29, 72), font=font_sm)
draw2.text((90, 158), "$4.5K - $35K / LIVE", fill=(15, 23, 42), font=font_xl)
draw2.text((90, 195), "High-energy real-time flash sales", fill=(225, 29, 72), font=font_bold)

draw_card(draw2, (390, 120, 710, 230), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw2.text((410, 135), "VIEWER-TO-BUYER CVR", fill=(13, 148, 136), font=font_sm)
draw2.text((410, 158), "8.5% - 14.2% CVR", fill=(15, 23, 42), font=font_xl)
draw2.text((410, 195), "Live host product demonstration impact", fill=(13, 148, 136), font=font_bold)

draw_card(draw2, (735, 120, 1030, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw2.text((755, 135), "LIVE WATCH TIME", fill=(234, 88, 12), font=font_sm)
draw2.text((755, 158), "+320% RETENTION", fill=(15, 23, 42), font=font_xl)
draw2.text((755, 195), "Above category benchmark watch duration", fill=(234, 88, 12), font=font_bold)

# Live Studio Interface Mockup
draw_card(draw2, (70, 255, 550, 660), fill=(15, 23, 42), outline=(30, 41, 59), radius=16)
draw_card(draw2, (95, 280, 210, 315), fill=(239, 68, 68), radius=8)
draw2.text((115, 290), "LIVE NOW", fill=(255, 255, 255), font=font_bold)
draw2.text((230, 290), "3,480 Viewers in Broadcast", fill=(255, 255, 255), font=font_md)

# Stream Frame inside
draw_card(draw2, (95, 335, 525, 550), fill=(30, 41, 59), radius=12)
draw2.text((120, 360), "Dedicated Live Shopping Host", fill=(255, 255, 255), font=font_bold)
draw2.text((120, 390), "Showing product live demonstration & sizing", fill=(148, 163, 184), font=font_sm)

draw_card(draw2, (120, 440, 500, 520), fill=(255, 107, 0), radius=10)
draw2.text((140, 455), "FLASH DROP: 50 Units Left! Save 30%", fill=(255, 255, 255), font=font_bold)
draw2.text((140, 485), "Pinned to Cart - Tap to Checkout in 1-Click", fill=(254, 243, 199), font=font_sm)

draw2.text((95, 580), "Live Chat: 'Just ordered 2 pairs!', 'Love this color!'", fill=(148, 163, 184), font=font_sm)
draw2.text((95, 615), "Host handles live objections & triggers real-time FOMO", fill=(52, 211, 153), font=font_bold)

# Right Operations List
draw_card(draw2, (580, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw2.text((605, 275), "Turnkey Studio Infrastructure", fill=(15, 23, 42), font=font_lg)

ops = [
    ("4K Multi-Camera & Pro Audio", "High fidelity studio switching, clean mics, and ring lighting"),
    ("Run-of-Show Scripting", "Segmented countdown drops, giveaways, and bundle reveals"),
    ("Real-Time Chat Moderation", "Pinning featured SKUs, answering FAQs, and deleting spam"),
    ("Live Clip Repurposing", "Top selling 30s broadcast moments cut into shoppable ads")
]
for idx, (otitle, odesc) in enumerate(ops):
    y_o = 330 + idx * 75
    draw_card(draw2, (605, y_o, 1005, y_o + 64), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw2.text((625, y_o + 12), otitle, fill=(15, 23, 42), font=font_bold)
    draw2.text((625, y_o + 34), odesc, fill=(100, 116, 139), font=font_sm)

im2.save(os.path.join(out_dir, "tiktok-live-studio.webp"), "WEBP", quality=95)
print("Saved tiktok-live-studio.webp")


# ==========================================
# 3. TIKTOK SHOP ARCHITECTURE & SEAMLESS AMAZON SYNC
# ==========================================
im3, draw3 = create_base_canvas(w, h, "RANKMOOR BRIDGE - TIKTOK SHOP ARCHITECTURE & AMAZON MCF SYNC")

# Top KPI Badges
draw_card(draw3, (70, 120, 365, 230), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw3.text((90, 135), "ONBOARDING SLA", fill=(13, 148, 136), font=font_sm)
draw3.text((90, 158), "< 5 DAYS TO LIVE", fill=(15, 23, 42), font=font_xl)
draw3.text((90, 195), "Full US/UK Merchant Center verified", fill=(13, 148, 136), font=font_bold)

draw_card(draw3, (390, 120, 710, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw3.text((410, 135), "AMAZON MCF INVENTORY SYNC", fill=(22, 163, 74), font=font_sm)
draw3.text((410, 158), "99.9% ZERO STOCKOUT", fill=(15, 23, 42), font=font_xl)
draw3.text((410, 195), "Automated multi-channel stock sync", fill=(22, 163, 74), font=font_bold)

draw_card(draw3, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw3.text((755, 135), "LATE DISPATCH SLA", fill=(37, 99, 235), font=font_sm)
draw3.text((755, 158), "< 1.5% DISPATCH", fill=(15, 23, 42), font=font_xl)
draw3.text((755, 195), "Adhering to strict TikTok 48h fulfillment rules", fill=(37, 99, 235), font=font_bold)

# Bridge Flow Diagram
draw_card(draw3, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw3.text((95, 275), "Unified Multi-Channel Inventory Bridge", fill=(15, 23, 42), font=font_lg)

bridge_steps = [
    ("Customer Orders on TikTok Shop", "Shopper converts via video, live broadcast, or shop tab", "Order Received", (13, 148, 136)),
    ("Instant API Multi-Channel Sync", "Order details transmitted immediately to Amazon FBA warehouse system", "API Hook (0.2s)", (37, 99, 235)),
    ("Amazon Picks & Packs (Blank Box)", "Fulfillment via Multi-Channel Fulfillment (MCF) in unbranded neutral boxes", "Amazon MCF", (255, 107, 0)),
    ("Real-Time Tracking Fed to TikTok", "UPS/USPS tracking numbers automatically populated, keeping SLA perfect", "Dispatched <24h", (22, 163, 74))
]
for idx, (btitle, bdesc, bstatus, bcol) in enumerate(bridge_steps):
    y_br = 320 + idx * 78
    draw_card(draw3, (95, y_br, 1005, y_br + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw3.text((120, y_br + 12), btitle, fill=(15, 23, 42), font=font_bold)
    draw3.text((120, y_br + 34), bdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw3, (830, y_br+15, 985, y_br+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw3.text((845, y_br + 22), bstatus, fill=bcol, font=font_bold)

im3.save(os.path.join(out_dir, "tiktok-amazon-mcf-sync.webp"), "WEBP", quality=95)
print("Saved tiktok-amazon-mcf-sync.webp")


# ==========================================
# 4. VIRAL SHORT-FORM UGC & CONTENT PRODUCTION
# ==========================================
im4, draw4 = create_base_canvas(w, h, "RANKMOOR CREATIVE - VIRAL 9:16 SHORT-FORM UGC PRODUCTION")

# Top KPI Badges
draw_card(draw4, (70, 120, 365, 230), fill=(255, 241, 242), outline=(254, 205, 211), radius=16)
draw4.text((90, 135), "3-SECOND HOOK RETENTION", fill=(225, 29, 72), font=font_sm)
draw4.text((90, 158), "> 42% RETENTION", fill=(15, 23, 42), font=font_xl)
draw4.text((90, 195), "Stopping thumb scroll on For You Page", fill=(225, 29, 72), font=font_bold)

draw_card(draw4, (390, 120, 710, 230), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw4.text((410, 135), "MONTHLY BESPOKE ASSETS", fill=(13, 148, 136), font=font_sm)
draw4.text((410, 158), "20 - 60 VIDEOS / MO", fill=(15, 23, 42), font=font_xl)
draw4.text((410, 195), "High-volume testing of organic hooks", fill=(13, 148, 136), font=font_bold)

draw_card(draw4, (735, 120, 1030, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw4.text((755, 135), "CLICK-TO-CART CTR", fill=(234, 88, 12), font=font_sm)
draw4.text((755, 158), "4.8% - 9.1% CTR", fill=(15, 23, 42), font=font_xl)
draw4.text((755, 195), "Direct click-through to yellow shopping cart", fill=(234, 88, 12), font=font_bold)

# UGC Mockup Panel
draw_card(draw4, (70, 255, 500, 660), fill=(15, 23, 42), radius=16)
draw2.text((95, 275), "9:16 Vertical Creative Architecture", fill=(255, 255, 255), font=font_lg)

draw_card(draw4, (95, 310, 475, 410), fill=(30, 41, 59), radius=10)
draw4.text((115, 325), "0:00 - 0:03 | VISUAL HOOK", fill=(255, 107, 0), font=font_bold)
draw4.text((115, 350), "'If your skin does this, stop scrolling...'", fill=(255, 255, 255), font=font_md)
draw4.text((115, 375), "High contrast demonstration creates instant intrigue", fill=(148, 163, 184), font=font_sm)

draw_card(draw4, (95, 430, 475, 530), fill=(30, 41, 59), radius=10)
draw4.text((115, 445), "0:04 - 0:22 | SOCIAL PROOF & BENEFIT", fill=(13, 148, 136), font=font_bold)
draw4.text((115, 470), "Real creator unboxing + before/after results", fill=(255, 255, 255), font=font_md)
draw4.text((115, 495), "Native trending audio + animated bold captions", fill=(148, 163, 184), font=font_sm)

draw_card(draw4, (95, 550, 475, 635), fill=(255, 107, 0), radius=10)
draw4.text((115, 565), "0:23 - 0:30 | CART CALL-TO-ACTION", fill=(255, 255, 255), font=font_bold)
draw4.text((115, 590), "Tap the yellow cart below before it sells out", fill=(254, 243, 199), font=font_bold)

# Right Framework
draw_card(draw4, (530, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw4.text((555, 275), "Hook Variation Frameworks", fill=(15, 23, 42), font=font_lg)

hooks = [
    ("Curiosity & ASMR Hooks", "Visual or auditory pattern interrupts that pause mindless scrolling"),
    ("Problem-Solution Dramatic Shift", "Highlighting painful customer frustration solved in 5 seconds"),
    ("TikTok Made Me Buy It Proof", "Social validation leveraging viral unboxing & authentic reactions"),
    ("Flash Price Disbelief", "'I can't believe this is on TikTok Shop right now' anchor")
]
for idx, (htitle, hdesc) in enumerate(hooks):
    y_h = 330 + idx * 75
    draw_card(draw4, (555, y_h, 1005, y_h + 64), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw4.text((575, y_h + 12), htitle, fill=(15, 23, 42), font=font_bold)
    draw4.text((575, y_h + 34), hdesc, fill=(100, 116, 139), font=font_sm)

im4.save(os.path.join(out_dir, "tiktok-viral-ugc.webp"), "WEBP", quality=95)
print("Saved tiktok-viral-ugc.webp")


# ==========================================
# 5. TIKTOK ADS & GMV MAX SCALING ENGINE
# ==========================================
im5, draw5 = create_base_canvas(w, h, "RANKMOOR ADS - TIKTOK SPARK ADS & GMV MAX SCALING")

# Top KPI Badges
draw_card(draw5, (70, 120, 365, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw5.text((90, 135), "BLENDED CAMPAIGN ROAS", fill=(22, 163, 74), font=font_sm)
draw5.text((90, 158), "4.85X ROAS", fill=(15, 23, 42), font=font_xl)
draw5.text((90, 195), "Measured across Spark Ads & GMV Max", fill=(22, 163, 74), font=font_bold)

draw_card(draw5, (390, 120, 710, 230), fill=(236, 253, 253), outline=(165, 243, 243), radius=16)
draw5.text((410, 135), "COST PER ACQUISITION (CPA)", fill=(13, 148, 136), font=font_sm)
draw5.text((410, 158), "-32% LOWER CPA", fill=(15, 23, 42), font=font_xl)
draw5.text((410, 195), "Versus traditional Meta ad benchmarks", fill=(13, 148, 136), font=font_bold)

draw_card(draw5, (735, 120, 1030, 230), fill=(245, 243, 255), outline=(221, 214, 254), radius=16)
draw5.text((755, 135), "SCALING CAPACITY", fill=(124, 58, 237), font=font_sm)
draw5.text((755, 158), "$50,000+ / DAY", fill=(15, 23, 42), font=font_xl)
draw5.text((755, 195), "Automated value bidding capabilities", fill=(124, 58, 237), font=font_bold)

# Spark Ads Diagram
draw_card(draw5, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw5.text((95, 275), "Algorithmic Ad Amplification Loop", fill=(15, 23, 42), font=font_lg)

ad_steps = [
    ("Identify Breakout Organic Video", "Creator post shows early high CTR and >6% organic conversion rate", "Step 1: Signal", (13, 148, 136)),
    ("Secure Creator Spark Code Authorization", "Whitelisting creator's profile handle; keeping all organic likes & comments", "Step 2: Whitelist", (37, 99, 235)),
    ("Deploy GMV Max Automated Scaling", "TikTok machine-learning engine targets high-spending shopping audiences", "Step 3: Scaling", (255, 107, 0)),
    ("7-Day Creative Refresh Cycle", "Rotating new creator video hooks to prevent ad fatigue and keep ROAS high", "Step 4: Fatigue Defense", (22, 163, 74))
]
for idx, (atitle, adesc, astep, acol) in enumerate(ad_steps):
    y_ad = 320 + idx * 78
    draw_card(draw5, (95, y_ad, 1005, y_ad + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw5.text((120, y_ad + 12), atitle, fill=(15, 23, 42), font=font_bold)
    draw5.text((120, y_ad + 34), adesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw5, (830, y_ad+15, 985, y_ad+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw5.text((845, y_ad + 22), astep, fill=acol, font=font_bold)

im5.save(os.path.join(out_dir, "tiktok-ads-gmv-max.webp"), "WEBP", quality=95)
print("Saved tiktok-ads-gmv-max.webp")


# ==========================================
# 6. OMNICHANNEL SYNERGY: THE AMAZON + TIKTOK FLYWHEEL
# ==========================================
im6, draw6 = create_base_canvas(w, h, "RANKMOOR FLYWHEEL - OMNICHANNEL TIKTOK & AMAZON SYNERGY")

# Top KPI Badges
draw_card(draw6, (70, 120, 365, 230), fill=(255, 247, 237), outline=(254, 215, 170), radius=16)
draw6.text((90, 135), "AMAZON BRAND SEARCH LIFT", fill=(234, 88, 12), font=font_sm)
draw6.text((90, 158), "+340% SURGE", fill=(15, 23, 42), font=font_xl)
draw6.text((90, 195), "During coordinated TikTok creator bursts", fill=(234, 88, 12), font=font_bold)

draw_card(draw6, (390, 120, 710, 230), fill=(240, 253, 244), outline=(187, 247, 208), radius=16)
draw6.text((410, 135), "BLENDED CAC REDUCTION", fill=(22, 163, 74), font=font_sm)
draw6.text((410, 158), "-28.4% SAVED", fill=(15, 23, 42), font=font_xl)
draw6.text((410, 195), "Lowering customer acquisition across channels", fill=(22, 163, 74), font=font_bold)

draw_card(draw6, (735, 120, 1030, 230), fill=(239, 246, 255), outline=(191, 219, 254), radius=16)
draw6.text((755, 135), "AMAZON ATTRIBUTION BONUS", fill=(37, 99, 235), font=font_sm)
draw6.text((755, 158), "10% CASH REBATE", fill=(15, 23, 42), font=font_xl)
draw6.text((755, 195), "Amazon pays brand 10% on external traffic", fill=(37, 99, 235), font=font_bold)

# Flywheel Synergy Panel
draw_card(draw6, (70, 255, 1030, 660), fill=(248, 250, 252), outline=(226, 232, 240), radius=16)
draw6.text((95, 275), "The Closed-Loop Omnichannel Engine", fill=(15, 23, 42), font=font_lg)

flywheel_steps = [
    ("TikTok Impulse Discovery", "500+ creators spark mass viral curiosity for the brand", "Channel 1: TikTok", (13, 148, 136)),
    ("Amazon Branded Search Flood", "Prime members search brand on Amazon, triggering algorithm velocity", "+340% Search", (255, 107, 0)),
    ("Organic #1 Rank & BuyBox Lock", "Amazon awards Best Seller badges; organic non-ad revenue explodes", "#1 Bestseller", (22, 163, 74)),
    ("Bulk Factory Margin Expansion", "Combined volume enables Tier-1 factory unit cost drops of -28%", "Higher Profits", (37, 99, 235))
]
for idx, (ftitle, fdesc, fstatus, fcol) in enumerate(flywheel_steps):
    y_fl = 320 + idx * 78
    draw_card(draw6, (95, y_fl, 1005, y_fl + 66), fill=(255, 255, 255), outline=(226, 232, 240), radius=10)
    draw6.text((120, y_fl + 12), ftitle, fill=(15, 23, 42), font=font_bold)
    draw6.text((120, y_fl + 34), fdesc, fill=(100, 116, 139), font=font_sm)
    draw_card(draw6, (830, y_fl+15, 985, y_fl+45), fill=(240, 253, 244), outline=(187, 247, 208), radius=6)
    draw6.text((845, y_fl + 22), fstatus, fill=fcol, font=font_bold)

im6.save(os.path.join(out_dir, "tiktok-omnichannel-flywheel.webp"), "WEBP", quality=95)
print("Saved tiktok-omnichannel-flywheel.webp")
