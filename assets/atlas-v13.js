/* V13 Geographic Atlas — town-center reference markers, NOT vineyard parcel boundaries. */
(function(){
"use strict";
const ATLAS={"Burgundy":{"center":[47.15,4.63],"zoom":8,"groups":[["Chablis & Grand Auxerrois",[[47.816,3.8,"Chablis"],[47.8,3.57,"Auxerre"],[47.883,3.995,"Tonnerre"]]],["Côte de Nuits",[[47.322,5.041,"Dijon"],[47.226,4.969,"Gevrey-Chambertin"],[47.193,4.963,"Morey-Saint-Denis"],[47.185,4.952,"Chambolle-Musigny"],[47.176,4.961,"Vougeot"],[47.159,4.954,"Vosne-Romanée"],[47.136,4.951,"Nuits-Saint-Georges"]]],["Côte de Beaune",[[47.032,4.84,"Beaune"],[47.071,4.871,"Aloxe-Corton"],[47.062,4.827,"Savigny-lès-Beaune"],[47.01,4.794,"Pommard"],[47.002,4.781,"Volnay"],[46.978,4.77,"Meursault"],[46.945,4.753,"Puligny-Montrachet"],[46.936,4.728,"Chassagne-Montrachet"],[46.913,4.696,"Santenay"]]],["Côte Chalonnaise",[[46.782,4.853,"Chalon-sur-Saône"],[46.875,4.748,"Rully"],[46.842,4.717,"Mercurey"],[46.675,4.671,"Montagny"]]],["Mâconnais",[[46.307,4.832,"Mâcon"],[46.396,4.747,"Verzé"],[46.3,4.718,"Solutré-Pouilly"],[46.282,4.743,"Fuissé"],[46.414,4.89,"Viré-Clessé"]]]]},"Champagne":{"center":[49.1,4.1],"zoom":9,"groups":[["Montagne de Reims",[[49.258,4.032,"Reims"],[49.166,3.989,"Ludes"],[49.235,3.917,"Vrigny"],[49.188,4.008,"Rilly-la-Montagne"]]],["Vallée de la Marne",[[49.044,3.956,"Épernay"],[49.048,3.811,"Aÿ-Champagne"],[49.02,3.638,"Dormans"]]],["Côte des Blancs",[[48.958,4.013,"Avize"],[48.957,4.011,"Oger"],[48.9,4.003,"Le Mesnil-sur-Oger"]]]]},"Loire":{"center":[47.25,0.62],"zoom":8,"groups":[["Touraine & Vouvray",[[47.393,0.689,"Tours"],[47.412,0.799,"Vouvray"],[47.168,0.239,"Chinon"]]],["Anjou-Saumur",[[47.261,-0.078,"Saumur"],[47.473,-0.554,"Angers"]]],["Central Loire",[[47.333,2.839,"Sancerre"]]]]},"Bordeaux":{"center":[44.79,-0.46],"zoom":9,"groups":[["Right Bank",[[44.934,-0.201,"Pomerol"],[44.894,-0.156,"Saint-Émilion"],[44.916,-0.245,"Libourne"]]],["Left Bank",[[45.151,-0.743,"Pauillac"],[44.837,-0.583,"Pessac"],[44.64,-0.34,"Sauternes"],[44.633,-0.323,"Preignac"]]],["City",[[44.838,-0.58,"Bordeaux"]]]]},"Northern-Rhône":{"center":[45.13,4.79],"zoom":9,"groups":[["Northern crus",[[45.512,4.867,"Côte-Rôtie / Ampuis"],[45.527,4.873,"Condrieu"],[45.181,4.812,"Tain-l'Hermitage"],[45.189,4.808,"Hermitage"],[45.121,4.839,"Saint-Joseph / Tournon"]]],["Southern reference",[[44.944,4.892,"Cornas"],[44.934,4.895,"Saint-Péray"]]]]},"Tuscany":{"center":[43.23,11.4],"zoom":8,"groups":[["Chianti Classico",[[43.768,11.254,"Florence"],[43.469,11.287,"Castellina in Chianti"],[43.583,11.315,"Radda in Chianti"],[43.466,11.435,"Gaiole in Chianti"]]],["Montalcino",[[43.058,11.49,"Montalcino"],[43.318,11.331,"Siena"]]]]},"Piedmont":{"center":[44.61,7.98],"zoom":9,"groups":[["Barolo & Langhe",[[44.611,7.942,"Barolo"],[44.644,7.999,"La Morra"],[44.647,8.036,"Monforte d'Alba"],[44.698,8.035,"Alba"],[44.641,8.006,"Verduno"]]],["Derthona",[[44.895,8.866,"Tortona"]]]]},"California":{"center":[37.84,-122.21],"zoom":7,"groups":[["Napa Valley",[[38.429,-122.402,"Oakville"],[38.298,-122.287,"Napa"]]],["Santa Cruz Mountains",[[37.108,-121.969,"Santa Cruz Mountains"],[37.236,-122.031,"Saratoga"]]],["Anderson Valley",[[39.01,-123.367,"Philo"],[39.09,-123.487,"Boonville"]]]]},"Oregon":{"center":[45.27,-123.02],"zoom":10,"groups":[["Willamette Valley",[[45.278,-123.011,"Dundee"],[45.211,-123.196,"McMinnville"],[45.324,-123.025,"Newberg"]]]]},"Rheinhessen":{"center":[49.78,8.27],"zoom":10,"groups":[["Wonnegau",[[49.662,8.357,"Westhofen"],[49.667,8.205,"Dalsheim"],[49.631,8.363,"Worms"]]],["Northern Rheinhessen",[[49.992,8.248,"Mainz"],[49.965,8.339,"Nackenheim"]]]]},"Mosel":{"center":[49.68,6.74],"zoom":9,"groups":[["Saar",[[49.605,6.554,"Ayl"],[49.614,6.567,"Saarburg"],[49.756,6.641,"Trier"]]],["Middle Mosel",[[49.917,7.073,"Bernkastel-Kues"],[49.886,6.918,"Piesport"]]]]},"Nahe":{"center":[49.82,7.7],"zoom":10,"groups":[["Upper Nahe",[[49.842,7.727,"Bockenau"],[49.815,7.731,"Monzingen"]]],["Middle Nahe",[[49.847,7.865,"Bad Kreuznach"],[49.842,7.837,"Norheim"]]]]}};
const COLOR=["#8b2634","#b79032","#6c8a57","#6a7d99","#a378a1"];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cssLoaded=()=>!!window.L;
function loadLeaflet(){
 if(cssLoaded())return Promise.resolve();
 if(window.__rafLeafletPromise)return window.__rafLeafletPromise;
 const link=document.createElement("link");link.rel="stylesheet";link.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";link.integrity="sha256-p4NxAoJBhIIN+hmNHrzxZJT6p2N69bZ6iYgJf4c+k=";link.crossOrigin="";document.head.appendChild(link);
 window.__rafLeafletPromise=new Promise((resolve,reject)=>{const s=document.createElement("script");s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";s.integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";s.crossOrigin="";s.onload=resolve;s.onerror=reject;document.head.appendChild(s)});
 return window.__rafLeafletPromise;
}
const keyFor=(region,name)=>region+"|"+name;
function mapPanel(section,region){
 const cfg=ATLAS[region];if(!cfg)return;
 const hero=section.querySelector(".region-hero");if(!hero)return;
 const old=hero.querySelector(".regional-static-map,.burgundy-static-map,svg");
 if(old)old.remove();
 const block=document.createElement("div");block.className="v13-atlas";
 const tabs=cfg.groups.map((g,i)=>'<button class="v13-zone" data-zone="'+i+'" style="--zone-color:'+COLOR[i%COLOR.length]+'">'+esc(g[0])+'</button>').join("");
 block.innerHTML='<div class="v13-atlas-top"><div><span class="v13-overline">V13 · GEOGRAPHIC WINE ATLAS</span><h3>'+esc(region.replace("-"," "))+'</h3><p>Real-world basemap · village reference markers · tap a location to find relevant cellar wines</p></div><div class="v13-map-actions"><button class="v13-layer active" data-layer="streets">Roads</button><button class="v13-layer" data-layer="terrain">Terrain</button></div></div><div class="v13-zone-tabs">'+tabs+'</div><div class="v13-map" id="map-'+region.replace(/[^a-z]/gi,"")+'" aria-label="'+esc(region)+' interactive geographic map"><div class="v13-loading">Loading geographic map…</div></div><div class="v13-map-footer"><span class="v13-key"><i></i>Village / commune reference</span><span>Markers indicate approximate town centers, not classified vineyard parcels. No appellation polygons are implied.</span></div>';
 hero.appendChild(block);
 const mapNode=block.querySelector(".v13-map");
 const init=()=>{
 if(mapNode.dataset.ready)return;mapNode.dataset.ready="1";
 loadLeaflet().then(()=>{
 const L=window.L;
 mapNode.innerHTML="";
 const map=L.map(mapNode,{scrollWheelZoom:false,zoomControl:true,preferCanvas:true});
 const street=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'});
 const terrain=L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA); data &copy; OpenStreetMap contributors'});
 street.addTo(map);map.setView(cfg.center,cfg.zoom);
 const layers=cfg.groups.map((group,i)=>{
 const g=L.layerGroup().addTo(map);
 group[1].forEach(([lat,lon,name])=>{
 const dot=L.circleMarker([lat,lon],{radius:6,weight:2,color:"#fff",fillColor:COLOR[i%COLOR.length],fillOpacity:.95}).addTo(g);
 const safe=esc(name);
 dot.bindTooltip(safe,{direction:"top"});
 dot.bindPopup('<strong>'+safe+'</strong><p>Approximate commune center · not an exact vineyard location</p><button class="v13-find" data-place="'+esc(name)+'">View matching cellar wines</button>');
 });
 return g;
 });
 function highlight(query){
 const grid=section.querySelector(".wine-grid");if(!grid)return;
 const cards=[...grid.querySelectorAll(".wine-card")];
 const q=query.toLowerCase().replace(/\s*\/.*$/,"").trim();
 let n=0;
 cards.forEach(c=>{
 const hay=(c.dataset.wine+" "+c.dataset.eyebrow+" "+c.dataset.producer).toLowerCase();
 const match=hay.includes(q)||q.split(/[- ]/).filter(w=>w.length>4).some(w=>hay.includes(w));
 c.classList.toggle("map-hidden",!match);
 if(match)n++;
 });
 if(!n){cards.forEach(c=>c.classList.remove("map-hidden"));}
 const oldNotice=section.querySelector(".v13-result-note");if(oldNotice)oldNotice.remove();
 const notice=document.createElement("p");notice.className="v13-result-note";notice.textContent=n?n+" matching wine"+(n===1?"":"s")+" for "+query:"No exact name match for "+query+"; showing all wines in this region.";
 grid.before(notice);grid.scrollIntoView({behavior:"smooth",block:"start"});
 }
 mapNode.addEventListener("click",e=>{const b=e.target.closest(".v13-find");if(b)highlight(b.dataset.place)});
 block.querySelectorAll(".v13-zone").forEach(b=>b.addEventListener("click",()=>{
 const idx=+b.dataset.zone;block.querySelectorAll(".v13-zone").forEach(x=>x.classList.toggle("active",x===b));
 const pts=cfg.groups[idx][1].map(p=>[p[0],p[1]]);if(pts.length>1)map.fitBounds(pts,{padding:[30,30],maxZoom:12});else map.setView(pts[0],11);
 }));
 block.querySelectorAll(".v13-layer").forEach(b=>b.addEventListener("click",()=>{
 const isTopo=b.dataset.layer==="terrain";map.removeLayer(isTopo?street:terrain);(isTopo?terrain:street).addTo(map);
 block.querySelectorAll(".v13-layer").forEach(x=>x.classList.toggle("active",x===b));
 }));
 map.on("popupopen",()=>{});
 setTimeout(()=>map.invalidateSize(),120);
 }).catch(()=>{mapNode.innerHTML='<div class="v13-map-fallback">Interactive tiles unavailable. The regional wine cards remain accessible below.</div>'});
 };
 if("IntersectionObserver" in window){const io=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){io.disconnect();init()}},{rootMargin:"350px"});io.observe(mapNode)}else init();
}
function enhance(){
 const root=document.getElementById("regions");if(!root)return;
 Object.keys(ATLAS).forEach(r=>{const s=document.getElementById(r);if(s&&!s.querySelector(".v13-atlas"))mapPanel(s,r)});
}
const root=document.getElementById("regions");
if(root){const obs=new MutationObserver(()=>enhance());obs.observe(root,{childList:true});enhance()}
})();