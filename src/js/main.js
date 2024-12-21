// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Initialize tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
});

// Initialize popovers
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popoverTriggerEl => {
    new bootstrap.Popover(popoverTriggerEl);
});