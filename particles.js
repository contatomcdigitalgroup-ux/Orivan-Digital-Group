const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let W, H;

const CONFIG = {
    color: '0, 230, 118',
    streams: 2,
    particlesPerStream: 55,
    amplitude: 70,
    frequency: 0.018,
    speed: 0.4,
};

const streams = [];

class StreamParticle {
    constructor(streamIndex, phaseOffset) {
        this.streamIndex = streamIndex;
        this.phaseOffset = phaseOffset;
        this.reset(true);
    }

    getBaseX() {
        return W / 2;
    }

    reset(initial = false) {
        this.y = initial ? Math.random() * H : -10;
        this.wavePhase = this.y * CONFIG.frequency + this.phaseOffset;
        this.speed = CONFIG.speed * (0.75 + Math.random() * 0.5);
        this.alpha = 0.06 + Math.random() * 0.14;
        this.r = 1.2 + Math.random() * 1.8;
    }

    update() {
        this.y += this.speed;
        this.wavePhase = this.y * CONFIG.frequency + this.phaseOffset;
        this.x = this.getBaseX() + CONFIG.amplitude * Math.sin(this.wavePhase);

        if (this.y > H + 20) this.reset();
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${CONFIG.color}, 0.4)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CONFIG.color}, ${this.alpha})`;
        ctx.fill();
        ctx.restore();
    }
}

function drawStreamLines(particles, phaseOffset) {
    const sorted = [...particles].sort((a, b) => a.y - b.y);

    for (let i = 0; i < sorted.length - 1; i++) {
        const a = sorted[i];
        const b = sorted[i + 1];
        const dist = b.y - a.y;

        if (dist > 60) continue;

        const opacity = (1 - dist / 60) * 0.06;

        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${CONFIG.color}, 0.4)`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${CONFIG.color}, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
    }
}

function init() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

    streams.length = 0;

    // Two streams: offset by π so they cross and interweave
    const phaseOffsets = [0, Math.PI];
    for (let s = 0; s < CONFIG.streams; s++) {
        const particles = [];
        for (let i = 0; i < CONFIG.particlesPerStream; i++) {
            particles.push(new StreamParticle(s, phaseOffsets[s]));
        }
        streams.push({ particles, phaseOffset: phaseOffsets[s] });
    }
}

function loop() {
    ctx.clearRect(0, 0, W, H);

    for (const stream of streams) {
        stream.particles.forEach(p => p.update());
        drawStreamLines(stream.particles, stream.phaseOffset);
        stream.particles.forEach(p => p.draw());
    }

    requestAnimationFrame(loop);
}

window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

    for (const stream of streams) {
        stream.particles.forEach(p => {
            if (p.y > H) p.y = Math.random() * H;
        });
    }
});

init();
loop();