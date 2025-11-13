const fs = require('fs');

// input.txt dosyasını oku
const input = fs.readFileSync('input.txt', 'utf-8');

// Satırlara ayır ve sayıya çevir
const frequencyChanges = input.split('\n').map(Number);

let currentFrequency = 0;                  // Başlangıç frekansı
const seenFrequency = new Set();           // Daha önce görülen frekanslar
seenFrequency.add(currentFrequency);

let i = 0;
let found = false;

while (!found) {
    // Frekansı güncelle
    currentFrequency += frequencyChanges[i];

    // Bu frekansı daha önce gördük mü?
    if (seenFrequency.has(currentFrequency)) {
        console.log("İlk tekrar eden frekans:", currentFrequency);
        found = true;
    } else {
        seenFrequency.add(currentFrequency);
    }

    // Bir sonraki elemana geç
    i++;

    // Listenin sonuna gelindiyse başa dön
    if (i >= frequencyChanges.length) {
        i = 0;
    }
}



