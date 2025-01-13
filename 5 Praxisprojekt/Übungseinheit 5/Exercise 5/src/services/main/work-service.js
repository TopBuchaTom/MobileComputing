import { storageService } from "../base-services";
import { HttpService } from "../http-service";
import { GuidUtil } from "../../utils/guid-tool";

export class WorkService extends HttpService {
  _WORK_CACHE_KEY = "Work";

  _initialEntries = [];

  getWorkEntries() {
    return storageService.load(this._WORK_CACHE_KEY, this._initialEntries);
  }

  getWorkEntry(id) {
    if (id)      
      return this.getWorkEntries().find(entry => entry.id == id);

    return this._getEmptyWorkEntry();
  }

  addWorkEntry(workEntry) {
    const updatedWork = [...this.getWorkEntries(), { ...workEntry, id: GuidUtil.createGuid() }];

    return storageService.store(this._WORK_CACHE_KEY, updatedWork);
  }

  updateWorkEntry(workEntry) {
    const work = this.getWorkEntries();   
    const indexToUpdate = work.findIndex(entry => entry.id == workEntry.id);
    
    const updatedWork = work.with(indexToUpdate, workEntry);

    return storageService.store(this._WORK_CACHE_KEY, updatedWork);
  }

  removeWorkEntry(workEntry) {
    const work = this.getWorkEntries();   

    const updatedWork = work.filter(entry => entry.id != workEntry.id);

    return storageService.store(this._WORK_CACHE_KEY, updatedWork);
  }

  clearWorkEntries() {
    return storageService.store(this._WORK_CACHE_KEY, []);
  }

  _getEmptyWorkEntry() {
    return {
      id: 0,
      title: "",
      details: "",
      date: "",
      starttime: "",
      endtime: "",
      location: "",
      room: "",
    }
  }
}
