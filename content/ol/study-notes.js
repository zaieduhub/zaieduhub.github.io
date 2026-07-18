/* ============================================
   ZAI EDUCATION HUB - O/L Study Notes
   Full HTML content for all O/L subjects
   Source: Based on Sri Lanka GCE O/L curriculum
   ============================================ */

// O/L Content - Mathematics
const OL_MATHEMATICS = {
    'sets-real-numbers': `
<h3>Sets & Real Numbers</h3>
<h4>Introduction to Sets</h4>
<p>A <strong>set</strong> is a well-defined collection of distinct objects. The objects in a set are called <strong>elements</strong> or <strong>members</strong>.</p>

<h4>Set Notation</h4>
<ul>
<li>Sets are denoted by capital letters: A, B, C, ...</li>
<li>Elements are written inside curly braces: A = {1, 2, 3, 4, 5}</li>
<li>The symbol ∈ means "is an element of": 3 ∈ A</li>
<li>The symbol ∉ means "is not an element of": 7 ∉ A</li>
</ul>

<h4>Types of Sets</h4>
<ul>
<li><strong>Empty Set (∅):</strong> A set with no elements. Example: { }</li>
<li><strong>Finite Set:</strong> A set with a countable number of elements. Example: A = {a, e, i, o, u}</li>
<li><strong>Infinite Set:</strong> A set with unlimited elements. Example: N = {1, 2, 3, 4, ...}</li>
<li><strong>Equal Sets:</strong> Two sets with exactly the same elements. A = B</li>
<li><strong>Subset (⊆):</strong> Every element of set A is also in set B. Example: A = {1, 2}, B = {1, 2, 3, 4}</li>
</ul>

<h4>Set Operations</h4>
<ul>
<li><strong>Union (A ∪ B):</strong> All elements in A OR B. Example: {1, 2} ∪ {3, 4} = {1, 2, 3, 4}</li>
<li><strong>Intersection (A ∩ B):</strong> Elements in BOTH A and B. Example: {1, 2, 3} ∩ {3, 4, 5} = {3}</li>
<li><strong>Difference (A - B):</strong> Elements in A but NOT in B. Example: {1, 2, 3} - {3, 4} = {1, 2}</li>
<li><strong>Complement (A′):</strong> Elements NOT in A within the universal set</li>
</ul>

<h4>Real Numbers</h4>
<p>The real number system includes all rational and irrational numbers.</p>
<ul>
<li><strong>Natural Numbers (ℕ):</strong> 1, 2, 3, 4, ...</li>
<li><strong>Whole Numbers (𝕎):</strong> 0, 1, 2, 3, ...</li>
<li><strong>Integers (ℤ):</strong> ..., -3, -2, -1, 0, 1, 2, 3, ...</li>
<li><strong>Rational Numbers (ℚ):</strong> Numbers that can be written as p/q where q ≠ 0</li>
<li><strong>Irrational Numbers:</strong> Numbers that cannot be written as fractions (e.g., √2, π)</li>
</ul>

<h4>Number Line</h4>
<p>Real numbers can be represented on a number line. Each point on the line corresponds to exactly one real number.</p>

<h4>Practice Questions</h4>
<ol>
<li>If A = {x : x is a vowel in English}, list the elements of A</li>
<li>Find A ∪ B if A = {1, 3, 5} and B = {2, 4, 6}</li>
<li>Identify whether √25 is rational or irrational</li>
</ol>
`,

    'algebraic-expressions': `
<h3>Algebraic Expressions</h3>
<h4>What is an Algebraic Expression?</h4>
<p>An algebraic expression is a combination of variables, constants, and algebraic operations (addition, subtraction, multiplication, division, exponentiation).</p>

<h4>Key Terms</h4>
<ul>
<li><strong>Variable:</strong> A symbol (usually x, y, z) that represents an unknown value</li>
<li><strong>Constant:</strong> A fixed value (e.g., 3, -7, ½)</li>
<li><strong>Coefficient:</strong> The number multiplied by a variable (e.g., in 5x, the coefficient is 5)</li>
<li><strong>Term:</strong> A single part of an expression separated by + or - signs</li>
</ul>

<h4>Types of Expressions</h4>
<ul>
<li><strong>Monomial:</strong> One term (e.g., 3x², 5y)</li>
<li><strong>Binomial:</strong> Two terms (e.g., 2x + 3, a² - b²)</li>
<li><strong>Trinomial:</strong> Three terms (e.g., x² + 2x + 1)</li>
<li><strong>Polynomial:</strong> Many terms with non-negative integer exponents</li>
</ul>

<h4>Operations with Algebraic Expressions</h4>
<p><strong>Addition/Subtraction:</strong> Combine like terms (same variable and exponent)</p>
<p><strong>Example:</strong> (3x² + 2x - 5) + (x² - 4x + 3) = 4x² - 2x - 2</p>

<p><strong>Multiplication:</strong> Use the distributive property</p>
<p><strong>Example:</strong> (x + 2)(x + 3) = x(x + 3) + 2(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6</p>

<p><strong>Factorization:</strong> Write an expression as a product of factors</p>
<p><strong>Example:</strong> x² - 9 = (x - 3)(x + 3)</p>

<h4>Important Formulas</h4>
<ul>
<li>(a + b)² = a² + 2ab + b²</li>
<li>(a - b)² = a² - 2ab + b²</li>
<li>a² - b² = (a - b)(a + b)</li>
<li>(x + a)(x + b) = x² + (a + b)x + ab</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Simplify: (4x² - 3x + 2) - (2x² + 5x - 7)</li>
<li>Expand: (2x + 3)(x - 4)</li>
<li>Factorize: x² + 7x + 12</li>
</ol>
`,

    'equations-inequalities': `
<h3>Equations & Inequalities</h3>
<h4>Linear Equations</h4>
<p>A linear equation is an equation of the form ax + b = 0, where a ≠ 0.</p>

<h4>Solving Linear Equations</h4>
<p><strong>Step 1:</strong> Expand any brackets</p>
<p><strong>Step 2:</strong> Collect like terms on each side</p>
<p><strong>Step 3:</strong> Move variable terms to one side, constants to the other</p>
<p><strong>Step 4:</strong> Divide by the coefficient of the variable</p>

<h4>Example</h4>
<p>Solve 2(x + 3) = 14</p>
<p>2x + 6 = 14 → 2x = 8 → x = 4</p>

<h4>Simultaneous Equations</h4>
<p>Two equations with two variables can be solved by:</p>
<ul>
<li><strong>Elimination Method:</strong> Add or subtract equations to eliminate one variable</li>
<li><strong>Substitution Method:</strong> Express one variable in terms of the other and substitute</li>
</ul>

<h4>Example (Elimination)</h4>
<p>x + y = 10 and x - y = 4</p>
<p>Adding: 2x = 14 → x = 7</p>
<p>Substituting: 7 + y = 10 → y = 3</p>

<h4>Quadratic Equations</h4>
<p>Form: ax² + bx + c = 0 (where a ≠ 0)</p>

<h4>Solving Quadratic Equations</h4>
<ol>
<li><strong>Factorization:</strong> Write as (x - p)(x - q) = 0, then x = p or x = q</li>
<li><strong>Formula:</strong> x = [-b ± √(b² - 4ac)] / 2a</li>
</ol>

<h4>Inequalities</h4>
<p>An inequality compares two values using <, >, ≤, or ≥.</p>
<p><strong>Rules:</strong></p>
<ul>
<li>Adding/subtracting the same number preserves the inequality</li>
<li>Multiplying/dividing by a positive number preserves the inequality</li>
<li>Multiplying/dividing by a negative number REVERSES the inequality</li>
</ul>

<h4>Example</h4>
<p>Solve 2x - 3 < 7</p>
<p>2x < 10 → x < 5</p>

<h4>Practice Questions</h4>
<ol>
<li>Solve: 3(x - 2) = 15</li>
<li>Solve simultaneously: 2x + y = 7, x - y = 2</li>
<li>Solve: x² - 5x + 6 = 0</li>
<li>Solve: 3x + 2 ≥ 11</li>
</ol>
`
};

// O/L Content - Science
const OL_SCIENCE = {
    'force-motion': `
<h3>Force & Motion</h3>
<h4>What is Force?</h4>
<p>A <strong>force</strong> is a push or pull that can change the state of motion of an object. Force is measured in <strong>Newtons (N)</strong>.</p>

<h4>Types of Forces</h4>
<ul>
<li><strong>Gravitational Force:</strong> The attraction between objects with mass (weight = mg)</li>
<li><strong>Friction:</strong> A force that opposes motion between surfaces in contact</li>
<li><strong>Tension:</strong> The force transmitted through a string or cable</li>
<li><strong>Normal Reaction:</strong> The perpendicular force from a surface on an object</li>
<li><strong>Applied Force:</strong> A force applied by a person or object</li>
</ul>

<h4>Newton's Laws of Motion</h4>
<p><strong>First Law (Law of Inertia):</strong> An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.</p>

<p><strong>Second Law (F = ma):</strong> The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
<p><em>Formula:</em> F = ma (Force = mass × acceleration)</p>

<p><strong>Third Law (Action-Reaction):</strong> For every action, there is an equal and opposite reaction.</p>

<h4>Equations of Motion</h4>
<ul>
<li>v = u + at</li>
<li>s = ut + ½at²</li>
<li>v² = u² + 2as</li>
</ul>
<p>Where: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement</p>

<h4>Friction</h4>
<p>Friction is the force that opposes motion. It depends on:</p>
<ul>
<li>The nature of the surfaces in contact</li>
<li>The normal reaction force (N)</li>
</ul>
<p>Frictional force = μ × N, where μ is the coefficient of friction</p>

<h4>Example</h4>
<p>A car of mass 1000 kg accelerates from rest to 20 m/s in 10 seconds. Find the force applied.</p>
<p><strong>Solution:</strong></p>
<p>Using v = u + at: 20 = 0 + a(10) → a = 2 m/s²</p>
<p>Using F = ma: F = 1000 × 2 = 2000 N</p>

<h4>Practice Questions</h4>
<ol>
<li>A 5 kg object is pushed with a force of 20 N. Find its acceleration.</li>
<li>A car traveling at 30 m/s comes to rest in 5 seconds. Find the deceleration.</li>
<li>Explain why it's harder to push a heavy box than a light one.</li>
</ol>
`,

    'energy-work': `
<h3>Energy & Work</h3>
<h4>Work</h4>
<p><strong>Work</strong> is done when a force causes an object to move in the direction of the force.</p>
<p>Work = Force × Distance moved in the direction of force</p>
<p>W = F × d (Unit: Joule, J)</p>

<h4>Energy</h4>
<p><strong>Energy</strong> is the capacity to do work. It is measured in Joules (J).</p>

<h4>Forms of Energy</h4>
<ul>
<li><strong>Kinetic Energy (KE):</strong> Energy of motion. KE = ½mv²</li>
<li><strong>Potential Energy (PE):</strong> Stored energy. Gravitational PE = mgh</li>
<li><strong>Chemical Energy:</strong> Energy stored in chemical bonds</li>
<li><strong>Thermal Energy:</strong> Energy of heat</li>
<li><strong>Electrical Energy:</strong> Energy from moving charges</li>
<li><strong>Light Energy:</strong> Energy from electromagnetic radiation</li>
<li><strong>Sound Energy:</strong> Energy from vibrations</li>
<li><strong>Nuclear Energy:</strong> Energy from nuclear reactions</li>
</ul>

<h4>Conservation of Energy</h4>
<p><strong>Law of Conservation of Energy:</strong> Energy cannot be created or destroyed, only converted from one form to another.</p>
<p>Total energy before = Total energy after</p>

<h4>Power</h4>
<p><strong>Power</strong> is the rate at which work is done or energy is transferred.</p>
<p>Power = Work done / Time taken = Energy / Time</p>
<p>P = W/t (Unit: Watt, W = J/s)</p>

<h4>Efficiency</h4>
<p>Efficiency = (Useful energy output / Total energy input) × 100%</p>

<h4>Example</h4>
<p>A 50 kg student climbs a 3 m ladder in 5 seconds. Find the power output.</p>
<p><strong>Solution:</strong></p>
<p>Work done = mgh = 50 × 9.8 × 3 = 1470 J</p>
<p>Power = 1470 / 5 = 294 W</p>

<h4>Practice Questions</h4>
<ol>
<li>A force of 20 N moves an object 5 m. Calculate the work done.</li>
<li>A car of mass 800 kg is moving at 15 m/s. Find its kinetic energy.</li>
<li>A 60 W bulb uses 3600 J of energy. How long was it on?</li>
</ol>
`,

    'electricity-ol': `
<h3>Electricity</h3>
<h4>Basic Concepts</h4>
<ul>
<li><strong>Electric Current (I):</strong> The flow of electric charge through a conductor. Measured in Amperes (A).</li>
<li><strong>Voltage (V):</strong> The potential difference that drives current. Measured in Volts (V).</li>
<li><strong>Resistance (R):</strong> The opposition to current flow. Measured in Ohms (Ω).</li>
</ul>

<h4>Ohm's Law</h4>
<p>V = IR (Voltage = Current × Resistance)</p>
<p>If voltage increases, current increases (for a fixed resistance).</p>

<h4>Circuits</h4>
<p><strong>Series Circuit:</strong> Components connected end-to-end. Current is the same through all components.</p>
<p>Total Resistance: R_total = R₁ + R₂ + R₃ + ...</p>

<p><strong>Parallel Circuit:</strong> Components connected side-by-side. Voltage is the same across all paths.</p>
<p>Total Resistance: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</p>

<h4>Electrical Power</h4>
<p>P = VI = I²R = V²/R</p>

<h4>Electrical Energy</h4>
<p>E = Pt = VIt (Energy = Power × time = Voltage × Current × time)</p>

<h4>Safety</h4>
<ul>
<li><strong>Fuses:</strong> Safety devices that melt and break the circuit if current is too high</li>
<li><strong>Earth Wire:</strong> Provides a safe path for current to ground</li>
<li><strong>Double Insulation:</strong> Extra protective layer for safety</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>A bulb has a resistance of 240 Ω and is connected to 240 V. Find the current.</li>
<li>Calculate the total resistance of a 4 Ω and 6 Ω resistor in series and in parallel.</li>
<li>A 100 W bulb is used for 5 hours. Find the energy consumed in kWh.</li>
</ol>
`,

    'light-sound': `
<h3>Light & Sound</h3>
<h4>Properties of Light</h4>
<p>Light is a form of energy that travels as electromagnetic waves. It travels at 3 × 10⁸ m/s in a vacuum.</p>

<h4>Reflection of Light</h4>
<p><strong>Laws of Reflection:</strong></p>
<ol>
<li>The angle of incidence equals the angle of reflection</li>
<li>The incident ray, reflected ray, and normal all lie in the same plane</li>
</ol>

<h4>Types of Reflection</h4>
<ul>
<li><strong>Regular (Specular) Reflection:</strong> From smooth surfaces (mirrors)</li>
<li><strong>Diffuse Reflection:</strong> From rough surfaces (paper, walls)</li>
</ul>

<h4>Mirrors</h4>
<ul>
<li><strong>Plane Mirror:</strong> Produces a virtual, upright image of the same size</li>
<li><strong>Concave Mirror:</strong> Curved inward, can form real images</li>
<li><strong>Convex Mirror:</strong> Curved outward, always forms virtual, diminished images</li>
</ul>

<h4>Refraction of Light</h4>
<p>When light passes from one medium to another, it changes direction. This is called refraction.</p>
<p><strong>Snell's Law:</strong> n₁ sin θ₁ = n₂ sin θ₂</p>
<p>Where n is the refractive index and θ is the angle from the normal.</p>

<h4>Lenses</h4>
<ul>
<li><strong>Convex Lens:</strong> Converges light, can form real or virtual images</li>
<li><strong>Concave Lens:</strong> Diverges light, always forms virtual images</li>
</ul>

<h4>Sound</h4>
<p>Sound is produced by vibrations and travels as longitudinal waves.</p>
<ul>
<li><strong>Speed of sound in air:</strong> ~340 m/s</li>
<li><strong>Speed in water:</strong> ~1500 m/s</li>
<li><strong>Speed in solids:</strong> ~5000 m/s (fastest in solids)</li>
</ul>

<h4>Properties of Sound</h4>
<ul>
<li><strong>Pitch:</strong> Determined by frequency (high frequency = high pitch)</li>
<li><strong>Loudness:</strong> Determined by amplitude (larger amplitude = louder)</li>
<li><strong>Quality (Timbre):</strong> Distinguishes different sound sources</li>
</ul>

<h4>Echo</h4>
<p>Reflection of sound waves. Used in sonar and ultrasound imaging.</p>

<h4>Practice Questions</h4>
<ol>
<li>If the angle of incidence is 30°, what is the angle of reflection?</li>
<li>Why does a straw appear bent in a glass of water?</li>
<li>Light travels 30,000 km in glass in 0.0001 s. Find the speed of light in glass.</li>
</ol>
`
};

// O/L Content - History
const OL_HISTORY = {
    'ancient-sri-lanka': `
<h3>Ancient Sri Lanka - Anuradhapura Period</h3>
<h4>Arrival of Prince Vijaya</h4>
<p>According to the Mahavamsa, Prince Vijaya arrived in Sri Lanka in 543 BC. He established the first Sinhalese kingdom at Tambapanni.</p>

<h4>Anuradhapura Kingdom (377 BC - 1017 AD)</h4>
<p>Anuradhapura was the first major kingdom in Sri Lanka, lasting over 1400 years.</p>

<h4>Key Kings of Anuradhapura</h4>
<ul>
<li><strong>King Pandukabhaya (377-307 BC):</strong> Founded the city of Anuradhapura and established it as the capital</li>
<li><strong>King Devanampiya Tissa (247-207 BC):</strong> Introduced Buddhism to Sri Lanka with the help of Mahinda Thero</li>
<li><strong>King Dutugemunu (161-137 BC):</strong> Defeated Elara, built the Ruwanwelisaya and Lovamahapaya</li>
<li><strong>King Valagamba (103 BC):</strong> Built the Abhayagiri Vihara</li>
<li><strong>King Mahasena (276-303 AD):</strong> Built the Jetavanaramaya, the tallest stupa in Sri Lanka</li>
</ul>

<h4>Introduction of Buddhism</h4>
<p>Buddhism was introduced to Sri Lanka in 247 BC during the reign of King Devanampiya Tissa. Arahat Mahinda, son of Emperor Ashoka of India, came to Sri Lanka and preached Buddhism to the king.</p>

<h4>Important Buddhist Monuments</h4>
<ul>
<li><strong>Ruwanwelisaya:</strong> Built by King Dutugemunu, one of the tallest stupas in the world</li>
<li><strong>Jetavanaramaya:</strong> Built by King Mahasena, was the tallest stupa in the ancient world</li>
<li><strong>Thuparamaya:</strong> The first stupa built in Sri Lanka, by King Devanampiya Tissa</li>
<li><strong>Abhayagiri Vihara:</strong> A major monastery complex</li>
<li><strong>Isurumuniya:</strong> Famous for the Isurumuniya lovers carving</li>
</ul>

<h4>Decline of Anuradhapura</h4>
<p>The Anuradhapura kingdom was invaded by the Chola dynasty from South India in 1017 AD, ending the kingdom's reign.</p>
`,

    'polonnaruwa-medieval': `
<h3>Polonnaruwa & Medieval Period</h3>
<h4>The Polonnaruwa Kingdom (1017-1232 AD)</h4>
<p>After the fall of Anuradhapura, Polonnaruwa became the new capital of Sri Lanka.</p>

<h4>Key Kings of Polonnaruwa</h4>
<ul>
<li><strong>King Vijayabahu I (1055-1110 AD):</strong> Defeated the Cholas and established the Polonnaruwa kingdom</li>
<li><strong>King Parakramabahu I (1153-1186 AD):</strong> Considered the greatest king of Polonnaruwa. His famous quote: "Not even a drop of water from the rain should be allowed to flow into the ocean without being used for the benefit of man"</li>
<li><strong>King Nissanka Malla (1187-1196 AD):</strong> Built many religious monuments</li>
</ul>

<h4>Achievements of Parakramabahu I</h4>
<ul>
<li><strong>Irrigation:</strong> Built the Parakrama Samudra (Sea of Parakrama), one of the largest man-made reservoirs</li>
<li><strong>Architecture:</strong> Built the Polonnaruwa Vatadage, Gal Vihara (rock carvings of Buddha)</li>
<li><strong>Military:</strong> Launched successful campaigns to South India and Myanmar</li>
<li><strong>Unification:</strong> United the three kingdoms of Sri Lanka (Ruhuna, Maya, Pihiti)</li>
</ul>

<h4>Gal Vihara</h4>
<p>The Gal Vihara is a collection of four magnificent Buddha images carved out of a single granite rock. It includes:</p>
<ul>
<li>A seated Buddha in meditation (samadhi posture)</li>
<li>A standing Buddha with arms crossed (unique posture found only here)</li>
<li>A reclining Buddha showing the passing into nirvana (parinibbana)</li>
<li>A seated Buddha inside a cave</li>
</ul>

<h4>Dambadeniya Period (1232-1341 AD)</h4>
<p>After the decline of Polonnaruwa due to invasions, the capital shifted to Dambadeniya. King Vijayabahu III and King Parakramabahu II ruled from here.</p>

<h4>Important Literary Works</h4>
<ul>
<li><strong>Mahavamsa:</strong> The great chronicle of Sri Lankan history</li>
<li><strong>Pujavaliya:</strong> Written by Mayurapada Thero during Dambadeniya period</li>
<li><strong>Saddharmaratnavaliya:</strong> Written by Dharmasena Thero</li>
<li><strong>Kavsilumina:</strong> A classic Sinhalese poem by King Parakramabahu II</li>
</ul>
`,

    'colonial-period': `
<h3>Colonial Period in Sri Lanka</h3>
<h4>Portuguese Period (1505-1658)</h4>
<p>The Portuguese arrived in Sri Lanka in 1505, led by Lourenço de Almeida. They controlled the maritime regions of the country.</p>

<h4>Portuguese Influence</h4>
<ul>
<li><strong>Religion:</strong> Introduction of Roman Catholicism</li>
<li><strong>Names:</strong> Introduction of Portuguese surnames (Silva, Perera, Fernando)</li>
<li><strong>Food:</strong> Introduction of chili peppers, cashew nuts, tobacco</li>
<li><strong>Architecture:</strong> Built forts in Colombo, Galle, Jaffna, Batticaloa</li>
<li><strong>Language:</strong> Portuguese words entered Sinhala and Tamil</li>
</ul>

<h4>Dutch Period (1658-1796)</h4>
<p>The Dutch East India Company (VOC) captured the Portuguese territories and ruled the coastal regions.</p>

<h4>Dutch Influence</h4>
<ul>
<li><strong>Law:</strong> Introduced Roman-Dutch law (still part of Sri Lankan law today)</li>
<li><strong>Religion:</strong> Introduced Protestant Christianity (Dutch Reformed Church)</li>
<li><strong>Irrigation:</strong> Improved irrigation systems in coastal areas</li>
<li><strong>Education:</strong> Established schools in the coastal areas</li>
<li><strong>Trade:</strong> Controlled the cinnamon trade monopoly</li>
<li><strong>Architecture:</strong> Built Dutch forts (Galle Fort is a UNESCO World Heritage site)</li>
</ul>

<h4>British Period (1796-1948)</h4>
<p>The British took control of the coastal areas from the Dutch in 1796. In 1815, they captured the Kandyan Kingdom, bringing the entire island under British rule.</p>

<h4>British Influence</h4>
<ul>
<li><strong>Language:</strong> Introduction of English education</li>
<li><strong>Infrastructure:</strong> Built railways, roads, ports, tea and rubber plantations</li>
<li><strong>Economy:</strong> Shifted from subsistence farming to plantation economy (coffee, tea, rubber, coconut)</li>
<li><strong>Administration:</strong> Established a centralized government system</li>
<li><strong>Education:</strong> Established schools, colleges, and universities</li>
<li><strong>Health:</strong> Introduced modern medicine and hospitals</li>
</ul>

<h4>Key Events</h4>
<ul>
<li><strong>1815:</strong> Kandyan Convention - British take control of the Kandyan Kingdom</li>
<li><strong>1817-1818:</strong> Uva-Wellassa Rebellion</li>
<li><strong>1848:</strong> Matale Rebellion</li>
<li><strong>Early 1900s:</strong> Growth of nationalist movement</li>
</ul>
`,

    'independence-modern': `
<h3>Independence & Modern Sri Lanka</h3>
<h4>Road to Independence</h4>
<p>The Sri Lankan independence movement grew in the early 20th century. Key figures and organizations led the struggle for self-rule.</p>

<h4>Key Figures</h4>
<ul>
<li><strong>Anagarika Dharmapala (1864-1933):</strong> Buddhist revivalist and nationalist leader. He was instrumental in the revival of Buddhism and the independence movement.</li>
<li><strong>Sir D. S. Senanayake (1884-1952):</strong> First Prime Minister of independent Sri Lanka. Known as the "Father of the Nation."</li>
<li><strong>Sir Ponnambalam Ramanathan (1851-1930):</strong> A Tamil leader who served in the legislative council</li>
<li><strong>S. W. R. D. Bandaranaike (1899-1959):</strong> Prime Minister who introduced Sinhala as the official language</li>
<li><strong>Sirimavo Bandaranaike (1916-2000):</strong> World's first female Prime Minister</li>
</ul>

<h4>Independence (1948)</h4>
<p>Sri Lanka (then called Ceylon) gained independence from Britain on <strong>February 4, 1948</strong>.</p>

<h4>Post-Independence Developments</h4>
<ul>
<li><strong>1948-1956:</strong> UNP government under D. S. Senanayake</li>
<li><strong>1956:</strong> S. W. R. D. Bandaranaike becomes Prime Minister; Sinhala made official language</li>
<li><strong>1960:</strong> Sirimavo Bandaranaike becomes world's first female Prime Minister</li>
<li><strong>1972:</strong> Ceylon becomes the Republic of Sri Lanka (new constitution)</li>
<li><strong>1983-2009:</strong> Civil war between the government and LTTE</li>
<li><strong>2009:</strong> End of the civil war</li>
<li><strong>2022:</strong> Economic crisis and political changes</li>
</ul>

<h4>Modern Sri Lanka Today</h4>
<p>Sri Lanka today is a democratic republic with a population of about 22 million. The country is multi-ethnic and multi-religious, with Sinhalese, Tamils, Muslims, and Burghers living together.</p>
`
};

// O/L Content - Geography
const OL_GEOGRAPHY = {
    'earth-structure': `
<h3>Earth Structure & Landforms</h3>
<h4>Structure of the Earth</h4>
<p>The Earth is composed of three main layers:</p>
<ul>
<li><strong>Crust:</strong> The outermost layer (5-70 km thick). Continental crust is thicker (30-70 km) than oceanic crust (5-10 km).</li>
<li><strong>Mantle:</strong> The middle layer (2,900 km thick). Made of hot, semi-solid rock called magma.</li>
<li><strong>Core:</strong> The innermost layer. Outer core is liquid, inner core is solid. Temperature reaches up to 5500°C.</li>
</ul>

<h4>Plate Tectonics</h4>
<p>The Earth's crust is divided into several large plates that float on the mantle. These plates move slowly over time, causing:</p>
<ul>
<li><strong>Earthquakes:</strong> When plates suddenly slip past each other</li>
<li><strong>Volcanoes:</strong> When magma rises through cracks between plates</li>
<li><strong>Mountain Formation:</strong> When plates collide and push up the crust</li>
<li><strong>Continental Drift:</strong> The slow movement of continents over millions of years</li>
</ul>

<h4>Types of Rocks</h4>
<ul>
<li><strong>Igneous Rocks:</strong> Formed from cooled magma/lava (e.g., granite, basalt)</li>
<li><strong>Sedimentary Rocks:</strong> Formed from compressed sediments (e.g., limestone, sandstone, shale)</li>
<li><strong>Metamorphic Rocks:</strong> Formed from existing rocks changed by heat/pressure (e.g., marble, quartzite)</li>
</ul>

<h4>Landforms Created by Rivers</h4>
<ul>
<li><strong>Waterfalls:</strong> Formed when a river flows over a hard rock layer onto softer rock</li>
<li><strong>Meanders:</strong> Curves and bends in a river</li>
<li><strong>Floodplains:</strong> Flat land on either side of a river that floods regularly</li>
<li><strong>Deltas:</strong> Deposits of sediment at the mouth of a river</li>
<li><strong>Valleys:</strong> V-shaped or U-shaped depressions carved by rivers/glaciers</li>
</ul>

<h4>Landforms Created by Wind</h4>
<ul>
<li><strong>Sand Dunes:</strong> Mounds of sand formed by wind in deserts</li>
<li><strong>Loess:</strong> Deposits of fine dust carried by wind</li>
</ul>
`,

    'climate-weather': `
<h3>Climate & Weather</h3>
<h4>Weather vs Climate</h4>
<ul>
<li><strong>Weather:</strong> The day-to-day state of the atmosphere (temperature, rain, wind)</li>
<li><strong>Climate:</strong> The average weather conditions over a long period (30+ years)</li>
</ul>

<h4>Factors Affecting Climate</h4>
<ul>
<li><strong>Latitude:</strong> Distance from the equator affects temperature</li>
<li><strong>Altitude:</strong> Higher elevations are colder (temperature drops ~6.5°C per 1000 m)</li>
<li><strong>Distance from Sea:</strong> Coastal areas have milder climates (maritime climate)</li>
<li><strong>Ocean Currents:</strong> Warm/cold currents affect coastal temperatures</li>
<li><strong>Wind Patterns:</strong> Prevailing winds bring moisture or dry air</li>
</ul>

<h4>Climate of Sri Lanka</h4>
<p>Sri Lanka has a tropical climate with two main monsoon seasons:</p>
<ul>
<li><strong>Southwest Monsoon (May-September):</strong> Brings rain to the southwestern part of the country</li>
<li><strong>Northeast Monsoon (December-February):</strong> Brings rain to the northern and eastern parts</li>
<li><strong>Inter-monsoon Periods (March-April, October-November):</strong> Convectional rain</li>
</ul>

<h4>Climate Zones of Sri Lanka</h4>
<ul>
<li><strong>Wet Zone:</strong> Southwestern part, receives over 2500 mm annual rainfall</li>
<li><strong>Dry Zone:</strong> Northern and eastern parts, receives 1250-1750 mm rainfall</li>
<li><strong>Intermediate Zone:</strong> Transition zone between wet and dry zones</li>
<li><strong>Arid Zone:</strong> Southeastern part (Hambantota, Yala area), less than 1250 mm</li>
</ul>

<h4>Global Climate Types</h4>
<ul>
<li><strong>Tropical Climate:</strong> Hot year-round (near equator)</li>
<li><strong>Dry Climate:</strong> Low rainfall (deserts)</li>
<li><strong>Temperate Climate:</strong> Moderate temperatures (mid-latitudes)</li>
<li><strong>Continental Climate:</strong> Cold winters, warm summers (inland areas)</li>
<li><strong>Polar Climate:</strong> Very cold (near poles)</li>
</ul>
`
};

// O/L Content - English
const OL_ENGLISH = {
    'grammar-parts': `
<h3>Grammar & Parts of Speech</h3>
<h4>The 8 Parts of Speech</h4>
<p>Every word in English belongs to one of eight categories based on its function in a sentence.</p>

<h4>1. Nouns</h4>
<p>Names of people, places, things, or ideas.</p>
<ul>
<li><strong>Common Nouns:</strong> city, student, book, computer</li>
<li><strong>Proper Nouns:</strong> Colombo, Ruzaith, Sri Lanka, Amazon</li>
<li><strong>Abstract Nouns:</strong> love, freedom, happiness, courage</li>
<li><strong>Collective Nouns:</strong> team, family, crowd, audience</li>
<li><strong>Countable:</strong> Can be counted (one book, two books)</li>
<li><strong>Uncountable:</strong> Cannot be counted (water, rice, information)</li>
</ul>

<h4>2. Pronouns</h4>
<p>Words that replace nouns to avoid repetition.</p>
<ul>
<li><strong>Personal Pronouns:</strong> I, you, he, she, it, we, they</li>
<li><strong>Possessive Pronouns:</strong> mine, yours, his, hers, its, ours, theirs</li>
<li><strong>Reflexive Pronouns:</strong> myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</li>
<li><strong>Demonstrative Pronouns:</strong> this, that, these, those</li>
<li><strong>Relative Pronouns:</strong> who, whom, which, that, whose</li>
<li><strong>Interrogative Pronouns:</strong> who, whom, which, what, whose</li>
</ul>

<h4>3. Verbs</h4>
<p>Action words or state of being words.</p>
<ul>
<li><strong>Action Verbs:</strong> run, eat, study, write, play</li>
<li><strong>Linking Verbs:</strong> be (am, is, are, was, were), seem, become, appear</li>
<li><strong>Auxiliary/Helping Verbs:</strong> have, do, will, shall, can, may, must</li>
<li><strong>Transitive Verbs:</strong> Need an object (She reads a book)</li>
<li><strong>Intransitive Verbs:</strong> Don't need an object (He sleeps)</li>
</ul>

<h4>4. Adjectives</h4>
<p>Words that describe nouns or pronouns.</p>
<ul>
<li><strong>Descriptive:</strong> beautiful, tall, intelligent, red</li>
<li><strong>Quantitative:</strong> some, many, few, several, all</li>
<li><strong>Demonstrative:</strong> this, that, these, those</li>
<li><strong>Possessive:</strong> my, your, his, her, its, our, their</li>
<li><strong>Comparative:</strong> bigger, smarter, more beautiful</li>
<li><strong>Superlative:</strong> biggest, smartest, most beautiful</li>
</ul>

<h4>5. Adverbs</h4>
<p>Words that modify verbs, adjectives, or other adverbs. Often end in -ly.</p>
<ul>
<li><strong>Manner:</strong> quickly, carefully, slowly, loudly</li>
<li><strong>Time:</strong> now, then, yesterday, soon, always</li>
<li><strong>Place:</strong> here, there, everywhere, inside</li>
<li><strong>Frequency:</strong> always, never, sometimes, often, rarely</li>
<li><strong>Degree:</strong> very, quite, almost, too, enough</li>
</ul>

<h4>6. Prepositions</h4>
<p>Show relationships between words.</p>
<ul>
<li><strong>Place:</strong> in, on, at, under, above, between, behind, next to</li>
<li><strong>Time:</strong> before, after, during, since, until, by</li>
<li><strong>Direction:</strong> to, from, into, out of, through, across</li>
<li><strong>Other:</strong> with, without, about, for, of, by</li>
</ul>

<h4>7. Conjunctions</h4>
<p>Connect words, phrases, or clauses.</p>
<ul>
<li><strong>Coordinating:</strong> and, but, or, nor, for, yet, so (FANBOYS)</li>
<li><strong>Subordinating:</strong> because, although, since, when, while, if, unless, after</li>
<li><strong>Correlative:</strong> either...or, neither...nor, both...and, not only...but also</li>
</ul>

<h4>8. Interjections</h4>
<p>Words that express strong emotion. Often followed by an exclamation mark.</p>
<p>Examples: Wow! Oh! Ouch! Hurray! Alas! Bravo!</p>
`
};

// Export all for merging
const OL_CONTENT = {
    mathematics: OL_MATHEMATICS,
    science: OL_SCIENCE,
    history: OL_HISTORY,
    geography: OL_GEOGRAPHY,
    english: OL_ENGLISH
};
