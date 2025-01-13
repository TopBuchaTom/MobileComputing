import { StorageService } from "../../core/storage-service";

export class DummyStorageService extends StorageService {
  _storage = {
    _notPersistedStorage: {},

    getItem: (key) => this._storage._notPersistedStorage[key],
    setItem: (key, value) => this._storage._notPersistedStorage[key] = value,
    removeItem: (key) => delete this._storage._notPersistedStorage[key],
    key: (i) => Object.keys(this._storage._notPersistedStorage).at(i),
    get length() { return Object.keys(this._notPersistedStorage).length; }
  };
}