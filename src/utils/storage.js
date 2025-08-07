export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export function getQuotes() {
  // Example static quotes array
  return [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    // Add more quotes as needed
  ];
}