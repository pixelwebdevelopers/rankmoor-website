import numpy as np
from PIL import Image

orig_path = r'd:\pixel web developers\Clients\Rankmoor Website\WhatsApp Image 2026-10-28 at 4.34.31 PM.jpeg'
im = Image.open(orig_path).convert('RGBA')
arr = np.array(im)

# Original size: height=805, width=1600, channels=4
# From x=0 to x=300, it's solid [252, 245, 235] (#FCF5EB).
# Let's fade alpha smoothly from 0 at x=280 to 255 at x=540 using smooth cosine ramp.
# Also for all x <= 320, replace RGB with exact [252, 245, 235] so there's zero color deviation.
fade_start = 280
fade_end = 560
fade_width = fade_end - fade_start

for x in range(fade_end):
    if x <= fade_start:
        alpha = 0
        arr[:, x, 0] = 252
        arr[:, x, 1] = 245
        arr[:, x, 2] = 235
    else:
        t = (x - fade_start) / fade_width
        # cosine ease in/out
        alpha = int(255 * (0.5 - 0.5 * np.cos(t * np.pi)))
        if x < 360:
            # blend RGB towards target [252, 245, 235]
            w_bg = 1.0 - (x - fade_start) / (360 - fade_start)
            arr[:, x, 0] = np.uint8(arr[:, x, 0] * (1 - w_bg) + 252 * w_bg)
            arr[:, x, 1] = np.uint8(arr[:, x, 1] * (1 - w_bg) + 245 * w_bg)
            arr[:, x, 2] = np.uint8(arr[:, x, 2] * (1 - w_bg) + 235 * w_bg)
    arr[:, x, 3] = alpha

out = Image.fromarray(arr)
out.save(r'd:\pixel web developers\Clients\Rankmoor Website\rankmoor-web\public\assets\hero\hero-client-graphic.webp', 'WEBP', quality=95)
print('Updated hero-client-graphic.webp with ultra-smooth dissolve')
