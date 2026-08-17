/* =========================================================================
   Site interactions. Loaded on every page.
   - a lime ripple that expands from wherever you click
   - a comet tail that follows the cursor
   - GoatCounter analytics (counts every page automatically)
   ========================================================================= */

/* Load GoatCounter analytics. It records one page view per visit and does
   NOT run on localhost, so your own local testing isn't counted.
   Dashboard: https://mashavakula.goatcounter.com */
(function () {
  var g = document.createElement('script');
  g.async = true;
  g.src = '//gc.zgo.at/count.js';
  g.setAttribute('data-goatcounter', 'https://mashavakula.goatcounter.com/count');
  document.head.appendChild(g);
})();

(function () {
  // Respect visitors who prefer reduced motion — no ripple for them.
  if (window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('click', function (e) {
    var ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = e.clientX + 'px';   // position at the click point
    ripple.style.top  = e.clientY + 'px';
    document.body.appendChild(ripple);
    // Remove the element once its animation finishes so they don't pile up.
    ripple.addEventListener('animationend', function () { ripple.remove(); });
  });
})();

/* -------------------------------------------------------------------------
   Comet tail: a chain of small dots that trail behind the cursor.
   Only runs on devices with a real pointer (skipped on touch / reduced motion).
   Tweak COUNT for a longer/shorter tail, and 0.35 for how snappy it is.
   ------------------------------------------------------------------------- */
(function () {
  var mm = window.matchMedia;
  if (mm && (mm('(prefers-reduced-motion: reduce)').matches ||
             mm('(hover: none)').matches || mm('(pointer: coarse)').matches)) return;

  var COUNT = 8;
  var target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var dots = [];
  var pts = [];

  for (var i = 0; i < COUNT; i++) {
    var d = document.createElement('div');
    d.className = 'trail-dot';
    var size = Math.max(3, 11 - i * 1);        // shrinks toward the tail
    d.style.width = d.style.height = size + 'px';
    d.style.opacity = (1 - i / COUNT) * 0.6;   // fades toward the tail
    document.body.appendChild(d);
    dots.push(d);
    pts.push({ x: target.x, y: target.y });
  }

  document.addEventListener('mousemove', function (e) {
    target.x = e.clientX;
    target.y = e.clientY;
  });

  function frame() {
    var lead = target;
    for (var i = 0; i < COUNT; i++) {
      var p = pts[i];
      p.x += (lead.x - p.x) * 0.35;
      p.y += (lead.y - p.y) * 0.35;
      dots[i].style.transform =
        'translate(' + p.x + 'px,' + p.y + 'px) translate(-50%, -50%)';
      lead = p;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
