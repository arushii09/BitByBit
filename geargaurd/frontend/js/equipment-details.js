// Equipment data
const equipmentData = {
    "cnc-machine": {
        name: "CNC Machine",
        category: "Machinery",
        company: "My Company (San Francisco)",
        usedBy: "Department",
        team: "Mechanical Team",
        assignedDate: "11/10/2025",
        technician: "Aka Foster",
        employee: "Production Dept",
        location: "Factory Floor",
        workCenter: "CNC Zone",
        serial: "CNC-89321",
        department: "Production",
        status: "Active"
    },
    "office-printer": {
        name: "Office Printer",
        category: "Printers",
        company: "My Company (San Francisco)",
        usedBy: "Employee",
        team: "IT Support",
        assignedDate: "12/01/2025",
        technician: "John Miller",
        employee: "Admin Team",
        location: "Admin Office",
        workCenter: "Desk-09",
        serial: "PR-2211",
        department: "Admin",
        status: "Under Maintenance"
    },
    "acer-laptop": {
        name: "Acer Laptop",
        category: "Computers",
        company: "My Company (San Francisco)",
        usedBy: "Employee",
        team: "IT Support",
        assignedDate: "12/18/2025",
        technician: "Aka Foster",
        employee: "Mitchell Admin",
        location: "IT Office",
        workCenter: "Desk-21",
        serial: "LP-203-1928",
        department: "IT",
        status: "Needs Repair"
    },
    "samsung-monitor": {
        name: 'Samsung Monitor 15"',
        category: "Monitors",
        company: "My Company (San Francisco)",
        usedBy: "Employee",
        team: "Internal Maintenance",
        assignedDate: "12/24/2025",
        technician: "Mitchell Admin",
        employee: "Abigail Peterson",
        location: "Design Desk",
        workCenter: "Desk-14",
        serial: "SM-1550",
        department: "IT",
        status: "Active"
    }
};

// DOM elements
const equipmentModal = document.getElementById("equipmentModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// Initialize equipment details functionality
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking on X or overlay
    if (closeModal) {
        closeModal.addEventListener('click', closeEquipmentModal);
    }
    
    if (equipmentModal) {
        equipmentModal.addEventListener('click', function(e) {
            if (e.target === equipmentModal) {
                closeEquipmentModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && equipmentModal && equipmentModal.classList.contains('active')) {
            closeEquipmentModal();
        }
    });
});

// Open equipment detail modal
function openEquipment(id) {
    if (!equipmentData[id]) {
        alert("Equipment data not found");
        return;
    }

    const equipment = equipmentData[id];
    
    // Generate the modal content
    modalBody.innerHTML = `
        <div class="details-grid">
            <div class="detail-group">
                <div class="detail-item">
                    <div class="detail-label">Name?</div>
                    <div class="detail-value">${equipment.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Equipment Category?</div>
                    <div class="detail-value">${equipment.category}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Company?</div>
                    <div class="detail-value">${equipment.company}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Used By?</div>
                    <div class="detail-value">${equipment.usedBy}</div>
                </div>
            </div>
            
            <div class="detail-group">
                <div class="detail-item">
                    <div class="detail-label">Maintenance Team?</div>
                    <div class="detail-value">${equipment.team}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Assigned Date?</div>
                    <div class="detail-value">${equipment.assignedDate}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Technician?</div>
                    <div class="detail-value">${equipment.technician}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Employee?</div>
                    <div class="detail-value">${equipment.employee}</div>
                </div>
            </div>
            
            <div class="detail-group">
                <div class="detail-item">
                    <div class="detail-label">Location?</div>
                    <div class="detail-value">${equipment.location}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Work Center?</div>
                    <div class="detail-value">${equipment.workCenter}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Serial</div>
                    <div class="detail-value">${equipment.serial}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Department</div>
                    <div class="detail-value">${equipment.department}</div>
                </div>
            </div>
        </div>
        
        <div class="attachment-section">
            <div class="attachment-label">Attach Document</div>
            <div class="attachment-placeholder">
                Drag and drop files here or click to browse
            </div>
        </div>
        
    `;
    
    // Update modal title with equipment name
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = equipment.name;
    }
    
    // Show modal
    equipmentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close equipment detail modal
function closeEquipmentModal() {
    equipmentModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Make functions available globally
window.openEquipment = openEquipment;
window.closeEquipmentModal = closeEquipmentModal;