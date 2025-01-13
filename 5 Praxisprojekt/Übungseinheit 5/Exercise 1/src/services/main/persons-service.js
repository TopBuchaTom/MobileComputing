import { HttpService } from "../http-service";

export class PersonsService extends HttpService {
  async _retrieveUsers(query) {
    return this._fetchJsonData(`/users/${query}`);
  }

  async getPerson(id) {
    return await this._fetchJsonData(`/users/${id}`);
  }

  async getPersonByName(name) {
    if (!name) return null;

    const persons = await this.findPersons(name);

    return persons?.[0];
  }

  async findPersons(expr = "") {
    // Unterstützt einfache like-Suche nach Name oder auch spezielle Suche wie ?address.street=Ku&address.zipcode=9
    // REST-Service unterstützt direkte Suche über feld=wert bzw. feld_like=wert für Wildcard-Suche
    const query = (expr.startsWith("?") ? expr : `?name=${expr}`).replaceAll("=", "_like=");   
    const persons = await this._retrieveUsers(query);

    return persons;
  }
}
