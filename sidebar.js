// HYPE dashboard sidebar — inject into #sidebar; set data-active to the active key
(function(){
  const el = document.getElementById('sidebar');
  if(!el) return;
  const active = el.getAttribute('data-active') || '';
  const ic = {
    overview:'<path d="M3 11 12 3l9 8M5 9v11h5v-6h4v6h5V9"/>',
    listings:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    create:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
    orders:'<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    payouts:'<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M16 6V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8"/><circle cx="17" cy="13" r="1.5"/>',
    analytics:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 2h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 22h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"/>'
  };
  const link = (key,href,label)=>`<a class="side__link ${active===key?'active':''}" href="${href}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">${ic[key]}</svg>${label}</a>`;
  el.innerHTML = `
    <div class="side__top">
      <span class="side__seller"><svg viewBox="0 0 24 24" fill="none" stroke="#1f7a3f" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>Verified seller</span>
      <div class="side__store">HYPE India Store</div>
      <div class="side__rating"><svg viewBox="0 0 24 24" fill="#c9c2b6" width="13" height="13"><path d="m12 2 3 6.5 7 .8-5.2 4.7 1.5 6.9L12 17.8 5.7 20.9l1.5-6.9L2 9.3l7-.8z"/></svg> 4.8</div>
    </div>
    <nav class="side__nav">
      ${link('overview','#','Overview')}
      ${link('listings','#','My Listings')}
      ${link('create','create-listing.html','Create Listing')}
      ${link('orders','orders.html','Orders & Shipments')}
      ${link('payouts','payouts.html','Payouts & Earnings')}
      ${link('analytics','#','Analytics')}
      ${link('settings','#','Account Settings')}
    </nav>
    <div class="side__emboss"></div>`;
})();
