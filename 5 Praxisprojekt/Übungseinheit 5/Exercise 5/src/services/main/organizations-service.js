import { HttpService } from "../http-service";

export class OrganizationsService extends HttpService {
  async _retrieveUsers(query) {
    return this._fetchJsonData(`/users/${query}`);
  }

  async getOrganization(id) {
    return this.getOrganizationByName(id);
  }

  async getOrganizationByName(name) {
    if (!name) return null;
    
    const organizations = await this.findOrganizations(name);
  
    return organizations?.[0];
  }

  async findOrganizations(expr = "") {  
    // Unterstützt einfache like-Suche nach Name oder auch spezielle Suche wie ?address.street=Ku&address.zipcode=9
    // REST-Service unterstützt direkte Suche über feld=wert bzw. feld_like=wert für Wildcard-Suche
    const query = (expr.startsWith("?") ? expr : `?company.name=${expr}`).replaceAll("=", "_like=");
    const users = await this._retrieveUsers(query);
    const companies = users.map(this._extractCompany);
     
    return companies;
  }

  _extractCompany(user) {
    if (!user)
      return null;

    return {
      name: user.company.name,
      phone: user.phone,
      email: user.email,
      website: user.website,
      ...user.address };
  }
}
