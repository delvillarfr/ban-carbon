"use client";

import { useEffect, useRef } from 'react';
import StockpileSvg from '@/public/stockpile.svg';

export default function EnhancedStockpile() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const filter = svgRef.current.querySelector('#filter95-5');
      if (filter) {
        filter.setAttribute('filterRes', '2048 2048');
        console.log('✅ Filter found and filterRes set to:', filter.getAttribute('filterRes'));
      } else {
        console.warn('⚠️ Filter #filter95-5 not found');
      }
    }
  }, []);

  return <StockpileSvg ref={svgRef} />;
}
