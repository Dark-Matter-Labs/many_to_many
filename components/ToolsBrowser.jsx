'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ToolGrid from '@/components/ToolGrid';
import ToolFilters from '@/components/ToolFilters';

export default function ToolsBrowser({ tools, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const [filters, setFilters] = useState({
    type: 'all',
    readiness: 'all',
    test_status: 'all',
  });

  // Build options from data so the UI matches your CMS
  const typeOptions = useMemo(() => {
    const vals = Array.from(
      new Set((tools || []).map((t) => t?.type?.value).filter(Boolean)),
    );
    const label = (v) =>
      v === 'tool'
        ? 'Tool'
        : v === 'case_study'
          ? 'Case Study'
          : v === 'example'
            ? 'Example'
            : v;
    return vals.map((v) => ({ value: v, label: label(v) }));
  }, [tools]);

  const readinessOptions = useMemo(() => {
    const vals = Array.from(
      new Set((tools || []).map((t) => t?.readiness).filter(Boolean)),
    );
    const label = (v) =>
      v === 'low'
        ? 'Low'
        : v === 'medium'
          ? 'Medium'
          : v === 'ready'
            ? 'Ready'
            : v;
    return vals.map((v) => ({ value: v, label: label(v) }));
  }, [tools]);

  const testStatusOptions = useMemo(() => {
    const vals = Array.from(
      new Set((tools || []).map((t) => t?.test_status).filter(Boolean)),
    );
    const label = (v) =>
      v === 'early_stage'
        ? 'Early Stage'
        : v === 'no'
          ? 'No'
          : v === 'once'
            ? 'Yes – once'
            : v === 'few'
              ? 'Yes – a few times'
              : v;
    return vals.map((v) => ({ value: v, label: label(v) }));
  }, [tools]);

  const filtered = useMemo(() => {
    return (tools || []).filter((t) => {
      const byType = filters.type === 'all' || t?.type?.value === filters.type;
      const byReadiness =
        filters.readiness === 'all' || t?.readiness === filters.readiness;
      const byTest =
        filters.test_status === 'all' || t?.test_status === filters.test_status;
      return byType && byReadiness && byTest;
    });
  }, [tools, filters]);

  const byAvailability = (avail) =>
    filtered.filter((t) => t?.availability === avail);

  // Count how many filters are actively selected (not equal to 'all')
  const selectedCount = useMemo(() => {
    return Object.values(filters).filter((v) => v !== 'all').length;
  }, [filters]);

  // Close the filter panel when clicking outside or pressing Escape
  useEffect(() => {
    function handlePointerDown(event) {
      if (!isOpen) return;
      const panelEl = panelRef.current;
      const buttonEl = buttonRef.current;
      if (!panelEl) return;
      const clickedInsidePanel = panelEl.contains(event.target);
      const clickedToggleButton = buttonEl && buttonEl.contains(event.target);
      if (!clickedInsidePanel && !clickedToggleButton) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, {
      passive: true,
    });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section className="">
      {/* <div className="sticky top-24 z-60 pb-10">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          ref={buttonRef}
          className="text-grey-50 font-galosText rounded-r-full bg-blue-800 px-10 py-4 hover:cursor-pointer"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            'Close Panel'
          ) : selectedCount > 0 ? (
            <span className="inline-flex items-center gap-3">
              <span className="text-semibold underline">Selected Filter</span>
              <span className="text-semibold inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-800">
                {selectedCount}
              </span>
            </span>
          ) : (
            'Open Filter Panel'
          )}
        </button>
        {isOpen && (
          <div className="" ref={panelRef}>
            <ToolFilters
              filters={filters}
              onChange={setFilters}
              typeOptions={typeOptions}
              readinessOptions={readinessOptions}
              testStatusOptions={testStatusOptions}
              onClear={() =>
                setFilters({
                  type: 'all',
                  readiness: 'all',
                  test_status: 'all',
                })
              }
            />
          </div>
        )}
      </div> */}

      <ToolGrid category="Now" tools={byAvailability('now')} />
      <ToolGrid category="Coming Soon" tools={byAvailability('coming_soon')} />
      {/* <ToolGrid category="Next Six Months" tools={byAvailability('next')} /> */}
      <ToolGrid category="Demand Led" tools={byAvailability('demand_led')} />
    </section>
  );
}
