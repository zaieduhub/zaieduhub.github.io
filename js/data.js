/* ============================================
   ZAI EDUCATION HUB - Complete Study Content
   All subjects & grades - Sri Lankan Curriculum
   Made by Zai Creations with Love ❤️
   ============================================ */

const ZAI_CONTENT = {
    // ====================== A/L SUBJECTS ======================
    al: {
        'combined-maths': {
            name: 'Combined Maths',
            icon: '📐',
            color: '#667eea',
            units: [
                {
                    title: 'Pure Mathematics - Calculus',
                    topics: [
                        { title: 'Differentiation', content: `
<h3>Differentiation</h3>
<p>Differentiation is the process of finding the derivative of a function. The derivative measures the rate of change of a function with respect to its variable.</p>

<h4>Basic Rules of Differentiation</h4>
<ul>
<li><strong>Power Rule:</strong> If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹</li>
<li><strong>Constant Rule:</strong> If f(x) = c, then f'(x) = 0</li>
<li><strong>Sum Rule:</strong> d/dx [f(x) + g(x)] = f'(x) + g'(x)</li>
<li><strong>Product Rule:</strong> d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)</li>
<li><strong>Quotient Rule:</strong> d/dx [f(x)/g(x)] = (f'(x)g(x) - f(x)g'(x)) / [g(x)]²</li>
<li><strong>Chain Rule:</strong> d/dx [f(g(x))] = f'(g(x)) · g'(x)</li>
</ul>

<h4>Important Derivatives</h4>
<ul>
<li>d/dx (sin x) = cos x</li>
<li>d/dx (cos x) = -sin x</li>
<li>d/dx (tan x) = sec² x</li>
<li>d/dx (eˣ) = eˣ</li>
<li>d/dx (ln x) = 1/x</li>
</ul>

<h4>Applications of Differentiation</h4>
<p><strong>1. Finding Tangents and Normals:</strong> The derivative at a point gives the slope of the tangent line.</p>
<p><strong>2. Increasing/Decreasing Functions:</strong> If f'(x) > 0, the function is increasing. If f'(x) < 0, it is decreasing.</p>
<p><strong>3. Stationary Points:</strong> Set f'(x) = 0 to find maximum, minimum, or inflection points.</p>
<p><strong>4. Optimization:</strong> Use derivatives to find maximum and minimum values in real-world problems.</p>

<h4>Example Problem</h4>
<p>Find the derivative of f(x) = 3x⁴ + 2x³ - 5x + 7</p>
<p><strong>Solution:</strong></p>
<p>f'(x) = 3(4)x³ + 2(3)x² - 5(1) + 0</p>
<p>f'(x) = 12x³ + 6x² - 5</p>

<h4>Practice Questions</h4>
<ol>
<li>Differentiate f(x) = (2x² + 3)(x - 1) using the product rule</li>
<li>Find the equation of the tangent to y = x³ - 2x at x = 1</li>
<li>Find the stationary points of f(x) = x³ - 6x² + 9x + 1</li>
</ol>
` },
                        { title: 'Integration', content: `
<h3>Integration</h3>
<p>Integration is the reverse process of differentiation. It is used to find areas under curves, volumes of revolution, and to solve differential equations.</p>

<h4>Basic Integration Rules</h4>
<ul>
<li><strong>Power Rule:</strong> ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, where n ≠ -1</li>
<li><strong>Constant Rule:</strong> ∫ k dx = kx + C</li>
<li><strong>Sum Rule:</strong> ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx</li>
<li><strong>Exponential:</strong> ∫ eˣ dx = eˣ + C</li>
<li><strong>Reciprocal:</strong> ∫ (1/x) dx = ln|x| + C</li>
</ul>

<h4>Definite Integration</h4>
<p>∫ₐᵇ f(x) dx = F(b) - F(a), where F is the antiderivative of f</p>
<p>Used to find the area under a curve between two points.</p>

<h4>Applications of Integration</h4>
<p><strong>1. Area Under a Curve:</strong> Area = ∫ₐᵇ f(x) dx</p>
<p><strong>2. Area Between Two Curves:</strong> Area = ∫ₐᵇ [f(x) - g(x)] dx</p>
<p><strong>3. Volume of Revolution:</strong> V = π ∫ₐᵇ [f(x)]² dx (around x-axis)</p>

<h4>Example Problem</h4>
<p>Evaluate ∫₀² (3x² + 2x) dx</p>
<p><strong>Solution:</strong></p>
<p>∫ (3x² + 2x) dx = x³ + x² + C</p>
<p>∫₀² (3x² + 2x) dx = [2³ + 2²] - [0³ + 0²] = 8 + 4 = 12</p>

<h4>Practice Questions</h4>
<ol>
<li>Evaluate ∫₁³ (2x - 1) dx</li>
<li>Find the area bounded by y = x² and the x-axis from x = 0 to x = 3</li>
<li>Integrate ∫ (4x³ - 6x + 5) dx</li>
</ol>
` },
                        { title: 'Limits & Continuity', content: `
<h3>Limits & Continuity</h3>
<p>A limit describes the value that a function approaches as the input approaches some value.</p>

<h4>Key Limit Concepts</h4>
<ul>
<li><strong>Limit Notation:</strong> lim_{x→a} f(x) = L means as x approaches a, f(x) approaches L</li>
<li><strong>One-Sided Limits:</strong> Left-hand limit (x→a⁻) and right-hand limit (x→a⁺) must be equal for the limit to exist</li>
<li><strong>Continuity:</strong> A function is continuous at x = a if lim_{x→a} f(x) = f(a)</li>
</ul>

<h4>Special Limits</h4>
<ul>
<li>lim_{x→0} sin x / x = 1</li>
<li>lim_{x→0} (1 - cos x) / x = 0</li>
<li>lim_{x→∞} (1 + 1/x)ˣ = e</li>
</ul>

<h4>Types of Discontinuity</h4>
<ul>
<li><strong>Removable:</strong> The limit exists but does not equal the function value</li>
<li><strong>Jump:</strong> Left and right limits exist but are not equal</li>
<li><strong>Infinite:</strong> The function approaches ±∞ at the point</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Pure Mathematics - Algebra',
                    topics: [
                        { title: 'Matrices', content: `
<h3>Matrices</h3>
<p>A matrix is a rectangular array of numbers arranged in rows and columns.</p>

<h4>Types of Matrices</h4>
<ul>
<li><strong>Row Matrix:</strong> A matrix with 1 row</li>
<li><strong>Column Matrix:</strong> A matrix with 1 column</li>
<li><strong>Square Matrix:</strong> Equal number of rows and columns</li>
<li><strong>Identity Matrix:</strong> A square matrix with 1s on the diagonal and 0s elsewhere</li>
<li><strong>Zero Matrix:</strong> All elements are zero</li>
</ul>

<h4>Matrix Operations</h4>
<p><strong>Addition/Subtraction:</strong> Add/subtract corresponding elements. Matrices must be the same size.</p>
<p><strong>Multiplication:</strong> (m×n) × (n×p) = (m×p). The number of columns of the first must equal the number of rows of the second.</p>
<p><strong>Determinant (2×2):</strong> |A| = ad - bc for A = [[a, b], [c, d]]</p>

<h4>Inverse of a Matrix</h4>
<p>A⁻¹ = (1/|A|) × adj(A)</p>
<p>For 2×2: A⁻¹ = (1/(ad-bc)) × [[d, -b], [-c, a]]</p>

<h4>Solving Systems of Equations</h4>
<p>AX = B → X = A⁻¹B</p>
<p>This method solves simultaneous linear equations efficiently.</p>
` },
                        { title: 'Complex Numbers', content: `
<h3>Complex Numbers</h3>
<p>A complex number is of the form z = a + bi, where i = √(-1), a is the real part, and b is the imaginary part.</p>

<h4>Operations with Complex Numbers</h4>
<ul>
<li><strong>Addition:</strong> (a + bi) + (c + di) = (a + c) + (b + d)i</li>
<li><strong>Subtraction:</strong> (a + bi) - (c + di) = (a - c) + (b - d)i</li>
<li><strong>Multiplication:</strong> (a + bi)(c + di) = (ac - bd) + (ad + bc)i</li>
<li><strong>Division:</strong> Multiply numerator and denominator by the complex conjugate</li>
</ul>

<h4>Complex Conjugate</h4>
<p>The conjugate of z = a + bi is z̄ = a - bi</p>

<h4>Modulus and Argument</h4>
<ul>
<li><strong>Modulus:</strong> |z| = √(a² + b²)</li>
<li><strong>Argument:</strong> arg(z) = tan⁻¹(b/a)</li>
</ul>

<h4>Polar Form</h4>
<p>z = r(cos θ + i sin θ), where r = |z| and θ = arg(z)</p>
<p>De Moivre's Theorem: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)</p>
` }
                    ]
                },
                {
                    title: 'Applied Mathematics - Mechanics',
                    topics: [
                        { title: 'Newton\'s Laws of Motion', content: `
<h3>Newton's Laws of Motion</h3>

<h4>First Law (Law of Inertia)</h4>
<p>An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force.</p>

<h4>Second Law (F = ma)</h4>
<p>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
<p><strong>Formula:</strong> F = ma (Force = mass × acceleration)</p>

<h4>Third Law (Action-Reaction)</h4>
<p>For every action, there is an equal and opposite reaction.</p>

<h4>Equations of Motion (SUVAT)</h4>
<ul>
<li>v = u + at</li>
<li>s = ut + ½at²</li>
<li>v² = u² + 2as</li>
<li>s = ½(u + v)t</li>
</ul>
<p>Where: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement</p>

<h4>Example Problem</h4>
<p>A car accelerates from rest at 2 m/s² for 5 seconds. Find its final velocity and distance traveled.</p>
<p><strong>Solution:</strong></p>
<p>u = 0, a = 2, t = 5</p>
<p>v = u + at = 0 + 2(5) = 10 m/s</p>
<p>s = ut + ½at² = 0 + ½(2)(25) = 25 m</p>
` },
                        { title: 'Projectile Motion', content: `
<h3>Projectile Motion</h3>
<p>Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of gravity.</p>

<h4>Key Concepts</h4>
<ul>
<li><strong>Horizontal motion:</strong> Constant velocity (no acceleration)</li>
<li><strong>Vertical motion:</strong> Constant acceleration due to gravity (g = 9.8 m/s²)</li>
<li><strong>Time of flight:</strong> T = 2u sin θ / g</li>
<li><strong>Maximum height:</strong> H = u² sin²θ / 2g</li>
<li><strong>Range:</strong> R = u² sin 2θ / g</li>
</ul>

<h4>Angle for Maximum Range</h4>
<p>The maximum range is achieved at an angle of 45° to the horizontal.</p>

<h4>Equations</h4>
<p><strong>Horizontal:</strong> x = u cos θ × t</p>
<p><strong>Vertical:</strong> y = u sin θ × t - ½gt²</p>
` }
                    ]
                }
            ]
        },
        'physics': {
            name: 'Physics',
            icon: '⚡',
            color: '#f093fb',
            units: [
                {
                    title: 'Mechanics',
                    topics: [
                        { title: 'Forces & Equilibrium', content: `
<h3>Forces & Equilibrium</h3>
<p>A force is a push or pull that can cause an object to accelerate, change direction, or deform.</p>

<h4>Types of Forces</h4>
<ul>
<li><strong>Gravitational Force:</strong> The attraction between two masses. F = Gm₁m₂/r²</li>
<li><strong>Normal Reaction:</strong> The perpendicular force exerted by a surface on an object</li>
<li><strong>Friction:</strong> The force that opposes motion. F_friction = μN</li>
<li><strong>Tension:</strong> The force transmitted through a string, rope, or cable</li>
<li><strong>Elastic Force:</strong> The force exerted by a stretched or compressed spring. F = -kx (Hooke's Law)</li>
</ul>

<h4>Equilibrium Conditions</h4>
<p>For an object to be in equilibrium:</p>
<ol>
<li>The sum of all forces in any direction must be zero: ΣF = 0</li>
<li>The sum of all moments (torques) about any point must be zero: Στ = 0</li>
</ol>

<h4>Moment (Torque)</h4>
<p>Moment = Force × Perpendicular distance from the pivot</p>
<p>τ = F × d (units: Nm)</p>

<h4>Center of Gravity</h4>
<p>The point where the entire weight of an object appears to act. For symmetrical objects, it lies at the geometric center.</p>
` },
                        { title: 'Work, Energy & Power', content: `
<h3>Work, Energy & Power</h3>

<h4>Work</h4>
<p>Work is done when a force causes displacement. W = F × d × cos θ</p>
<p><strong>Unit:</strong> Joule (J)</p>

<h4>Energy</h4>
<p><strong>Kinetic Energy:</strong> KE = ½mv²</p>
<p><strong>Potential Energy:</strong> PE = mgh</p>
<p><strong>Conservation of Energy:</strong> Energy cannot be created or destroyed, only converted from one form to another.</p>

<h4>Power</h4>
<p>Power is the rate of doing work. P = W/t = Fv</p>
<p><strong>Unit:</strong> Watt (W) = J/s</p>

<h4>Efficiency</h4>
<p>Efficiency = (Useful output energy / Total input energy) × 100%</p>
` }
                    ]
                },
                {
                    title: 'Waves & Oscillations',
                    topics: [
                        { title: 'Simple Harmonic Motion', content: `
<h3>Simple Harmonic Motion (SHM)</h3>
<p>SHM is a type of periodic motion where the restoring force is directly proportional to the displacement and acts in the opposite direction.</p>

<h4>Conditions for SHM</h4>
<ul>
<li>The acceleration is proportional to the displacement</li>
<li>The acceleration is always directed toward the equilibrium position</li>
<li>a = -ω²x</li>
</ul>

<h4>Key Equations</h4>
<ul>
<li><strong>Displacement:</strong> x = A sin(ωt + φ)</li>
<li><strong>Velocity:</strong> v = Aω cos(ωt + φ) = ±ω√(A² - x²)</li>
<li><strong>Acceleration:</strong> a = -ω²x</li>
<li><strong>Period:</strong> T = 2π/ω</li>
<li><strong>Frequency:</strong> f = 1/T</li>
</ul>

<h4>Energy in SHM</h4>
<ul>
<li><strong>Total Energy:</strong> E = ½mω²A² (constant)</li>
<li><strong>Kinetic Energy:</strong> KE = ½mω²(A² - x²)</li>
<li><strong>Potential Energy:</strong> PE = ½mω²x²</li>
</ul>
` },
                        { title: 'Wave Properties', content: `
<h3>Wave Properties</h3>
<p>A wave is a disturbance that transfers energy through a medium without transferring matter.</p>

<h4>Types of Waves</h4>
<ul>
<li><strong>Transverse Waves:</strong> Particles vibrate perpendicular to the direction of wave travel (e.g., light, water waves)</li>
<li><strong>Longitudinal Waves:</strong> Particles vibrate parallel to the direction of wave travel (e.g., sound waves)</li>
</ul>

<h4>Wave Equation</h4>
<p>v = fλ</p>
<p>Where: v = wave speed, f = frequency, λ = wavelength</p>

<h4>Wave Properties</h4>
<ul>
<li><strong>Reflection:</strong> Waves bounce off a surface</li>
<li><strong>Refraction:</strong> Waves change direction when entering a different medium</li>
<li><strong>Diffraction:</strong> Waves spread out when passing through a narrow opening</li>
<li><strong>Interference:</strong> Two waves superpose to form a resultant wave</li>
</ul>

<h4>Superposition Principle</h4>
<p>When two or more waves overlap, the resultant displacement is the sum of the individual displacements.</p>
` }
                    ]
                },
                {
                    title: 'Electricity & Magnetism',
                    topics: [
                        { title: 'DC Circuits', content: `
<h3>DC Circuits</h3>

<h4>Ohm's Law</h4>
<p>V = IR (Voltage = Current × Resistance)</p>

<h4>Resistors in Series</h4>
<p>R_total = R₁ + R₂ + R₃ + ...</p>

<h4>Resistors in Parallel</h4>
<p>1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</p>

<h4>Kirchhoff's Laws</h4>
<p><strong>Current Law (KCL):</strong> The sum of currents entering a junction equals the sum of currents leaving it.</p>
<p><strong>Voltage Law (KVL):</strong> The sum of potential differences around any closed loop equals zero.</p>

<h4>Electrical Power</h4>
<p>P = VI = I²R = V²/R</p>

<h4>Internal Resistance</h4>
<p>V_terminal = EMF - Ir (where r is internal resistance)</p>
` }
                    ]
                }
            ]
        },
        'chemistry': {
            name: 'Chemistry',
            icon: '🧪',
            color: '#4facfe',
            units: [
                {
                    title: 'Physical Chemistry',
                    topics: [
                        { title: 'Atomic Structure', content: `
<h3>Atomic Structure</h3>
<p>The atom consists of three subatomic particles: protons, neutrons, and electrons.</p>

<h4>Subatomic Particles</h4>
<table>
<tr><th>Particle</th><th>Charge</th><th>Mass (amu)</th><th>Location</th></tr>
<tr><td>Proton</td><td>+1</td><td>1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>0</td><td>1</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>-1</td><td>1/1837</td><td>Electron cloud</td></tr>
</table>

<h4>Atomic Number and Mass Number</h4>
<ul>
<li><strong>Atomic Number (Z):</strong> Number of protons in the nucleus</li>
<li><strong>Mass Number (A):</strong> Total number of protons + neutrons</li>
<li><strong>Isotopes:</strong> Atoms of the same element with different numbers of neutrons</li>
</ul>

<h4>Electron Configuration</h4>
<p>Electrons are arranged in shells (energy levels):</p>
<ul>
<li>Shell 1: maximum 2 electrons</li>
<li>Shell 2: maximum 8 electrons</li>
<li>Shell 3: maximum 18 electrons</li>
<li>Shell 4: maximum 32 electrons</li>
</ul>

<h4>Atomic Orbitals</h4>
<ul>
<li><strong>s-orbital:</strong> Spherical shape, holds 2 electrons</li>
<li><strong>p-orbital:</strong> Dumbbell shape, holds 6 electrons</li>
<li><strong>d-orbital:</strong> Complex shape, holds 10 electrons</li>
<li><strong>f-orbital:</strong> Complex shape, holds 14 electrons</li>
</ul>
` },
                        { title: 'Chemical Bonding', content: `
<h3>Chemical Bonding</h3>

<h4>Ionic Bonding</h4>
<p>Transfer of electrons from a metal to a non-metal. Forms oppositely charged ions that attract each other.</p>
<p><strong>Example:</strong> NaCl (Na gives 1 electron to Cl)</p>

<h4>Covalent Bonding</h4>
<p>Sharing of electrons between non-metal atoms.</p>
<p><strong>Single Bond:</strong> 1 shared pair (e.g., H₂)</p>
<p><strong>Double Bond:</strong> 2 shared pairs (e.g., O₂)</p>
<p><strong>Triple Bond:</strong> 3 shared pairs (e.g., N₂)</p>

<h4>Metallic Bonding</h4>
<p>A lattice of positive metal ions surrounded by a sea of delocalized electrons.</p>

<h4>Intermolecular Forces</h4>
<ul>
<li><strong>Van der Waals Forces:</strong> Weak forces between all molecules</li>
<li><strong>Dipole-Dipole:</strong> Attraction between polar molecules</li>
<li><strong>Hydrogen Bonding:</strong> Strong attraction between H and N, O, or F</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Inorganic Chemistry',
                    topics: [
                        { title: 'Periodic Table Trends', content: `
<h3>Periodic Table Trends</h3>

<h4>Periodic Properties</h4>
<ul>
<li><strong>Atomic Radius:</strong> Decreases across a period, increases down a group</li>
<li><strong>Ionization Energy:</strong> Increases across a period, decreases down a group</li>
<li><strong>Electronegativity:</strong> Increases across a period, decreases down a group</li>
<li><strong>Electron Affinity:</strong> Increases across a period, decreases down a group</li>
</ul>

<h4>Groups and Their Properties</h4>
<p><strong>Group 1 (Alkali Metals):</strong> Highly reactive, 1 valence electron, form +1 ions</p>
<p><strong>Group 2 (Alkaline Earth Metals):</strong> Reactive, 2 valence electrons, form +2 ions</p>
<p><strong>Group 17 (Halogens):</strong> Highly reactive non-metals, 7 valence electrons, form -1 ions</p>
<p><strong>Group 18 (Noble Gases):</strong> Inert, full valence shell, very unreactive</p>
<h4>Transition Metals</h4>
<p>Elements in the d-block that form colored compounds, have variable oxidation states, and act as catalysts.</p>
` }
                    ]
                },
                {
                    title: 'Organic Chemistry',
                    topics: [
                        { title: 'Hydrocarbons', content: `
<h3>Hydrocarbons</h3>
<p>Compounds containing only carbon and hydrogen.</p>

<h4>Alkanes (CₙH₂ₙ₊₂)</h4>
<ul>
<li>Saturated hydrocarbons (single bonds only)</li>
<li>General formula: CₙH₂ₙ₊₂</li>
<li>Undergo substitution reactions</li>
<li>Used as fuels</li>
</ul>

<h4>Alkenes (CₙH₂ₙ)</h4>
<ul>
<li>Unsaturated (contain C=C double bond)</li>
<li>General formula: CₙH₂ₙ</li>
<li>Undergo addition reactions</li>
<li>Used to make polymers</li>
</ul>

<h4>Alkynes (CₙH₂ₙ₋₂)</h4>
<ul>
<li>Unsaturated (contain C≡C triple bond)</li>
<li>General formula: CₙH₂ₙ₋₂</li>
<li>Very reactive</li>
</ul>

<h4>Functional Groups</h4>
<ul>
<li><strong>Alcohols:</strong> -OH group</li>
<li><strong>Carboxylic Acids:</strong> -COOH group</li>
<li><strong>Aldehydes:</strong> -CHO group</li>
<li><strong>Ketones:</strong> C=O group within carbon chain</li>
<li><strong>Esters:</strong> -COO- group</li>
</ul>
` }
                    ]
                }
            ]
        },
        'biology': {
            name: 'Biology',
            icon: '🧬',
            color: '#43e97b',
            units: [
                {
                    title: 'Cell Biology',
                    topics: [
                        { title: 'Cell Structure & Function', content: `
<h3>Cell Structure & Function</h3>
<p>The cell is the basic structural and functional unit of all living organisms.</p>

<h4>Cell Theory</h4>
<ol>
<li>All living organisms are composed of one or more cells</li>
<li>The cell is the basic unit of life</li>
<li>All cells arise from pre-existing cells</li>
</ol>

<h4>Prokaryotic vs Eukaryotic Cells</h4>
<table>
<tr><th>Feature</th><th>Prokaryotic</th><th>Eukaryotic</th></tr>
<tr><td>Nucleus</td><td>No (nucleoid region)</td><td>Yes (membrane-bound)</td></tr>
<tr><td>Organelles</td><td>Few (no membrane-bound)</td><td>Many (membrane-bound)</td></tr>
<tr><td>Size</td><td>0.1-5 μm</td><td>10-100 μm</td></tr>
<tr><td>Ribosomes</td><td>70S</td><td>80S</td></tr>
<tr><td>Examples</td><td>Bacteria</td><td>Plants, Animals, Fungi</td></tr>
</table>

<h4>Cell Organelles</h4>
<ul>
<li><strong>Nucleus:</strong> Contains DNA, controls cell activities</li>
<li><strong>Mitochondria:</strong> Powerhouse of the cell, site of cellular respiration</li>
<li><strong>Ribosomes:</strong> Protein synthesis</li>
<li><strong>Endoplasmic Reticulum:</strong> Protein and lipid synthesis</li>
<li><strong>Golgi Apparatus:</strong> Modifies and packages proteins</li>
<li><strong>Lysosomes:</strong> Digestion and waste removal</li>
<li><strong>Chloroplasts:</strong> Photosynthesis (plants only)</li>
<li><strong>Cell Wall:</strong> Provides structural support (plants, bacteria)</li>
</ul>
` },
                        { title: 'Cell Division', content: `
<h3>Cell Division</h3>

<h4>Mitosis</h4>
<p>Division of the nucleus resulting in two identical daughter cells.</p>
<p><strong>Stages:</strong> Prophase → Metaphase → Anaphase → Telophase</p>
<p><strong>Purpose:</strong> Growth, repair, and asexual reproduction</p>

<h4>Meiosis</h4>
<p>Division resulting in four genetically different haploid cells.</p>
<p><strong>Stages:</strong> Meiosis I (reduction) → Meiosis II (equational)</p>
<p><strong>Purpose:</strong> Production of gametes (sperm and egg cells)</p>

<h4>Comparison</h4>
<table>
<tr><th>Feature</th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Number of divisions</td><td>1</td><td>2</td></tr>
<tr><td>Daughter cells</td><td>2 diploid</td><td>4 haploid</td></tr>
<tr><td>Genetic variation</td><td>None (identical)</td><td>Yes (crossing over)</td></tr>
<tr><td>Occurs in</td><td>Body cells</td><td>Gonads</td></tr>
</table>
` }
                    ]
                },
                {
                    title: 'Genetics',
                    topics: [
                        { title: 'DNA & RNA', content: `
<h3>DNA & RNA</h3>

<h4>DNA Structure</h4>
<p>DNA (Deoxyribonucleic Acid) is a double helix structure.</p>
<ul>
<li><strong>Backbone:</strong> Sugar (deoxyribose) and phosphate</li>
<li><strong>Bases:</strong> Adenine (A), Thymine (T), Guanine (G), Cytosine (C)</li>
<li><strong>Base pairing:</strong> A=T, G≡C</li>
</ul>

<h4>DNA Replication</h4>
<p>DNA unwinds and each strand serves as a template for a new complementary strand. This is semi-conservative replication.</p>

<h4>RNA Types</h4>
<ul>
<li><strong>mRNA (Messenger RNA):</strong> Carries genetic code from DNA to ribosomes</li>
<li><strong>tRNA (Transfer RNA):</strong> Brings amino acids to ribosomes during translation</li>
<li><strong>rRNA (Ribosomal RNA):</strong> Structural component of ribosomes</li>
</ul>

<h4>Protein Synthesis</h4>
<p><strong>Transcription:</strong> DNA → mRNA (occurs in nucleus)</p>
<p><strong>Translation:</strong> mRNA → Protein (occurs at ribosomes)</p>

<h4>Mendelian Genetics</h4>
<ul>
<li><strong>Gene:</strong> Segment of DNA that codes for a protein</li>
<li><strong>Allele:</strong> Alternative form of a gene</li>
<li><strong>Dominant:</strong> Expressed when present (capital letter)</li>
<li><strong>Recessive:</strong> Only expressed when two copies are present</li>
<li><strong>Genotype:</strong> Genetic makeup (e.g., AA, Aa, aa)</li>
<li><strong>Phenotype:</strong> Observable characteristics</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Human Biology',
                    topics: [
                        { title: 'Human Body Systems', content: `
<h3>Human Body Systems</h3>

<h4>Circulatory System</h4>
<p>Transports oxygen, nutrients, hormones, and waste products throughout the body.</p>
<ul>
<li><strong>Heart:</strong> Four-chambered pump (right atrium, right ventricle, left atrium, left ventricle)</li>
<li><strong>Arteries:</strong> Carry blood away from the heart (oxygenated except pulmonary)</li>
<li><strong>Veins:</strong> Carry blood toward the heart (deoxygenated except pulmonary)</li>
<li><strong>Capillaries:</strong> Sites of gas and nutrient exchange</li>
</ul>

<h4>Respiratory System</h4>
<p>Responsible for gas exchange (O₂ in, CO₂ out).</p>
<ul>
<li><strong>Pathway:</strong> Nose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli</li>
<li><strong>Alveoli:</strong> Tiny air sacs where gas exchange occurs</li>
</ul>

<h4>Digestive System</h4>
<p>Breaks down food into absorbable nutrients.</p>
<ul>
<li><strong>Mouth:</strong> Mechanical and chemical digestion (amylase)</li>
<li><strong>Stomach:</strong> Protein digestion (pepsin, HCl)</li>
<li><strong>Small Intestine:</strong> Main site of digestion and absorption</li>
<li><strong>Large Intestine:</strong> Water absorption</li>
</ul>

<h4>Nervous System</h4>
<ul>
<li><strong>Central Nervous System (CNS):</strong> Brain and spinal cord</li>
<li><strong>Peripheral Nervous System (PNS):</strong> Nerves connecting CNS to the body</li>
<li><strong>Neuron:</strong> Basic unit - dendrites, cell body, axon, synapse</li>
</ul>
` }
                    ]
                }
            ]
        },
        'ict': {
            name: 'ICT',
            icon: '💻',
            color: '#fa709a',
            units: [
                {
                    title: 'Programming',
                    topics: [
                        { title: 'Introduction to Programming', content: `
<h3>Introduction to Programming</h3>
<p>Programming is the process of creating instructions that a computer can execute to perform specific tasks.</p>

<h4>Programming Paradigms</h4>
<ul>
<li><strong>Procedural:</strong> Step-by-step instructions (C, Pascal)</li>
<li><strong>Object-Oriented:</strong> Based on objects and classes (Java, Python, C++)</li>
<li><strong>Functional:</strong> Based on mathematical functions (Haskell, Lisp)</li>
<li><strong>Event-Driven:</strong> Responds to user actions (JavaScript, Visual Basic)</li>
</ul>

<h4>Basic Programming Concepts</h4>
<ul>
<li><strong>Variables:</strong> Containers for storing data values</li>
<li><strong>Data Types:</strong> Integer, Float, String, Boolean, Array</li>
<li><strong>Operators:</strong> Arithmetic (+, -, *, /), Comparison (==, !=, <, >), Logical (AND, OR, NOT)</li>
<li><strong>Control Structures:</strong> if-else, loops (for, while), switch-case</li>
<li><strong>Functions:</strong> Reusable blocks of code that perform specific tasks</li>
</ul>

<h4>Algorithm Design</h4>
<p>An algorithm is a step-by-step procedure for solving a problem.</p>
<p><strong>Ways to represent algorithms:</strong></p>
<ul>
<li><strong>Pseudocode:</strong> Informal language that describes algorithm steps</li>
<li><strong>Flowcharts:</strong> Visual representation using symbols</li>
<li><strong>Program Code:</strong> Actual implementation in a programming language</li>
</ul>

<h4>Sample Pseudocode</h4>
<pre>BEGIN
    INPUT number
    IF number > 0 THEN
        PRINT "Positive"
    ELSE IF number < 0 THEN
        PRINT "Negative"
    ELSE
        PRINT "Zero"
    END IF
END</pre>
` },
                        { title: 'Data Structures', content: `
<h3>Data Structures</h3>
<p>Data structures are ways of organizing and storing data for efficient access and modification.</p>

<h4>Arrays</h4>
<p>A collection of elements of the same type stored in contiguous memory locations.</p>
<ul>
<li>Indexed access (random access)</li>
<li>Fixed size (in most languages)</li>
<li>Used for: lists, matrices, lookup tables</li>
</ul>

<h4>Linked Lists</h4>
<p>A linear collection of elements where each element points to the next.</p>
<ul>
<li>Dynamic size</li>
<li>Sequential access</li>
<li>Types: Singly linked, Doubly linked, Circular</li>
</ul>

<h4>Stacks</h4>
<p>Last-In-First-Out (LIFO) data structure.</p>
<ul>
<li>Operations: push (add), pop (remove), peek (view top)</li>
<li>Used for: function calls, undo operations, expression evaluation</li>
</ul>

<h4>Queues</h4>
<p>First-In-First-Out (FIFO) data structure.</p>
<ul>
<li>Operations: enqueue (add), dequeue (remove)</li>
<li>Used for: task scheduling, printer queues, BFS algorithm</li>
</ul>

<h4>Trees</h4>
<p>A hierarchical data structure with a root node and child nodes.</p>
<ul>
<li><strong>Binary Tree:</strong> Each node has at most 2 children</li>
<li><strong>Binary Search Tree:</strong> Left < Root < Right</li>
<li>Used for: file systems, databases, HTML DOM</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Databases',
                    topics: [
                        { title: 'Database Management Systems', content: `
<h3>Database Management Systems (DBMS)</h3>
<p>A DBMS is software that manages databases, allowing users to store, retrieve, and manipulate data.</p>

<h4>Types of Databases</h4>
<ul>
<li><strong>Relational Database:</strong> Data organized in tables with relationships (e.g., MySQL, PostgreSQL)</li>
<li><strong>NoSQL:</strong> Non-relational databases for unstructured data (e.g., MongoDB)</li>
<li><strong>Object-Oriented:</strong> Stores data as objects</li>
</ul>

<h4>Relational Database Concepts</h4>
<ul>
<li><strong>Table:</strong> Collection of related data organized in rows and columns</li>
<li><strong>Record (Row):</strong> A single entry in a table</li>
<li><strong>Field (Column):</strong> A specific attribute of the data</li>
<li><strong>Primary Key:</strong> Uniquely identifies each record</li>
<li><strong>Foreign Key:</strong> Links tables together through relationships</li>
</ul>

<h4>SQL (Structured Query Language)</h4>
<p><strong>Basic SQL Commands:</strong></p>
<pre>-- Create a table
CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    grade VARCHAR(10)
);

-- Insert data
INSERT INTO Students VALUES (1, 'Kamal', 'A/L');

-- Query data
SELECT * FROM Students WHERE grade = 'A/L';

-- Update data
UPDATE Students SET grade = 'O/L' WHERE id = 1;

-- Delete data
DELETE FROM Students WHERE id = 1;</pre>
` }
                    ]
                },
                {
                    title: 'Networks',
                    topics: [
                        { title: 'Computer Networks', content: `
<h3>Computer Networks</h3>
<p>A computer network is a collection of interconnected computers that can communicate and share resources.</p>

<h4>Network Types</h4>
<ul>
<li><strong>PAN (Personal Area Network):</strong> Small range (Bluetooth, ~10m)</li>
<li><strong>LAN (Local Area Network):</strong> Single building or office</li>
<li><strong>MAN (Metropolitan Area Network):</strong> City-wide network</li>
<li><strong>WAN (Wide Area Network):</strong> Large geographical area (Internet)</li>
</ul>

<h4>Network Topologies</h4>
<ul>
<li><strong>Star:</strong> All devices connect to a central hub/switch</li>
<li><strong>Bus:</strong> All devices connect to a single cable</li>
<li><strong>Ring:</strong> Each device connects to two others forming a ring</li>
<li><strong>Mesh:</strong> Every device connects to every other device</li>
</ul>

<h4>OSI Model (7 Layers)</h4>
<ol>
<li><strong>Physical:</strong> Cables, signals, hardware</li>
<li><strong>Data Link:</strong> MAC addressing, error detection</li>
<li><strong>Network:</strong> IP addressing, routing</li>
<li><strong>Transport:</strong> TCP/UDP, reliable delivery</li>
<li><strong>Session:</strong> Session management</li>
<li><strong>Presentation:</strong> Data encryption, formatting</li>
<li><strong>Application:</strong> User applications (HTTP, FTP, SMTP)</li>
</ol>

<h4>Network Protocols</h4>
<ul>
<li><strong>TCP/IP:</strong> Core Internet protocol suite</li>
<li><strong>HTTP/HTTPS:</strong> Web communication</li>
<li><strong>FTP:</strong> File transfer</li>
<li><strong>SMTP/POP3/IMAP:</strong> Email protocols</li>
<li><strong>DNS:</strong> Domain name resolution</li>
</ul>
` }
                    ]
                }
            ]
        },
        'english': {
            name: 'English',
            icon: '📖',
            color: '#f6d365',
            units: [
                {
                    title: 'Grammar & Composition',
                    topics: [
                        { title: 'Parts of Speech', content: `
<h3>Parts of Speech</h3>
<p>Words are categorized into eight parts of speech based on their function in a sentence.</p>

<h4>1. Nouns</h4>
<p>Names of people, places, things, or ideas.</p>
<ul>
<li><strong>Common Nouns:</strong> city, student, book</li>
<li><strong>Proper Nouns:</strong> Colombo, Kamal, Sri Lanka</li>
<li><strong>Abstract Nouns:</strong> love, freedom, happiness</li>
<li><strong>Collective Nouns:</strong> team, family, crowd</li>
</ul>

<h4>2. Pronouns</h4>
<p>Words that replace nouns.</p>
<ul>
<li><strong>Personal:</strong> I, you, he, she, it, we, they</li>
<li><strong>Possessive:</strong> my, your, his, her, its, our, their</li>
<li><strong>Reflexive:</strong> myself, yourself, himself</li>
<li><strong>Relative:</strong> who, whom, which, that</li>
</ul>

<h4>3. Verbs</h4>
<p>Action or state of being.</p>
<ul>
<li><strong>Action Verbs:</strong> run, eat, study</li>
<li><strong>Linking Verbs:</strong> am, is, are, was, were</li>
<li><strong>Auxiliary Verbs:</strong> have, do, will, shall</li>
</ul>

<h4>4. Adjectives</h4>
<p>Words that describe nouns. (beautiful, tall, interesting)</p>

<h4>5. Adverbs</h4>
<p>Words that modify verbs, adjectives, or other adverbs. (quickly, very, always)</p>

<h4>6. Prepositions</h4>
<p>Show relationship between words. (in, on, at, under, between)</p>

<h4>7. Conjunctions</h4>
<p>Connect words, phrases, or clauses. (and, but, or, because, although)</p>

<h4>8. Interjections</h4>
<p>Express strong emotion. (Wow! Oh! Ouch!)</p>
` },
                        { title: 'Tenses', content: `
<h3>Verb Tenses</h3>

<h4>Present Tenses</h4>
<ul>
<li><strong>Simple Present:</strong> I study (habitual actions, general truths)</li>
<li><strong>Present Continuous:</strong> I am studying (actions happening now)</li>
<li><strong>Present Perfect:</strong> I have studied (past actions with present relevance)</li>
<li><strong>Present Perfect Continuous:</strong> I have been studying (actions that started in the past and continue)</li>
</ul>

<h4>Past Tenses</h4>
<ul>
<li><strong>Simple Past:</strong> I studied (completed actions in the past)</li>
<li><strong>Past Continuous:</strong> I was studying (actions in progress in the past)</li>
<li><strong>Past Perfect:</strong> I had studied (actions completed before another past action)</li>
<li><strong>Past Perfect Continuous:</strong> I had been studying (duration before a past event)</li>
</ul>

<h4>Future Tenses</h4>
<ul>
<li><strong>Simple Future:</strong> I will study (predictions, promises)</li>
<li><strong>Future Continuous:</strong> I will be studying (actions in progress at a future time)</li>
<li><strong>Future Perfect:</strong> I will have studied (actions completed before a future time)</li>
<li><strong>Future Perfect Continuous:</strong> I will have been studying (duration up to a future time)</li>
</ul>

<h4>Active vs Passive Voice</h4>
<p><strong>Active:</strong> The subject performs the action. "The cat chased the mouse."</p>
<p><strong>Passive:</strong> The subject receives the action. "The mouse was chased by the cat."</p>
` },
                        { title: 'Essay Writing', content: `
<h3>Essay Writing</h3>
<p>An essay is a structured piece of writing that presents and develops a specific argument or topic.</p>

<h4>Structure of an Essay</h4>
<p><strong>1. Introduction (10-15% of essay)</strong></p>
<ul>
<li>Hook the reader with an interesting opening</li>
<li>Provide background information</li>
<li>State your thesis (main argument)</li>
</ul>

<p><strong>2. Body Paragraphs (70-80% of essay)</strong></p>
<ul>
<li>Each paragraph should focus on ONE main idea</li>
<li>Start with a topic sentence</li>
<li>Provide evidence and examples</li>
<li>Explain how evidence supports your thesis</li>
<li>Use transition words (however, therefore, furthermore)</li>
</ul>

<p><strong>3. Conclusion (10-15% of essay)</strong></p>
<ul>
<li>Restate your thesis in different words</li>
<li>Summarize main points</li>
<li>End with a thought-provoking closing statement</li>
</ul>

<h4>Types of Essays</h4>
<ul>
<li><strong>Narrative:</strong> Tells a story</li>
<li><strong>Descriptive:</strong> Creates a vivid picture</li>
<li><strong>Expository:</strong> Explains or informs</li>
<li><strong>Persuasive:</strong> Convinces the reader</li>
<li><strong>Argumentative:</strong> Presents both sides of an issue</li>
</ul>

<h4>Writing Tips</h4>
<ul>
<li>Plan before you write (outline)</li>
<li>Use varied sentence structures</li>
<li>Choose precise vocabulary</li>
<li>Proofread for spelling and grammar</li>
<li>Stay on topic</li>
</ul>
` }
                    ]
                }
            ]
        },
        'accounting': {
            name: 'Accounting',
            icon: '📊',
            color: '#a18cd1',
            units: [
                {
                    title: 'Financial Accounting',
                    topics: [
                        { title: 'Accounting Concepts', content: `
<h3>Accounting Concepts & Principles</h3>

<h4>Basic Accounting Concepts</h4>
<ul>
<li><strong>Business Entity Concept:</strong> The business is separate from its owner</li>
<li><strong>Going Concern Concept:</strong> The business will continue operating indefinitely</li>
<li><strong>Accrual Concept:</strong> Revenue and expenses are recorded when earned/incurred, not when cash is received/paid</li>
<li><strong>Consistency Concept:</strong> Accounting methods should be consistent from period to period</li>
<li><strong>Prudence Concept:</strong> Anticipate losses but not profits</li>
<li><strong>Materiality Concept:</strong> Only significant items need to be disclosed</li>
</ul>

<h4>The Accounting Equation</h4>
<p><strong>Assets = Liabilities + Owner's Equity</strong></p>

<h4>Double Entry System</h4>
<p>Every transaction affects at least two accounts:</p>
<ul>
<li><strong>Debit (Dr):</strong> Left side (increases assets and expenses)</li>
<li><strong>Credit (Cr):</strong> Right side (increases liabilities, equity, and revenue)</li>
</ul>

<h4>Types of Accounts</h4>
<ul>
<li><strong>Assets:</strong> What the business owns (cash, inventory, equipment)</li>
<li><strong>Liabilities:</strong> What the business owes (loans, accounts payable)</li>
<li><strong>Equity:</strong> Owner's investment + retained earnings</li>
<li><strong>Revenue:</strong> Income from business operations</li>
<li><strong>Expenses:</strong> Costs incurred to generate revenue</li>
</ul>
` },
                        { title: 'Financial Statements', content: `
<h3>Financial Statements</h3>

<h4>1. Income Statement (Profit & Loss Account)</h4>
<p>Shows the financial performance of a business over a period.</p>
<pre>
Revenue (Sales)                    XXX
Less: Cost of Goods Sold           (XXX)
Gross Profit                        XXX
Less: Operating Expenses           (XXX)
Net Profit                          XXX
</pre>

<h4>2. Statement of Financial Position (Balance Sheet)</h4>
<p>Shows the financial position at a specific point in time.</p>
<pre>
ASSETS
Non-Current Assets                  XXX
Current Assets                      XXX
Total Assets                        XXX

EQUITY & LIABILITIES
Owner's Equity                      XXX
Non-Current Liabilities             XXX
Current Liabilities                 XXX
Total Equity & Liabilities          XXX
</pre>

<h4>3. Cash Flow Statement</h4>
<p>Shows the inflows and outflows of cash:</p>
<ul>
<li><strong>Operating Activities:</strong> Day-to-day business operations</li>
<li><strong>Investing Activities:</strong> Purchase/sale of long-term assets</li>
<li><strong>Financing Activities:</strong> Loans, equity, dividends</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Cost Accounting',
                    topics: [
                        { title: 'Cost Concepts', content: `
<h3>Cost Accounting Concepts</h3>

<h4>Types of Costs</h4>
<ul>
<li><strong>Fixed Costs:</strong> Do not change with production level (rent, salaries)</li>
<li><strong>Variable Costs:</strong> Change proportionally with production (raw materials)</li>
<li><strong>Semi-Variable Costs:</strong> Have both fixed and variable components</li>
<li><strong>Direct Costs:</strong> Can be directly traced to a product (direct materials, direct labor)</li>
<li><strong>Indirect Costs:</strong> Cannot be directly traced (overhead)</li>
</ul>

<h4>Cost-Volume-Profit Analysis</h4>
<p><strong>Break-Even Point:</strong> Where total revenue = total costs</p>
<p>Break-Even (units) = Fixed Costs / (Selling Price - Variable Cost per unit)</p>

<h4>Marginal Costing</h4>
<p>Considers only variable costs as product costs. Fixed costs are treated as period costs.</p>
` }
                    ]
                }
            ]
        },
        'economics': {
            name: 'Economics',
            icon: '💰',
            color: '#fbc2eb',
            units: [
                {
                    title: 'Microeconomics',
                    topics: [
                        { title: 'Demand & Supply', content: `
<h3>Demand & Supply</h3>

<h4>Law of Demand</h4>
<p>As price increases, quantity demanded decreases (and vice versa), assuming all other factors remain constant.</p>

<h4>Factors Affecting Demand</h4>
<ul>
<li>Price of the product</li>
<li>Income of consumers</li>
<li>Price of related goods (substitutes and complements)</li>
<li>Tastes and preferences</li>
<li>Population and demographics</li>
<li>Expectations about future prices</li>
</ul>

<h4>Law of Supply</h4>
<p>As price increases, quantity supplied increases (and vice versa).</p>

<h4>Market Equilibrium</h4>
<p>Where quantity demanded equals quantity supplied. The market clears at the equilibrium price.</p>

<h4>Price Elasticity of Demand</h4>
<p>PED = % Change in Quantity Demanded / % Change in Price</p>
<ul>
<li><strong>Elastic (PED > 1):</strong> Demand is sensitive to price changes</li>
<li><strong>Inelastic (PED < 1):</strong> Demand is not sensitive to price changes</li>
<li><strong>Unit Elastic (PED = 1):</strong> Proportional change</li>
</ul>
` },
                        { title: 'Market Structures', content: `
<h3>Market Structures</h3>

<h4>Perfect Competition</h4>
<ul>
<li>Many buyers and sellers</li>
<li>Homogeneous products</li>
<li>Free entry and exit</li>
<li>Perfect information</li>
<li>Firms are price takers</li>
</ul>

<h4>Monopoly</h4>
<ul>
<li>Single seller</li>
<li>Unique product with no close substitutes</li>
<li>High barriers to entry</li>
<li>Firm is a price maker</li>
</ul>

<h4>Monopolistic Competition</h4>
<ul>
<li>Many firms selling differentiated products</li>
<li>Some control over price</li>
<li>Relatively easy entry and exit</li>
<li>Non-price competition (advertising, branding)</li>
</ul>

<h4>Oligopoly</h4>
<ul>
<li>Few large firms dominate</li>
<li>Interdependence between firms</li>
<li>High barriers to entry</li>
<li>Strategic behavior (game theory)</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Macroeconomics',
                    topics: [
                        { title: 'National Income', content: `
<h3>National Income</h3>
<p>National income measures the total value of goods and services produced in an economy.</p>

<h4>Measuring National Income</h4>
<ul>
<li><strong>Output Method:</strong> Value of all goods and services produced</li>
<li><strong>Income Method:</strong> Sum of all incomes earned (wages, rent, interest, profit)</li>
<li><strong>Expenditure Method:</strong> Total spending on goods and services</li>
</ul>

<h4>Key Terms</h4>
<ul>
<li><strong>GDP (Gross Domestic Product):</strong> Total output produced within a country's borders</li>
<li><strong>GNP (Gross National Product):</strong> GDP + net income from abroad</li>
<li><strong>NNP (Net National Product):</strong> GNP - depreciation</li>
<li><strong>Real GDP:</strong> GDP adjusted for inflation</li>
</ul>

<h4>Business Cycle</h4>
<p>Fluctuations in economic activity: Expansion → Peak → Contraction → Trough → Expansion</p>
` }
                    ]
                }
            ]
        },
        'business-studies': {
            name: 'Business Studies',
            icon: '🏢',
            color: '#89f7fe',
            units: [
                {
                    title: 'Management',
                    topics: [
                        { title: 'Functions of Management', content: `
<h3>Functions of Management</h3>

<h4>1. Planning</h4>
<p>Setting objectives and determining the best course of action to achieve them.</p>
<ul>
<li><strong>Strategic Planning:</strong> Long-term (3-5 years)</li>
<li><strong>Tactical Planning:</strong> Medium-term (1-2 years)</li>
<li><strong>Operational Planning:</strong> Short-term (daily/weekly)</li>
</ul>

<h4>2. Organizing</h4>
<p>Arranging resources and activities to achieve objectives.</p>
<ul>
<li>Departmentalization</li>
<li>Chain of command</li>
<li>Span of control</li>
<li>Delegation of authority</li>
</ul>

<h4>3. Leading</h4>
<p>Directing and motivating employees to achieve organizational goals.</p>
<ul>
<li><strong>Leadership Styles:</strong> Autocratic, Democratic, Laissez-faire</li>
<li><strong>Motivation Theories:</strong> Maslow, Herzberg, McGregor</li>
</ul>

<h4>4. Controlling</h4>
<p>Monitoring performance and taking corrective action.</p>
<ul>
<li>Set standards</li>
<li>Measure performance</li>
<li>Compare with standards</li>
<li>Take corrective action</li>
</ul>

<h4>5. Staffing</h4>
<p>Recruiting, training, and developing employees.</p>
` },
                        { title: 'Marketing', content: `
<h3>Marketing Management</h3>

<h4>Marketing Mix (7Ps)</h4>
<ul>
<li><strong>Product:</strong> What you sell (features, quality, branding)</li>
<li><strong>Price:</strong> How much you charge</li>
<li><strong>Place:</strong> Where you sell (distribution channels)</li>
<li><strong>Promotion:</strong> How you communicate (advertising, PR)</li>
<li><strong>People:</strong> Staff and customer service</li>
<li><strong>Process:</strong> Systems and procedures</li>
<li><strong>Physical Evidence:</strong> Tangible cues (packaging, environment)</li>
</ul>

<h4>Market Segmentation</h4>
<ul>
<li><strong>Demographic:</strong> Age, gender, income, education</li>
<li><strong>Geographic:</strong> Location, climate</li>
<li><strong>Psychographic:</strong> Lifestyle, values, personality</li>
<li><strong>Behavioral:</strong> Purchasing habits, brand loyalty</li>
</ul>

<h4>Product Life Cycle</h4>
<p>Introduction → Growth → Maturity → Decline</p>
` }
                    ]
                }
            ]
        },
        'sinhala': {
            name: 'Sinhala',
            icon: '📝',
            color: '#fddb92',
            units: [
                {
                    title: 'සාහිත්‍යය (Literature)',
                    topics: [
                        { title: 'කවි විශ්ලේෂණය', content: `
<h3>කවි විශ්ලේෂණය</h3>
<p>කවියක් විශ්ලේෂණය කිරීමේදී පහත සාධක කෙරෙහි අවධානය යොමු කළ යුතුය.</p>

<h4>කවි විශ්ලේෂණයේ පියවර</h4>
<ol>
<li><strong>තේමාව හඳුනා ගැනීම:</strong> කවිය පදනම් වී ඇති ප්‍රධාන අදහස කුමක්ද?</li>
<li><strong>භාෂා ශෛලිය:</strong> භාවිතා කර ඇති භාෂා විලාසය, වචන මාලාව</li>
<li><strong>අලංකාර:</strong> උපමා, රූපක, උත්ප්‍රේක්ෂා වැනි අලංකාර</li>
<li><strong>චන්දස්:</strong> රිද්මය, පද බැඳීම</li>
<li><strong>හැඟීම්:</strong> කවියෙන් ප්‍රකාශිත හැඟීම් සහ අදහස්</li>
</ol>

<h4>ප්‍රධාන අලංකාර</h4>
<table>
<tr><th>අලංකාරය</th><th>විස්තරය</th><th>උදාහරණය</th></tr>
<tr><td>උපමා</td><td>සමාන කිරීම (වැනි, මෙන්, බඳු)</td><td>කුමරු සඳ වැනිය</td></tr>
<tr><td>රූපක</td><td>එකක් අනෙකක් ලෙස හැඳින්වීම</td><td>සඳ වැනි මුහුණ</td></tr>
<tr><td>උත්ප්‍රේක්ෂා</td><td>අතිශයෝක්තියෙන් විස්තර කිරීම</td><td>කඳු දිය වී ගියේය</td></tr>
<tr><td>දෘෂ්ටාන්ත</td><td>උදාහරණ දීම</td><td>රාම රාවණා කථාව</td></tr>
</table>

<h4>සාහිත්‍ය යුග</h4>
<ul>
<li><strong>අනුරාධපුර යුගය:</strong> මුල්ම ගද්‍ය පද්‍ය කෘති</li>
<li><strong>පොළොන්නරු යුගය:</strong> ලෝක ප්‍රකාශන, තෙරවැදුන් වත</li>
<li><strong>දඹදෙණි යුගය:</strong> කව්සිළුමිණ, පුජාවලිය</li>
<li><strong>කෝට්ටේ යුගය:</strong> සද්ධර්ම රත්නාවලිය, ගුත්තිල කාව්‍යය</li>
<li><strong>මහනුවර යුගය:</strong> රාජරත්නාකරය, විශුද්ධි මාර්ග සන්නය</li>
<li><strong>නූතන යුගය:</strong> මුද්‍රිත ග්‍රන්ථ, කෙටිකතා, නවකතා</li>
</ul>
` },
                        { title: 'ව්‍යාකරණය (Grammar)', content: `
<h3>සිංහල ව්‍යාකරණය</h3>

<h4>1. නාම පද (Nouns)</h4>
<p>පුද්ගලයන්, ස්ථාන, වස්තු සහ අදහස් දක්වන වචන</p>
<ul>
<li><strong>සජීවී:</strong> මිනිසා, ගස, බල්ලා</li>
<li><strong>අජීවී:</strong> පොත, ගෙය, කඩුව</li>
<li><strong>පුරුෂ ලිංග:</strong> පියා, මාමා</li>
<li><strong>ස්ත්‍රී ලිංග:</strong> මව, නැන්දා</li>
<li><strong>උභය ලිංග:</strong> ළමයා, ගුරුවරයා</li>
<li><strong>නපුංසක ලිංග:</strong> පොත, ගස</li>
</ul>

<h4>2. විශේෂණ පද (Adjectives)</h4>
<p>නාම පද විශේෂ කරන වචන (ලස්සන, උස, රතු)</p>

<h4>3. ක්‍රියා පද (Verbs)</h4>
<p>ක්‍රියාවක් දක්වන වචන (යනවා, කනවා, කියවනවා)</p>

<h4>4. වාක්‍ය රටා (Sentence Patterns)</h4>
<p><strong>සරල වාක්‍ය:</strong> එක් ක්‍රියාවක් ඇති වාක්‍ය</p>
<p><strong>සංයුක්ත වාක්‍ය:</strong> සම්බන්ධක පදවලින් යුක්ත වාක්‍ය</p>

<h4>5. අක්ෂර මාලාව</h4>
<p>සිංහල හෝඩියේ මූලික අක්ෂර 36 කි.</p>
<ul>
<li><strong>කෙටි ස්වර:</strong> අ, ආ, ඉ, ඊ, උ, ඌ, එ, ඒ, ඔ, ඕ</li>
<li><strong>දිග ස්වර:</strong> ආ, ඊ, ඌ, ඒ, ඕ, ඇ, ඈ</li>
<li><strong>ව්‍යංජන:</strong> ක, ග, ච, ජ, ට, ඩ, ත, ද, ප, බ, ය, ර, ල, ව, ස, හ, අ</li>
</ul>
` }
                    ]
                }
            ]
        }
    },

    // ====================== O/L SUBJECTS ======================
    ol: {
        'mathematics': {
            name: 'Mathematics',
            icon: '📐',
            color: '#667eea',
            units: [
                {
                    title: 'Algebra',
                    topics: [
                        { title: 'Algebraic Expressions', content: `
<h3>Algebraic Expressions</h3>
<p>Algebraic expressions are mathematical phrases that contain variables, constants, and operations.</p>

<h4>Basic Concepts</h4>
<ul>
<li><strong>Variable:</strong> A symbol (like x or y) that represents an unknown value</li>
<li><strong>Constant:</strong> A fixed value (like 5 or -3)</li>
<li><strong>Coefficient:</strong> The number multiplied by a variable (in 3x, 3 is the coefficient)</li>
<li><strong>Term:</strong> A single number, variable, or their product</li>
</ul>

<h4>Operations with Expressions</h4>
<p><strong>Addition/Subtraction:</strong> Combine like terms (terms with the same variable and exponent)</p>
<p>Example: 3x + 2y - x + 5y = 2x + 7y</p>

<p><strong>Multiplication:</strong> Multiply coefficients and add exponents of like variables</p>
<p>Example: (2x)(3x²) = 6x³</p>

<p><strong>Expanding Brackets:</strong> a(b + c) = ab + ac</p>
<p>Example: 3(x + 4) = 3x + 12</p>

<p><strong>Factorization:</strong> Reverse of expanding. Common factor, difference of squares, grouping</p>

<h4>Special Products</h4>
<ul>
<li>(a + b)² = a² + 2ab + b²</li>
<li>(a - b)² = a² - 2ab + b²</li>
<li>(a + b)(a - b) = a² - b²</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Simplify: 3(x + 2) - 2(x - 1)</li>
<li>Factorize: x² + 5x + 6</li>
<li>Expand: (2x + 1)(x - 3)</li>
</ol>
` },
                        { title: 'Linear Equations', content: `
<h3>Linear Equations</h3>
<p>A linear equation is an equation where the highest power of the variable is 1.</p>

<h4>Solving Linear Equations</h4>
<p><strong>Example:</strong> Solve 2x + 5 = 13</p>
<p>Step 1: 2x = 13 - 5</p>
<p>Step 2: 2x = 8</p>
<p>Step 3: x = 4</p>

<h4>Simultaneous Equations</h4>
<p>Two equations with two unknowns solved together.</p>
<p><strong>Method 1: Substitution</strong></p>
<p>Solve one equation for a variable, then substitute into the other.</p>
<p><strong>Method 2: Elimination</strong></p>
<p>Add or subtract equations to eliminate one variable.</p>

<p><strong>Example (Elimination):</strong></p>
<p>x + y = 7</p>
<p>x - y = 1</p>
<p>Adding: 2x = 8 → x = 4</p>
<p>Then: 4 + y = 7 → y = 3</p>

<h4>Word Problems</h4>
<p>To solve word problems:</p>
<ol>
<li>Identify what you need to find (define variables)</li>
<li>Write equations based on the given information</li>
<li>Solve the equations</li>
<li>Check your answer</li>
</ol>
` }
                    ]
                },
                {
                    title: 'Geometry',
                    topics: [
                        { title: 'Triangles & Angles', content: `
<h3>Triangles & Angles</h3>

<h4>Types of Angles</h4>
<ul>
<li><strong>Acute Angle:</strong> Less than 90°</li>
<li><strong>Right Angle:</strong> Exactly 90°</li>
<li><strong>Obtuse Angle:</strong> Between 90° and 180°</li>
<li><strong>Straight Angle:</strong> Exactly 180°</li>
<li><strong>Reflex Angle:</strong> Between 180° and 360°</li>
</ul>

<h4>Types of Triangles</h4>
<ul>
<li><strong>Equilateral:</strong> All sides equal, all angles 60°</li>
<li><strong>Isosceles:</strong> Two sides equal, base angles equal</li>
<li><strong>Scalene:</strong> All sides different</li>
<li><strong>Right-angled:</strong> One angle = 90°</li>
</ul>

<h4>Triangle Properties</h4>
<ul>
<li>Sum of interior angles = 180°</li>
<li>Exterior angle = Sum of opposite interior angles</li>
<li>Pythagorean Theorem: a² + b² = c² (right triangle)</li>
</ul>

<h4>Areas</h4>
<ul>
<li><strong>Triangle:</strong> ½ × base × height</li>
<li><strong>Rectangle:</strong> length × width</li>
<li><strong>Circle:</strong> πr²</li>
<li><strong>Trapezium:</strong> ½(a + b)h</li>
</ul>
` },
                        { title: 'Trigonometry', content: `
<h3>Basic Trigonometry</h3>

<h4>Trigonometric Ratios</h4>
<p>For a right-angled triangle:</p>
<ul>
<li><strong>sin θ = opposite / hypotenuse</strong></li>
<li><strong>cos θ = adjacent / hypotenuse</strong></li>
<li><strong>tan θ = opposite / adjacent</strong></li>
</ul>

<h4>Special Angles</h4>
<table>
<tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
<tr><td>sin</td><td>0</td><td>½</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
<tr><td>cos</td><td>1</td><td>√3/2</td><td>√2/2</td><td>½</td><td>0</td></tr>
<tr><td>tan</td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>∞</td></tr>
</table>

<h4>Applications</h4>
<ul>
<li>Finding heights and distances</li>
<li>Angle of elevation and depression</li>
<li>Bearings and navigation</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Statistics',
                    topics: [
                        { title: 'Data Handling', content: `
<h3>Data Handling</h3>

<h4>Types of Data</h4>
<ul>
<li><strong>Qualitative:</strong> Categories (colors, genders)</li>
<li><strong>Quantitative:</strong> Numbers (age, height, weight)</li>
<li><strong>Discrete:</strong> Countable values (number of students)</li>
<li><strong>Continuous:</strong> Measurable values (weight, time)</li>
</ul>

<h4>Measures of Central Tendency</h4>
<ul>
<li><strong>Mean:</strong> Average = Sum of values / Number of values</li>
<li><strong>Median:</strong> Middle value when data is arranged in order</li>
<li><strong>Mode:</strong> Most frequently occurring value</li>
</ul>

<h4>Measures of Dispersion</h4>
<ul>
<li><strong>Range:</strong> Highest value - Lowest value</li>
<li><strong>Variance:</strong> Average of squared deviations from the mean</li>
<li><strong>Standard Deviation:</strong> Square root of variance</li>
</ul>

<h4>Data Representation</h4>
<ul>
<li><strong>Bar Charts:</strong> For comparing categories</li>
<li><strong>Histograms:</strong> For continuous data distribution</li>
<li><strong>Pie Charts:</strong> For showing proportions</li>
<li><strong>Line Graphs:</strong> For trends over time</li>
</ul>
` }
                    ]
                }
            ]
        },
        'science': {
            name: 'Science',
            icon: '🔬',
            color: '#43e97b',
            units: [
                {
                    title: 'Physics',
                    topics: [
                        { title: 'Motion & Forces', content: `
<h3>Motion & Forces</h3>

<h4>Motion Concepts</h4>
<ul>
<li><strong>Distance:</strong> Total path length traveled (scalar)</li>
<li><strong>Displacement:</strong> Straight-line distance from start to end (vector)</li>
<li><strong>Speed:</strong> Distance / Time (scalar)</li>
<li><strong>Velocity:</strong> Displacement / Time (vector)</li>
<li><strong>Acceleration:</strong> Change in velocity / Time</li>
</ul>

<h4>Newton's Laws</h4>
<p><strong>First Law:</strong> Objects maintain their state of motion unless acted on by a force.</p>
<p><strong>Second Law:</strong> F = ma (Force = mass × acceleration)</p>
<p><strong>Third Law:</strong> Every action has an equal and opposite reaction.</p>

<h4>Energy Forms</h4>
<ul>
<li><strong>Kinetic Energy:</strong> Energy of motion (KE = ½mv²)</li>
<li><strong>Potential Energy:</strong> Stored energy (PE = mgh)</li>
<li><strong>Thermal Energy:</strong> Heat energy</li>
<li><strong>Chemical Energy:</strong> Stored in chemical bonds</li>
<li><strong>Electrical Energy:</strong> Energy from moving charges</li>
<li><strong>Light Energy:</strong> Radiant energy</li>
<li><strong>Sound Energy:</strong> Energy of vibrations</li>
</ul>
` },
                        { title: 'Electricity', content: `
<h3>Basic Electricity</h3>

<h4>Circuit Components</h4>
<ul>
<li><strong>Cell/Battery:</strong> Provides electrical energy</li>
<li><strong>Bulb/Lamp:</strong> Converts electrical energy to light</li>
<li><strong>Switch:</strong> Controls the flow of current</li>
<li><strong>Resistor:</strong> Limits current flow</li>
<li><strong>Ammeter:</strong> Measures current (connected in series)</li>
<li><strong>Voltmeter:</strong> Measures voltage (connected in parallel)</li>
</ul>

<h4>Ohm's Law</h4>
<p>V = IR (Voltage = Current × Resistance)</p>

<h4>Series and Parallel Circuits</h4>
<p><strong>Series:</strong> Current is the same throughout, voltage divides</p>
<p><strong>Parallel:</strong> Voltage is the same across all branches, current divides</p>

<h4>Electrical Safety</h4>
<ul>
<li>Never touch bare wires</li>
<li>Use proper insulation</li>
<li>Don't overload circuits</li>
<li>Ground electrical appliances</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Chemistry',
                    topics: [
                        { title: 'Elements & Compounds', content: `
<h3>Elements & Compounds</h3>

<h4>Classification of Matter</h4>
<p><strong>Elements:</strong> Pure substances that cannot be broken down (H, O, Fe)</p>
<p><strong>Compounds:</strong> Two or more elements chemically combined (H₂O, CO₂, NaCl)</p>
<p><strong>Mixtures:</strong> Two or more substances physically combined (air, salt water)</p>

<h4>Separation Techniques</h4>
<ul>
<li><strong>Filtration:</strong> Separates solids from liquids</li>
<li><strong>Distillation:</strong> Separates liquids by boiling point</li>
<li><strong>Chromatography:</strong> Separates mixtures based on movement through a medium</li>
<li><strong>Evaporation:</strong> Removes liquid to leave dissolved solids</li>
<li><strong>Magnetic Separation:</strong> Separates magnetic materials</li>
</ul>

<h4>Chemical Reactions</h4>
<p><strong>Types:</strong></p>
<ul>
<li><strong>Synthesis:</strong> A + B → AB</li>
<li><strong>Decomposition:</strong> AB → A + B</li>
<li><strong>Displacement:</strong> AB + C → AC + B</li>
<li><strong>Combustion:</strong> Burning in oxygen</li>
</ul>
` },
                        { title: 'Acids & Bases', content: `
<h3>Acids & Bases</h3>

<h4>Acids</h4>
<ul>
<li>Sour taste</li>
<li>Turn blue litmus paper red</li>
<li>pH less than 7</li>
<li>React with metals to produce hydrogen gas</li>
<li><strong>Examples:</strong> HCl (hydrochloric), H₂SO₄ (sulfuric), CH₃COOH (acetic)</li>
</ul>

<h4>Bases</h4>
<ul>
<li>Bitter taste, soapy feel</li>
<li>Turn red litmus paper blue</li>
<li>pH greater than 7</li>
<li><strong>Examples:</strong> NaOH (sodium hydroxide), Ca(OH)₂ (calcium hydroxide)</li>
</ul>

<h4>pH Scale</h4>
<p>0-6: Acidic | 7: Neutral | 8-14: Alkaline</p>
<p>Strong acid: pH 0-2 | Weak acid: pH 3-6 | Strong alkali: pH 12-14</p>

<h4>Neutralization</h4>
<p>Acid + Base → Salt + Water</p>
<p>HCl + NaOH → NaCl + H₂O</p>
` }
                    ]
                },
                {
                    title: 'Biology',
                    topics: [
                        { title: 'Living Things', content: `
<h3>Characteristics of Living Things</h3>
<p>All living things share these characteristics (MRS GREN):</p>
<ul>
<li><strong>M</strong>ovement - Change of position</li>
<li><strong>R</strong>espiration - Energy production</li>
<li><strong>S</strong>ensitivity - Responding to stimuli</li>
<li><strong>G</strong>rowth - Increase in size</li>
<li><strong>R</strong>eproduction - Producing offspring</li>
<li><strong>E</strong>xcretion - Removal of waste</li>
<li><strong>N</strong>utrition - Obtaining food</li>
</ul>

<h4>Plant vs Animal Cells</h4>
<table>
<tr><th>Feature</th><th>Plant Cell</th><th>Animal Cell</th></tr>
<tr><td>Cell wall</td><td>Yes (cellulose)</td><td>No</td></tr>
<tr><td>Chloroplasts</td><td>Yes</td><td>No</td></tr>
<tr><td>Vacuole</td><td>Large central</td><td>Small/temporary</td></tr>
<tr><td>Shape</td><td>Regular (rectangular)</td><td>Irregular</td></tr>
<tr><td>Energy storage</td><td>Starch</td><td>Glycogen</td></tr>
</table>

<h4>Classification of Living Things</h4>
<p>Kingdom → Phylum → Class → Order → Family → Genus → Species</p>
<p><strong>Five Kingdoms:</strong> Monera, Protista, Fungi, Plantae, Animalia</p>
` },
                        { title: 'Photosynthesis', content: `
<h3>Photosynthesis</h3>
<p>The process by which plants make food using light energy.</p>

<h4>Equation</h4>
<p>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in the presence of light and chlorophyll)</p>

<h4>Factors Affecting Photosynthesis</h4>
<ul>
<li><strong>Light Intensity:</strong> Higher light = faster rate (up to a point)</li>
<li><strong>CO₂ Concentration:</strong> More CO₂ = faster rate</li>
<li><strong>Temperature:</strong> Optimal around 25-35°C</li>
<li><strong>Water Availability:</strong> Needed for the reaction</li>
<li><strong>Chlorophyll:</strong> Required to capture light energy</li>
</ul>

<h4>Importance</h4>
<ul>
<li>Produces food for plants and animals</li>
<li>Releases oxygen into the atmosphere</li>
<li>Removes carbon dioxide from the air</li>
<li>Forms the base of most food chains</li>
</ul>
` }
                    ]
                }
            ]
        },
        'history': {
            name: 'History',
            icon: '🏛️',
            color: '#a18cd1',
            units: [
                {
                    title: 'Sri Lankan History',
                    topics: [
                        { title: 'Ancient Sri Lanka', content: `
<h3>Ancient Sri Lankan Civilization</h3>

<h4>Prehistoric Period (125,000 years ago - 500 BC)</h4>
<ul>
<li>Balangoda Man (Homo sapiens balangodensis) - earliest human remains</li>
<li>Stone Age tools found in caves (Batadomba Lena, Kitulgala Beli Lena, Fa Hien Cave)</li>
<li>Transition from hunting-gathering to agriculture</li>
<li>Iron Age began around 1000 BC</li>
</ul>

<h4>Anuradhapura Period (437 BC - 1017 AD)</h4>
<ul>
<li>Founded by King Pandukabhaya</li>
<li><strong>King Devanampiya Tissa:</strong> Introduction of Buddhism (247 BC) by Mahinda Thero</li>
<li><strong>King Dutugemunu:</strong> Defeated Elara, built Ruwanwelisaya and Mirisavetiya</li>
<li><strong>King Valagamba:</strong> Built Abhayagiri Stupa, Pali Canon written down</li>
<li><strong>King Mahasena:</strong> Built Jetavanaramaya (tallest brick structure in the ancient world)</li>
<li>Advanced irrigation systems: Tanks (wewas) and canals</li>
</ul>

<h4>Polonnaruwa Period (1070 - 1232 AD)</h4>
<ul>
<li><strong>King Vijayabahu I:</strong> Liberated Sri Lanka from Chola rule</li>
<li><strong>King Parakramabahu I:</strong> \"Not even a drop of water should go to the sea without being useful\"</li>
<li>Built Parakrama Samudra, built Polonnaruwa Vatadage</li>
<li><strong>King Nissanka Malla:</strong> Built Nissanka Latha Mandapaya</li>
</ul>
` },
                        { title: 'Colonial Period', content: `
<h3>Colonial Sri Lanka</h3>

<h4>Portuguese Period (1505 - 1658)</h4>
<ul>
<li>First Europeans to arrive in Sri Lanka (Lourenco de Almeida, 1505)</li>
<li>Controlled coastal areas</li>
<li>Introduced Christianity and Western education</li>
<li>Built forts (Colombo, Galle, Jaffna)</li>
<li>Faced resistance from the Kingdom of Kandy</li>
</ul>

<h4>Dutch Period (1658 - 1796)</h4>
<ul>
<li>Replaced the Portuguese</li>
<li>Controlled coastal areas (except Kandy)</li>
<li>Developed cinnamon and other spice trade</li>
<li>Introduced Roman-Dutch law</li>
<li>Built canals and improved irrigation</li>
</ul>

<h4>British Period (1796 - 1948)</h4>
<ul>
<li>1796: British took control of coastal areas</li>
<li>1815: Signed the Kandyan Convention, took over the Kingdom of Kandy</li>
<li>Introduced coffee, tea, rubber, and coconut plantations</li>
<li>Built roads, railways, schools, and hospitals</li>
<li>1915: Sinhalese-Muslim riots</li>
<li>1931: Donoughmore Constitution - universal adult franchise</li>
<li>1948 February 4: Independence from British rule</li>
</ul>
` }
                    ]
                }
            ]
        }
    },

    // ====================== GRADE 6-9 SUBJECTS ======================
    grade6_9: {
        'mathematics': {
            name: 'Mathematics',
            icon: '📐',
            color: '#667eea',
            units: [
                {
                    title: 'Numbers & Operations',
                    topics: [
                        { title: 'Whole Numbers & Place Value', content: `
<h3>Whole Numbers & Place Value</h3>

<h4>Place Value System</h4>
<p>Each digit in a number has a place value based on its position.</p>
<p><strong>Example:</strong> In 3,456,789:</p>
<ul>
<li>3 = Millions (3,000,000)</li>
<li>4 = Hundred Thousands (400,000)</li>
<li>5 = Ten Thousands (50,000)</li>
<li>6 = Thousands (6,000)</li>
<li>7 = Hundreds (700)</li>
<li>8 = Tens (80)</li>
<li>9 = Ones (9)</li>
</ul>

<h4>Operations</h4>
<ul>
<li><strong>Addition:</strong> Combining numbers to find the total</li>
<li><strong>Subtraction:</strong> Finding the difference between numbers</li>
<li><strong>Multiplication:</strong> Repeated addition</li>
<li><strong>Division:</strong> Splitting into equal groups</li>
</ul>

<h4>Order of Operations (BODMAS/PEMDAS)</h4>
<ol>
<li>Brackets/Parantheses</li>
<li>Orders (Exponents/Indices)</li>
<li>Division and Multiplication (left to right)</li>
<li>Addition and Subtraction (left to right)</li>
</ol>

<h4>Factors & Multiples</h4>
<ul>
<li><strong>Factor:</strong> A number that divides exactly into another number</li>
<li><strong>Multiple:</strong> A number that can be divided by another number without a remainder</li>
<li><strong>Prime Number:</strong> A number with exactly two factors (1 and itself)</li>
<li><strong>HCF:</strong> Highest Common Factor</li>
<li><strong>LCM:</strong> Lowest Common Multiple</li>
</ul>
` },
                        { title: 'Fractions & Decimals', content: `
<h3>Fractions & Decimals</h3>

<h4>Fractions</h4>
<p>A fraction represents a part of a whole: numerator/denominator</p>
<ul>
<li><strong>Proper Fraction:</strong> Numerator < Denominator (e.g., ¾)</li>
<li><strong>Improper Fraction:</strong> Numerator ≥ Denominator (e.g., 7/4)</li>
<li><strong>Mixed Number:</strong> Whole number plus fraction (e.g., 1¾)</li>
</ul>

<h4>Operations with Fractions</h4>
<p><strong>Addition/Subtraction:</strong> Find common denominator first</p>
<p>½ + ⅓ = 3/6 + 2/6 = 5/6</p>
<p><strong>Multiplication:</strong> Multiply numerators and denominators</p>
<p>½ × ⅓ = 1/6</p>
<p><strong>Division:</strong> Invert the second fraction and multiply</p>
<p>½ ÷ ⅓ = ½ × 3/1 = 3/2</p>

<h4>Decimals</h4>
<p>Decimals are fractions written with a decimal point:</p>
<ul>
<li>0.1 = 1/10</li>
<li>0.01 = 1/100</li>
<li>0.25 = 25/100 = ¼</li>
<li>0.5 = 5/10 = ½</li>
</ul>

<h4>Percentages</h4>
<p>Percentage means \"out of 100\"</p>
<p>To convert: fraction → decimal → percentage</p>
<p>Example: ½ = 0.5 = 50%</p>
` }
                    ]
                },
                {
                    title: 'Measurement',
                    topics: [
                        { title: 'Length, Mass & Capacity', content: `
<h3>Length, Mass & Capacity</h3>

<h4>Metric System</h4>
<p><strong>Length:</strong> mm → cm → m → km</p>
<p>1 cm = 10 mm, 1 m = 100 cm, 1 km = 1000 m</p>

<p><strong>Mass:</strong> g → kg → t (tonne)</p>
<p>1 kg = 1000 g, 1 tonne = 1000 kg</p>

<p><strong>Capacity:</strong> mL → L → kL</p>
<p>1 L = 1000 mL, 1 kL = 1000 L</p>

<h4>Perimeter</h4>
<p>The distance around a shape:</p>
<ul>
<li>Square: 4 × side</li>
<li>Rectangle: 2(length + width)</li>
<li>Triangle: sum of all three sides</li>
<li>Circle: 2πr (circumference)</li>
</ul>

<h4>Area</h4>
<ul>
<li>Square: side × side</li>
<li>Rectangle: length × width</li>
<li>Triangle: ½ × base × height</li>
<li>Circle: πr²</li>
</ul>

<h4>Volume</h4>
<ul>
<li>Cube: side³</li>
<li>Cuboid: length × width × height</li>
</ul>
` }
                    ]
                }
            ]
        },
        'science': {
            name: 'Science',
            icon: '🔬',
            color: '#43e97b',
            units: [
                {
                    title: 'Living World',
                    topics: [
                        { title: 'Plants & Animals', content: `
<h3>Plants & Animals</h3>

<h4>Parts of a Plant</h4>
<ul>
<li><strong>Roots:</strong> Absorb water and minerals, anchor the plant</li>
<li><strong>Stem:</strong> Supports the plant, transports water and nutrients</li>
<li><strong>Leaves:</strong> Photosynthesis (food production)</li>
<li><strong>Flowers:</strong> Reproduction (produces seeds)</li>
<li><strong>Fruits:</strong> Protect and disperse seeds</li>
</ul>

<h4>Types of Plants</h4>
<ul>
<li><strong>Trees:</strong> Tall, woody stem (trunk)</li>
<li><strong>Shrubs:</strong> Medium-sized, multiple stems</li>
<li><strong>Herbs:</strong> Small, soft stem</li>
<li><strong>Climbers:</strong> Grow upward on supports</li>
<li><strong>Creepers:</strong> Grow along the ground</li>
</ul>

<h4>Animal Groups (Vertebrates)</h4>
<ul>
<li><strong>Mammals:</strong> Have hair/fur, give birth to live young, feed milk (cat, dog, human)</li>
<li><strong>Birds:</strong> Have feathers, lay eggs, have wings (parrot, eagle, chicken)</li>
<li><strong>Reptiles:</strong> Have scales, lay eggs, cold-blooded (snake, lizard, crocodile)</li>
<li><strong>Amphibians:</strong> Live in water and on land, smooth skin (frog, toad, salamander)</li>
<li><strong>Fish:</strong> Live in water, have gills, have scales (goldfish, shark, tuna)</li>
</ul>
` },
                        { title: 'Food Chains & Habitats', content: `
<h3>Food Chains & Habitats</h3>

<h4>Food Chains</h4>
<p>A food chain shows who eats what in a habitat.</p>
<p><strong>Example:</strong> Grass → Rabbit → Fox</p>
<ul>
<li><strong>Producer:</strong> Makes its own food (plants)</li>
<li><strong>Primary Consumer:</strong> Eats plants (herbivores)</li>
<li><strong>Secondary Consumer:</strong> Eats other animals (carnivores)</li>
<li><strong>Decomposer:</strong> Breaks down dead organisms (bacteria, fungi)</li>
</ul>

<h4>Habitats</h4>
<ul>
<li><strong>Forest:</strong> Many trees and plants, diverse animals</li>
<li><strong>Desert:</strong> Very dry, extreme temperatures</li>
<li><strong>Ocean:</strong> Saltwater, marine life</li>
<li><strong>Freshwater:</strong> Rivers, lakes, ponds</li>
<li><strong>Grassland:</strong> Large open areas of grass</li>
</ul>

<h4>Environmental Care</h4>
<ul>
<li>Reduce, Reuse, Recycle</li>
<li>Protect forests and wildlife</li>
<li>Keep water sources clean</li>
<li>Save energy and water</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Physical World',
                    topics: [
                        { title: 'Forces & Simple Machines', content: `
<h3>Forces & Simple Machines</h3>

<h4>Types of Forces</h4>
<ul>
<li><strong>Gravity:</strong> Pulls objects toward Earth</li>
<li><strong>Friction:</strong> Slows down moving objects</li>
<li><strong>Buoyancy:</strong> Upward force on objects in water</li>
<li><strong>Magnetism:</strong> Attraction/repulsion between magnetic materials</li>
<li><strong>Elastic Force:</strong> Force from stretched or compressed materials</li>
</ul>

<h4>Simple Machines</h4>
<ul>
<li><strong>Lever:</strong> A bar that rotates around a fixed point (fulcrum)</li>
<li><strong>Pulley:</strong> A wheel with a rope, used to lift heavy objects</li>
<li><strong>Inclined Plane:</strong> A sloping surface (ramp)</li>
<li><strong>Wedge:</strong> A triangular tool (axe, knife)</li>
<li><strong>Screw:</strong> An inclined plane wrapped around a cylinder</li>
<li><strong>Wheel and Axle:</strong> A wheel attached to a rod</li>
</ul>
` }
                    ]
                }
            ]
        }
    },

    // ====================== GRADE 1-5 SUBJECTS ======================
    grade1_5: {
        'mathematics': {
            name: 'Mathematics',
            icon: '🔢',
            color: '#667eea',
            units: [
                {
                    title: 'Basic Numbers',
                    topics: [
                        { title: 'Counting & Number Recognition', content: `
<h3>Counting & Number Recognition</h3>

<h4>Numbers 1 to 100</h4>
<p>Learn to count from 1 to 100 and recognize each number.</p>

<p><strong>1-10:</strong> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>
<p><strong>11-20:</strong> 11, 12, 13, 14, 15, 16, 17, 18, 19, 20</p>
<p><strong>Counting by 10s:</strong> 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</p>

<h4>Skip Counting</h4>
<ul>
<li><strong>By 2s:</strong> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</li>
<li><strong>By 5s:</strong> 5, 10, 15, 20, 25, 30, 35, 40, 45, 50</li>
<li><strong>By 10s:</strong> 10, 20, 30, 40, 50, 60, 70, 80, 90, 100</li>
</ul>

<h4>Greater Than & Less Than</h4>
<ul>
<li>> means greater than (5 > 3)</li>
<li>< means less than (2 < 8)</li>
<li>= means equal to (4 = 4)</li>
</ul>

<h4>Fun Practice</h4>
<p>Try counting objects around your home! Count the number of chairs, windows, or apples. This helps you practice numbers every day!</p>
` },
                        { title: 'Addition & Subtraction', content: `
<h3>Addition & Subtraction</h3>

<h4>Addition (+)</h4>
<p>Addition means putting numbers together to find the total.</p>
<p><strong>Example:</strong> 3 + 2 = 5 (Three apples plus two apples equals five apples)</p>

<p><strong>Addition Table for 1-10:</strong></p>
<p>1 + 1 = 2 | 2 + 1 = 3 | 3 + 1 = 4 | 4 + 1 = 5 | 5 + 1 = 6</p>
<p>1 + 2 = 3 | 2 + 2 = 4 | 3 + 2 = 5 | 4 + 2 = 6 | 5 + 2 = 7</p>

<h4>Subtraction (-)</h4>
<p>Subtraction means taking away to find what's left.</p>
<p><strong>Example:</strong> 5 - 2 = 3 (Five apples take away two apples leaves three apples)</p>

<h4>Tips for Adding & Subtracting</h4>
<ul>
<li>Use your fingers to count</li>
<li>Draw pictures to help you</li>
<li>Use objects like buttons or stones</li>
<li>Practice with number lines</li>
<li>Check your answer by doing the opposite operation</li>
</ul>

<h4>Word Problems</h4>
<p><strong>Example:</strong> Sara has 5 candies. Her friend gives her 3 more. How many candies does Sara have now?</p>
<p><strong>Answer:</strong> 5 + 3 = 8 candies</p>
` }
                    ]
                },
                {
                    title: 'Shapes & Patterns',
                    topics: [
                        { title: 'Basic Shapes', content: `
<h3>Basic Shapes</h3>

<h4>2D Shapes (Flat Shapes)</h4>
<ul>
<li><strong>Circle:</strong> A round shape with no corners (⚪)</li>
<li><strong>Square:</strong> 4 equal sides, 4 corners (⬜)</li>
<li><strong>Rectangle:</strong> 4 sides (opposite sides equal), 4 corners (▭)</li>
<li><strong>Triangle:</strong> 3 sides, 3 corners (△)</li>
<li><strong>Star:</strong> A shape with 5 or more points (★)</li>
<li><strong>Diamond:</strong> A tilted square shape (◇)</li>
<li><strong>Oval:</strong> An elongated circle</li>
</ul>

<h4>3D Shapes (Solid Shapes)</h4>
<ul>
<li><strong>Sphere:</strong> A round ball (ball, orange)</li>
<li><strong>Cube:</strong> A box shape with 6 square faces (dice, Rubik's cube)</li>
<li><strong>Cuboid:</strong> A box shape with rectangular faces (book, brick)</li>
<li><strong>Cylinder:</strong> A tube shape (can, pipe)</li>
<li><strong>Cone:</strong> A pointed shape (ice cream cone, party hat)</li>
</ul>

<h4>Patterns</h4>
<p>A pattern is something that repeats in a predictable way.</p>
<p><strong>Examples:</strong></p>
<ul>
<li>Color pattern: Red, Blue, Red, Blue, Red, Blue...</li>
<li>Shape pattern: Circle, Square, Circle, Square...</li>
<li>Number pattern: 2, 4, 6, 8, 10... (counting by 2s)</li>
<li>Size pattern: Big, Small, Big, Small...</li>
</ul>

<h4>Fun Activity</h4>
<p>Look around your room! Can you find objects that are circles? Squares? Triangles? How many can you spot?</p>
` }
                    ]
                }
            ]
        },
        'english': {
            name: 'English',
            icon: '📖',
            color: '#f6d365',
            units: [
                {
                    title: 'Alphabet & Phonics',
                    topics: [
                        { title: 'ABCs & Letter Sounds', content: `
<h3>Learning the Alphabet</h3>
<p>The English alphabet has 26 letters. There are 5 vowels and 21 consonants.</p>

<h4>The Alphabet Song</h4>
<p>A B C D E F G</p>
<p>H I J K L M N O P</p>
<p>Q R S T U V</p>
<p>W X Y Z</p>

<h4>Vowels (A, E, I, O, U)</h4>
<p>Vowels are special letters. Every word must have at least one vowel!</p>
<ul>
<li><strong>Aa:</strong> apple, ant, alligator</li>
<li><strong>Ee:</strong> egg, elephant, elf</li>
<li><strong>Ii:</strong> igloo, insect, iguana</li>
<li><strong>Oo:</strong> orange, octopus, owl</li>
<li><strong>Uu:</strong> umbrella, up, unicorn</li>
</ul>

<h4>Consonants</h4>
<p>All the other letters are consonants:</p>
<p>B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z</p>

<h4>Letter Sounds Practice</h4>
<ul>
<li><strong>B</strong> says /b/ as in <strong>b</strong>all, <strong>b</strong>at, <strong>b</strong>us</li>
<li><strong>C</strong> says /k/ as in <strong>c</strong>at, <strong>c</strong>ake, <strong>c</strong>ar</li>
<li><strong>D</strong> says /d/ as in <strong>d</strong>og, <strong>d</strong>uck, <strong>d</strong>oor</li>
<li><strong>S</strong> says /s/ as in <strong>s</strong>un, <strong>s</strong>nake, <strong>s</strong>tar</li>
</ul>
` },
                        { title: 'Simple Words & Sentences', content: `
<h3>Simple Words & Sentences</h3>

<h4>Sight Words (Common Words to Know)</h4>
<p>These are words you should recognize by sight:</p>
<p><strong>a, an, the, I, me, my, you, he, she, it, we, they, is, am, are, can, do, go, no, yes, up, down, in, out, on, off, big, small, hot, cold, eat, run, see, like, play</strong></p>

<h4>Building Sentences</h4>
<p>A sentence is a group of words that tells a complete idea.</p>
<ul>
<li>I <strong>can</strong> run.</li>
<li>She <strong>is</strong> happy.</li>
<li>We <strong>like</strong> to play.</li>
<li>The cat <strong>is</strong> big.</li>
</ul>

<h4>Sentence Structure</h4>
<p>Subject + Verb + Object (optional)</p>
<ul>
<li><strong>Subject:</strong> Who or what the sentence is about</li>
<li><strong>Verb:</strong> The action word</li>
<li><strong>Object:</strong> What receives the action</li>
</ul>
<p><strong>Example:</strong> The boy (subject) eats (verb) an apple (object).</p>

<h4>Punctuation</h4>
<ul>
<li><strong>.</strong> A period ends a sentence.</li>
<li><strong>?</strong> A question mark asks a question.</li>
<li><strong>!</strong> An exclamation mark shows excitement.</li>
</ul>

<h4>Practice</h4>
<p>Try writing 3 sentences about what you did today!</p>
` }
                    ]
                },
                {
                    title: 'Reading & Writing',
                    topics: [
                        { title: 'Reading Comprehension', content: `
<h3>Reading Comprehension</h3>

<h4>Tips for Reading</h4>
<ol>
<li>Read the title first</li>
<li>Look at the pictures</li>
<li>Read the words slowly</li>
<li>Think about what is happening</li>
<li>Ask yourself questions about the story</li>
</ol>

<h4>Short Story: The Little Bird</h4>
<p>Once there was a little bird. The bird was very small. She lived in a nest in a big tree. Every day, the mother bird brought food to the little bird. The little bird wanted to fly. One day, she tried to fly. She flapped her wings very fast. Up, up, up she went! She was flying! The little bird was very happy.</p>

<h4>Questions About the Story</h4>
<ol>
<li>Where did the little bird live?</li>
<li>What did the mother bird bring?</li>
<li>What did the little bird want to do?</li>
<li>How did the little bird feel at the end?</li>
</ol>

<h4>New Words to Learn</h4>
<ul>
<li>Nest - A bird's home</li>
<li>Flapped - Moved wings up and down</li>
<li>Tree - A tall plant</li>
</ul>
` }
                    ]
                }
            ]
        },
        'sinhala': {
            name: 'Sinhala',
            icon: '📝',
            color: '#fddb92',
            units: [
                {
                    title: 'හෝඩිය (Alphabet)',
                    topics: [
                        { title: 'ස්වර අක්ෂර', content: `
<h3>සිංහල ස්වර අක්ෂර</h3>
<p>සිංහල භාෂාවේ මූලික ස්වර අක්ෂර 12 කි.</p>

<h4>ස්වර අක්ෂර 12</h4>
<p>අ - අකුර (a)</p>
<p>ආ - ආකාරය (aa)</p>
<p>ඉ - ඉලක්කම (i)</p>
<p>ඊ - ඊතලය (ii)</p>
<p>උ - උගුල (u)</p>
<p>ඌ - ඌරා (uu)</p>
<p>එ - එළුවා (e)</p>
<p>ඒ - ඒක (ee)</p>
<p>ඔ - ඔරලෝසුව (o)</p>
<p>ඕ - ඕනෑම (oo)</p>
<p>ඇ - ඇස (ae)</p>
<p>ඈ - ඈ (aae)</p>

<h4>ස්වර ලකුණු (Pillam / Vowel Signs)</h4>
<p>ස්වර ලකුණු ව්‍යංජන අක්ෂර සමඟ එකතු වී ශබ්ද වෙනස් කරයි.</p>
<ul>
<li>ක + ා = කා (ka + aa = kaa)</li>
<li>ක + ැ = කැ (ka + ae = kae)</li>
<li>ක + ො = කො (ka + o = ko)</li>
<li>ක + ඉ = කි (ka + i = ki)</li>
<li>ක + උ = කු (ka + u = ku)</li>
</ul>
` },
                        { title: 'ව්‍යංජන අක්ෂර', content: `
<h3>ව්‍යංජන අක්ෂර</h3>
<p>සිංහල ව්‍යංජන අක්ෂර 18 කි.</p>

<h4>මූලික ව්‍යංජන</h4>
<p>ක - කැකුළ</p>
<p>ග - ගස</p>
<p>ච - චක්කරේ</p>
<p>ජ - ජලය</p>
<p>ට - ටිකිරි</p>
<p>ඩ - ඩබර</p>
<p>ත - තරුව</p>
<p>ද - දත්ත</p>
<p>ප - පත</p>
<p>බ - බත</p>
<p>ය - යතුර</p>
<p>ර - රට</p>
<p>ල - ලොකු</p>
<p>ව - වතුර</p>
<p>ස - සිංහල</p>
<p>හ - හත</p>
<p>ළ - ළමයා</p>
<p>ඟ - ඟ</p>

<h4>අක්ෂර උච්චාරණය</h4>
<p>සිංහල අක්ෂර උච්චාරණය කිරීමේදී පහත කොටස් වලට බෙදා ඇත:</p>
<ul>
<li><strong>කාන්ත:</strong> ක, ග, ච, ජ</li>
<li><strong>මූර්ධජ:</strong> ට, ඩ</li>
<li><strong>දන්තජ:</strong> ත, ද</li>
<li><strong>ඔෂ්ඨජ:</strong> ප, බ</li>
</ul>
` }
                    ]
                }
            ]
        },
        'environment': {
            name: 'Environment',
            icon: '🌿',
            color: '#43e97b',
            units: [
                {
                    title: 'Our Surroundings',
                    topics: [
                        { title: 'Nature & Environment', content: `
<h3>Our Natural Environment</h3>

<h4>What is the Environment?</h4>
<p>The environment is everything around us - the air we breathe, the water we drink, the plants and animals, and the land we live on.</p>

<h4>Living Things in Our Environment</h4>
<ul>
<li><strong>Plants:</strong> Trees, flowers, grass, vegetables</li>
<li><strong>Animals:</strong> Birds, fish, insects, mammals</li>
<li><strong>Humans:</strong> People in our family and community</li>
</ul>

<h4>Non-Living Things</h4>
<ul>
<li><strong>Water:</strong> Rivers, lakes, rain, oceans</li>
<li><strong>Air:</strong> The air we breathe (wind, oxygen)</li>
<li><strong>Soil:</strong> The ground where plants grow</li>
<li><strong>Sunlight:</strong> Light and warmth from the sun</li>
<li><strong>Rocks:</strong> Stones, pebbles, mountains</li>
</ul>

<h4>Taking Care of Our Environment</h4>
<ol>
<li>Don't litter - use a trash can</li>
<li>Save water - turn off the tap</li>
<li>Plant trees and flowers</li>
<li>Don't waste electricity</li>
<li>Reduce, reuse, and recycle</li>
</ol>
` },
                        { title: 'Weather & Seasons', content: `
<h3>Weather & Seasons</h3>

<h4>Types of Weather</h4>
<ul>
<li><strong>Sunny:</strong> Bright sunshine, warm</li>
<li><strong>Rainy:</strong> Rain falling from clouds</li>
<li><strong>Windy:</strong> Strong moving air</li>
<li><strong>Cloudy:</strong> Sky covered with clouds</li>
<li><strong>Stormy:</strong> Heavy rain, thunder, and lightning</li>
</ul>

<h4>The Sun</h4>
<p>The sun gives us light and warmth. It rises in the east and sets in the west. Without the sun, there would be no life on Earth.</p>

<h4>Day and Night</h4>
<p><strong>Day:</strong> When the sun is shining on our part of the Earth</p>
<p><strong>Night:</strong> When our part of the Earth is facing away from the sun</p>

<h4>Seasons</h4>
<p>Sri Lanka has two main monsoon seasons:</p>
<ul>
<li><strong>Yala (May - August):</strong> Rainy season in the southwest</li>
<li><strong>Maha (October - January):</strong> Rainy season in the northeast</li>
</ul>
` }
                    ]
                },
                {
                    title: 'Our Community',
                    topics: [
                        { title: 'Family & Friends', content: `
<h3>My Family & Friends</h3>

<h4>Family Members</h4>
<ul>
<li><strong>Mother (Amma):</strong> Takes care of the family</li>
<li><strong>Father (Thaaththa):</strong> Helps and supports the family</li>
<li><strong>Brother (Ayya/Malli):</strong> A boy in the family</li>
<li><strong>Sister (Akka/Nangi):</strong> A girl in the family</li>
<li><strong>Grandmother (Aachchi):</strong> Mother of your parent</li>
<li><strong>Grandfather (Seeya):</strong> Father of your parent</li>
</ul>

<h4>Being a Good Friend</h4>
<ul>
<li>Share your toys and books</li>
<li>Be kind and helpful</li>
<li>Say \"please\" and \"thank you\"</li>
<li>Listen when others speak</li>
<li>Tell the truth</li>
<li>Say \"sorry\" when you make a mistake</li>
</ul>

<h4>Helpers in Our Community</h4>
<ul>
<li><strong>Teacher:</strong> Helps us learn</li>
<li><strong>Doctor:</strong> Keeps us healthy</li>
<li><strong>Police Officer:</strong> Keeps us safe</li>
<li><strong>Firefighter:</strong> Puts out fires</li>
<li><strong>Shopkeeper:</strong> Sells us food and things we need</li>
</ul>
` }
                    ]
                }
            ]
        }
    }
};

// Helper function to get content by grade and subject
function getSubjectContent(grade, subjectKey) {
    if (!ZAI_CONTENT[grade]) return null;
    return ZAI_CONTENT[grade][subjectKey] || null;
}

// Helper to get all subjects for a grade
function getGradeSubjects(grade) {
    const gradeMap = {
        'al': 'al',
        'ol': 'ol',
        'grade6-9': 'grade6_9',
        'grade1-5': 'grade1_5'
    };
    const key = gradeMap[grade];
    if (!key || !ZAI_CONTENT[key]) return {};
    return ZAI_CONTENT[key];
}
