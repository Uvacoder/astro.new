class PixelatedCorners {
  static get inputProperties() {
    return ["--corner-radius", '--pixel-size'];
  }
  paint(ctx, size, styleMap) {
    ctx.fillStyle = "black";
    const corner = styleMap.get("--corner-radius").toString();
    const px = styleMap.get("--pixel-size").toString();
    const w = size.width;
    const h = size.height;

    ctx.fillRect(corner, 0, w - corner * 2, h);

    for (let i = 0; i < Math.round(corner / px); i++) {
      let v = px * i;
      let x = v;
      let y = corner - v;
      ctx.fillRect(x, y, px, h - corner * 2 + (v * 2));
    }
    for (let i = 0; i < Math.round(corner / px); i++) {
      let v = px * i;
      let x = w - (px * (i + 1));
      let y = corner - v;
      ctx.fillRect(x, y, px, h - corner * 2 + (v * 2));
    }
  }
}

registerPaint("pixel", PixelatedCorners);
