const fs = require('fs');
const sharp = require('sharp');
const topojson = require('topojson-client');

const topo = JSON.parse(fs.readFileSync('c:/Users/Pratham Maheshwari/Documents/medwebsite/frontend/public/world-110m.json', 'utf8'));

// Convert TopoJSON to GeoJSON feature collection
const geojson = topojson.feature(topo, topo.objects.countries);

const W = 2048, H = 1024;
function project(lng, lat) {
  const x = ((lng + 180) / 360) * W;
  const y = ((90 - lat) / 180) * H;
  return [x, y];
}

let pathsSvg = '';

function renderCoords(coords) {
  let d = '';
  for (let i = 0; i < coords.length; i++) {
    const [x, y] = project(coords[i][0], coords[i][1]);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  d += 'Z';
  // StratExecute Style: Warm platinum-stone landmass with delicate warm-gray country borders
  return `<path d="${d}" fill="#EFECE6" stroke="#D1CCC4" stroke-width="0.9" stroke-linejoin="round" />\n`;
}

for (const feature of geojson.features) {
  const { geometry } = feature;
  if (!geometry) continue;

  if (geometry.type === 'Polygon') {
    for (const ring of geometry.coordinates) {
      if (ring.length > 2) {
        pathsSvg += renderCoords(ring);
      }
    }
  } else if (geometry.type === 'MultiPolygon') {
    for (const poly of geometry.coordinates) {
      for (const ring of poly) {
        if (ring.length > 2) {
          pathsSvg += renderCoords(ring);
        }
      }
    }
  }
}

// Draw Graticule grid in subtle dashed warm gray/stone lines
let graticuleSvg = '';
for (let lat = -75; lat <= 75; lat += 15) {
  const y = ((90 - lat) / 180) * H;
  graticuleSvg += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#E5DFD5" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.9" />\n`;
}
for (let lng = -180; lng <= 180; lng += 15) {
  const x = ((lng + 180) / 360) * W;
  graticuleSvg += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#E5DFD5" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.9" />\n`;
}

// 5-Point Star Generator
function createStarSvg(cx, cy, r, fill, stroke) {
  let points = '';
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.44;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    points += `${x.toFixed(1)},${y.toFixed(1)} `;
  }
  return `<polygon points="${points}" fill="${fill}" stroke="${stroke}" stroke-width="1.0" />`;
}

// Key international export destination hubs directly on the globe
const markers = [
  { name: 'Canada', lat: 56, lng: -106, isOrigin: false },
  { name: 'United States', lat: 39, lng: -98, isOrigin: false },
  { name: 'Mexico', lat: 23, lng: -102, isOrigin: false },
  { name: 'Brazil', lat: -13, lng: -52, isOrigin: false },
  { name: 'Europe', lat: 50, lng: 10, isOrigin: false },
  { name: 'India (HQ)', lat: 21, lng: 78, isOrigin: true },
  { name: 'Japan', lat: 36, lng: 138, isOrigin: false },
  { name: 'Australia', lat: -25, lng: 134, isOrigin: false },
  { name: 'UAE', lat: 24, lng: 54, isOrigin: false },
  { name: 'South Africa', lat: -30, lng: 25, isOrigin: false },
];

let markersSvg = '';
for (const m of markers) {
  const [x, y] = project(m.lng, m.lat);
  const isOrigin = m.isOrigin;
  // StratExecute Signature Vibrant Coral / Orange Pins
  const starFill = isOrigin ? '#FF5500' : '#FF7A1A';
  const starStroke = '#FFFFFF';
  const haloFill = isOrigin ? '#FF7A1A' : '#FFA726';
  const labelColor = '#1B2632'; // Crisp Charcoal for high contrast

  markersSvg += `<g>\n`;
  // Warm glowing outer beacon ring
  markersSvg += `  <circle cx="${x}" cy="${y}" r="${isOrigin ? 22 : 16}" fill="${haloFill}" opacity="0.25" />\n`;
  markersSvg += `  <circle cx="${x}" cy="${y}" r="${isOrigin ? 13 : 9}" fill="${haloFill}" opacity="0.55" />\n`;
  // Star icon
  markersSvg += `  ${createStarSvg(x, y, isOrigin ? 8.5 : 7, starFill, starStroke)}\n`;
  // Country label text with thick white halo for crisp readability
  markersSvg += `  <text x="${x}" y="${y - 13}" text-anchor="middle" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="6" stroke-linejoin="round" paint-order="stroke">${m.name}</text>\n`;
  markersSvg += `  <text x="${x}" y="${y - 13}" text-anchor="middle" font-family="'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="900" fill="${labelColor}">${m.name}</text>\n`;
  markersSvg += `</g>\n`;
}

// Pure crisp white base ocean with warm continents and orange pins (StratExecute style)
const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#FFFFFF" />
  ${graticuleSvg}
  ${pathsSvg}
  ${markersSvg}
</svg>`;

fs.writeFileSync('c:/Users/Pratham Maheshwari/Documents/medwebsite/frontend/public/earth-clean.svg', fullSvg);

sharp(Buffer.from(fullSvg))
  .png({ quality: 100 })
  .toFile('c:/Users/Pratham Maheshwari/Documents/medwebsite/frontend/public/earth-clean.png')
  .then(() => console.log('Successfully generated Stratexecute-theme earth-clean.png!'))
  .catch(err => console.error('Sharp err:', err));
