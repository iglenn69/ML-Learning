const draw = {};
draw.path = (ctx, path, color="black") => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for (const p of path) {
        ctx.lineTo(...p);
    }
    ctx.stroke();
};