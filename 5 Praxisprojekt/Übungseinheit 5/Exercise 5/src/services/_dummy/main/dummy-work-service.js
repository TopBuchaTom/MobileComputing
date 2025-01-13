import { WorkService } from "../../main/work-service";
import { GuidUtil } from "../../../utils/guid-tool";

export class DummyWorkService extends WorkService { 
  _initialEntries = testWork;
}

const testWork = [
  {
    id: GuidUtil.createGuid(),
    title: "Projektbesprechung BayernPortal",
    details: "Besprechung zum weiteren Ausbau des Portals und Umstellung auf eine moderne Architektur auf Basis von Microservices und einer SPA.",
    date: "2024-07-02",
    starttime: "09:00",
    endtime: "10:00",
    location: "StMFH",
    room: "FA102"
  },
  {
    id: GuidUtil.createGuid(),
    title: "Projektbesprechung Mitarbeiterservice Bayern",
    details: "Besprechung zur Bestimmung der nächsten einzubindenden Fachverfahren.",
    date: "2024-08-04",
    starttime: "09:00",
    endtime: "10:30",
    location: "StMFH",
    room: "FB106"
  },
  {
    id: GuidUtil.createGuid(),
    title: "Projektbesprechung Geodatenportal",
    details: "Besprechung zur Erstellung von Apps.",
    date: "2024-08-05",
    starttime: "08:00",
    endtime: "12:00",
    location: "LDBV",
    room: "A210"
  },
  {
    id: GuidUtil.createGuid(),
    title: "Projektbesprechung REST-Services",
    details: "Besprechung zur Überarbeitung der REST-Services im Hinblick auf eine bessere Modularisierung.",
    date: "2024-07-02",
    starttime: "09:30",
    endtime: "12:00",
    location: "LDBV",
    room: "A210"
  },
  {
    id: GuidUtil.createGuid(),
    title: "Meeting IHV-Weiterentwicklung",
    details: "Besprechung zur Weiterentwicklung von IHV.",
    date: "2024-08-04",
    starttime: "14:00",
    endtime: "16:00",
    location: "FinanzIT Bayern",
    room: "A205"
  },
  {
    id: GuidUtil.createGuid(),
    title: "Meeting BayBAS-Weiterentwicklung",
    details: "Besprechung zur Weiterentwicklung von BayBAS.",
    date: "2024-08-04",
    starttime: "15:00",
    endtime: "16:00",
    location: "FinanzIT Bayern",
    room: "B102"
  }
];
