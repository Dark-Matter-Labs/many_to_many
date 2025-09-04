'use client';

import { useMemo, useState } from 'react';
import ToolGrid from '@/components/ToolGrid';
import ToolFilters from '@/components/ToolFilters';

export default function ToolsBrowser({ tools, className }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <section className="">
      <div className="flex items-center justify-between p-[2rem] pb-28">
        <h2 className="heading-lg text-blue-800">
          Instruments for Implementation
        </h2>
        <p className="text-regular text-grey-600 max-w-xl">
          Repository of practical tools and examples to help you implement the
          Many-to-Many approach in your work.
        </p>
      </div>
      <div className="sticky top-40 z-60 pb-10">
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="text-grey-50 rounded-r-full bg-blue-800 px-10 py-4 hover:cursor-pointer"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close Panel' : 'Open Filter Panel'}
        </button>
        {isOpen && (
          <div className="">
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
      </div>

      <ToolGrid category="Now" tools={byAvailability('now')} />
      <ToolGrid category="Coming Soon" tools={byAvailability('coming_soon')} />
      {/* <ToolGrid category="Next Six Months" tools={byAvailability('next')} /> */}
      <ToolGrid category="Demand Led" tools={byAvailability('demand_led')} />
    </section>
  );
}
