'use client';

export default function ToolFilters({
  filters,
  onChange,
  typeOptions,
  readinessOptions,
  testStatusOptions,
  onClear,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-1">
          <span className="text-grey-600 text-sm">Tool type</span>
          <select
            className="rounded-lg border p-2"
            value={filters.type}
            onChange={(e) => onChange({ ...filters, type: e.target.value })}
          >
            <option value="all">All</option>
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-grey-600 text-sm">Readiness</span>
          <select
            className="rounded-lg border p-2"
            value={filters.readiness}
            onChange={(e) =>
              onChange({ ...filters, readiness: e.target.value })
            }
          >
            <option value="all">All</option>
            {readinessOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-grey-600 text-sm">Test status</span>
          <select
            className="rounded-lg border p-2"
            value={filters.test_status}
            onChange={(e) =>
              onChange({ ...filters, test_status: e.target.value })
            }
          >
            <option value="all">All</option>
            {testStatusOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="rounded-lg border px-3 py-2"
          onClick={onClear}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
