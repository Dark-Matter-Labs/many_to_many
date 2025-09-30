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
    <div className="mt-2 flex h-[148px] w-[1213px] items-center justify-center gap-5 rounded-r-[60px] bg-blue-800 px-5 py-2 pl-[10px] pr-[20px]">
      <div className="flex items-center gap-5">
        <span className="text-grey-50 text-small underline">Selected Filter</span>

        <label className="flex flex-col gap-1">
          <span className="text-grey-50 text-small">Tool type</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-full border px-4 py-2"
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
          <span className="text-grey-50 text-small">Readiness</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-full border px-4 py-2"
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
          <span className="text-grey-50 text-small">Test status</span>
          <select
            className="bg-grey-50 max-w-[200px] rounded-full border px-4 py-2"
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

        <button
          type="button"
          className="text-small rounded-full border border-white bg-blue-400 px-4 py-2 mt-6 text-blue-800 hover:cursor-pointer hover:bg-blue-500 hover:text-blue-50"
          onClick={onClear}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
