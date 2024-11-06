module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 768, 1280],
    minHeight: 1024,
    percyCSS: `
      .animate-* { animation: none !important; }
      .transition-* { transition: none !important; }
    `,
  },
} 