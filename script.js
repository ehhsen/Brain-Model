function selectComponent(component) {
    // Hide placeholder
    const placeholder = document.querySelector('.placeholder');
    if (placeholder) placeholder.style.display = 'none';

    // Remove active class from all headings
    const allHeadings = document.querySelectorAll('.heading-item');
    allHeadings.forEach(h => h.classList.remove('active'));

    // Remove active class from all brain parts
    const allParts = document.querySelectorAll('.brain-part');
    allParts.forEach(p => p.classList.remove('active'));

    // Hide all content sections
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(s => s.classList.remove('active'));

    // Activate selected heading
    const headings = document.querySelectorAll('.heading-item');
    const index = ['perceptual', 'cognitive', 'motor', 'memory'].indexOf(component);
    if (index !== -1) {
        headings[index].classList.add('active');
    }

    // Activate selected brain part
    const brainPart = document.getElementById(component + '-part');
    if (brainPart) {
        brainPart.classList.add('active');
    }

    // Show selected content
    const content = document.getElementById(component + '-content');
    if (content) {
        content.classList.add('active');
    }
}

// Optional: expose for module systems (keeps global for inline onclick attributes)
if (typeof window !== 'undefined') window.selectComponent = selectComponent;
