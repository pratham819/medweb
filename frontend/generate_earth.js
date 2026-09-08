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
  return `<path d="${d}" fill="#EDE5D8" stroke="#C8BCAF" stroke-width="1.2" />\n`;
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

// Draw Graticule grid
let graticuleSvg = '';
for (let lat = -75; lat <= 75; lat += 15) {
  const y = ((90 - lat) / 180) * H;
  graticuleSvg += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#DCE8F2" stroke-width="1" stroke-dasharray="6 4" />\n`;
}
for (let lng = -180; lng <= 180; lng += 15) {
  const x = ((lng + 180) / 360) * W;
  graticuleSvg += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#DCE8F2" stroke-width="1" stroke-dasharray="6 4" />\n`;
}

// 5-Point Star Generator
function createStarSvg(cx, cy, r, fill, stroke) {
  let points = '';
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.45;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    points += `${x.toFixed(1)},${y.toFixed(1)} `;
  }
  return `<polygon points="${points}" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />`;
}

// Key international market countries (matching STRATEXECUTE reference style)
const markers = [
  { name: 'Canada', lat: 56, lng: -106, isOrigin: false },
  { name: 'United States', lat: 39, lng: -98, isOrigin: false },
  { name: 'Mexico', lat: 23, lng: -102, isOrigin: false },
  { name: 'Brazil', lat: -13, lng: -52, isOrigin: false },
  { name: 'Argentina', lat: -34, lng: -64, isOrigin: false },
  { name: 'Germany', lat: 51, lng: 10, isOrigin: false },
  { name: 'United Kingdom', lat: 55, lng: -3, isOrigin: false },
  { name: 'India (HQ)', lat: 21, lng: 78, isOrigin: true },
  { name: 'Japan', lat: 36, lng: 138, isOrigin: false },
  { name: 'Australia', lat: -25, lng: 134, isOrigin: false },
  { name: 'South Africa', lat: -30, lng: 25, isOrigin: false },
  { name: 'UAE', lat: 24, lng: 54, isOrigin: false }
];

let markersSvg = '';
for (const m of markers) {
  const [x, y] = project(m.lng, m.lat);
  const isOrigin = m.isOrigin;
  const starFill = isOrigin ? '#03A9F4' : '#E65100';
  const starStroke = '#FFFFFF';
  const labelColor = isOrigin ? '#085884' : '#17252A';

  markersSvg += `<g>\n`;
  // Beacon halo
  markersSvg += `  <circle cx="${x}" cy="${y}" r="${isOrigin ? 20 : 15}" fill="${starFill}" opacity="0.18" />\n`;
  markersSvg += `  <circle cx="${x}" cy="${y}" r="${isOrigin ? 12 : 9}" fill="${starFill}" opacity="0.38" />\n`;
  // Star icon
  markersSvg += `  ${createStarSvg(x, y, isOrigin ? 8.5 : 7, starFill, starStroke)}\n`;
  // Label text with heavy white halo for crisp readability
  markersSvg += `  <text x="${x}" y="${y - 14}" text-anchor="middle" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="900" fill="#17252A" stroke="#FFFFFF" stroke-width="5" stroke-linejoin="round" paint-order="stroke">${m.name}</text>\n`;
  markersSvg += `  <text x="${x}" y="${y - 14}" text-anchor="middle" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="900" fill="${labelColor}">${m.name}</text>\n`;
  markersSvg += `</g>\n`;
}

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#F4FAFE" />
  ${graticuleSvg}
  ${pathsSvg}
  ${markersSvg}
</svg>`;

fs.writeFileSync('c:/Users/Pratham Maheshwari/Documents/medwebsite/frontend/public/earth-clean.svg', fullSvg);

sharp(Buffer.from(fullSvg))
  .png({ quality: 100 })
  .toFile('c:/Users/Pratham Maheshwari/Documents/medwebsite/frontend/public/earth-clean.png')
  .then(() => console.log('Successfully generated crisp geographic earth-clean.png!'))
  .catch(err => console.error('Sharp err:', err));
