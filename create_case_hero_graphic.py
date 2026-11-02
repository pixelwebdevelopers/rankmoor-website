import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

out_path = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\graphics\case-studies-hero.webp"

app_path = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\cases\amazon-app-20m-sales.webp"
ppc_path = r"d:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\cases\amazon-ppc-7m-sales-16acos.webp"

font_title = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 22)
font_bold = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 15)
font_num = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 26)
font_sm = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 13)

w, h = 1200, 780
im = Image.new("RGBA", (w, h), (250, 247, 242, 255))
draw = ImageDraw.Draw(im)

# Grid lines
for x in range(0, w, 40):
    draw.line([(x, 0), (x, h)], fill=(238, 233, 224, 255), width=1)
for y in range(0, h, 40):
    draw.line([(0, y), (w, y)], fill=(238, 233, 224, 255), width=1)

# Outer card frame
draw.rounded_rectangle((30, 20, w-30, h-20), radius=24, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)

# Top Bar
draw.rounded_rectangle((30, 20, w-30, 80), radius=24, fill=(248, 250, 252, 255), outline=(226, 232, 240, 255), width=1)
draw.rectangle([(30, 60), (w-30, 80)], fill=(248, 250, 252, 255))

# Dots
draw.ellipse((55, 42, 69, 56), fill=(239, 68, 68, 255))
draw.ellipse((77, 42, 91, 56), fill=(245, 158, 11, 255))
draw.ellipse((99, 42, 113, 56), fill=(16, 185, 129, 255))

draw.text((135, 38), "VERIFIED PERFORMANCE AUDIT - SELLER CENTRAL & ADS CONSOLE", fill=(15, 23, 42, 255), font=font_bold)

# Top Right Verified Badge
draw.rounded_rectangle((w-320, 32, w-60, 68), radius=18, fill=(236, 253, 245, 255), outline=(167, 243, 208, 255), width=1)
draw.text((w-305, 41), "VERIFIED 100% REAL SELLER DATA", fill=(6, 95, 70, 255), font=font_bold)

# Desktop PPC Screenshot (Positioned Left/Center)
ppc_img = Image.open(ppc_path).convert("RGBA")
# Target size for PPC: 720 x 360
ppc_resized = ppc_img.resize((740, int(740 * ppc_img.height / ppc_img.width)), Image.Resampling.LANCZOS)

# Card frame for PPC
ppc_x = 60
ppc_y = 110
ppc_w = 760
ppc_h = ppc_resized.height + 60

draw.rounded_rectangle((ppc_x, ppc_y, ppc_x + ppc_w, ppc_y + ppc_h), radius=16, fill=(248, 250, 252, 255), outline=(203, 213, 225, 255), width=2)
# Browser inner bar
draw.rounded_rectangle((ppc_x, ppc_y, ppc_x + ppc_w, ppc_y + 40), radius=16, fill=(241, 245, 249, 255), outline=(226, 232, 240, 255), width=1)
draw.rectangle([(ppc_x, ppc_y + 25), (ppc_x + ppc_w, ppc_y + 40)], fill=(241, 245, 249, 255))
draw.text((ppc_x + 20, ppc_y + 12), "Amazon Advertising Campaign Manager - 16.00% ACOS on $7.37M Sales", fill=(51, 65, 85, 255), font=font_bold)

# Paste PPC
im.paste(ppc_resized, (ppc_x + 10, ppc_y + 50), ppc_resized)

# Mobile App Screenshot (Overlapping Right side)
app_img = Image.open(app_path).convert("RGBA")
# Target phone size: 310 x 620
app_h_target = 600
app_w_target = int(app_img.width * app_h_target / app_img.height)
app_resized = app_img.resize((app_w_target, app_h_target), Image.Resampling.LANCZOS)

# Phone Mockup frame
phone_x = w - 370
phone_y = 100
phone_w = app_w_target + 24
phone_h = app_h_target + 24

# Outer shadow / glow
draw.rounded_rectangle((phone_x - 4, phone_y - 4, phone_x + phone_w + 4, phone_y + phone_h + 4), radius=36, fill=(15, 23, 42, 40))
draw.rounded_rectangle((phone_x, phone_y, phone_x + phone_w, phone_y + phone_h), radius=32, fill=(15, 23, 42, 255), outline=(71, 85, 105, 255), width=3)

# Paste Phone Screen
im.paste(app_resized, (phone_x + 12, phone_y + 12), app_resized)

# Floating KPI Badge 1 (Lower Left)
badge1_x, badge1_y = 60, h - 230
draw.rounded_rectangle((badge1_x, badge1_y, badge1_x + 360, badge1_y + 90), radius=16, fill=(255, 255, 255, 255), outline=(255, 107, 0, 255), width=2)
draw.text((badge1_x + 20, badge1_y + 15), "DOCUMENTED ANNUAL VOLUME", fill=(100, 116, 139, 255), font=font_sm)
draw.text((badge1_x + 20, badge1_y + 38), "$20,230,000+", fill=(255, 107, 0, 255), font=font_num)
draw.rounded_rectangle((badge1_x + 250, badge1_y + 42, badge1_x + 340, badge1_y + 72), radius=8, fill=(255, 247, 237, 255), outline=(254, 215, 170, 255), width=1)
draw.text((badge1_x + 260, badge1_y + 48), "+200% YoY", fill=(224, 83, 0, 255), font=font_bold)

# Floating KPI Badge 2 (Center Bottom)
badge2_x, badge2_y = 440, h - 230
draw.rounded_rectangle((badge2_x, badge2_y, badge2_x + 340, badge2_y + 90), radius=16, fill=(255, 255, 255, 255), outline=(16, 185, 129, 255), width=2)
draw.text((badge2_x + 20, badge2_y + 15), "VERIFIED BLENDED PPC ACOS", fill=(100, 116, 139, 255), font=font_sm)
draw.text((badge2_x + 20, badge2_y + 38), "16.00%", fill=(16, 185, 129, 255), font=font_num)
draw.rounded_rectangle((badge2_x + 160, badge2_y + 42, badge2_x + 320, badge2_y + 72), radius=8, fill=(236, 253, 245, 255), outline=(167, 243, 208, 255), width=1)
draw.text((badge2_x + 172, badge2_y + 48), "$7.37M In Sales", fill=(6, 95, 70, 255), font=font_bold)

# Bottom Trust Strip
draw.rounded_rectangle((60, h - 110, w - 60, h - 50), radius=12, fill=(248, 250, 252, 255), outline=(226, 232, 240, 255), width=1)
draw.text((80, h - 93), "• Verified Amazon Seller Central Data", fill=(71, 85, 105, 255), font=font_bold)
draw.text((430, h - 93), "• Zero Fabricated Metrics", fill=(71, 85, 105, 255), font=font_bold)
draw.text((710, h - 93), "• Audited by US & UK Institutional Aggregators", fill=(71, 85, 105, 255), font=font_bold)

im.convert("RGB").save(out_path, "WEBP", quality=95)
print("Saved case-studies-hero.webp successfully!")
