const grid = document.getElementById('grid');
const acrossClues = document.getElementById('across-clues').querySelector('ul');
const downClues = document.getElementById('down-clues').querySelector('ul');

const words = [
    { word: 'ağaç', clue: 'Kökleri toprağın içine uzanan, dallarında yapraklar bulunan ve genellikle odunsu gövdesi olan bitki.' },
    { word: 'telefon', clue: 'İnsanların birbirleriyle sesli ve görüntülü iletişim kurmalarını sağlayan, genellikle elde taşınabilir elektronik cihaz.' },
    { word: 'gözlük', clue: 'Görme problemlerini düzeltmek veya gözleri güneşin zararlı ışınlarından korumak için kullanılan, camlardan yapılmış optik araç.' },
    { word: 'bilgisayar', clue: 'Veri işlemek, hesaplamalar yapmak, bilgi depolamak ve yazılım çalıştırmak amacıyla kullanılan elektronik cihaz.' },
    { word: 'saat', clue: 'Zamanı ölçmek ve göstermek için kullanılan, genellikle kol veya duvar üzerinde taşınan cihaz.' },
    { word: 'bisiklet', clue: 'Pedallar aracılığıyla insan gücüyle hareket eden, iki tekerlekli taşıt.' },
    { word: 'lamba', clue: 'Elektrik enerjisiyle çalışan ve çevresine ışık yayan aydınlatma aracı.' },
    { word: 'şemsiye', clue: 'Yağmur veya güneşten korunmak amacıyla kullanılan, açılıp kapanabilen ve genellikle elde taşınan araç.' },
    { word: 'kalem', clue: 'Yazı yazmak, çizim yapmak veya işaretleme yapmak için kullanılan, genellikle mürekkepli veya grafitli yazı aracı.' },
    { word: 'kitap', clue: 'Sayfalar halinde düzenlenmiş ve genellikle ciltlenmiş, üzerinde yazılı veya basılı bilgi bulunan okuma aracı.' },
    { word: 'defter', clue: 'Not almak, yazı yazmak veya çizim yapmak için kullanılan, sayfalar halinde bir araya getirilmiş kağıt yapraklarından oluşan araç.' },
    { word: 'masa', clue: 'Üzerinde yemek yemek, çalışma yapmak veya eşyaları yerleştirmek için kullanılan, genellikle dört ayaklı mobilya.' },
    { word: 'sandalye', clue: 'Üzerine oturmak için kullanılan, genellikle dört ayaklı ve sırt dayama yeri olan mobilya.' },
    { word: 'çanta', clue: 'Eşyaları taşımak için kullanılan, genellikle elde taşınabilen veya omuzda asılan, çeşitli materyallerden yapılmış taşıma aracı.' },
    { word: 'ayakkabı', clue: 'Ayakları dış etkenlerden korumak ve rahat yürümeyi sağlamak için giyilen, genellikle deri veya kumaştan yapılan giyecek.' },
    { word: 'palto', clue: 'Soğuk havalarda vücudu sıcak tutmak için giyilen, genellikle kalın kumaşlardan yapılmış uzun üst giysisi.' },
    { word: 'şapka', clue: 'Başın üst kısmını güneşten, yağmurdan veya soğuktan korumak amacıyla giyilen, çeşitli materyallerden yapılmış giysi.' },
    { word: 'çorap', clue: 'Ayakları soğuktan korumak ve ayakkabı içinde rahat etmelerini sağlamak için giyilen, genellikle pamuk veya yün iplikten yapılmış giysi.' },
    { word: 'elbise', clue: 'Kadınların vücutlarını kaplamak için giydikleri, genellikle tek parça halinde olan giysi.' },
    { word: 'bilezik', clue: 'Bilek çevresine takılan, genellikle metal veya plastikten yapılan süs eşyası.' },
    { word: 'kolye', clue: 'Boyun çevresine takılan, genellikle değerli taşlar veya metallerden yapılan süs eşyası.' },
    { word: 'yüzük', clue: 'Parmaklara takılan, genellikle metalden yapılmış ve bazen değerli taşlarla süslenmiş takı.' },
    { word: 'pantolon', clue: 'Bacakları kaplayan, genellikle belden başlayıp ayak bileklerine kadar uzanan giysi.' },
    { word: 'ceket', clue: 'Üst vücudu kaplayan ve genellikle dış giyim olarak kullanılan, düğmeli veya fermuarlı giysi.' },
    { word: 'gömlek', clue: 'Üst vücudu kaplayan ve genellikle düğmeli olan, uzun veya kısa kollu giysi.' },
    { word: 'kravat', clue: 'Gömlek yaka kısmının altına bağlanan, genellikle resmi kıyafetlerin tamamlayıcısı olan uzun kumaş şerit.' },
    { word: 'kaşık', clue: 'Yemek yemek veya karıştırmak için kullanılan, genellikle metal veya plastikten yapılan, sığ bir çukur kısmı olan araç.' },
    { word: 'çatal', clue: 'Yemek yemek veya gıdaları tutmak için kullanılan, genellikle metalden yapılan, uçları sivri ve çatallı araç.' },
    { word: 'bıçak', clue: 'Kesme ve doğrama işlerinde kullanılan, genellikle metalden yapılmış keskin araç.' },
    { word: 'tabak', clue: 'Yemekleri servis etmek için kullanılan, genellikle seramik veya camdan yapılan düz ve geniş kap.' },
    { word: 'bardak', clue: 'İçecekleri tüketmek için kullanılan, genellikle cam veya plastikten yapılmış içi boş kap.' },
    { word: 'çaydanlık', clue: 'Çay demlemek için kullanılan, genellikle metalden yapılmış ve su kaynatma işlevi de olan kap.' },
    { word: 'tava', clue: 'Yemekleri pişirmek veya kızartmak için kullanılan, genellikle metalden yapılmış geniş ve düz tabanlı kap.' },
    { word: 'tencere', clue: 'Yemekleri pişirmek için kullanılan, genellikle metal veya seramikten yapılmış derin ve kapaklı kap.' },
    { word: 'ocak', clue: 'Yemek pişirmek için kullanılan, genellikle gaz veya elektrikle çalışan ve üzerinde tencere veya tava konulabilen cihaz.' },
    { word: 'fırın', clue: 'Yemekleri pişirmek veya ısıtmak için kullanılan, genellikle elektrik veya gazla çalışan kapalı ısıtma cihazı.' },
    { word: 'buzdolabı', clue: 'Yiyecek ve içecekleri soğuk tutmak ve tazeliklerini korumak için kullanılan, elektrikle çalışan soğutma cihazı.' },
    { word: 'çamaşır makinesi', clue: 'Kıyafetleri yıkamak için kullanılan, genellikle elektrikle çalışan ve suyla temizlik yapan cihaz.' },
    { word: 'bulaşık makinesi', clue: 'Tabak, çatal, bıçak ve bardak gibi mutfak eşyalarını yıkamak için kullanılan, genellikle elektrikle çalışan cihaz.' },
    { word: 'televizyon', clue: 'Görüntü ve sesli yayınları almak ve izlemek için kullanılan, genellikle oturma odalarında bulunan elektronik cihaz' }
];

const createGrid = () => {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = '<input type="text" maxlength="1">';
        grid.appendChild(cell);
    }
};

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const placeWords = () => {
    let selectedWords = [];
    while (selectedWords.length < 8) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        if (!selectedWords.includes(randomWord)) {
            selectedWords.push(randomWord);
        }
    }

    shuffleArray(selectedWords);
    let cells = Array.from(grid.children);

    const placeFirstWord = word => {
        const direction = Math.random() < 0.5 ? 'across' : 'down';
        const start = Math.floor(Math.random() * (10 - word.length));
        const positions = [];
        if (direction === 'across') {
            for (let i = 0; i < word.length; i++) {
                positions.push({ row: 5, col: start + i, char: word[i], direction });
            }
        } else {
            for (let i = 0; i < word.length; i++) {
                positions.push({ row: start + i, col: 5, char: word[i], direction });
            }
        }
        return positions;
    };

    const findCommonLetter = (first, second) => {
        for (let i = 0; i < first.length; i++) {
            for (let j = 0; j < second.length; j++) {
                if (first[i].char === second[j]) {
                    return { firstIndex: i, secondIndex: j, letter: first[i].char };
                }
            }
        }
        return null;
    };

    const placeNextWord = (firstWord, secondWord) => {
        const common = findCommonLetter(firstWord, secondWord.word);
        if (!common) {
            return false;
        }
        const positions = [];
        if (firstWord[common.firstIndex].direction === 'across') {
            const col = firstWord[common.firstIndex].col;
            const startRow = firstWord[common.firstIndex].row - common.secondIndex;
            if (startRow < 0 || startRow + secondWord.word.length > 10) {
                return false;
            }
            for (let i = 0; i < secondWord.word.length; i++) {
                positions.push({ row: startRow + i, col, char: secondWord.word[i], direction: 'down' });
            }
        } else {
            const row = firstWord[common.firstIndex].row;
            const startCol = firstWord[common.firstIndex].col - common.secondIndex;
            if (startCol < 0 || startCol + secondWord.word.length > 10) {
                return false;
            }
            for (let i = 0; i < secondWord.word.length; i++) {
                positions.push({ row, col: startCol + i, char: secondWord.word[i], direction: 'across' });
            }
        }
        return positions;
    };

    const isValidPlacement = positions => {
        for (let pos of positions) {
            const cellIndex = pos.row * 10 + pos.col;
            const cell = cells[cellIndex];
            const input = cell.querySelector('input');
            if (input.dataset.letter && input.dataset.letter !== pos.char) {
                return false;
            }
            if (input.dataset.letterCount && input.dataset.letterCount >= 2) {
                return false;
            }
        }
        return true;
    };

    const addPositionsToGrid = (positions, index) => {
        positions.forEach((pos, i) => {
            const cellIndex = pos.row * 10 + pos.col;
            const cell = cells[cellIndex];
            const input = cell.querySelector('input');
            input.dataset.letter = pos.char;
            input.dataset.index = index + 1;
            input.dataset.letterCount = input.dataset.letterCount ? parseInt(input.dataset.letterCount) + 1 : 1;
            if (i === 0) {
                const span = document.createElement('span');
                span.textContent = index + 1;
                cell.appendChild(span);
            }
        });
    };

    const firstWord = placeFirstWord(selectedWords[0].word);
    addPositionsToGrid(firstWord, 0);
    const acrossClueElement = document.createElement('li');
    acrossClueElement.textContent = `1. ${selectedWords[0].clue}`;
    acrossClues.appendChild(acrossClueElement);

    let placedWords = [firstWord];

    for (let i = 1; i < selectedWords.length; i++) {
        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 100) {
            attempts++;
            const secondWord = selectedWords[i];
            for (let j = 0; j < placedWords.length; j++) {
                const nextWord = placeNextWord(placedWords[j], secondWord);
                if (nextWord && isValidPlacement(nextWord)) {
                    addPositionsToGrid(nextWord, i);
                    placedWords.push(nextWord);
                    placed = true;
                    const clueElement = document.createElement('li');
                    if (nextWord[0].direction === 'across') {
                        clueElement.textContent = `${i + 1}. ${secondWord.clue}`;
                        acrossClues.appendChild(clueElement);
                    } else {
                        clueElement.textContent = `${i + 1}. ${secondWord.clue}`;
                        downClues.appendChild(clueElement);
                    }
                    break;
                }
            }
        }
        if (!placed) {
            selectedWords.splice(i, 1);
            i--;
        }
    }
};

createGrid();
placeWords();

// Boş hücreleri gizle
const cells = Array.from(grid.children);
cells.forEach(cell => {
    const input = cell.querySelector('input');
    if (!input.dataset.letter) {
        cell.style.visibility = 'hidden';
    }
});
