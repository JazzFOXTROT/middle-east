/* MIDDLE EAST — built from the Figma frames (1440 design px wide). */

const S = (o) => Object.entries(o).map(([k, v]) => `--${k === 'h' ? 'hh' : k}:${v}`).join(';');
const BACK_SVG = `<svg viewBox="0 0 75 47" fill="none" aria-hidden="true"><path d="M0 23.5L28 47L12.59 27.18C10.9 25.02 10.9 21.98 12.59 19.82L28 0L0 23.5Z" fill="currentColor"/><path d="M14 23.5C14 22.41 14.91 21.53 16 21.57L75 23.5L16 25.43C14.91 25.47 14 24.59 14 23.5Z" fill="currentColor"/></svg>`;

/* ---------- data ---------- */
const MEMBERS = {
  blik: {
    name: 'Kirill Blik', key: 'blik', card: { w: 191, h: 241, dx: -72, dy: -227 },
    bio: [
      'Kirill Blik is the bassist of MIDDLE EAST and one of the people holding the group together, both musically and personally. Known for his calm demeanour, sharp observations and occasionally dry humour, Kirill tends to be more comfortable behind the scenes than at the centre of attention.',
      'His approach to music is rooted in rhythm, atmosphere and a particular appreciation for the bass-driven sounds of classic British rock. He enjoys finding the small details that give a song its character, often bringing unexpected ideas into rehearsals.',
      'Within the trio, he is something of a balancing force: practical when things get chaotic, opinionated when it counts, and rarely short of a sarcastic remark. He might not always be the loudest voice in the room, but he usually has something to say about how things should sound.',
    ],
  },
  rikshpun: {
    name: 'Kirill Rikshpun', key: 'rik', card: { w: 207, h: 251, dx: -21, dy: 22 },
    bio: [
      "Kirill Rikshpun is the lead vocalist and main guitarist of MIDDLE EAST, bringing much of the band's attitude and musical direction to the forefront. A natural frontman with a taste for expressive guitar work, he combines melodic instincts with a fondness for dramatic arrangements and the occasional oversized musical gesture.",
      "On stage, Rikshpun is confident, charismatic and rarely short of energy. Away from it, he is equally opinionated about music, particularly when it comes to songwriting, guitar tones and the band's overall sound. He has a tendency to get carried away with new ideas, sometimes turning a simple rehearsal into an entirely different project.",
      "As the group's principal songwriter and frontman, he gives MIDDLE EAST much of its distinctive personality: romantic in its melodies, theatrical in its delivery, and never particularly interested in playing by the rules.",
    ],
  },
  richard: {
    name: 'Richard Barenshtein', key: 'rich', card: { w: 191, h: 241, dx: 30, dy: -241 },
    bio: [
      "Richard Barenshtein is the drummer of MIDDLE EAST and the driving force behind the band's rhythm section. With a natural feel for timing and an instinct for powerful, expressive grooves, Richard brings both precision and spontaneity to the group's sound.",
      "Known for his energetic playing and straightforward personality, he has little patience for overcomplicating things. While the others can spend hours debating guitar tones, arrangements and lyrical details, Richard is usually more interested in getting behind the kit and making the song work. His sense of humour and occasional bluntness have become a familiar part of the band's dynamic.",
      "On stage, he is intense, focused and unapologetically physical in his playing. Behind the scenes, he is often the one keeping rehearsals moving and reminding everyone that, at the end of the day, it's supposed to be about the music.",
    ],
  },
};
const ORDER = ['blik', 'rikshpun', 'richard'];

/* ---------- building blocks ---------- */
const memberLink = (id, label, pos) =>
  `<a class="a t36 ulink" data-card="${id}" href="#/members/${id}" style="${S(pos)}">${label}</a>`;

/* photo that opens in the lightbox; `group` ties photos into one gallery */
const zoomPhoto = (name, pos, group, alt, extra = '') =>
  `<a class="a zoom ${extra}" href="img/full/${name}.jpg" data-group="${group}" style="${S(pos)}" aria-label="Open photo: ${alt}"><img class="fill" src="img/${name}.jpg" alt="${alt}" loading="lazy"></a>`;

const photo = (name, pos, alt, cls = '', style = '') =>
  `<div class="a ${cls}" style="${S(pos)};${style}"><img class="fill" src="img/${name}.jpg" alt="${alt}"></div>`;

const gallery = (prefix, group, alt) => `
  <div class="thumbs">
    ${zoomPhoto(`${prefix}-1`, { x: 80, y: 793, w: 96, h: 178 }, group, alt)}
    ${zoomPhoto(`${prefix}-2`, { x: 188, y: 793, w: 203, h: 89 }, group, alt)}
    ${zoomPhoto(`${prefix}-3`, { x: 188, y: 882, w: 203, h: 89 }, group, alt)}
    ${zoomPhoto(`${prefix}-4`, { x: 403, y: 793, w: 96, h: 178 }, group, alt)}
  </div>`;

/* ---------- home ---------- */
const heroView = () => `
<section class="stage" id="s-hero">
  <h1 class="a intro" style="${S({ x: 80, y: 204, w: 507, h: 190 })};--d:.15s"><img src="img/logo.svg" alt="MIDDLE EAST" style="width:100%;height:100%"></h1>
  <p class="a t36 upper intro" style="${S({ x: 998, y: 248 })};--d:.3s">Everywhere.<br>Nowhere at once.</p>
  <div class="collage">
    ${photo('hero-car', { x: 511, y: 456, w: 311, h: 373 }, 'The band leaning on a vintage car in a Tel Aviv street', 'intro h-car', '--d:.45s')}
    ${photo('hero-crowd', { x: 941, y: 454, w: 419, h: 124 }, 'Concert crowd', 'intro h-crowd', '--d:.55s;--ar:419/124')}
    ${photo('hero-building', { x: 834, y: 590, w: 203, h: 239 }, 'Bauhaus building with rounded balconies', 'intro h-bldg', '--d:.65s')}
    ${photo('hero-backstage', { x: 1049, y: 590, w: 311, h: 373 }, 'The band backstage with a bass guitar', 'intro h-back', '--d:.75s')}
    ${photo('hero-jerusalem', { x: 510, y: 839, w: 419, h: 124 }, 'Jerusalem panorama', 'intro h-jer', '--d:.85s;--ar:419/124')}
  </div>
</section>`;

const aboutView = () => `
<section class="stage" id="s-about">
  <h2 class="a t96 rv" style="${S({ r: 82, y: 175 })}">About</h2>
  ${zoomPhoto('about-main', { x: 80, y: 248, w: 419, h: 533 }, 'band', 'The band on a Jaffa balcony', 'rv order-first')}
  <div class="thumbs">
    ${['Band on old stone stairs', 'Live on stage', 'Backstage', 'Street portrait'].map((alt, i) =>
      zoomPhoto(`about-t${i + 1}`, { x: [80, 188, 295, 403][i], y: 793, w: i === 1 ? 95 : 96, h: 77 }, 'band', alt, 'rv')).join('')}
  </div>
  <div class="names">
    ${memberLink('blik', 'K. Blik', { x: 697, y: 310 })}
    ${memberLink('rikshpun', 'K. Rikshpun', { x: 820, y: 310 })}
    ${memberLink('richard', 'R. Barenshtein', { x: 1023, y: 310 })}
  </div>
  <div class="a t20 copy rv" style="${S({ x: 720, y: 393, w: 488 })}">
    <p><b>MIDDLE EAST</b> is a borderless rock band rooted in the Eastern Mediterranean, with a British retro-rock soul and a taste for the unconventional.</p>
    <p>Moving between alternative indie, orchestral rock and vintage influences, the band creates a world where cultural identities collide, geographical boundaries blur, and contradictions become part of the story.</p>
    <p>With an imaginary world tour spanning Tel Aviv, Beirut, Amman, Tehran, London, Paris, etc. MIDDLE EAST plays with the absurdity of borders and the idea of belonging. Romantic, slightly ironic and deliberately hard to place, they exist everywhere at once, without ever settling in one place.</p>
    <p><b>Playing everywhere. Belonging nowhere.</b></p>
  </div>
  <a class="a down" href="#/discography" style="${S({ x: 0, y: 930, w: 1440 })}">Our discography<img src="img/chevron.svg" alt=""></a>
  <div class="hovercard"><img alt=""></div>
</section>`;

const discoView = () => `
<section class="stage" id="s-discography">
  <div class="a banner" style="${S({ x: -2, y: 175, w: 1442, h: 183 })};--blur:3.5"><img src="img/banner-disco.jpg" alt=""></div>
  <h2 class="a t96 rv fit-disc" style="${S({ x: 0, y: 227, w: 1440 })};text-align:center">Our discography</h2>
  <div class="disc-grid">
    <a class="a disc rv" href="#/album/saint-mullets" style="${S({ x: 80, y: 423, w: 418, h: 418 })}" aria-label="Saint Mullets — debut EP"><img class="fill" src="img/disco-sm.jpg" alt=""></a>
    <a class="a disc disc-us rv" href="#/album/us" style="${S({ x: 510, y: 423, w: 419, h: 418 })};--d:.08s" aria-label="Us — studio album">
      <img class="ph" src="img/disco-us-photo.jpg" alt=""><span class="ttl">US</span>
    </a>
    <a class="a disc rv" href="#/album/stairs" style="${S({ x: 941, y: 423, w: 419, h: 418 })};--d:.16s" aria-label="Stairs — mini album"><img class="fill" src="img/disco-stairs.jpg" alt=""></a>
  </div>
  <a class="a down" href="#/tour" style="${S({ x: 0, y: 930, w: 1440 })}">Check out our tour<img src="img/chevron.svg" alt=""></a>
</section>`;

const TOUR = [['Tel Aviv, Israel', '- 11.04'], ['Madrid, Spain', '- 15.05'], ['Glastonbury, UK', '- TBA'], ['Damascus, Syria', '- TBA'],
  ['Beirut, Lebanon', '- TBA'], ['Tokyo, Japan', '- 01.10'], ['Tehran, Iran', '- 06.10'], ['Seoul, S.Korea', '- 28.10']];
const tourView = () => `
<section class="stage" id="s-tour">
  <div class="a banner" style="${S({ x: -2, y: 175, w: 1442, h: 320 })};--blur:5.3"><img src="img/banner-tour.jpg" alt=""></div>
  <h2 class="a t96 rv fit-tour" style="${S({ x: 0, y: 298, w: 1440 })};text-align:center">We are coming to you</h2>
  <ul class="a tour-list" style="${S({ x: 0, y: 560, w: 1440 })}">
    ${TOUR.map(([c, d], i) => `<li class="rv" style="--d:${0.06 * i}s">${c} ${d}</li>`).join('')}
  </ul>
</section>`;

/* ---------- members ---------- */
const memberSection = (id) => {
  const m = MEMBERS[id];
  const others = ORDER.filter((o) => o !== id);
  const k = m.key;
  return `
<section class="stage" id="m-${id}" data-member="${id}">
  <a class="a back" href="#/about" aria-label="Back to About" style="${S({ x: 80, y: 188, w: 75, h: 47 })}">${BACK_SVG}</a>
  <h2 class="a t96 m-hide" style="${S({ r: 82, y: 175 })}">About</h2>
  ${zoomPhoto(`${k}-main`, { x: 80, y: 248, w: 419, h: 533 }, k, m.name, 'order-first')}
  ${gallery(k, k, m.name)}
  <h3 class="a t36 right" style="${S({ r: 82, y: 310 })}">${m.name}</h3>
  <div class="a t20 copy" style="${S({ x: 720, y: 393, w: 488 })}">${m.bio.map((p) => `<p>${p}</p>`).join('')}</div>
  ${memberLink(others[0], MEMBERS[others[0]].name, { x: 720, y: 841 })}
  ${memberLink(others[1], MEMBERS[others[1]].name, { x: 720, y: 904 })}
  <div class="hovercard"><img alt=""></div>
</section>`;
};

/* ---------- albums ---------- */
/* Vinyl mockup + credits. `cover` = the album cover's edges inside the mockup image
   (design px, measured from the PNG), so the credits align to the cover itself, not the shadow. */
const mock = ({ box, sleeve, src, alt, color, cover, mode, U = '--u', cls = 'a', d = 0.55 }) => `
  <div class="${cls} mock intro" style="${S(box)};--d:${d}s;--cu:var(${U});--cl:${cover.l};--cr:${cover.r};--cb:${cover.b};--mh:${box.h}">
    <div class="sleeve" style="left:calc(${sleeve.dx} * var(--cu));width:calc(${sleeve.w} * var(--cu));height:calc(${sleeve.h} * var(--cu));background:${color}"></div>
    <img class="art" src="${src}" alt="${alt}">
    <p class="credits credits-${mode}">Written by: K. Blik, K. Rikshpun,<br>R. Barenshtein</p>
  </div>`;
const COVERS = { sm: { l: 111.2, r: 329, b: 217.8 }, us: { l: 109.2, r: 327.1, b: 217.9 }, stairs: { l: 117.5, r: 335, b: 217 } };

/* mobile (402px Figma frames) */
const M = (o) => Object.entries(o).map(([k, v]) => `--${k === 'h' ? 'hh' : k}:${v}`).join(';');

const ALBUMS = {
  'saint-mullets': { theme: 'sm', html: () => `
<section class="stage desk">
  <div class="a" style="${S({ x: 0, y: 86, w: 720, h: 957 })}"><img class="fill intro" src="img/sm-horse.webp" alt="A horse with a wild, flowing mane" style="--d:.1s"></div>
  <a class="a back" href="#/discography" aria-label="Back to discography" style="${S({ x: 80, y: 188, w: 75, h: 47 })}">${BACK_SVG}</a>
  <h2 class="a t96 sm-title intro" style="${S({ r: 79, y: 152 })};--d:.2s"><span class="mc">S</span>aint <span class="mc">M</span>ullets</h2>
  <p class="a t36 intro" style="${S({ r: 80, y: 264 })};--d:.3s">Our debut EP</p>
  <div class="a t20 copy intro" style="${S({ x: 720, y: 347, w: 532 })};--d:.4s">
    <p>Three men. Too many guitars. Questionable haircuts.<br>An unreasonable amount of confidence.</p>
    <p><em>Saint Mullets</em> is the first sonic document of a band that refuses to acknowledge borders, conventions, or the general concept of good taste. Somewhere between alternative rock, Middle Eastern absurdity, and the glorious excess of the late twentieth century, these tracks deliver a soundtrack for a world that probably shouldn't exist, but somehow does.</p>
    <p>Recorded somewhere between a revolution and a backstage party, Saint Mullets is dedicated to the misunderstood, the overdressed, the underqualified, and everyone who ever thought rock 'n' roll could save the world.</p>
    <p><b>No borders. No apologies. Just bigger hair.</b></p>
  </div>
  ${mock({ box: { x: 720, y: 775, w: 329, h: 218 }, sleeve: { dx: 117, w: 212, h: 218 }, src: 'img/sm-mockup.webp', alt: 'Saint Mullets vinyl', color: '#000', cover: COVERS.sm, mode: 'side' })}
</section>
<section class="mstage mob" style="">
  <div class="ma" style="${M({ x: 0, y: 19, w: 402, h: 521 })}"><img class="fill intro" src="img/mob-sm.webp" alt="A horse with a wild, flowing mane" style="--d:.1s"></div>
  <h2 class="ma sm-title m-title intro" style="${M({ x: 32, y: 394 })};--d:.2s;font-size:calc(49.463 * var(--m));letter-spacing:-0.035em"><span class="mc">S</span>aint <span class="mc">M</span>ullets</h2>
  <p class="ma m36 intro" style="${M({ x: 200, y: 466 })};--d:.3s;--tx:-50%">Our debut EP</p>
  <div class="mflow" style="--fy:549">
  <div class="m16 bold lines intro" style="--d:.4s">
    <p>Three men. Too many guitars. Questionable<br>haircuts. An unreasonable amount<br>of confidence.</p>
    <p><em class="blk">Saint Mullets</em> is the first sonic document of a band<br>that refuses to acknowledge borders, conventions,<br>or the general concept of good taste. Somewhere<br>between alternative rock, Middle Eastern absurdity,<br>and the glorious excess of the late twentieth<br>century, these tracks deliver a soundtrack for a<br>world that probably shouldn't exist, but somehow<br>does.</p>
    <p>Recorded somewhere between a revolution and a<br>backstage party, Saint Mullets is dedicated to the<br>misunderstood, the overdressed, the underqualified,<br>and everyone who ever thought rock 'n' roll could<br>save the world.</p>
    <p class="blk">No borders. No apologies. Just bigger hair.</p>
  </div>
  ${mock({ box: { w: 329, h: 218 }, sleeve: { dx: 117, w: 212, h: 218 }, src: 'img/sm-mockup.webp', alt: 'Saint Mullets vinyl', color: '#000', cover: COVERS.sm, mode: 'below', U: '--m', cls: 'mflow-mock', d: 0.5 })}
  </div>
</section>` },

  us: { theme: 'us', html: () => `
<section class="stage desk" style="--h:1097;color:#9e8e74">
  <div class="a" style="${S({ x: 578, y: -55, w: 862, h: 1285 })}"><img class="fill intro" src="img/us-band.webp" alt="The three band members sitting on old stone stairs" style="--d:.15s"></div>
  <a class="a back" href="#/discography" aria-label="Back to discography" style="${S({ x: 1288, y: 188, w: 75, h: 47 })}">${BACK_SVG}</a>
  <h2 class="a t96 us-font intro" style="${S({ x: 76, y: 165 })};--d:.1s">Us</h2>
  <p class="a t36 intro" style="${S({ x: 78, y: 289 })};--d:.2s">Studio Album</p>
  <div class="a t20 copy intro" style="${S({ x: 80, y: 372, w: 526 })};--d:.3s">
    <p>There was a time when our worlds were just a few streets apart. Afternoons turned into evenings, conversations went in every possible direction, and somehow there was always something to laugh about.</p>
    <p>We each had our own things going on. Questions about the future, personal troubles, little victories, disappointments, and the constant feeling that we were supposed to be figuring something out. We didn't always have answers for each other, but we had time, company, and an endless supply of jokes.</p>
    <p><em>Us</em> is a collection of memories from that chapter. Not necessarily the biggest moments, but the ordinary ones that stayed with us. The kind you don't realize you'll miss until they're already behind you.</p>
    <p>Maybe we were just three friends trying to find our way through life. Maybe that's what made it worth remembering.<br>Dedicated to the afternoons that became memories.</p>
  </div>
  ${mock({ box: { x: 73, y: 840, w: 330, h: 218 }, sleeve: { dx: 118, w: 212, h: 218 }, src: 'img/us-mockup.webp', alt: 'Us vinyl', color: '#fff', cover: COVERS.us, mode: 'side', d: 0.45 })}
</section>
<section class="mstage mob" style="color:#9e8e74">
  <div class="ma" style="${M({ x: 0, y: 79, w: 402, h: 427 })}"><img class="fill intro" src="img/mob-us.webp" alt="The three band members sitting on old stone stairs" style="--d:.1s"></div>
  <h2 class="ma us-font m-title intro" style="${M({ x: 0, y: 357, w: 402 })};text-align:center;font-size:calc(96 * var(--m));--d:.2s">Us</h2>
  <p class="ma m36 intro" style="${M({ x: 207, y: 463 })};--d:.3s;--tx:-50%">Studio Album</p>
  <div class="mflow" style="--fy:535">
  <div class="m16 bold lines intro" style="--d:.4s">
    <p>There was a time when our worlds were just a few<br>streets apart. Afternoons turned into evenings,<br>conversations went in every possible direction, and<br>somehow there was always something to laugh<br>about.</p>
    <p>We each had our own things going on. Questions<br>about the future, personal troubles, little victories,<br>disappointments, and the constant feeling that we<br>were supposed to be figuring something out. We<br>didn't always have answers for each other, but we<br>had time, company, and an endless supply of jokes.</p>
    <p><em class="blk">Us</em> is a collection of memories from that chapter.<br>Not necessarily the biggest moments, but the<br>ordinary ones that stayed with us. The kind you<br>don't realize you'll miss until they're already behind<br>you.</p>
    <p>Maybe we were just three friends trying to find our<br>way through life. Maybe that's what made it worth<br>remembering.</p>
    <p>Dedicated to the afternoons that became<br>memories.</p>
  </div>
  ${mock({ box: { w: 330, h: 218 }, sleeve: { dx: 118, w: 212, h: 218 }, src: 'img/us-mockup.webp', alt: 'Us vinyl', color: '#fff', cover: COVERS.us, mode: 'below', U: '--m', cls: 'mflow-mock', d: 0.5 })}
  </div>
</section>` },

  stairs: { theme: 'stairs', html: () => `
<section class="stage desk" style="--h:1097;--back:#5e3000;color:#5e3000">
  <div class="a" style="${S({ x: 0, y: 181, w: 760, h: 916 })}"><img class="fill intro" src="img/stairs-photo.webp" alt="Sand-coloured stepwell stairs" style="--d:.1s"></div>
  <a class="a back" href="#/discography" aria-label="Back to discography" style="${S({ x: 80, y: 188, w: 75, h: 47 })}">${BACK_SVG}</a>
  <div class="a intro" style="${S({ x: 1059, y: 159, w: 298, h: 38 })};--d:.15s"><img src="img/stairs-line.svg" alt="" style="width:100%;height:100%"></div>
  <h2 class="a stairs-title intro" style="${S({ r: 80, y: 155 })};--d:.2s"><span style="font-size:calc(96*var(--u))">S</span><span style="font-size:calc(76*var(--u))">t</span><span style="font-size:calc(56*var(--u))">ai</span><span style="font-size:calc(76*var(--u))">r</span><span style="font-size:calc(96*var(--u))">s</span></h2>
  <p class="a t36 intro" style="${S({ r: 83, y: 268 })};--d:.3s">Mini Album</p>
  <div class="a t20 copy intro" style="${S({ x: 720, y: 351, w: 532 })};--d:.4s">
    <p>Life rarely takes the route you had in mind.</p>
    <p>Somewhere between falling in love, falling behind, making plans, breaking promises, and trying to keep your bank account alive until the end of the month, we found ourselves climbing a rather complicated set of stairs.</p>
    <p><em>Stairs</em> is about the strange architecture of everyday life. The ups that don't last, the downs you didn't see coming, relationships that take unexpected turns, and the uncomfortable realization that growing up doesn't necessarily make things any cheaper.</p>
    <p>There are bills to pay, hearts to mend, places to be, and somehow never quite enough hours in the day. Still, we keep moving. Sometimes confidently, sometimes in circles, occasionally taking three steps down after finally making it up two.</p>
    <p>No shortcuts, no elevator, and definitely no overtime compensation.</p>
    <p><b>Life goes up. Life goes down. Rent is always due.</b></p>
  </div>
  ${mock({ box: { x: 708, y: 859, w: 335, h: 218 }, sleeve: { dx: 123, w: 212, h: 217 }, src: 'img/stairs-mockup.webp', alt: 'Stairs vinyl', color: '#000', cover: COVERS.stairs, mode: 'side' })}
</section>
<section class="mstage mob" style="color:#5e3000">
  <div class="ma" style="${M({ x: 0, y: 0, w: 402, h: 551 })}"><img class="fill intro" src="img/mob-stairs.webp" alt="Sand-coloured stepwell stairs" style="--d:.1s"></div>
  <div class="ma intro" style="${M({ x: 65.72, y: 362.64, w: 270.55, h: 34.5 })};--d:.15s"><img src="img/stairs-line.svg" alt="" style="width:100%;height:100%"></div>
  <h2 class="ma stairs-title intro" style="${M({ x: 63, y: 356.3 })};letter-spacing:-0.06em;--d:.2s"><span style="font-size:calc(87.158*var(--m))">S</span><span style="font-size:calc(69*var(--m))">t</span><span style="font-size:calc(50.842*var(--m))">ai</span><span style="font-size:calc(69*var(--m))">r</span><span style="font-size:calc(87.158*var(--m))">s</span></h2>
  <p class="ma m36 intro" style="${M({ x: 207, y: 467 })};--d:.3s;--tx:-50%">Mini Album</p>
  <div class="mflow" style="--fy:535">
  <div class="m16 lines intro" style="--d:.4s">
    <p>Life rarely takes the route you had in mind.<br>Somewhere between falling in love, falling behind,<br>making plans, breaking promises, and trying to keep<br>your bank account alive until the end of the month, we<br>found ourselves climbing a rather complicated set of<br>stairs.</p>
    <p><em>Stairs</em> is about the strange architecture of everyday<br>life. The ups that don't last, the downs you didn't see<br>coming, relationships that take unexpected turns, and<br>the uncomfortable realization that growing up doesn't<br>necessarily make things any cheaper.</p>
    <p>There are bills to pay, hearts to mend, places to be,<br>and somehow never quite enough hours in the day.<br>Still, we keep moving. Sometimes confidently,<br>sometimes in circles, occasionally taking three steps<br>down after finally making it up two.</p>
    <p>No shortcuts, no elevator, and definitely no overtime<br>compensation.</p>
    <p><b>Life goes up. Life goes down. Rent is always due.</b></p>
  </div>
  ${mock({ box: { w: 335, h: 218 }, sleeve: { dx: 123, w: 212, h: 217 }, src: 'img/stairs-mockup.webp', alt: 'Stairs vinyl', color: '#000', cover: COVERS.stairs, mode: 'below', U: '--m', cls: 'mflow-mock', d: 0.5 })}
  </div>
</section>` },
};

/* ---------- mount ---------- */
document.body.insertAdjacentHTML('afterbegin', `
<header class="site-header">
  <div class="brand">
    <a class="brand-text" href="#/">The heart<br>of Israel</a>
    <a class="brand-icon" href="#/" aria-label="MIDDLE EAST — home"><img src="img/icon.svg" alt=""></a>
  </div>
  <nav class="nav" aria-label="Main">
    <a href="#/about" data-nav="about">About</a>
    <a href="#/discography" data-nav="disco">EPs and Albums</a>
    <a href="#/tour" data-nav="tour">Schedule</a>
  </nav>
</header>`);
document.body.insertAdjacentHTML('beforeend', `
<div class="lb" role="dialog" aria-modal="true" aria-label="Photo viewer">
  <img alt="">
  <button class="lb-close" aria-label="Close">Close ✕</button>
  <button class="lb-prev" aria-label="Previous photo">${BACK_SVG}</button>
  <button class="lb-next" aria-label="Next photo">${BACK_SVG}</button>
  <div class="lb-count"></div>
</div>`);

const app = document.getElementById('app');
app.innerHTML = `
  <div class="view" data-view="home">${heroView()}${aboutView()}${discoView()}${tourView()}</div>
  <div class="view" data-view="members">${ORDER.map(memberSection).join('')}</div>
  ${Object.entries(ALBUMS).map(([id, a]) => `<div class="view" data-view="album-${id}" data-theme="${a.theme}">${a.html()}</div>`).join('')}`;

/* ---------- hover cards (Figma: On hover → open overlay, dissolve 300ms ease-out) ---------- */
const unit = () => (innerWidth <= 760 ? 1 : innerWidth / 1440);
document.querySelectorAll('[data-card]').forEach((link) => {
  const stage = link.closest('.stage');
  const card = stage.querySelector('.hovercard');
  const img = card.querySelector('img');
  const id = link.dataset.card;
  const c = MEMBERS[id].card;
  link.addEventListener('mouseenter', () => {
    const u = unit();
    const sr = stage.getBoundingClientRect();
    const lr = link.getBoundingClientRect();
    img.src = `img/card-${MEMBERS[id].key}.webp`;
    Object.assign(card.style, { left: `${lr.left - sr.left + c.dx * u}px`, top: `${lr.top - sr.top + c.dy * u}px`, width: `${c.w * u}px`, height: `${c.h * u}px` });
    card.classList.add('on');
  });
  link.addEventListener('mouseleave', () => card.classList.remove('on'));
});

/* ---------- lightbox ---------- */
const lb = document.querySelector('.lb');
const lbImg = lb.querySelector('img');
const lbCount = lb.querySelector('.lb-count');
let lbList = [], lbIndex = 0;
function lbShow(i) {
  lbIndex = (i + lbList.length) % lbList.length;
  const a = lbList[lbIndex];
  lbImg.classList.add('swap');
  const next = new Image();
  next.onload = () => { lbImg.src = next.src; lbImg.alt = a.querySelector('img').alt; lbImg.classList.remove('swap'); };
  next.src = a.getAttribute('href');
  lbCount.textContent = `${lbIndex + 1} / ${lbList.length}`;
}
function lbOpen(a) {
  lbList = [...document.querySelectorAll(`.zoom[data-group="${a.dataset.group}"]`)];
  lb.classList.add('open');
  lbShow(lbList.indexOf(a));
}
function lbClose() { if (!lb.classList.contains('open')) return; lb.classList.remove('open'); document.activeElement && document.activeElement.blur(); }
document.addEventListener('click', (e) => {
  const a = e.target.closest('.zoom');
  if (a) { e.preventDefault(); lbOpen(a); }
});
lb.querySelector('.lb-close').onclick = lbClose;
lb.querySelector('.lb-prev').onclick = (e) => { e.stopPropagation(); lbShow(lbIndex - 1); };
lb.querySelector('.lb-next').onclick = (e) => { e.stopPropagation(); lbShow(lbIndex + 1); };
lb.addEventListener('click', (e) => { if (e.target === lb) lbClose(); });
addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
  if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
});

/* ---------- credits: keep the last line's baseline exactly on the cover's bottom edge
   (measured in the browser, so it holds in every engine and with any installed font) ---------- */
function alignCredits() {
  document.querySelectorAll('.view.is-active .credits-side').forEach((c) => {
    const m = c.closest('.mock');
    if (!m.offsetParent) return;
    c.style.transform = 'none';
    const u = parseFloat(getComputedStyle(m).getPropertyValue('--cu')) || 0;
    const cu = m.getBoundingClientRect().height / parseFloat(m.style.getPropertyValue('--mh'));
    const coverBottom = m.getBoundingClientRect().top + parseFloat(m.style.getPropertyValue('--cb')) * cu;
    const probe = document.createElement('span');
    probe.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
    c.appendChild(probe);
    const baseline = probe.getBoundingClientRect().top;
    probe.remove();
    c.style.transform = `translateY(${coverBottom - baseline}px)`;
  });
}
document.fonts && document.fonts.ready.then(alignCredits);
addEventListener('resize', alignCredits);
addEventListener('load', alignCredits);

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.rv').forEach((el) => io.observe(el));

/* ---------- header state ---------- */
const navLinks = document.querySelectorAll('.nav a');
const setNav = (key) => navLinks.forEach((a) => a.classList.toggle('is-current', a.dataset.nav === key));
function onScroll() {
  document.body.classList.toggle('at-top', scrollY < 4);
  if (currentView !== 'home') return;
  const y = scrollY + innerHeight * 0.4;
  const hero = document.getElementById('s-hero');
  document.body.classList.toggle('at-hero', scrollY < hero.offsetHeight * 0.55);
  let cur = '';
  [['about', 's-about'], ['disco', 's-discography'], ['tour', 's-tour']].forEach(([k, id]) => {
    if (document.getElementById(id).offsetTop <= y) cur = k;
  });
  setNav(cur);
}
addEventListener('scroll', onScroll, { passive: true });

/* ---------- router ---------- */
const SECTIONS = { '': 's-hero', about: 's-about', discography: 's-discography', tour: 's-tour' };
let currentView = null;

function parse() {
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (p[0] === 'members') return { view: 'members', target: `m-${MEMBERS[p[1]] ? p[1] : 'blik'}` };
  if (p[0] === 'album' && ALBUMS[p[1]]) return { view: `album-${p[1]}`, target: null };
  return { view: 'home', target: SECTIONS[p[0] || ''] || 's-hero' };
}

function show(view) {
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('is-active', v.dataset.view === view));
  document.querySelectorAll(`[data-view="${view}"] .intro`).forEach((el) => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
  currentView = view;
  const theme = document.querySelector(`[data-view="${view}"]`).dataset.theme || 'dark';
  document.body.dataset.theme = theme;
  document.body.classList.toggle('at-hero', view === 'home');
  if (view === 'members') setNav('about');
  else if (view.startsWith('album-')) setNav('disco');
}

function route(first = false) {
  lbClose();
  const { view, target } = parse();
  const el = target && document.getElementById(target);
  if (view === currentView) {
    if (el) scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    return;
  }
  const swap = () => {
    show(view);
    scrollTo(0, el ? el.offsetTop : 0);
    onScroll();
    requestAnimationFrame(alignCredits);
    app.classList.remove('is-leaving');
  };
  if (first) return swap();
  app.classList.add('is-leaving');
  setTimeout(swap, 350);
}
addEventListener('hashchange', () => route());
route(true);
