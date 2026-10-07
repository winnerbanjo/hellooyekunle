'use client';

import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';

interface MapHub {
  id: string;
  name: string;
  country: string;
  role: string;
  note: string;
  cx: number;
  cy: number;
  isHome?: boolean;
}

const hubs: MapHub[] = [
  {
    id: 'lagos',
    name: 'Lagos',
    country: 'Nigeria',
    role: 'HEADQUARTERS & CORE ENGINE',
    note: 'Where everything started. 18:21 WAT. Lagos made the problems obvious. Technology makes the leverage global.',
    cx: 395,
    cy: 390,
    isHome: true,
  },
  {
    id: 'accra',
    name: 'Accra',
    country: 'Ghana',
    role: 'WEST AFRICA COMMERCE CORRIDOR',
    note: 'Active cross-border merchant testing & mobile money settlements.',
    cx: 350,
    cy: 395,
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    country: 'Kenya',
    role: 'EAST AFRICA TECH CAPITAL',
    note: 'Studying M-Pesa integration and high-velocity mobile commerce.',
    cx: 640,
    cy: 425,
  },
  {
    id: 'kigali',
    name: 'Kigali',
    country: 'Rwanda',
    role: 'HOSPITALITY INNOVATION',
    note: 'Modern short-stay and tourism infrastructure expansion for Sena.',
    cx: 585,
    cy: 445,
  },
  {
    id: 'johannesburg',
    name: 'Johannesburg',
    country: 'South Africa',
    role: 'ENTERPRISE RETAIL & SCALE',
    note: 'Large-scale inventory logistics and modern payment rails.',
    cx: 540,
    cy: 630,
  },
  {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    role: 'NORTH AFRICA GATEWAY',
    note: 'High-density retail commerce models.',
    cx: 570,
    cy: 165,
  },
];

export function AfricaMap() {
  const [selectedHub, setSelectedHub] = useState<MapHub>(hubs[0]);

  return (
    <section className="py-24 md:py-36 border-t border-white/5 relative bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Selected Hub Detail */}
          <div className="lg:col-span-5">
            <SectionHeader
              label="GEOGRAPHY & EXPANSION"
              title="BUILDING FROM HERE."
              subtitle="Lagos made the problems obvious. Technology makes the opportunity global."
              badgeColor="#B8FF3D"
            />

            <div className="p-6 md:p-8 rounded-2xl bg-[#111115] border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className={`h-2.5 w-2.5 rounded-full ${selectedHub.isHome ? 'bg-[#B8FF3D] animate-ping' : 'bg-[#B8FF3D]'}`} />
                <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF3D]">
                  {selectedHub.role}
                </span>
              </div>

              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                {selectedHub.name}, {selectedHub.country}
              </h3>

              <p className="text-sm md:text-base text-[#999999] leading-relaxed mb-6 font-light">
                {selectedHub.note}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#777777]">
                <span>Status: {selectedHub.isHome ? 'Active Daily Base' : 'Discovery & Corridor'}</span>
                <span>Timezone: WAT / CAT</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all border ${
                    selectedHub.id === hub.id
                      ? 'bg-[#B8FF3D] text-[#080808] font-bold border-[#B8FF3D]'
                      : 'bg-white/[0.02] text-[#999999] border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {hub.name} {hub.isHome && '★'}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Stylized Minimal Vector Map */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[580px] aspect-[4/5] p-4 bg-[#0D0D10]/50 border border-white/5 rounded-3xl flex items-center justify-center">
              <svg
                viewBox="0 0 800 850"
                className="w-full h-full max-h-[550px] filter drop-shadow-[0_0_30px_rgba(184,255,61,0.15)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Africa Continent Outline */}
                <path
                  d="M 270 120 
                     C 320 100, 480 80, 580 110 
                     C 650 130, 710 180, 680 260
                     C 660 310, 740 370, 710 430
                     C 680 480, 620 540, 580 620
                     C 550 680, 520 760, 480 780
                     C 430 790, 400 730, 390 680
                     C 360 620, 310 520, 330 460
                     C 320 440, 240 430, 180 410
                     C 130 380, 110 320, 140 270
                     C 180 210, 210 150, 270 120 Z"
                  fill="#121217"
                  stroke="#262630"
                  strokeWidth="2.5"
                />

                {/* Internal topographical dots/grid accents */}
                <circle cx="395" cy="390" r="120" stroke="#B8FF3D" strokeOpacity="0.1" strokeDasharray="4 4" fill="none" />
                <circle cx="395" cy="390" r="220" stroke="#B8FF3D" strokeOpacity="0.05" strokeDasharray="6 6" fill="none" />

                {/* Connection lines between Lagos and key hubs */}
                {hubs
                  .filter((h) => !h.isHome)
                  .map((hub) => (
                    <line
                      key={`line-${hub.id}`}
                      x1={395}
                      y1={390}
                      x2={hub.cx}
                      y2={hub.cy}
                      stroke={selectedHub.id === hub.id ? '#B8FF3D' : '#2A2A38'}
                      strokeWidth={selectedHub.id === hub.id ? 2 : 1}
                      strokeDasharray="3 3"
                    />
                  ))}

                {/* Hub Beacons */}
                {hubs.map((hub) => {
                  const isSelected = selectedHub.id === hub.id;
                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedHub(hub)}
                    >
                      {hub.isHome && (
                        <>
                          <circle cx={hub.cx} cy={hub.cy} r="24" fill="#B8FF3D" fillOpacity="0.2">
                            <animate attributeName="r" values="12;32;12" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
                          </circle>
                          <circle cx={hub.cx} cy={hub.cy} r="14" fill="#B8FF3D" fillOpacity="0.4" />
                        </>
                      )}

                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={hub.isHome ? 7 : isSelected ? 6 : 4}
                        fill={hub.isHome ? '#B8FF3D' : isSelected ? '#F59E0B' : '#F5F3EE'}
                        stroke="#080808"
                        strokeWidth="2"
                      />

                      <text
                        x={hub.cx + (hub.cx > 500 ? -12 : 14)}
                        y={hub.cy + 4}
                        textAnchor={hub.cx > 500 ? 'end' : 'start'}
                        fill={isSelected ? '#FFFFFF' : '#888899'}
                        fontSize={hub.isHome ? 13 : 11}
                        fontWeight={hub.isHome || isSelected ? '700' : '500'}
                        fontFamily="monospace"
                        className="select-none transition-colors"
                      >
                        {hub.name.toUpperCase()} {hub.isHome && '⚡'}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
