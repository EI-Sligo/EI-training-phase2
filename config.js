// =================================================================
//  COURSE CONFIGURATION FILE (config.js)
//  ---------------------------------------------------------------
//  Use this file to manage:
//  1. Admin Password
//  2. Student Classes (Logins)
//  3. Content Access (Lock/Unlock Modules & Units)
// =================================================================

// --- 1. ADMIN PASSWORD ---
const CONFIG_ADMIN_PASS = "admin123";

// --- 2. CLASS LIST (Student Logins) ---
const CONFIG_CLASSES = [
    { 
        id: "EI2025", 
        name: "Class 2025 (Day)", 
        password: "class2025", 
        expiryDate: "2025-12-31" 
    },
    { 
        id: "EI2026", 
        name: "Class 2026", 
        password: "class2026", 
        expiryDate: "2026-06-30" 
    }
];

// --- 3. MODULE LOCKING (Main Hub Cards) ---
// true = Unlocked | false = Locked ("Coming Soon")
const CONFIG_PERMISSIONS = {
    'module1': false,   // Electricity & Electronics Hub
    'module2': true,   // Installation Techniques Hub
    'module3': false,   // Pressure Measurement Hub
    'module4': false,  // Flow Measurement Hub
    'module5': false,  // Level Measurement Hub
    'module6': false,  // Temperature Measurement Hub
    'module7': false,  // Automatic Control Hub
    'module8': true    // Knowledge Check Hub
};

// --- 4. UNIT LOCKING (Individual Lessons) ---
// Lock specific units here. If a unit is FALSE, it will be locked 
// even if the main module is open.
const CONFIG_UNIT_PERMISSIONS = {
    
    // --- Module 1: Electricity & Electronics ---
    'm1_u1': true,   // Intro to Electricity / Ohm's Law
    'm1_u2': true,   // Resistance Networks
    'm1_u3': true,   // Power and Energy
    'm1_u4': true,   // Magnetism & Induction
    'm1_u5': true,   // Capacitance (DC)
    'm1_u6': true,   // Introduction to AC
    'm1_u7': true,   // The Power Transformer
    'm1_u8': true,   // Soldering & PCB
    'm1_u9': true,   // Semiconductors & Diodes
    'm1_u10': true,  // Rectification & PSUs
    'm1_u11': true,  // Intro to Logic
    'm1_u12': true,  // Intro to Transistors

    // --- Module 2: Installation Techniques ---
    'unit1': true,        // Basic Engineering
    'unit23': true,       // Conduit & Trunking Systems
    'unit22': true,       // Cables & Termination
    'unit4': true,        // Lighting Circuits
    'unit5_final': true,  // Protective Devices
    'unit225_final': true,// Fixed Appliances
    'unit7': true,        // Earthing & Bonding
    'unit8_depth': true,  // Multicore Cables
    'unit9': true,        // Installation Testing

    // --- Module 3: Pressure Measurement ---
    'm3_u1': true,   // Pressure Measurement
    'm3_u2': true,   // Digital/Liquid Manometers
    'm3_u3': true,   // Elastic Elements
    'm3_u4': true,   // Calibration Standards
    'm3_u5': true,   // Pressure Switch
    'm3_u6': true,   // Pneumatic Transmitter
    'm3_u7': true,   // Electronic Transmitter
    'm3_u8': true,   // Test Equipment

    // --- Module 4: Flow Measurement ---
    'm4_u1': true,   // Introduction to Flow
    'm4_u2': true,   // Orifice Plates
    'm4_u3': true,   // DP Flow Measurement
    'm4_u4': true,   // Turbine/PD Meters
    'm4_u5': true,   // Variable Area Meter
    'm4_u6': true,   // Vortex Flowmeter

    // --- Module 5: Level Measurement ---
    'm5_u1': true,   // Direct Method
    'm5_u2': true,   // Gas Purge (Head)
    'm5_u3': true,   // Open Tank DP
    'm5_u4': true,   // Closed Tank DP
    'm5_u5': true,   // Radar Level Systems
    'm5_u6': true,   // Switches & Electrodes
    'm5_u7': true,   // Indicators/Recorders

    // --- Module 6: Temperature Measurement ---
    'm6_u1': true,   // Intro to Temperature
    'm6_u2': true,   // Simulation/Measurement
    'm6_u3': true,   // Indicators/Recorders
    'm6_u4': true,   // Resistance Thermometer
    'm6_u5': true,   // Wheatstone Bridge
    'm6_u6': true,   // Thermocouples
    'm6_u7': true,   // Temperature Transmitter

    // --- Module 7: Automatic Control ---
    'm7_u1': true,   // Loops & Functions
    'm7_u2': true,   // Control Valves
    'm7_u3': true,   // Converters (I/P)
    'm7_u4': true,   // Electric Valves
    'm7_u5': true,   // Two-Step Control
    'm7_u6': true,   // Proportional Control

    // --- Module 8: Knowledge Check ---
    'kc_t1': false,   // T1 Knowledge Check
    'kc_t2': true,   // T2 Knowledge Check
    'kc_t3': false    // T3 Knowledge Check
};