// =============================================
// Fonctions de manipulation de chaînes
// =============================================

/**
 * Inverse une chaîne de caractères
 * @param {string} chaine - La chaîne à inverser
 * @returns {string} La chaîne inversée
 */
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

/**
 * Compte le nombre de caractères dans une chaîne
 * @param {string} chaine - La chaîne à analyser
 * @returns {number} Le nombre de caractères
 */
function compterCaracteres(chaine) {
    return chaine.length;
}

/**
 * Met en majuscule la première lettre de chaque mot
 * @param {string} phrase - La phrase à transformer
 * @returns {string} La phrase avec les premières lettres en majuscule
 */
function majusculePremiereLettre(phrase) {
    return phrase.split(' ').map(mot => 
        mot.charAt(0).toUpperCase() + mot.slice(1)
    ).join(' ');
}

// =============================================
// Fonctions de tableau
// =============================================

/**
 * Trouve la valeur maximale dans un tableau
 * @param {number[]} tableau - Le tableau de nombres
 * @returns {number} La valeur maximale
 */
function trouverMax(tableau) {
    return Math.max(...tableau);
}

/**
 * Trouve la valeur minimale dans un tableau
 * @param {number[]} tableau - Le tableau de nombres
 * @returns {number} La valeur minimale
 */
function trouverMin(tableau) {
    return Math.min(...tableau);
}

/**
 * Calcule la somme des éléments d'un tableau
 * @param {number[]} tableau - Le tableau de nombres
 * @returns {number} La somme des éléments
 */
function sommeTableau(tableau) {
    return tableau.reduce((acc, val) => acc + val, 0);
}

/**
 * Filtre un tableau selon une condition
 * @param {Array} tableau - Le tableau à filtrer
 * @param {Function} condition - La fonction de filtrage
 * @returns {Array} Le tableau filtré
 */
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

// =============================================
// Fonctions mathématiques
// =============================================

/**
 * Calcule la factorielle d'un nombre
 * @param {number} n - Le nombre à calculer
 * @returns {number} La factorielle
 */
function factorielle(n) {
    if (n === 0 || n === 1) return 1;
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

/**
 * Vérifie si un nombre est premier
 * @param {number} n - Le nombre à vérifier
 * @returns {boolean} True si premier, false sinon
 */
function estPremier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Génère la suite de Fibonacci
 * @param {number} n - Le nombre d'éléments à générer
 * @returns {number[]} La suite de Fibonacci
 */
function fibonacci(n) {
    const suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i-1] + suite[i-2]);
    }
    return suite.slice(0, n);
}

// =============================================
// Exemples d'utilisation
// =============================================

console.log("=== Manipulation de chaînes ===");
console.log(inverserChaine("bonjour")); // "ruojnob"
console.log(compterCaracteres("hello")); // 5
console.log(majusculePremiereLettre("bonjour tout le monde")); // "Bonjour Tout Le Monde"

console.log("\n=== Fonctions de tableau ===");
const nombres = [5, 2, 9, 1, 5, 6];
console.log(trouverMax(nombres)); // 9
console.log(trouverMin(nombres)); // 1
console.log(sommeTableau([1, 2, 3, 4])); // 10
console.log(filtrerTableau([1, 2, 3, 4, 5], num => num % 2 === 0)); // [2, 4]

console.log("\n=== Fonctions mathématiques ===");
console.log(factorielle(5)); // 120
console.log(estPremier(7)); // true
console.log(estPremier(4)); // false
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]