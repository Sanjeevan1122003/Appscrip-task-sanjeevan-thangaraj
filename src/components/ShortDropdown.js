import { useState, useRef, useEffect } from "react";

const sortOptions = [
    { value: "recommended", label: "RECOMMENDED" },
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "price-high", label: "PRICE : HIGH TO LOW" },
    { value: "price-low", label: "PRICE : LOW TO HIGH" }
];

const SortDropdown = ({ filters, updateFilters }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const upArrow = <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.499997 5.23L4.84666 0.884864C5.36 0.371712 6.2 0.371712 6.71333 0.884864L11.06 5.23" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>

    const downArrow = <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.499998 0.500022L4.84666 4.84669C5.36 5.36002 6.2 5.36002 6.71333 4.84669L11.06 0.500022" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> </svg>

    const selected = sortOptions.find(
        (opt) => opt.value === filters.sortBy
    );


    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="sort-wrapper" ref={dropdownRef}>
            <div className="sort-trigger" onClick={() => setOpen(!open)}>
                <span className="sort-tittle">{selected?.label || 'RECOMMENDED'}</span>
                <span> {open ? upArrow : downArrow}</span>
            </div>
            {open && (
                <div className="sort-dropdown">
                    {sortOptions.map((opt) => (
                        <div
                            key={opt.value}
                            className={`sort-option ${filters.sortBy === opt.value ? "active" : ""
                                }`}
                            onClick={() => {
                                updateFilters({ sortBy: opt.value });
                                setOpen(false);
                            }}
                        >
                            {filters.sortBy === opt.value && <span className="check">✓</span>}
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SortDropdown;
