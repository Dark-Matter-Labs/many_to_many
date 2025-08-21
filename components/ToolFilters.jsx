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
    <div className="mt-2 flex w-[440px] flex-col gap-4 rounded-r-4xl bg-blue-800 p-4">
      <div className="mx-auto">
        <label className="flex flex-col gap-1">
          <span className="text-grey-50 text-small">Tool type</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-lg border p-2"
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
          <span className="text-grey-50 text-small pt-4">Readiness</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-lg border p-2"
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
          <span className="text-grey-50 text-small pt-4">Test status</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-lg border p-2"
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
        <div className="flex gap-3 pt-8">
          <button
            type="button"
            className="text-small rounded-full border border-white bg-blue-400 px-3 py-2 text-blue-800 hover:cursor-pointer hover:bg-blue-500 hover:text-blue-50"
            onClick={onClear}
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}
