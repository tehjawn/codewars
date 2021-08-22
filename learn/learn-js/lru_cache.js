// lru_cache.js
// Least recently used cache data structure implementation in JavaScript
// Following https://dev.to/seanwelshbrown/implement-a-simple-lru-cache-in-javascript-4o92

// This is a pretty slow implementation though.

class LRUCache {

    constructor(capacity = 0) {
        this.cache = new Map()
        this.capacity = capacity
    }

    // Get key-value pair from the cache
    get(key) {
        if (!this.cache.has(key)) return -1 // If key doesn't exist in cache, return undefined

        let val = this.cache.get(key) // Otherwise, get value associated with that key

        this.cache.delete(key) // Delete the key-value pair from the cache...
        this.cache.set(key, val) // Then set it again!

        return val // Return the value from the cache from when this method was called
    }

    // Put key-value pair onto the cache
    put(key, value) {
        this.cache.delete(key) // Delete key-value pair if the key already exists in the cache

        if (this.cache.size === this.capacity) { // If the cache has reached capacity...
            this.cache.delete(this.cache.keys().next().value) // Delete the least recently used key-value pair in the cache
        }

        this.cache.set(key, value) // Add new key-value pair to the cache
    }

    // Get LRU (Least Recently Used) key-value pair - the oldest cached key-value pair
    getLeastRecent() {
        return Array.from(this.cache)[0]
    }

    // Get MRU (Most Recently Used) key-value pair - the newest cached key-value pair
    getMostRecent() {
        return Array.from(this.cache)[this.cache.size - 1]
    }
}