import { routerService, languageService as L } from "../../global/app-services";
import { bookOutline, locationOutline, close } from "ionicons/icons";
import { WorkDetailsPage } from "./work-details-page";

export function presentLectureOptionsActionSheet(entry) {
  return routerService.openChoice(`${entry.title}`, [
    {
      text: L.text.work.menu_edit_link,
      icon: bookOutline,
      handler: () => routerService.push(WorkDetailsPage.name, null, null, { id: entry.id })
    }, {
      text: L.text.work.menu_location_link,
      icon: locationOutline,
      handler: () => {
        const coords = `${entry.lat},${entry.lng}`;
        const location = encodeURIComponent(entry.location);

        if (routerService.isDebugging())
          routerService.open(`http://maps.google.com/maps?z=12&t=m&q=${location}&loc:${entry.lat}+${entry.lng}`);
        else
          routerService.open(`geo:${coords}?q=${coords}(${location})`);
      }
    }, {
      text: L.text.global.button_cancel_text,
      icon: close,
      role: 'cancel'
    }]);
}
