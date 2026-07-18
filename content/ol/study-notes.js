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
`,

    'tenses-voice': `
<h3>Tenses & Voice</h3>
<h4>Verb Tenses</h4>
<p>Tenses show the time of an action. There are three main tenses, each with four aspects.</p>

<h4>1. Present Tense</h4>
<p><strong>Simple Present:</strong> Used for habits, facts, routines.</p>
<ul>
<li>I <em>study</em> every day.</li>
<li>She <em>reads</em> newspapers. (He/She/It takes -s)</li>
<li>The sun <em>rises</em> in the east.</li>
</ul>

<p><strong>Present Continuous:</strong> Actions happening now.</p>
<ul>
<li>I <em>am writing</em> an essay.</li>
<li>He <em>is playing</em> cricket.</li>
<li>They <em>are studying</em> for exams.</li>
</ul>

<p><strong>Present Perfect:</strong> Past actions with present relevance.</p>
<ul>
<li>I <em>have completed</em> my homework.</li>
<li>She <em>has visited</em> Kandy.</li>
<li>They <em>have finished</em> the project.</li>
</ul>

<p><strong>Present Perfect Continuous:</strong> Actions that started in the past and continue.</p>
<ul>
<li>I <em>have been studying</em> for three hours.</li>
<li>It <em>has been raining</em> since morning.</li>
</ul>

<h4>2. Past Tense</h4>
<p><strong>Simple Past:</strong> Completed actions.</p>
<ul>
<li>I <em>visited</em> Colombo yesterday.</li>
<li>She <em>wrote</em> a letter last week.</li>
</ul>

<p><strong>Past Continuous:</strong> Actions in progress at a past time.</p>
<ul>
<li>I <em>was reading</em> when he called.</li>
<li>They <em>were playing</em> cricket at 5 PM.</li>
</ul>

<p><strong>Past Perfect:</strong> Actions completed before another past action.</p>
<ul>
<li>I <em>had finished</em> my homework before dinner.</li>
<li>She <em>had left</em> when I arrived.</li>
</ul>

<p><strong>Past Perfect Continuous:</strong> Continuous actions before another past action.</p>
<ul>
<li>I <em>had been waiting</em> for an hour when the bus arrived.</li>
</ul>

<h4>3. Future Tense</h4>
<p><strong>Simple Future (will/shall):</strong> Predictions, promises, decisions.</p>
<ul>
<li>I <em>will help</em> you tomorrow.</li>
<li>It <em>will rain</em> soon.</li>
</ul>

<p><strong>Going to:</strong> Plans and intentions.</p>
<ul>
<li>I <em>am going to study</em> medicine.</li>
<li>They <em>are going to build</em> a new school.</li>
</ul>

<p><strong>Future Continuous:</strong> Actions in progress at a future time.</p>
<ul>
<li>This time tomorrow, I <em>will be taking</em> the exam.</li>
</ul>

<h4>Active vs Passive Voice</h4>
<p><strong>Active Voice:</strong> The subject performs the action.</p>
<ul>
<li>"The cat <em>chased</em> the rat." (Subject = cat, doing the action)</li>
<li>"Shakespeare <em>wrote</em> Hamlet."</li>
</ul>

<p><strong>Passive Voice:</strong> The subject receives the action.</p>
<ul>
<li>"The rat <em>was chased</em> by the cat."</li>
<li>"Hamlet <em>was written</em> by Shakespeare."</li>
</ul>

<p><strong>Forming the Passive:</strong> be + past participle (by + agent)</p>
<table>
<tr><th>Tense</th><th>Active</th><th>Passive</th></tr>
<tr><td>Simple Present</td><td>cleans</td><td>is cleaned</td></tr>
<tr><td>Simple Past</td><td>cleaned</td><td>was cleaned</td></tr>
<tr><td>Present Perfect</td><td>has cleaned</td><td>has been cleaned</td></tr>
<tr><td>Future</td><td>will clean</td><td>will be cleaned</td></tr>
<tr><td>Modal</td><td>must clean</td><td>must be cleaned</td></tr>
</table>

<h4>Practice Questions</h4>
<ol>
<li>Rewrite in passive voice: "The students completed the project."</li>
<li>Fill in the blank: She ___ (study) English for five years. (Present Perfect Continuous)</li>
<li>Change to future tense: "I go to school."</li>
</ol>
`,

    'essay-writing': `
<h3>Essay & Letter Writing</h3>
<h4>Essay Structure</h4>
<p>A well-written essay has three main parts: Introduction, Body, and Conclusion.</p>

<h4>1. Introduction</h4>
<ul>
<li>Hook the reader's attention</li>
<li>Provide background information</li>
<li>State your thesis (main idea)</li>
<li>Keep it brief (1 paragraph)</li>
</ul>

<h4>2. Body Paragraphs</h4>
<ul>
<li>Each paragraph should focus on one main idea</li>
<li>Start with a topic sentence</li>
<li>Support with evidence, examples, facts</li>
<li>Use transition words (firstly, moreover, however, consequently)</li>
<li>Aim for 3-4 body paragraphs</li>
</ul>

<h4>3. Conclusion</h4>
<ul>
<li>Summarize your main points</li>
<li>Restate the thesis in different words</li>
<li>Leave a final thought for the reader</li>
<li>Do NOT introduce new ideas</li>
</ul>

<h4>Types of Essays</h4>
<ul>
<li><strong>Narrative:</strong> Tells a story. Use first person, chronological order.</li>
<li><strong>Descriptive:</strong> Describes a person, place, or event. Use sensory details.</li>
<li><strong>Argumentative:</strong> Persuades the reader. Present both sides, take a position.</li>
<li><strong>Expository:</strong> Explains or informs. Use facts and examples.</li>
<li><strong>Reflective:</strong> Personal thoughts and experiences.</li>
</ul>

<h4>Useful Transition Words</h4>
<table>
<tr><th>Purpose</th><th>Words</th></tr>
<tr><td>Addition</td><td>firstly, moreover, furthermore, also, in addition</td></tr>
<tr><td>Contrast</td><td>however, but, although, on the other hand, nevertheless</td></tr>
<tr><td>Cause/Effect</td><td>therefore, consequently, as a result, because, thus</td></tr>
<tr><td>Conclusion</td><td>in conclusion, to summarize, finally, overall, in short</td></tr>
<tr><td>Example</td><td>for example, for instance, such as, namely</td></tr>
</table>

<h4>Letter Writing - Formal Letter Format</h4>
<pre>
[Your Address]
[City, Postal Code]
[Date]

[Recipient's Name/Title]
[Company/Organization]
[Address]

Dear [Sir/Madam/Name],

Subject: [Purpose of the letter]

[Body paragraph 1 - Introduction]
[Body paragraph 2 - Main details]
[Body paragraph 3 - Conclusion]

Yours faithfully,
[Your Signature]
[Your Printed Name]
</pre>

<h4>Letter Writing - Informal Letter Format</h4>
<pre>
[Your Address]
[Date]

Dear [Name],

[Body of the letter - friendly tone]
[Ask about their well-being]
[Share your news/message]
[End with warm wishes]

Your loving friend/son/daughter,
[Your Name]
</pre>

<h4>Practice Questions</h4>
<ol>
<li>Write an essay on "The Importance of Education" in 250 words</li>
<li>Write a formal letter to your principal requesting a library card</li>
<li>Write an informal letter to your friend about your school trip</li>
</ol>
`,

    'comprehension-skills': `
<h3>Reading Comprehension Skills</h3>
<h4>What is Reading Comprehension?</h4>
<p>Reading comprehension is the ability to understand, analyze, and interpret written texts. It is a crucial skill for all subjects.</p>

<h4>Key Reading Strategies</h4>
<ol>
<li><strong>Preview the Text:</strong> Look at headings, subheadings, pictures, and first sentences before reading fully.</li>
<li><strong>Skim for Main Ideas:</strong> Read quickly to get the general idea of the passage.</li>
<li><strong>Scan for Specific Information:</strong> Look for key words, dates, names, or numbers.</li>
<li><strong>Read Carefully:</strong> Understand each sentence and paragraph.</li>
<li><strong>Annotate:</strong> Underline important points, circle unknown words.</li>
<li><strong>Summarize:</strong> Write a brief summary in your own words.</li>
</ol>

<h4>Types of Comprehension Questions</h4>
<ul>
<li><strong>Literal Questions:</strong> Answers are directly in the text. (What, When, Where, Who)</li>
<li><strong>Inferential Questions:</strong> Need to "read between the lines." (Why, How, What if)</li>
<li><strong>Evaluative Questions:</strong> Your opinion based on the text. (Do you agree? What do you think?)</li>
</ul>

<h4>Understanding Text Types</h4>
<ul>
<li><strong>Narrative:</strong> Tells a story with characters, setting, plot</li>
<li><strong>Descriptive:</strong> Describes in detail using sensory language</li>
<li><strong>Persuasive:</strong> Tries to convince the reader</li>
<li><strong>Informative/Explanatory:</strong> Gives facts and information</li>
<li><strong>Instructional:</strong> Gives step-by-step directions</li>
</ul>

<h4>Finding the Main Idea</h4>
<p>The main idea is the most important point the author wants to convey. Ask yourself: "What is this passage mostly about?"</p>
<ul>
<li>The main idea is often found in the first sentence of a paragraph</li>
<li>Supporting details provide evidence for the main idea</li>
<li>The topic sentence states the main idea of a paragraph</li>
</ul>

<h4>Inferring Meaning from Context</h4>
<p>When you encounter an unknown word, use context clues:</p>
<ul>
<li><strong>Definition:</strong> The word is defined in the sentence. "A <em>predator</em>, which is an animal that hunts other animals..."</li>
<li><strong>Synonym:</strong> A similar word is used nearby.</li>
<li><strong>Antonym:</strong> An opposite word gives clues. "Unlike his <em>timid</em> brother, he was brave."</li>
<li><strong>Example:</strong> Examples help define the word. "<em>Mammals</em>, such as dogs, cats, and humans..."</li>
</ul>

<h4>Sample Comprehension Passage</h4>
<p>"Sri Lanka is an island nation located in the Indian Ocean. It has a rich history spanning over 2,500 years. The country is known for its ancient Buddhist ruins, beautiful beaches, and diverse wildlife. The economy relies mainly on agriculture (tea, rubber, coconut), tourism, and textiles. Sri Lanka gained independence from Britain on February 4, 1948."</p>

<p><strong>Questions:</strong></p>
<ol>
<li>Where is Sri Lanka located?</li>
<li>How long is Sri Lanka's recorded history?</li>
<li>What are the main industries of Sri Lanka?</li>
<li>When did Sri Lanka gain independence?</li>
</ol>

<h4>Practice</h4>
<ol>
<li>Read a short newspaper article and identify the main idea</li>
<li>Find three context clues for an unfamiliar word</li>
<li>Write a 50-word summary of any passage</li>
</ol>
`,

    'poetry-analysis': `
<h3>Poetry Analysis</h3>
<h4>What is Poetry?</h4>
<p>Poetry is a form of literature that uses aesthetic and rhythmic qualities of language to evoke meaning and emotion. It often uses verse, meter, and rhyme.</p>

<h4>Poetic Devices</h4>
<ul>
<li><strong>Rhyme:</strong> Repetition of similar sounds. "The cat <em>sat</em> on the <em>mat</em>."</li>
<li><strong>Rhythm/Meter:</strong> The pattern of stressed and unstressed syllables.</li>
<li><strong>Alliteration:</strong> Repetition of initial consonant sounds. "<em>Peter Piper picked</em> a peck of pickled peppers."</li>
<li><strong>Assonance:</strong> Repetition of vowel sounds. "The <em>r</em>a<em>i</em>n <em>i</em>n Spa<em>i</em>n."</li>
<li><strong>Consonance:</strong> Repetition of consonant sounds. "<em>p</em>i<em>p</em>er <em>p</em>a<em>pp</em>er"</li>
<li><strong>Onomatopoeia:</strong> Words that sound like their meaning. "buzz, hiss, bang, splash"</li>
<li><strong>Simile:</strong> Comparison using "like" or "as." "Her smile was <em>like</em> sunshine."</li>
<li><strong>Metaphor:</strong> Direct comparison without "like/as." "Life <em>is</em> a journey."</li>
<li><strong>Personification:</strong> Giving human qualities to non-human things. "The wind <em>whispered</em> through the trees."</li>
<li><strong>Hyperbole:</strong> Exaggeration for effect. "I've told you a million times."</li>
<li><strong>Imagery:</strong> Language that appeals to the senses (sight, sound, touch, taste, smell).</li>
<li><strong>Symbolism:</strong> Using symbols to represent ideas. "The dove symbolizes peace."</li>
</ul>

<h4>Structure of Poetry</h4>
<ul>
<li><strong>Stanza:</strong> A group of lines in a poem (like a paragraph)</li>
<li><strong>Couplet:</strong> Two lines that rhyme. "Good night, good night! Parting is such sweet sorrow / That I shall say good night till it be morrow."</li>
<li><strong>Quatrain:</strong> Four-line stanza. Common in ballads.</li>
<li><strong>Sonnet:</strong> 14-line poem with a specific rhyme scheme.</li>
<li><strong>Free Verse:</strong> Poetry without regular rhyme or meter.</li>
</ul>

<h4>How to Analyze a Poem</h4>
<ol>
<li><strong>Read the poem aloud</strong> - listen to the rhythm and sound</li>
<li><strong>Identify the subject</strong> - what is the poem about?</li>
<li><strong>Look at the structure</strong> - stanzas, rhyme scheme, line length</li>
<li><strong>Identify poetic devices</strong> - similes, metaphors, personification, etc.</li>
<li><strong>Consider the tone</strong> - happy, sad, angry, hopeful, reflective</li>
<li><strong>Interpret the meaning</strong> - what message is the poet conveying?</li>
<li><strong>Express your response</strong> - how does the poem make you feel?</li>
</ol>

<h4>Poetry Example - "The Road Not Taken" by Robert Frost</h4>
<p><em>"Two roads diverged in a yellow wood,"</em></p>
<p><strong>Analysis:</strong></p>
<ul>
<li>Theme: Choices and decisions in life</li>
<li>Devices: Metaphor (roads = life choices), Imagery (yellow wood), Symbolism (the road less traveled)</li>
<li>Structure: Four stanzas of five lines each (quintains)</li>
<li>Tone: Reflective, slightly regretful yet proud</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Identify three poetic devices in any poem you have studied</li>
<li>Write a couplet about nature</li>
<li>Explain the difference between a simile and a metaphor with examples</li>
</ol>
`,

    'short-stories': `
<h3>Short Stories Analysis</h3>
<h4>What is a Short Story?</h4>
<p>A short story is a brief work of fiction that typically focuses on a single incident, character, or theme. It can be read in one sitting.</p>

<h4>Elements of a Short Story</h4>
<ol>
<li><strong>Plot:</strong> The sequence of events in the story.
    <ul>
        <li>Exposition (introduction of characters and setting)</li>
        <li>Rising Action (conflict builds)</li>
        <li>Climax (turning point, most intense moment)</li>
        <li>Falling Action (events after climax)</li>
        <li>Resolution (conflict is resolved)</li>
    </ul>
</li>
<li><strong>Setting:</strong> Where and when the story takes place (time, place, atmosphere)</li>
<li><strong>Characters:</strong> The people in the story
    <ul>
        <li>Protagonist (main character)</li>
        <li>Antagonist (opposes the protagonist)</li>
        <li>Static characters (don't change)</li>
        <li>Dynamic characters (change through the story)</li>
    </ul>
</li>
<li><strong>Theme:</strong> The central message or lesson of the story</li>
<li><strong>Conflict:</strong> The problem or struggle
    <ul>
        <li>Internal: Character vs Self</li>
        <li>External: Character vs Character, Nature, Society, Fate</li>
    </ul>
</li>
<li><strong>Point of View:</strong> Who is telling the story
    <ul>
        <li>First Person ("I" - narrator is a character)</li>
        <li>Second Person ("You" - rare)</li>
        <li>Third Person Limited ("He/She" - knows one character's thoughts)</li>
        <li>Third Person Omniscient ("He/She" - knows all characters' thoughts)</li>
    </ul>
</li>
</ol>

<h4>How to Analyze a Short Story</h4>
<ol>
<li>Identify the plot elements (exposition, climax, resolution)</li>
<li>Describe the setting and its significance</li>
<li>Analyze the characters - their motivations and changes</li>
<li>Identify the main conflict and how it's resolved</li>
<li>Determine the theme (what the author wants to convey)</li>
<li>Analyze the author's writing style</li>
<li>Consider the title - why did the author choose it?</li>
</ol>

<h4>Sample Analysis - "The Gift of the Magi" by O. Henry</h4>
<ul>
<li><strong>Plot:</strong> A young couple sells their most prized possessions to buy Christmas gifts for each other</li>
<li><strong>Theme:</strong> Love and sacrifice are more important than material possessions</li>
<li><strong>Conflict:</strong> Internal (wanting to give the perfect gift) and External (poverty)</li>
<li><strong>Irony:</strong> Situational irony - both gifts become useless but show their love</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Name the five elements of plot in a short story</li>
<li>What is the difference between static and dynamic characters?</li>
<li>Write a one-paragraph short story with a clear conflict and resolution</li>
</ol>
`,

    'drama-prose': `
<h3>Drama & Prose</h3>
<h4>What is Drama?</h4>
<p>Drama is a form of literature written to be performed by actors on a stage. It uses dialogue and stage directions to tell a story.</p>

<h4>Elements of Drama</h4>
<ul>
<li><strong>Script/Play:</strong> The written text of the drama</li>
<li><strong>Acts and Scenes:</strong> Divisions within a play (Act I, Scene 1)</li>
<li><strong>Dialogue:</strong> The words spoken by characters</li>
<li><strong>Monologue:</strong> A long speech by one character alone on stage</li>
<li><strong>Soliloquy:</strong> A character speaking their thoughts aloud, alone</li>
<li><strong>Stage Directions:</strong> Instructions for actors, lighting, setting, movement</li>
<li><strong>Props:</strong> Objects used on stage</li>
<li><strong>Set:</strong> The stage design and scenery</li>
</ul>

<h4>Types of Drama</h4>
<ul>
<li><strong>Tragedy:</strong> Serious drama with a sad ending (e.g., Shakespeare's Hamlet, Romeo and Juliet)</li>
<li><strong>Comedy:</strong> Light-hearted, humorous with a happy ending</li>
<li><strong>Tragicomedy:</strong> Blends elements of tragedy and comedy</li>
<li><strong>Melodrama:</strong> Exaggerated emotions, good vs evil characters</li>
<li><strong>One-Act Play:</strong> A short play with only one act</li>
</ul>

<h4>What is Prose?</h4>
<p>Prose is ordinary written or spoken language without metrical structure. It's the most common form of writing.</p>

<h4>Forms of Prose</h4>
<ul>
<li><strong>Novel:</strong> A long fictional narrative with complex plot and characters</li>
<li><strong>Novella:</strong> Shorter than a novel but longer than a short story</li>
<li><strong>Short Story:</strong> A brief fictional narrative</li>
<li><strong>Essay:</strong> A short non-fiction piece on a specific topic</li>
<li><strong>Biography/Autobiography:</strong> A written account of someone's life</li>
<li><strong>Articles:</strong> Non-fiction writing for newspapers/magazines</li>
<li><strong>Diary/Journal:</strong> Personal, daily records</li>
</ul>

<h4>Key Differences: Drama vs Prose</h4>
<table>
<tr><th>Feature</th><th>Drama</th><th>Prose</th></tr>
<tr><td>Format</td><td>Dialogue + stage directions</td><td>Paragraphs and sentences</td></tr>
<tr><td>Performance</td><td>Designed for stage performance</td><td>Read silently or aloud</td></tr>
<tr><td>Narrator</td><td>No narrator (dialogue-driven)</td><td>Has a narrator or voice</td></tr>
<tr><td>Structure</td><td>Acts and scenes</td><td>Chapters, paragraphs</td></tr>
<tr><td>Stage Directions</td><td>Essential part</td><td>Not applicable</td></tr>
</table>

<h4>Analyzing a Dramatic Scene</h4>
<ol>
<li>What is the conflict in this scene?</li>
<li>How does dialogue reveal character?</li>
<li>What is the mood created by the setting?</li>
<li>How do stage directions contribute to the scene?</li>
<li>What themes emerge from this scene?</li>
</ol>

<h4>Practice Questions</h4>
<ol>
<li>What is the difference between a monologue and a soliloquy?</li>
<li>Name three types of drama and give an example of each</li>
<li>Write a short dialogue between two characters</li>
</ol>
`
};

// O/L Content - Geography (add missing topics)
const OL_GEOGRAPHY = {
    'earth-structure': `
<h3>Earth Structure & Landforms</h3>
[Existing content remains - see above]
`,

    'climate-weather': `
<h3>Climate & Weather</h3>
[Existing content remains - see above]
`,

    'natural-disasters': `
<h3>Natural Disasters</h3>
<h4>What are Natural Disasters?</h4>
<p>Natural disasters are extreme, sudden events caused by environmental factors that cause significant damage, destruction, and loss of life.</p>

<h4>Types of Natural Disasters</h4>

<p><strong>1. Earthquakes</strong></p>
<ul>
<li>Sudden shaking of the ground caused by tectonic plate movement</li>
<li>Measured using the Richter Scale (magnitude) and Mercalli Scale (intensity)</li>
<li>Can cause tsunamis, landslides, building collapse</li>
<li>Sri Lanka experiences mild earthquakes but is not in a high-risk zone</li>
</ul>

<p><strong>2. Tsunamis</strong></p>
<ul>
<li>Large ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides</li>
<li>Travel at speeds up to 800 km/h in deep ocean</li>
<li>The 2004 Indian Ocean Tsunami severely affected Sri Lanka's coastline, killing over 35,000 people</li>
<li>Warning systems and evacuation plans are crucial for coastal areas</li>
</ul>

<p><strong>3. Floods</strong></p>
<ul>
<li>Overflow of water onto normally dry land</li>
<li><strong>Causes:</strong> Heavy rainfall, overflowing rivers, storm surges, dam breaks</li>
<li><strong>Effects:</strong> Property damage, loss of crops, displacement, waterborne diseases</li>
<li>Common in Sri Lanka during monsoon seasons, especially in low-lying areas</li>
</ul>

<p><strong>4. Landslides</strong></p>
<ul>
<li>Movement of rock, earth, or debris down a slope</li>
<li>Common in Sri Lanka's hill country (Badulla, Nuwara Eliya, Ratnapura)</li>
<li><strong>Causes:</strong> Heavy rain, deforestation, construction on slopes, earthquakes</li>
<li><strong>Prevention:</strong> Reforestation, retaining walls, avoiding construction on steep slopes</li>
</ul>

<p><strong>5. Droughts</strong></p>
<ul>
<li>Extended period of below-average rainfall</li>
<li><strong>Effects:</strong> Crop failure, water shortages, food insecurity, economic loss</li>
<li>Affects the Dry Zone of Sri Lanka (Northern, Eastern, Southeastern regions)</li>
<li><strong>Management:</strong> Rainwater harvesting, irrigation, water conservation</li>
</ul>

<p><strong>6. Cyclones</strong></p>
<ul>
<li>Large, rotating storm systems with strong winds (over 119 km/h)</li>
<li>Sri Lanka is affected by cyclones originating in the Bay of Bengal</li>
<li>Usually affect Northern and Eastern coastal areas</li>
<li>Can cause storm surges, flooding, and wind damage</li>
</ul>

<p><strong>7. Epidemics</strong></p>
<ul>
<li>Widespread occurrence of disease in a community</li>
<li>Example: Dengue fever is endemic in Sri Lanka, especially during rainy seasons</li>
<li><strong>Prevention:</strong> Proper sanitation, vaccination, disease surveillance</li>
</ul>

<h4>Disaster Management Cycle</h4>
<ol>
<li><strong>Mitigation:</strong> Actions to reduce risk (building codes, reforestation)</li>
<li><strong>Preparedness:</strong> Planning and training (early warning systems, drills)</li>
<li><strong>Response:</strong> Immediate actions during/after disaster (search & rescue, relief)</li>
<li><strong>Recovery:</strong> Long-term rebuilding (reconstruction, rehabilitation)</li>
</ol>

<h4>Practice Questions</h4>
<ol>
<li>What caused the 2004 Sri Lanka tsunami?</li>
<li>Which areas of Sri Lanka are most affected by landslides?</li>
<li>Explain the disaster management cycle with examples</li>
</ol>
`,

    'population-settlements': `
<h3>Population & Settlements</h3>
<h4>World Population</h4>
<p>The world population is over 8 billion people. Population distribution is uneven across the globe.</p>

<h4>Population Distribution in Sri Lanka</h4>
<ul>
<li><strong>Total Population:</strong> Approximately 22 million (2023)</li>
<li><strong>Population Density:</strong> ~341 people per km²</li>
<li><strong>Urban Population:</strong> ~18% lives in urban areas</li>
<li><strong>Rural Population:</strong> ~82% lives in rural areas</li>
<li><strong>Population Growth Rate:</strong> ~0.3% per year (declining)</li>
</ul>

<h4>Population Density Factors</h4>
<table>
<tr><th>High Density Areas</th><th>Low Density Areas</th></tr>
<tr><td>Western Province (Colombo, Gampaha)</td><td>Uva Province (Monaragala)</td></tr>
<tr><td>Fertile plains, good rainfall</td><td>Dry zone, limited water</td></tr>
<tr><td>Urban centers with jobs and services</td><td>Remote rural areas</td></tr>
<tr><td>Coastal areas with ports and trade</td><td>Mountainous regions</td></tr>
</table>

<h4>Population Composition</h4>
<ul>
<li><strong>Ethnic Groups:</strong> Sinhalese (74.9%), Sri Lankan Tamil (11.2%), Sri Lankan Moor (9.2%), Indian Tamil (4.2%), Other (0.5%)</li>
<li><strong>Religions:</strong> Buddhism (70.2%), Hinduism (12.6%), Islam (9.7%), Christianity (7.4%)</li>
<li><strong>Languages:</strong> Sinhala (official), Tamil (official), English (link language)</li>
<li><strong>Sex Ratio:</strong> Approximately 1:1 (male:female)</li>
<li><strong>Median Age:</strong> ~34 years</li>
</ul>

<h4>Settlements</h4>
<p><strong>Types of Settlements:</strong></p>
<ul>
<li><strong>Urban Settlements:</strong> Cities and towns with high population density, modern infrastructure</li>
<li><strong>Rural Settlements:</strong> Villages with lower density, agriculture-based economy</li>
<li><strong>Linear Settlements:</strong> Houses arranged along a road or river</li>
<li><strong>Nucleated Settlements:</strong> Clustered around a central point (market, temple)</li>
<li><strong>Dispersed Settlements:</strong> Scattered houses across a wide area</li>
</ul>

<h4>Urbanization Trends</h4>
<ul>
<li>Colombo is the largest city (~5.6 million in metro area)</li>
<li>Rapid urbanization due to rural-to-urban migration</li>
<li><strong>Push Factors:</strong> Lack of jobs, limited services, agricultural problems</li>
<li><strong>Pull Factors:</strong> Jobs, education, healthcare, entertainment</li>
<li><strong>Challenges:</strong> Housing shortages, traffic congestion, pollution, waste management</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>What is the population of Sri Lanka and its growth rate?</li>
<li>Why is Western Province more densely populated than Uva Province?</li>
<li>Explain three push factors and three pull factors for rural-to-urban migration</li>
</ol>
`,

    'economic-activities': `
<h3>Economic Activities</h3>
<h4>Types of Economic Activities</h4>
<p>Economic activities are divided into three main sectors:</p>
<table>
<tr><th>Sector</th><th>Description</th><th>Examples in Sri Lanka</th></tr>
<tr><td><strong>Primary</strong></td><td>Extraction of natural resources</td><td>Agriculture, fishing, mining, forestry</td></tr>
<tr><td><strong>Secondary</strong></td><td>Manufacturing and processing</td><td>Textiles, food processing, construction</td></tr>
<tr><td><strong>Tertiary</strong></td><td>Services</td><td>Tourism, banking, education, healthcare, transport</td></tr>
</table>

<h4>Agriculture in Sri Lanka</h4>
<p>Agriculture employs about 25% of the workforce and contributes ~8% to GDP.</p>
<ul>
<li><strong>Tea:</strong> Major export crop. Grown in central highlands (Nuwara Eliya, Kandy, Badulla). Sri Lanka is one of the world's largest tea exporters.</li>
<li><strong>Rubber:</strong> Grown in wet zone (Kalutara, Ratnapura, Kegalle). Used for tires, gloves.</li>
<li><strong>Coconut:</strong> Grown in coastal areas (Kurunegala, Puttalam, Colombo). Used for oil, copra.</li>
<li><strong>Paddy (Rice):</strong> Main food crop. Grown in dry zone (Anuradhapura, Polonnaruwa, Ampara).</li>
<li><strong>Spices:</strong> Cinnamon, pepper, cardamom, cloves. Sri Lanka is famous for spices.</li>
<li><strong>Fisheries:</strong> Coastal and offshore fishing. Major fishing ports in Negombo, Galle, Trincomalee.</li>
</ul>

<h4>Industry</h4>
<ul>
<li><strong>Textiles and Garments:</strong> Largest industrial sector and export earner. Major industrial zones in Katunayake, Biyagama, Koggala.</li>
<li><strong>Food Processing:</strong> Tea, coconut, fruit processing.</li>
<li><strong>Construction:</strong> Growing sector driven by infrastructure development.</li>
<li><strong>Gem Mining:</strong> Sapphires, rubies, moonstones from Ratnapura region.</li>
<li><strong>IT and BPO:</strong> Growing service sector in Colombo suburbs.</li>
</ul>

<h4>Tourism</h4>
<p>Tourism is a major foreign exchange earner for Sri Lanka.</p>
<ul>
<li>Historic sites: Anuradhapura, Polonnaruwa, Sigiriya, Kandy</li>
<li>Beaches: Bentota, Mirissa, Unawatuna, Arugam Bay</li>
<li>Wildlife: Yala National Park, Udawalawe, Wilpattu</li>
<li>Hill Country: Nuwara Eliya, Ella, Horton Plains</li>
<li>Adventure: Hiking, surfing, whale watching</li>
</ul>

<h4>Trade and Economy</h4>
<ul>
<li><strong>Exports:</strong> Tea, textiles, rubber, coconut products, spices, gems</li>
<li><strong>Imports:</strong> Petroleum, machinery, vehicles, electronics, food</li>
<li><strong>Main Trading Partners:</strong> USA, UK, India, China, EU countries</li>
<li><strong>Currency:</strong> Sri Lankan Rupee (LKR)</li>
<li><strong>GDP per capita:</strong> ~$3,800 (2023)</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Name the three sectors of economic activities with examples from Sri Lanka</li>
<li>Which is Sri Lanka's largest export crop and where is it grown?</li>
<li>Explain the importance of tourism to Sri Lanka's economy</li>
</ol>
`,

    'sri-lanka-regional-geography': `
<h3>Sri Lanka - Regional Geography</h3>
<h4>Geographical Location</h4>
<p>Sri Lanka is an island nation in the Indian Ocean, located between 5°55' N and 9°51' N latitude, and 79°42' E and 81°53' E longitude. It is separated from India by the Gulf of Mannar and Palk Strait.</p>

<h4>Physical Regions</h4>
<p>Sri Lanka can be divided into three main physical regions:</p>

<p><strong>1. The Central Highlands</strong></p>
<ul>
<li>Located in the south-central part of the country</li>
<li>Highest peaks: Pidurutalagala (2,524 m), Kirigalpotta (2,395 m), Adam's Peak (2,243 m)</li>
<li>Includes the Knuckles Mountain Range, Horton Plains</li>
<li>Cool climate, tea plantations, cloud forests</li>
<li>Important watershed for major rivers</li>
</ul>

<p><strong>2. The Coastal Plains</strong></p>
<ul>
<li>Surround the central highlands</li>
<li>Narrow in the west and south</li>
<li>Wider in the north and east</li>
<li>Includes major cities: Colombo, Galle, Jaffna, Trincomalee</li>
<li>Beaches, lagoons, mangrove swamps</li>
</ul>

<p><strong>3. The Dry Zone Plains</strong></p>
<ul>
<li>Northern and eastern parts of the country</li>
<li>Flat to gently undulating terrain</li>
<li>Ancient irrigation works (tanks/reservoirs)</li>
<li>Agriculture: paddy, coconut</li>
<li>National parks: Yala, Wilpattu, Bundala</li>
</ul>

<h4>River Systems</h4>
<p>Sri Lanka has over 100 rivers, all originating from the Central Highlands and flowing radially outward.</p>
<ul>
<li><strong>Mahaweli River (335 km):</strong> Longest river in Sri Lanka. Flows from the Central Highlands to the eastern coast at Trincomalee. Major hydroelectric and irrigation project.</li>
<li><strong>Kalu River (129 km):</strong> Flows from Adam's Peak to Kalutara in the west.</li>
<li><strong>Kelani River (145 km):</strong> Flows through Colombo into the Indian Ocean.</li>
<li><strong>Walawe River:</strong> Flows through the Southern Province to Hambantota.</li>
</ul>

<h4>Climate Regions</h4>
<p>Based on rainfall, Sri Lanka is divided into three main climatic zones:</p>
<ul>
<li><strong>Wet Zone:</strong> Southwestern region. >2,500 mm annual rainfall. Rainforests, rubber, tea.</li>
<li><strong>Dry Zone:</strong> Northern and Eastern regions. 1,250-1,750 mm rainfall. Paddy cultivation.</li>
<li><strong>Intermediate Zone:</strong> Transitional. 1,750-2,500 mm rainfall. Mixed agriculture.</li>
</ul>

<h4>Natural Resources</h4>
<ul>
<li><strong>Minerals:</strong> Gemstones (Ratnapura), graphite (Kahatagaha), limestone (Puttalam), mineral sands (Pulmoddai)</li>
<li><strong>Water:</strong> Rivers, reservoirs, groundwater</li>
<li><strong>Forests:</strong> ~30% land area, mainly in wet zone and central highlands</li>
<li><strong>Biodiversity:</strong> One of the most biodiverse countries in Asia. Endemic species of flora and fauna.</li>
</ul>

<h4>Environmental Issues</h4>
<ul>
<li><strong>Deforestation:</strong> Loss of forest cover due to agriculture, urbanization</li>
<li><strong>Pollution:</strong> Water pollution from industrial waste, air pollution in cities</li>
<li><strong>Coastal Erosion:</strong> Loss of beaches due to sand mining and development</li>
<li><strong>Climate Change:</strong> Rising sea levels, changing rainfall patterns</li>
<li><strong>Waste Management:</strong> Plastic pollution, improper waste disposal</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Name the three main physical regions of Sri Lanka</li>
<li>What is the longest river in Sri Lanka and where does it flow?</li>
<li>Describe two environmental issues facing Sri Lanka today</li>
</ol>
`
};

// O/L Content - History (add missing topics)
const OL_HISTORY = {
    'ancient-sri-lanka': `
<h3>Ancient Sri Lanka - Anuradhapura Period</h3>
[Existing content remains - see above]
`,

    'polonnaruwa-medieval': `
<h3>Polonnaruwa & Medieval Period</h3>
[Existing content remains - see above]
`,

    'colonial-period': `
<h3>Colonial Period in Sri Lanka</h3>
[Existing content remains - see above]
`,

    'independence-modern': `
<h3>Independence & Modern Sri Lanka</h3>
[Existing content remains - see above]
`,

    'ancient-civilizations': `
<h3>Ancient Civilizations of the World</h3>
<h4>What is a Civilization?</h4>
<p>A civilization is a complex society characterized by urban development, social stratification, government, writing, and advanced culture.</p>

<h4>Major Ancient Civilizations</h4>

<p><strong>1. Mesopotamian Civilization (3500-539 BC)</strong></p>
<ul>
<li>Located between Tigris and Euphrates rivers (modern Iraq)</li>
<li><strong>Sumerians:</strong> First to develop writing (cuneiform), wheel, mathematics (base-60 system)</li>
<li><strong>Babylonians:</strong> Code of Hammurabi (one of the first written law codes)</li>
<li><strong>Assyrians:</strong> Powerful military empire</li>
<li>Epic of Gilgamesh - one of the earliest works of literature</li>
</ul>

<p><strong>2. Ancient Egyptian Civilization (3100-332 BC)</strong></p>
<ul>
<li>Developed along the Nile River</li>
<li>Pharaohs ruled as divine kings</li>
<li>Built pyramids at Giza as tombs for pharaohs</li>
<li>Developed hieroglyphic writing system</li>
<li>Advanced knowledge of mathematics, astronomy, medicine</li>
<li>Practiced mummification of the dead</li>
</ul>

<p><strong>3. Indus Valley Civilization (2600-1900 BC)</strong></p>
<ul>
<li>Located in modern Pakistan and northwest India</li>
<li>Major cities: Harappa and Mohenjo-Daro</li>
<li>Advanced city planning with grid layouts and drainage systems</li>
<li>Had standardized weights and measures</li>
<li>Writing system still not deciphered</li>
<li>Declined mysteriously around 1900 BC</li>
</ul>

<p><strong>4. Chinese Civilization (1600 BC onwards)</strong></p>
<ul>
<li>Emerged along the Yellow River (Huang He)</li>
<li>Shang dynasty - earliest recorded Chinese dynasty</li>
<li>Developed bronze technology and oracle bone writing</li>
<li>Zhou dynasty introduced the concept of "Mandate of Heaven"</li>
<li>Contributions: paper, gunpowder, compass, printing</li>
</ul>

<p><strong>5. Greek Civilization (800-146 BC)</strong></p>
<ul>
<li>City-states like Athens and Sparta</li>
<li>Birthplace of democracy (Athens)</li>
<li>Great philosophers: Socrates, Plato, Aristotle</li>
<li>Olympic Games began in 776 BC</li>
<li>Alexander the Great spread Greek culture</li>
</ul>

<p><strong>6. Roman Civilization (753 BC - 476 AD)</strong></p>
<ul>
<li>From a small city-state to a vast empire</li>
<li>Roman Republic followed by Roman Empire</li>
<li>Roman law, engineering (roads, aqueducts, concrete)</li>
<li>Latin language influenced many modern languages</li>
<li>Christianity spread throughout the empire</li>
<li>Fall of Western Roman Empire in 476 AD</li>
</ul>

<h4>Contributions of Ancient Civilizations</h4>
<table>
<tr><th>Civilization</th><th>Contribution</th></tr>
<tr><td>Mesopotamia</td><td>Writing, wheel, law codes, mathematics</td></tr>
<tr><td>Egypt</td><td>Pyramids, calendar, medicine, mummification</td></tr>
<tr><td>Indus Valley</td><td>Urban planning, drainage, trade systems</td></tr>
<tr><td>China</td><td>Paper, silk, gunpowder, compass, printing</td></tr>
<tr><td>Greece</td><td>Democracy, philosophy, theater, Olympics</td></tr>
<tr><td>Rome</td><td>Law, engineering, Latin language, republic</td></tr>
</table>

<h4>Practice Questions</h4>
<ol>
<li>Which civilization developed the first writing system?</li>
<li>Name the contributions of Ancient Greece to modern society</li>
<li>Compare the Indus Valley and Mesopotamian civilizations</li>
</ol>
`,

    'world-wars': `
<h3>World Wars</h3>
<h4>World War I (1914-1918)</h4>
<p>World War I was a global conflict centered in Europe that involved many of the world's great powers.</p>

<h4>Causes of WWI (MAIN)</h4>
<ul>
<li><strong>Militarism:</strong> Arms race between European powers</li>
<li><strong>Alliances:</strong> Triple Entente (Britain, France, Russia) vs Triple Alliance (Germany, Austria-Hungary, Italy)</li>
<li><strong>Imperialism:</strong> Competition for colonies and resources</li>
<li><strong>Nationalism:</strong> Strong patriotic feelings and ethnic tensions</li>
<li><strong>Immediate Cause:</strong> Assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo (June 28, 1914)</li>
</ul>

<h4>Key Events of WWI</h4>
<ul>
<li><strong>Trench Warfare:</strong> Soldiers fought from trenches on the Western Front. Horrible conditions with disease, rats, mud.</li>
<li><strong>Battle of the Somme (1916):</strong> Over 1 million casualties, one of the bloodiest battles</li>
<li><strong>Use of New Weapons:</strong> Machine guns, poison gas, tanks, submarines, aircraft</li>
<li><strong>1917:</strong> USA enters the war; Russian Revolution leads to Russia's withdrawal</li>
<li><strong>1918:</strong> Armistice signed on November 11 - war ends</li>
</ul>

<h4>Effects of WWI</h4>
<ul>
<li>Over 16 million deaths and 20 million wounded</li>
<li>Collapse of empires: German, Austro-Hungarian, Ottoman, Russian</li>
<li>Treaty of Versailles (1919) - imposed heavy penalties on Germany</li>
<li>League of Nations formed (predecessor to UN)</li>
<li>Led to economic problems in Germany, contributing to WWII</li>
<li>Sri Lanka (as a British colony) contributed soldiers and resources</li>
</ul>

<h4>World War II (1939-1945)</h4>
<p>World War II was the deadliest conflict in human history, involving most nations of the world.</p>

<h4>Causes of WWII</h4>
<ul>
<li>Treaty of Versailles (harsh treatment of Germany)</li>
<li>Rise of dictators: Hitler (Germany), Mussolini (Italy), Tojo (Japan)</li>
<li>German expansion: Annexation of Austria, Czechoslovakia</li>
<li>Japanese expansion in Asia and the Pacific</li>
<li>Failure of the League of Nations</li>
</ul>

<h4>Key Events of WWII</h4>
<ul>
<li><strong>1939:</strong> Germany invades Poland - Britain and France declare war</li>
<li><strong>1940:</strong> Fall of France; Battle of Britain</li>
<li><strong>1941:</strong> Germany invades USSR (Operation Barbarossa); Japan attacks Pearl Harbor (USA enters war)</li>
<li><strong>1944:</strong> D-Day (Allied invasion of Normandy)</li>
<li><strong>1945:</strong> Germany surrenders (May); Atomic bombs dropped on Hiroshima and Nagasaki (August); Japan surrenders - war ends</li>
</ul>

<h4>Key Features of WWII</h4>
<ul>
<li><strong>Total War:</strong> Entire populations mobilized for war effort</li>
<li><strong>Holocaust:</strong> Systematic genocide of 6 million Jews by Nazi Germany</li>
<li><strong>Atomic Bomb:</strong> First and only use of nuclear weapons in war</li>
<li><strong>New Technology:</strong> Radar, jets, rockets (V-2), code-breaking (Enigma)</li>
<li><strong>Women in War:</strong> Women worked in factories, served as nurses, pilots</li>
<li><strong>Sri Lanka's Role:</strong> Ceylon was a British base for operations in Southeast Asia. Colombo and Trincomalee were important naval bases.</li>
</ul>

<h4>Effects of WWII</h4>
<ul>
<li>Over 70 million deaths (mostly civilians)</li>
<li>United Nations formed (1945) to prevent future wars</li>
<li>Cold War between USA and USSR began</li>
<li>Decolonization of Asia and Africa accelerated</li>
<li>Nuremberg Trials prosecuted Nazi war criminals</li>
</ul>

<h4>Comparison of WWI and WWII</h4>
<table>
<tr><th>Feature</th><th>WWI</th><th>WWII</th></tr>
<tr><td>Duration</td><td>1914-1918 (4 years)</td><td>1939-1945 (6 years)</td></tr>
<tr><td>Deaths</td><td>~16 million</td><td>~70 million</td></tr>
<tr><td>Main Weapons</td><td>Trench warfare, machine guns, gas</td><td>Tanks, aircraft, atomic bombs</td></tr>
<tr><td>End Result</td><td>Treaty of Versailles</td><td>UN formed, Cold War begins</td></tr>
</table>

<h4>Practice Questions</h4>
<ol>
<li>What were the main causes of World War I?</li>
<li>How did World War II affect Sri Lanka?</li>
<li>Explain the importance of the United Nations formed after WWII</li>
</ol>
`,

    'united-nations-global': `
<h3>United Nations & Global Organizations</h3>
<h4>The United Nations (UN)</h4>
<p>The United Nations was founded in <strong>1945</strong> after World War II to maintain international peace and security, develop friendly relations among nations, and promote social progress and human rights.</p>

<h4>Main Organs of the UN</h4>
<ol>
<li><strong>General Assembly:</strong> All 193 member states meet annually. Each country has one vote. Discusses international issues.</li>
<li><strong>Security Council:</strong> Responsible for international peace and security. Has 15 members (5 permanent with veto power: USA, UK, France, Russia, China; 10 non-permanent elected for 2-year terms).</li>
<li><strong>Secretariat:</strong> Administrative body headed by the Secretary-General. Current: António Guterres.</li>
<li><strong>International Court of Justice (ICJ):</strong> Settles legal disputes between countries.</li>
<li><strong>Economic and Social Council (ECOSOC):</strong> Coordinates economic and social work.</li>
<li><strong>Trusteeship Council:</strong> Suspended operations - no remaining trust territories.</li>
</ul>

<h4>UN Specialized Agencies</h4>
<table>
<tr><th>Agency</th><th>Full Name</th><th>Purpose</th></tr>
<tr><td>UNESCO</td><td>UN Educational, Scientific and Cultural Organization</td><td>Education, culture, science, heritage protection</td></tr>
<tr><td>WHO</td><td>World Health Organization</td><td>Global health, disease control</td></tr>
<tr><td>UNICEF</td><td>UN Children's Fund</td><td>Children's rights, education, health</td></tr>
<tr><td>UNDP</td><td>UN Development Programme</td><td>Development assistance, poverty reduction</td></tr>
<tr><td>FAO</td><td>Food and Agriculture Organization</td><td>Food security, agriculture development</td></tr>
<tr><td>ILO</td><td>International Labour Organization</td><td>Labor rights, workplace standards</td></tr>
<tr><td>IMF</td><td>International Monetary Fund</td><td>Financial stability, economic cooperation</td></tr>
<tr><td>World Bank</td><td>International Bank for Reconstruction and Development</td><td>Development loans and aid</td></tr>
</table>

<h4>Sri Lanka and the UN</h4>
<ul>
<li>Sri Lanka joined the UN in <strong>1955</strong></li>
<li>Active in peacekeeping missions</li>
<li>Hosts UN regional offices in Colombo</li>
<li>Played a role in the Non-Aligned Movement (NAM)</li>
</ul>

<h4>Other Important Global Organizations</h4>

<p><strong>Commonwealth of Nations</strong></p>
<ul>
<li>Voluntary association of 56 countries, mostly former British colonies</li>
<li>Promotes democracy, human rights, development</li>
<li>Heads of Government Meetings (CHOGM)</li>
<li>Sri Lanka has been a member since 1948</li>
<li>Britain hosted Queen Elizabeth II as head until her death, now King Charles III</li>
</ul>

<p><strong>Non-Aligned Movement (NAM)</strong></p>
<ul>
<li>Founded in 1961 by countries not aligned with major power blocs (Cold War)</li>
<li>120 member countries</li>
<li>Founding leaders: Jawaharlal Nehru (India), Gamal Abdel Nasser (Egypt), Josip Broz Tito (Yugoslavia), Kwame Nkrumah (Ghana), Sukarno (Indonesia)</li>
<li>Sri Lanka was a founding member and hosted summits</li>
</ul>

<p><strong>South Asian Association for Regional Cooperation (SAARC)</strong></p>
<ul>
<li>Founded in 1985</li>
<li>Members: Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, Sri Lanka</li>
<li>Promotes regional cooperation in economic, social, cultural fields</li>
<li>Secretariat in Kathmandu, Nepal</li>
</ul>

<p><strong>World Trade Organization (WTO)</strong></p>
<ul>
<li>Regulates international trade between nations</li>
<li>Founded in 1995 (replaced GATT)</li>
<li>164 member countries</li>
<li>Settles trade disputes between countries</li>
</ul>

<h4>Human Rights</h4>
<ul>
<li><strong>Universal Declaration of Human Rights (1948):</strong> 30 articles outlining fundamental human rights</li>
<li>Right to life, liberty, and security</li>
<li>Right to education, work, health</li>
<li>Freedom of speech, religion, assembly</li>
<li>Freedom from torture, slavery, discrimination</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>When was the United Nations founded and why?</li>
<li>Name three specialized agencies of the UN and their functions</li>
<li>What is the Non-Aligned Movement and what was Sri Lanka's role?</li>
</ol>
`
};

// O/L Content - Religion
const OL_RELIGION = {
    'life-of-the-buddha': `
<h3>Life of the Buddha</h3>
<h4>Birth</h4>
<p>Prince Siddhartha Gautama was born in <strong>Lumbini</strong> (modern-day Nepal) in 563 BC. His father was King Suddhodana of the Sakya clan, and his mother was Queen Maya.</p>
<p>According to legend, Queen Maya dreamed of a white elephant entering her womb, which was interpreted as a sign of a great birth. Seven days after his birth, Queen Maya passed away, and Siddhartha was raised by his aunt, Mahapajapati Gotami.</p>

<h4>The Four Sights</h4>
<p>King Suddhodana shielded Prince Siddhartha from the suffering of the world. However, during four journeys outside the palace, he saw:</p>
<ol>
<li><strong>An old man:</strong> Realizing that aging is inevitable</li>
<li><strong>A sick person:</strong> Realizing that sickness is unavoidable</li>
<li><strong>A dead body:</strong> Realizing that death comes to all</li>
<li><strong>A wandering ascetic:</strong> Inspired to seek spiritual truth</li>
</ol>

<h4>The Great Renunciation</h4>
<p>At the age of 29, Prince Siddhartha left his palace, his wife Yasodhara, and his son Rahula to become an ascetic seeking enlightenment. This is known as the <strong>Great Renunciation</strong>.</p>

<h4>The Middle Way</h4>
<p>After six years of extreme ascetic practices, Siddhartha realized that neither indulgence nor severe asceticism leads to enlightenment. He discovered the <strong>Middle Way</strong> - a path of moderation.</p>

<h4>Enlightenment</h4>
<p>While meditating under a <strong>Bodhi tree</strong> in Bodh Gaya (India), Siddhartha attained enlightenment at the age of 35. He became the <strong>Buddha</strong> (the Awakened One).</p>

<h4>The First Sermon</h4>
<p>The Buddha gave his first sermon at <strong>Sarnath</strong> (Deer Park) to five ascetics. This sermon contained the <strong>Four Noble Truths</strong> and the <strong>Eightfold Path</strong>.</p>

<h4>Parinibbana</h4>
<p>The Buddha passed away at the age of 80 at <strong>Kusinara</strong> (modern Kushinagar, India). His final words were: "<em>All conditioned things are impermanent. Strive on with diligence.</em>"</p>

<h4>Practice Questions</h4>
<ol>
<li>Where was Prince Siddhartha born?</li>
<li>What were the Four Sights that led to his renunciation?</li>
<li>What is the Middle Way?</li>
</ol>
`,

    'dhamma-core-teachings': `
<h3>Dhamma - Core Teachings</h3>
<h4>The Four Noble Truths</h4>
<p>The Four Noble Truths form the foundation of Buddhist philosophy.</p>

<ol>
<li><strong>Dukkha (Suffering):</strong> Life involves suffering, dissatisfaction, and impermanence. Birth, aging, sickness, death, separation from loved ones, and not getting what we want are all forms of suffering.</li>

<li><strong>Samudaya (Origin of Suffering):</strong> Suffering arises from craving (tanha), attachment, and ignorance. The three roots of suffering are greed (lobha), hatred (dosa), and delusion (moha).</li>

<li><strong>Nirodha (Cessation of Suffering):</strong> It is possible to end suffering by overcoming craving and attachment. This state is called <strong>Nibbana</strong> (Nirvana).</li>

<li><strong>Magga (Path to End Suffering):</strong> The Eightfold Path is the way to achieve the cessation of suffering.</li>
</ol>

<h4>The Noble Eightfold Path</h4>
<p>Divided into three categories: Wisdom (Panna), Ethical Conduct (Sila), and Mental Discipline (Samadhi).</p>

<p><strong>Wisdom (Panna)</strong></p>
<ol>
<li><strong>Right Understanding:</strong> Understanding the Four Noble Truths and the nature of reality</li>
<li><strong>Right Intention:</strong> Cultivating thoughts of renunciation, goodwill, and harmlessness</li>
</ol>

<p><strong>Ethical Conduct (Sila)</strong></p>
<ol start="3">
<li><strong>Right Speech:</strong> Not lying, not gossiping, not using harsh words, not engaging in idle talk</li>
<li><strong>Right Action:</strong> Not killing, not stealing, not engaging in sexual misconduct</li>
<li><strong>Right Livelihood:</strong> Earning a living in an ethical way that does not harm others</li>
</ol>

<p><strong>Mental Discipline (Samadhi)</strong></p>
<ol start="6">
<li><strong>Right Effort:</strong> Cultivating wholesome states and avoiding unwholesome ones</li>
<li><strong>Right Mindfulness:</strong> Being aware of body, feelings, mind, and phenomena</li>
<li><strong>Right Concentration:</strong> Developing deep meditation (jhana) leading to peace and wisdom</li>
</ol>

<h4>The Five Precepts (Pancha Sila)</h4>
<ol>
<li>I undertake to abstain from taking life</li>
<li>I undertake to abstain from taking what is not given</li>
<li>I undertake to abstain from sexual misconduct</li>
<li>I undertake to abstain from false speech</li>
<li>I undertake to abstain from intoxicating drinks and drugs</li>
</ol>

<h4>Kamma and Rebirth</h4>
<p><strong>Kamma (Karma):</strong> Intentional actions have consequences. Good actions lead to positive results; bad actions lead to negative results. This is not fate but a law of cause and effect.</p>
<p><strong>Rebirth:</strong> According to Buddhism, beings are reborn in various realms based on their kamma. The cycle of birth and rebirth (samsara) continues until enlightenment is attained.</p>

<h4>Three Characteristics of Existence</h4>
<ul>
<li><strong>Anicca (Impermanence):</strong> All things are constantly changing</li>
<li><strong>Dukkha (Suffering):</strong> Everything conditioned is unsatisfactory</li>
<li><strong>Anatta (No-self):</strong> There is no permanent, unchanging self or soul</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>What are the Four Noble Truths?</li>
<li>Name the three parts of the Noble Eightfold Path</li>
<li>What are the Five Precepts?</li>
</ol>
`,

    'buddhist-ethics-meditation': `
<h3>Buddhist Ethics & Meditation</h3>
<h4>Buddhist Ethics</h4>
<p>Buddhist ethics are based on the principle of <strong>non-harm (ahimsa)</strong> and compassion for all living beings.</p>

<h4>Brahma Vihara (Four Sublime States)</h4>
<ol>
<li><strong>Metta (Loving-kindness):</strong> Unconditional goodwill toward all beings. "May all beings be happy and safe."</li>
<li><strong>Karuna (Compassion):</strong> The wish for others to be free from suffering. Active sympathy for those in pain.</li>
<li><strong>Mudita (Sympathetic Joy):</strong> Rejoicing in the happiness and success of others. Opposite of jealousy.</li>
<li><strong>Upekkha (Equanimity):</strong> Maintaining balance and calm in all situations. Not attached to outcomes.</li>
</ol>

<h4>The Six Perfections (Paramitas)</h4>
<ol>
<li>Generosity (Dana)</li>
<li>Ethical Conduct (Sila)</li>
<li>Patience (Khanti)</li>
<li>Effort (Viriya)</li>
<li>Meditation (Jhana)</li>
<li>Wisdom (Panna)</li>
</ol>

<h4>Meditation (Bhavana)</h4>
<p>Meditation is the practice of training the mind to develop concentration, clarity, and insight.</p>

<p><strong>Samatha Meditation (Calm Abiding)</strong></p>
<ul>
<li>Focuses on a single object (breath, a candle, a Buddha image)</li>
<li>Develops deep concentration (jhana)</li>
<li>Calms the mind and reduces stress</li>
<li>Leads to mental peace and tranquility</li>
</ul>

<p><strong>Vipassana Meditation (Insight Meditation)</strong></p>
<ul>
<li>Observes the true nature of reality</li>
<li>Watches thoughts, feelings, and sensations without attachment</li>
<li>Develops insight into impermanence, suffering, and no-self</li>
<li>Leads to enlightenment and liberation</li>
</ul>

<h4>Buddhist Festivals</h4>
<ul>
<li><strong>Vesak:</strong> Most important Buddhist festival. Celebrates the birth, enlightenment, and passing away of the Buddha. Falls on the full moon day of May.</li>
<li><strong>Poson:</strong> Commemorates the introduction of Buddhism to Sri Lanka by Mahinda Thero (full moon of June)</li>
<li><strong>Kathina:</strong> Offering of robes to monks at the end of the rainy season retreat (October/November)</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>What are the four Brahma Vihara states?</li>
<li>Explain the difference between Samatha and Vipassana meditation</li>
<li>What is the significance of Vesak for Buddhists?</li>
</ol>
`,

    'hindu-deities-philosophy': `
<h3>Hindu Deities & Philosophy</h3>
<h4>Introduction to Hinduism</h4>
<p>Hinduism is one of the world's oldest religions, dating back over 4,000 years. It originated in the Indian subcontinent and has about 1.2 billion followers worldwide.</p>

<h4>The Trimurti (Three Main Deities)</h4>
<ul>
<li><strong>Brahma (The Creator):</strong> Creates the universe and all beings. Usually depicted with four heads representing the four Vedas.</li>
<li><strong>Vishnu (The Preserver):</strong> Maintains the order of the universe. Has incarnated nine times (avatars include Rama and Krishna).</li>
<li><strong>Shiva (The Destroyer):</strong> Destroys the universe to enable recreation. Also known as the lord of yoga and meditation.</li>
</ul>

<h4>Other Important Deities</h4>
<ul>
<li><strong>Goddess Saraswati:</strong> Goddess of knowledge, music, arts, and learning</li>
<li><strong>Goddess Lakshmi:</strong> Goddess of wealth, fortune, and prosperity</li>
<li><strong>Goddess Parvati:</strong> Consort of Shiva, goddess of power and devotion</li>
<li><strong>Lord Ganesha:</strong> Elephant-headed god, remover of obstacles</li>
<li><strong>Lord Murugan (Skanda):</strong> God of war, particularly worshipped in Sri Lanka and South India</li>
<li><strong>Lord Rama:</strong> Hero of the Ramayana, ideal king and husband</li>
<li><strong>Lord Krishna:</strong> Divine teacher, delivered the Bhagavad Gita</li>
</ul>

<h4>Sacred Texts</h4>
<ul>
<li><strong>The Vedas:</strong> Oldest sacred texts (Rigveda, Yajurveda, Samaveda, Atharvaveda)</li>
<li><strong>The Upanishads:</strong> Philosophical texts exploring the nature of reality</li>
<li><strong>The Ramayana:</strong> Epic story of Prince Rama's journey to rescue Sita</li>
<li><strong>The Mahabharata:</strong> Epic tale of the Kurukshetra war, includes the Bhagavad Gita</li>
<li><strong>The Bhagavad Gita:</strong> Krishna's teachings to Arjuna about duty, devotion, and liberation</li>
</ul>

<h4>Core Concepts</h4>
<ul>
<li><strong>Dharma:</strong> Righteous duty, moral law, and ethical conduct</li>
<li><strong>Karma:</strong> Actions and their consequences. Good actions bring good results.</li>
<li><strong>Samsara:</strong> The cycle of birth, death, and rebirth</li>
<li><strong>Moksha:</strong> Liberation from the cycle of rebirth. The ultimate goal.</li>
<li><strong>Atman:</strong> The individual soul or self</li>
<li><strong>Brahman:</strong> The ultimate reality, the universal soul</li>
</ul>

<h4>Hindu Festivals</h4>
<ul>
<li><strong>Thai Pongal:</strong> Harvest festival celebrated in January. Thanks to the sun god for a bountiful harvest.</li>
<li><strong>Deepavali (Diwali):</strong> Festival of lights. Celebrates the triumph of light over darkness, good over evil.</li>
<li><strong>Shivarathri:</strong> Night of Shiva. Devotees fast and stay awake in prayer.</li>
<li><strong>Navaratri:</strong> Nine nights dedicated to the goddess Durga.</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Who are the three main deities of the Hindu Trimurti?</li>
<li>What is the concept of Dharma in Hinduism?</li>
<li>Name three important Hindu festivals</li>
</ol>
`,

    'hindu-ethics-practices': `
<h3>Hindu Ethics & Practices</h3>
<h4>Yoga</h4>
<p>Yoga is a spiritual practice that originated in ancient India. It means "union" - the union of individual consciousness with universal consciousness.</p>

<h4>Four Paths of Yoga</h4>
<ul>
<li><strong>Bhakti Yoga:</strong> The path of devotion and love for God. Involves prayer, chanting, and worship.</li>
<li><strong>Jnana Yoga:</strong> The path of knowledge and wisdom. Involves study of scriptures and self-inquiry.</li>
<li><strong>Karma Yoga:</strong> The path of selfless action. Performing duties without attachment to results.</li>
<li><strong>Raja Yoga:</strong> The path of meditation and mental discipline. Includes the Eight Limbs of Yoga (by Patanjali).</li>
</ul>

<h4>Puja (Worship)</h4>
<p>Puja is the act of worship in Hinduism. It can be performed at home or in temples.</p>
<ul>
<li><strong>Temple Puja:</strong> Conducted by priests with offerings of flowers, fruits, lamps, and incense</li>
<li><strong>Home Puja:</strong> Family worship at the household shrine</li>
<li><strong>Offerings:</strong> Flowers (pushpa), light (deepa), incense (dhupa), food (naivedya), water</li>
</ul>

<h4>Life Cycle Rituals (Samskaras)</h4>
<ul>
<li><strong>Namakarana:</strong> Naming ceremony for a newborn</li>
<li><strong>Upanayana:</strong> Sacred thread ceremony, initiation into Vedic study</li>
<li><strong>Vivaha:</strong> Marriage ceremony - sacred bond between husband and wife</li>
<li><strong>Antyesti:</strong> Funeral rites - cremation and release of the soul</li>
</ul>

<h4>Hindu Ethical Principles</h4>
<ul>
<li><strong>Ahimsa:</strong> Non-violence toward all living beings</li>
<li><strong>Satya:</strong> Truthfulness in thought, word, and deed</li>
<li><strong>Asteya:</strong> Non-stealing</li>
<li><strong>Brahmacharya:</strong> Self-control and moderation</li>
<li><strong>Aparigraha:</strong> Non-possessiveness, freedom from greed</li>
<li><strong>Shaucha:</strong> Purity of body and mind</li>
<li><strong>Santosha:</strong> Contentment and gratitude</li>
<li><strong>Daya:</strong> Compassion and kindness to all beings</li>
</ul>

<h4>Hinduism in Sri Lanka</h4>
<ul>
<li>Hinduism is the second largest religion in Sri Lanka (~12.6% of population)</li>
<li>Primarily practiced by Sri Lankan Tamils and Indian Tamils</li>
<li>Important temples: Nallur Kandaswamy Kovil (Jaffna), Maviddapuram Temple, Kathiresan Kovil (Trincomalee)</li>
<li>Koneswaram Temple in Trincomalee is one of the ancient Pancha Ishwarams</li>
<li>Kataragama Temple is a multi-religious pilgrimage site</li>
</ul>

<h4>Practice Questions</h4>
<ol>
<li>Name the four paths of Yoga</li>
<li>What are the main life cycle rituals (samskaras) in Hinduism?</li>
<li>Why is Nallur Kandaswamy Kovil important in Sri Lankan Hinduism?</li>
</ol>
`,

    'islam-christianity-core': `
<h3>Islam & Christianity - Core Beliefs</h3>
<h4>Islam - Core Beliefs</h4>
<p>Islam is a monotheistic religion founded in the 7th century in Arabia. Followers are called <strong>Muslims</strong>. The word "Islam" means "submission to the will of God (Allah)."</p>

<h4>The Five Pillars of Islam</h4>
<ol>
<li><strong>Shahada (Faith):</strong> The declaration of faith: "There is no god but Allah, and Muhammad is the Messenger of Allah."</li>
<li><strong>Salah (Prayer):</strong> Five daily prayers at dawn, noon, afternoon, sunset, and night. Prayers are performed facing Mecca.</li>
<li><strong>Zakat (Charity):</strong> Giving 2.5% of one's savings to the poor and needy. A form of wealth purification.</li>
<li><strong>Sawm (Fasting):</strong> Fasting from dawn to sunset during the month of Ramadan. Teaches self-discipline and empathy for the hungry.</li>
<li><strong>Hajj (Pilgrimage):</strong> Pilgrimage to Mecca (Makkah) at least once in a lifetime if physically and financially able.</li>
</ol>

<h4>Islamic Beliefs</h4>
<ul>
<li><strong>Belief in One God (Tawheed):</strong> Allah is the one and only God</li>
<li><strong>Belief in Angels:</strong> Gabriel (Jibril), Michael (Mikail), among others</li>
<li><strong>Belief in Holy Books:</strong> Quran (final revelation), Torah, Psalms, Gospel</li>
<li><strong>Belief in Prophets:</strong> Adam, Noah, Abraham, Moses, Jesus, Muhammad (final prophet)</li>
<li><strong>Belief in Day of Judgment:</strong> Resurrection, judgment, heaven (Jannah) and hell (Jahannam)</li>
<li><strong>Belief in Divine Decree (Qadr):</strong> God's predestination</li>
</ul>

<h4>The Quran</h4>
<p>The Quran is the holy book of Islam, believed to be the literal word of God revealed to Prophet Muhammad through the Angel Gabriel over 23 years. It contains 114 chapters (surahs).</p>

<h4>Islamic Festivals</h4>
<ul>
<li><strong>Eid al-Fitr:</strong> Celebration at the end of Ramadan. Prayers, feasts, gift-giving.</li>
<li><strong>Eid al-Adha:</strong> Festival of sacrifice. Commemorates Abraham's willingness to sacrifice his son.</li>
<li><strong>Mawlid al-Nabi:</strong> Birthday of Prophet Muhammad</li>
</ul>

<h4>Christianity - Core Beliefs</h4>
<p>Christianity is a monotheistic religion based on the life and teachings of <strong>Jesus Christ</strong>. It is the world's largest religion with over 2 billion followers.</p>

<h4>Core Christian Beliefs</h4>
<ul>
<li><strong>One God in Trinity:</strong> Father, Son (Jesus Christ), and Holy Spirit - three persons in one God</li>
<li><strong>Jesus Christ:</strong> Son of God, born to Virgin Mary, lived, died by crucifixion, and rose from the dead</li>
<li><strong>Salvation:</strong> Through faith in Jesus Christ, believers receive forgiveness of sins and eternal life</li>
<li><strong>The Bible:</strong> Holy scripture consisting of the Old Testament and New Testament</li>
<li><strong>Sacraments:</strong> Baptism and Holy Communion (Eucharist) are the main sacraments</li>
<li><strong>Resurrection:</strong> Jesus rose from the dead on the third day (Easter)</li>
<li><strong>Second Coming:</strong> Jesus will return to judge the living and the dead</li>
</ul>

<h4>The Bible</h4>
<ul>
<li><strong>Old Testament:</strong> 39 books. Contains the Hebrew scriptures, history, prophecies, poetry.</li>
<li><strong>New Testament:</strong> 27 books. Gospels (Matthew, Mark, Luke, John), Acts of the Apostles, Epistles (letters), Revelation.</li>
</ul>

<h4>Major Christian Denominations</h4>
<ul>
<li><strong>Roman Catholicism:</strong> Led by the Pope in Vatican City. Emphasizes tradition and sacraments.</li>
<li><strong>Protestantism:</strong> Emerged from the Reformation (16th century). Emphasizes faith and scripture. Includes Anglican, Methodist, Baptist, Pentecostal, and others.</li>
<li><strong>Orthodox Christianity:</strong> Eastern Orthodox tradition. Common in Eastern Europe and Middle East.</li>
</ul>

<h4>Christian Festivals</h4>
<ul>
<li><strong>Christmas (December 25):</strong> Celebration of the birth of Jesus</li>
<li><strong>Easter (March/April):</strong> Celebration of Jesus' resurrection from the dead</li>
<li><strong>Good Friday:</strong> Commemorates the crucifixion of Jesus</li>
<li><strong>Pentecost:</strong> Descent of the Holy Spirit upon the apostles</li>
</ul>

<h4>Religion in Sri Lanka</h4>
<table>
<tr><th>Religion</th><th>Percentage</th><th>Main Regions</th></tr>
<tr><td>Buddhism</td><td>70.2%</td><td>Throughout the country, especially South, Central, West</td></tr>
<tr><td>Hinduism</td><td>12.6%</td><td>Northern and Eastern provinces</td></tr>
<tr><td>Islam</td><td>9.7%</td><td>Eastern province, Colombo, Kandy</td></tr>
<tr><td>Christianity</td><td>7.4%</td><td>Western coast, Colombo, North</td></tr>
</table>

<h4>Practice Questions</h4>
<ol>
<li>What are the Five Pillars of Islam?</li>
<li>Explain the Christian concept of the Trinity</li>
<li>What is the demographic breakdown of religions in Sri Lanka?</li>
</ol>
`
};

// Export all for merging
const OL_CONTENT = {
    mathematics: OL_MATHEMATICS,
    science: OL_SCIENCE,
    history: OL_HISTORY,
    geography: OL_GEOGRAPHY,
    english: OL_ENGLISH,
    religion: OL_RELIGION
};
