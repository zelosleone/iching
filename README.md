# I Ching Oracle

A sophisticated implementation of the I Ching (Book of Changes) divination system, combining ancient wisdom with modern cryptographic-grade randomness. This web application employs true quantum atmospheric noise from Random.org to generate authentic hexagrams, ensuring cryptographically secure and genuinely random divination results.

## Features

- **Cryptographic-Grade Randomness**: Utilizes Random.org's atmospheric noise measurements for true random number generation, superior to pseudo-random algorithms
- **Binary-Decimal Transformation**: Elegant mathematical conversion between binary hexagram representations and their numerical equivalents (6:7:8:9 methodology)
- **Deterministic State Transitions**: Sophisticated state machine handling hexagram transformations through changing lines
- **Advanced Line Mutation Algorithm**: Mathematical mapping of 6/7/8/9 to Yin/Yang states with built-in transformation logic
- **Real-Time Binary Key Generation**: Dynamic conversion of hexagram states to binary keys for instant lookup and transformation
- **Responsive Vector Graphics**: Pure CSS-based vector line rendering for crisp display at any resolution
- **Asynchronous API Integration**: Non-blocking architecture for seamless Random.org API interactions
- **State-Preserving Transformations**: Intelligent handling of hexagram mutations while maintaining mathematical validity

## Technical Implementation

### Mathematics of Hexagram Generation

The application employs a sophisticated mathematical approach to hexagram generation:

1. **Random Number Generation**: 
   - Range: [6,9] for changing/unchanging states
   - Probability distribution: Uniform over discrete integers
   - Source: Atmospheric noise measurements

2. **Binary State Mapping**:
   ```
   6 -> Changing Yin  (0 -> 1)
   7 -> Static Yang   (1)
   8 -> Static Yin    (0)
   9 -> Changing Yang (1 -> 0)
   ```

3. **Transformation Matrix**:
   - Original state: [a₁, a₂, a₃, a₄, a₅, a₆] where aᵢ ∈ {6,7,8,9}
   - Binary mapping: ℱ: {6,7,8,9} → {0,1}
   - Transformation: T(aᵢ) → bᵢ where bᵢ represents the final state

## Technology Stack

- HTML5 with semantic structure
- CSS3 with custom properties and mathematical transforms
- Vanilla JavaScript leveraging modern ES6+ features
- RESTful integration with Random.org's API
- Asynchronous architecture with Promise-based flow control
- Vector-based line rendering system

## Getting Started

### Prerequisites

No special prerequisites are required. You only need a modern web browser to run this application.

## Usage

1. Enter your question in the provided text area
2. (Optional) Toggle unchanging hexagram mode for specific state constraints
3. Initiate the casting process
4. The system will display:
   - Generated random numbers and their mathematical significance
   - Original hexagram with binary state representation
   - Changing line calculations (when present)
   - Transformed hexagram with mathematical derivation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Random.org](https://www.random.org) for providing cryptographic-grade random number generation
- [No2Do](https://www.no2do.com) for comprehensive hexagram interpretations
