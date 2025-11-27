import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// Simulated nodes for Gironde cities
const CITIES = [
  { id: 'Bordeaux', group: 1, lat: 44.83, lng: -0.57, size: 20 },
  { id: 'Mérignac', group: 1, lat: 44.84, lng: -0.64, size: 15 },
  { id: 'Pessac', group: 1, lat: 44.80, lng: -0.63, size: 15 },
  { id: 'Libourne', group: 2, lat: 44.91, lng: -0.24, size: 12 },
  { id: 'Arcachon', group: 3, lat: 44.66, lng: -1.17, size: 12 },
  { id: 'Langon', group: 4, lat: 44.55, lng: -0.25, size: 10 },
  { id: 'Blaye', group: 5, lat: 45.12, lng: -0.66, size: 8 },
  { id: 'Lesparre', group: 5, lat: 45.30, lng: -0.93, size: 8 },
];

// Create connections
const LINKS = [
  { source: 'Bordeaux', target: 'Mérignac' },
  { source: 'Bordeaux', target: 'Pessac' },
  { source: 'Bordeaux', target: 'Libourne' },
  { source: 'Bordeaux', target: 'Langon' },
  { source: 'Bordeaux', target: 'Arcachon' },
  { source: 'Mérignac', target: 'Arcachon' },
  { source: 'Blaye', target: 'Bordeaux' },
  { source: 'Lesparre', target: 'Blaye' },
];

const MapSection: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.clientWidth;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    svg.selectAll("*").remove(); // Clear previous

    // Define hex pattern for nodes
    const defs = svg.append("defs");
    
    // Gradient for links
    const gradient = defs.append("linearGradient")
        .attr("id", "linkGradient")
        .attr("gradientUnits", "userSpaceOnUse");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#F59E0B").attr("stop-opacity", 0.2);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#F59E0B").attr("stop-opacity", 0.6);

    const simulation = d3.forceSimulation(CITIES as any)
      .force("link", d3.forceLink(LINKS).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius((d: any) => d.size * 2));

    const link = svg.append("g")
      .attr("stroke", "url(#linkGradient)")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(LINKS)
      .join("line")
      .attr("stroke-width", 2);

    const node = svg.append("g")
      .selectAll("g")
      .data(CITIES)
      .join("g")
      .call(drag(simulation) as any)
      .on("mouseover", (event, d) => setActiveNode(d.id))
      .on("mouseout", () => setActiveNode(null));

    // Outer Hexagon (Glow)
    node.append("path")
      .attr("d", d => hexPath(d.size + 4))
      .attr("fill", "none")
      .attr("stroke", "#F59E0B")
      .attr("stroke-width", 1)
      .attr("opacity", 0.5);

    // Inner Hexagon (Solid)
    node.append("path")
      .attr("d", d => hexPath(d.size))
      .attr("fill", d => d.id === 'Bordeaux' ? '#F59E0B' : '#1e293b')
      .attr("stroke", "#F59E0B")
      .attr("stroke-width", 2);

    // Labels
    node.append("text")
      .attr("dx", d => d.size + 8)
      .attr("dy", 4)
      .text(d => d.id)
      .attr("fill", "#e2e8f0")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .style("pointer-events", "none")
      .style("text-shadow", "0 1px 2px black");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function hexPath(radius: number) {
      const angle = (Math.PI * 2) / 6;
      let path = "";
      for (let i = 0; i < 6; i++) {
        const x = radius * Math.cos(angle * i);
        const y = radius * Math.sin(angle * i);
        path += (i === 0 ? "M" : "L") + x + "," + y;
      }
      path += "Z";
      return path;
    }

    function drag(simulation: any) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl">
      <div className="mb-4">
        <h2 className="text-2xl font-serif font-bold text-white">Cartographie de l'Essaim</h2>
        <p className="text-slate-400 text-sm">Répartition des cellules actives en Gironde. Carte non-géographique pour préserver l'anonymat des lieux précis.</p>
      </div>
      <div ref={wrapperRef} className="w-full h-[500px] bg-slate-900 rounded-lg overflow-hidden relative border border-slate-800">
        <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing"></svg>
        {activeNode && (
          <div className="absolute top-4 right-4 bg-slate-800/90 p-4 rounded border border-amber-500/50 backdrop-blur">
            <h4 className="font-bold text-amber-500">{activeNode}</h4>
            <p className="text-xs text-white">Cellule active</p>
            <p className="text-xs text-slate-400">Réunions hebdo: Mardi 19h</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapSection;
