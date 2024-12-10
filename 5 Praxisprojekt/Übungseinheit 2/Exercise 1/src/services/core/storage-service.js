export class StorageService {
  _storage = localStorage;

  load(key, defaultValue) {
    const value = this._storage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  store(key, value) {
    this._storage.setItem(key, JSON.stringify(value));
    return value;
  }

  contains(key) {
    return this._storage.getItem(key) != null;
  }

  clear(keyPrefix = null, keyExpr = null) {
    for (let i=this._storage.length-1; i>=0; i--) {
      const key = this._storage.key(i);

      if ((keyPrefix == null || key.startsWith(keyPrefix)) && (keyExpr == null || keyExpr(key)))
        this._storage.removeItem(key);
    }
  }

  storeAll(keyPrefix = null, keyExpr = null, value) {
    let success = false;

    for (let i=this._storage.length-1; i>=0; i--) {
      const key = this._storage.key(i);

      if ((keyPrefix == null || key.startsWith(keyPrefix)) && (keyExpr == null || keyExpr(key))) {
        this.store(key, value);
        success = true;
      }
    }

    return success;
  }
}
