        // Hexagram names and URLs mapping
const hexagramData = {
    '111111': { name: 'Hexagram 1: The Creative', url: 'https://www.no2do.com/hexagramme_en/777777.htm' },
    '000000': { name: 'Hexagram 2: The Receptive', url: 'https://www.no2do.com/hexagramme_en/888888.htm' },
    '100010': { name: 'Hexagram 3: Difficulty at the Beginning', url: 'https://www.no2do.com/hexagramme_en/788878.htm' },
    '010001': { name: 'Hexagram 4: Youthful Folly', url: 'https://www.no2do.com/hexagramme_en/878887.htm' },
    '111010': { name: 'Hexagram 5: Waiting', url: 'https://www.no2do.com/hexagramme_en/777878.htm' },
    '010111': { name: 'Hexagram 6: Conflict', url: 'https://www.no2do.com/hexagramme_en/878777.htm' },
    '010000': { name: 'Hexagram 7: The Army', url: 'https://www.no2do.com/hexagramme_en/878888.htm' },
    '000010': { name: 'Hexagram 8: Holding Together', url: 'https://www.no2do.com/hexagramme_en/888878.htm' },
    '111011': { name: 'Hexagram 9: Small Taming', url: 'https://www.no2do.com/hexagramme_en/777877.htm' },
    '110111': { name: 'Hexagram 10: Treading', url: 'https://www.no2do.com/hexagramme_en/778777.htm' },
    '111000': { name: 'Hexagram 11: Peace', url: 'https://www.no2do.com/hexagramme_en/777888.htm' },
    '000111': { name: 'Hexagram 12: Standstill', url: 'https://www.no2do.com/hexagramme_en/888777.htm' },
    '101111': { name: 'Hexagram 13: Fellowship', url: 'https://www.no2do.com/hexagramme_en/787777.htm' },
    '111101': { name: 'Hexagram 14: Great Possession', url: 'https://www.no2do.com/hexagramme_en/777787.htm' },
    '001000': { name: 'Hexagram 15: Modesty', url: 'https://www.no2do.com/hexagramme_en/887888.htm' },
    '000100': { name: 'Hexagram 16: Enthusiasm', url: 'https://www.no2do.com/hexagramme_en/888788.htm' },
    '100110': { name: 'Hexagram 17: Following', url: 'https://www.no2do.com/hexagramme_en/788778.htm' },
    '011001': { name: 'Hexagram 18: Work on the Decayed', url: 'https://www.no2do.com/hexagramme_en/877887.htm' },
    '110000': { name: 'Hexagram 19: Approach', url: 'https://www.no2do.com/hexagramme_en/778888.htm' },
    '000011': { name: 'Hexagram 20: Contemplation', url: 'https://www.no2do.com/hexagramme_en/888877.htm' },
    '100101': { name: 'Hexagram 21: Biting Through', url: 'https://www.no2do.com/hexagramme_en/788787.htm' },
    '101001': { name: 'Hexagram 22: Grace', url: 'https://www.no2do.com/hexagramme_en/787887.htm' },
    '000001': { name: 'Hexagram 23: Splitting Apart', url: 'https://www.no2do.com/hexagramme_en/888887.htm' },
    '100000': { name: 'Hexagram 24: Return', url: 'https://www.no2do.com/hexagramme_en/788888.htm' },
    '100111': { name: 'Hexagram 25: Innocence', url: 'https://www.no2do.com/hexagramme_en/788777.htm' },
    '111001': { name: 'Hexagram 26: Great Taming', url: 'https://www.no2do.com/hexagramme_en/777887.htm' },
    '100001': { name: 'Hexagram 27: Nourishment', url: 'https://www.no2do.com/hexagramme_en/788887.htm' },
    '011110': { name: 'Hexagram 28: Great Preponderance', url: 'https://www.no2do.com/hexagramme_en/877778.htm' },
    '010010': { name: 'Hexagram 29: The Abysmal', url: 'https://www.no2do.com/hexagramme_en/878878.htm' },
    '101101': { name: 'Hexagram 30: The Clinging', url: 'https://www.no2do.com/hexagramme_en/787787.htm' },
    '001110': { name: 'Hexagram 31: Influence', url: 'https://www.no2do.com/hexagramme_en/887778.htm' },
    '011100': { name: 'Hexagram 32: Duration', url: 'https://www.no2do.com/hexagramme_en/877788.htm' },
    '001111': { name: 'Hexagram 33: Retreat', url: 'https://www.no2do.com/hexagramme_en/887777.htm' },
    '111100': { name: 'Hexagram 34: Great Power', url: 'https://www.no2do.com/hexagramme_en/777788.htm' },
    '000101': { name: 'Hexagram 35: Progress', url: 'https://www.no2do.com/hexagramme_en/888787.htm' },
    '101000': { name: 'Hexagram 36: Darkening of the Light', url: 'https://www.no2do.com/hexagramme_en/787888.htm' },
    '101011': { name: 'Hexagram 37: The Family', url: 'https://www.no2do.com/hexagramme_en/787877.htm' },
    '110101': { name: 'Hexagram 38: Opposition', url: 'https://www.no2do.com/hexagramme_en/778787.htm' },
    '001010': { name: 'Hexagram 39: Obstruction', url: 'https://www.no2do.com/hexagramme_en/887878.htm' },
    '010100': { name: 'Hexagram 40: Deliverance', url: 'https://www.no2do.com/hexagramme_en/878788.htm' },
    '110001': { name: 'Hexagram 41: Decrease', url: 'https://www.no2do.com/hexagramme_en/778887.htm' },
    '100011': { name: 'Hexagram 42: Increase', url: 'https://www.no2do.com/hexagramme_en/788877.htm' },
    '111110': { name: 'Hexagram 43: Breakthrough', url: 'https://www.no2do.com/hexagramme_en/777778.htm' },
    '011111': { name: 'Hexagram 44: Coming to Meet', url: 'https://www.no2do.com/hexagramme_en/877777.htm' },
    '000110': { name: 'Hexagram 45: Gathering Together', url: 'https://www.no2do.com/hexagramme_en/888778.htm' },
    '011000': { name: 'Hexagram 46: Pushing Upward', url: 'https://www.no2do.com/hexagramme_en/877888.htm' },
    '010110': { name: 'Hexagram 47: Oppression', url: 'https://www.no2do.com/hexagramme_en/878778.htm' },
    '011010': { name: 'Hexagram 48: The Well', url: 'https://www.no2do.com/hexagramme_en/877878.htm' },
    '101110': { name: 'Hexagram 49: Revolution', url: 'https://www.no2do.com/hexagramme_en/787778.htm' },
    '011101': { name: 'Hexagram 50: The Cauldron', url: 'https://www.no2do.com/hexagramme_en/877787.htm' },
    '100100': { name: 'Hexagram 51: The Arousing', url: 'https://www.no2do.com/hexagramme_en/788788.htm' },
    '001001': { name: 'Hexagram 52: Keeping Still', url: 'https://www.no2do.com/hexagramme_en/887887.htm' },
    '001011': { name: 'Hexagram 53: Development', url: 'https://www.no2do.com/hexagramme_en/887877.htm' },
    '110100': { name: 'Hexagram 54: The Marrying Maiden', url: 'https://www.no2do.com/hexagramme_en/778788.htm' },
    '101100': { name: 'Hexagram 55: Abundance', url: 'https://www.no2do.com/hexagramme_en/787788.htm' },
    '001101': { name: 'Hexagram 56: The Wanderer', url: 'https://www.no2do.com/hexagramme_en/887787.htm' },
    '011011': { name: 'Hexagram 57: The Gentle', url: 'https://www.no2do.com/hexagramme_en/877877.htm' },
    '110110': { name: 'Hexagram 58: The Joyous', url: 'https://www.no2do.com/hexagramme_en/778778.htm' },
    '010011': { name: 'Hexagram 59: Dispersion', url: 'https://www.no2do.com/hexagramme_en/878877.htm' },
    '110010': { name: 'Hexagram 60: Limitation', url: 'https://www.no2do.com/hexagramme_en/778878.htm' },
    '110011': { name: 'Hexagram 61: Inner Truth', url: 'https://www.no2do.com/hexagramme_en/778877.htm' },
    '001100': { name: 'Hexagram 62: Small Preponderance', url: 'https://www.no2do.com/hexagramme_en/887788.htm' },
    '101010': { name: 'Hexagram 63: After Completion', url: 'https://www.no2do.com/hexagramme_en/787878.htm' },
    '010101': { name: 'Hexagram 64: Before Completion', url: 'https://www.no2do.com/hexagramme_en/878787.htm' }
};
async function getRandomNumbers() {
    const unchangingOnly = document.getElementById('unchangingOnly').checked;
    
    try {
        const response = await fetch(
            `https://www.random.org/integers/?num=6&min=${unchangingOnly ? 7 : 6}&max=${unchangingOnly ? 8 : 9}&col=1&base=10&format=plain&rnd=new`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'text/plain'
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to get true random numbers from Random.org');
        }

        const text = await response.text();
        const numbers = text.trim().split('\n').map(n => parseInt(n));

        if (numbers.length !== 6) {
            throw new Error('Did not receive the correct number of random numbers');
        }

        return numbers;
    } catch (error) {
        throw new Error('Cannot proceed without true randomness from Random.org. Please try again later.');
    }
}

        function numberToLine(num, lineNumber) {
            const isYang = (num === 7 || num === 9);
            const isChanging = (num === 6 || num === 9);
            return {
                value: num,
                changing: isChanging,
                lineNumber: lineNumber,
                display: `<div class="line${isChanging ? ' changing' : ''}">${isYang ? 
                    '<div class="yang"></div>' : 
                    '<div class="yin"></div><div class="yin"></div>'}</div>`,
                binary: isYang ? '1' : '0'
            };
        }

        function getHexagramLink(binaryKey) {
            const hexagram = hexagramData[binaryKey];
            if (!hexagram) return 'Hexagram not found';
            return `<a href="${hexagram.url}" target="_blank">${hexagram.name}</a>`;
        }

        async function castHexagram() {
            const question = document.getElementById('question').value.trim();
            if (!question) {
                alert('Please enter your question first.');
                return;
            }

            const button = document.getElementById('castButton');
            const loading = document.getElementById('loading');
            const error = document.getElementById('error');
            const numbers = document.getElementById('numbers');
            const original = document.getElementById('original');
            const changed = document.getElementById('changed');

            numbers.innerHTML = '';
            original.innerHTML = '';
            changed.innerHTML = '';
            error.style.display = 'none';

            button.disabled = true;
            loading.style.display = 'block';

            try {
                const randomNumbers = await getRandomNumbers();
                
                // First number corresponds to bottom line (line 1)
                const lines = randomNumbers.map((num, index) => numberToLine(num, index + 1));
                const changingLines = lines.filter(l => l.changing);
                const originalKey = convertToBinaryKey(lines);

                numbers.innerHTML = `Numbers cast: ${randomNumbers.join(', ')}`;

                // Display lines from top to bottom (6 to 1)
                const displayLines = [...lines].reverse();

                original.innerHTML = 
                    `<div class="hexagram-title">Original Hexagram</div>` +
                    displayLines.map(l => l.display).join('') +
                    `<div class="hexagram-meaning">${getHexagramLink(originalKey)}</div>`;

                if (changingLines.length > 0) {
                    original.innerHTML += `<div class="changing-lines-text">
                        Changing lines: ${changingLines.map(l => `Line ${l.lineNumber} (${l.value})`).sort((a, b) => 
                            parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1])).join(', ')}
                    </div>`;

                    const changedLines = lines.map(l => ({
                        ...l,
                        binary: l.changing ? (l.binary === '1' ? '0' : '1') : l.binary
                    }));
                    const changedKey = convertToBinaryKey(changedLines);

                    // Display transformed hexagram
                    changed.innerHTML = 
                        `<div class="hexagram-title">Transformed Hexagram</div>` +
                        displayLines.map(l => {
                            const newNum = l.changing ? (l.value === 9 ? 8 : 7) : l.value;
                            return numberToLine(newNum, l.lineNumber).display;
                        }).join('') +
                        `<div class="hexagram-meaning">${getHexagramLink(changedKey)}</div>`;
                } else {
                    original.innerHTML += `<div class="unchanging-note">
                        This is a stable hexagram with no changing lines.
                    </div>`;
                }
            } catch (err) {
                error.textContent = err.message;
                error.style.display = 'block';
            } finally {
                button.disabled = false;
                loading.style.display = 'none';
            }
        }

        function convertToBinaryKey(lines) {
            // The binary key should be read from bottom to top
            return lines.map(line => line.binary).join('');
        }