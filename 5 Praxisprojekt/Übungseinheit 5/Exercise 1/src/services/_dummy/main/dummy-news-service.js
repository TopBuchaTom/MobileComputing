import { NewsService } from "../../main/news-service";

export class DummyNewsService extends NewsService {
  async _retrieveNews(url) {
    switch (url) {
      case this._WEBNEWS_URL:
        return this._parseHtml(testWebNews);
      case this._PRESSNEWS_URL:
        return this._parseHtml(testPressNews);
      default:
        throw Error("DummyNewsService: Url not supported!");
    }
  }
}

const testWebNews = `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Artikel</title>
    <link>https://www.bundesregierung.de/breg-de/bundesregierung/1151246-1151246</link>
    <description>Zusammenstellung der aktuellsten Artikel</description>
    <language>de</language>
    <copyright>Presse- und Informationsamt der Bundesregierung</copyright>
    <generator />
    <ttl>60</ttl>
    <item>
      <title>Themen der Online-Beteiligung</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/weiterentwicklung-der-deutschen-nachhaltigkeitsstrategie-2276070</link>
      <description>Globale Herausforderungen Das Kapitel „Globale Herausforderungen“ geht auf bestehende globale Krisen ein. Diese machen mehr denn je deutlich, dass es auf globaler und europäischer Ebene gemeinsamer Ziele und einer gemeinsamen Zukunftsvision bedarf, an denen sich die Staaten orientieren können. Eine ebensolche Richtschnur stellt die Agenda 2030 für nachhaltige Entwicklung der Vereinten Nationen dar. Der VN-Generalsekretär hat zur beschleunigten Umsetzung der Agenda 2030 nach einer insgesamt ernüchternden Halbzeitbilanz aufgerufen. Als Meilenstein des Multilateralismus ist die Agenda 2030 Fundament zahlreicher multilateraler Abkommen. Die Bundesregierung tritt für eine starke multilaterale Zusammenarbeit ein. Sie setzt sich für einen erfolgreichen VN-Zukunftsgipfel ein, der die Umsetzung der Agenda 2030 beschleunigt und den Multilateralismus effizienter, transparenter und inklusiver gestaltet. Mit der Hamburg Sustainability Conference schafft sie neue Räume, in denen Globaler Süden un...</description>
      <pubDate>Fri, 31 May 2024 17:13:09 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/weiterentwicklung-der-deutschen-nachhaltigkeitsstrategie-2276070</guid>
    </item>
    <item>
      <title>Nachhaltigkeit online mitgestalten</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/deutsche-nachhaltigkeitsstrategie-mitgestalten-2268990</link>
      <description>Deutschland soll nachhaltiger werden – und das so konkret und lebensnah wie möglich. Bis zum 26. Juli 2024 können sich interessierte Bürgerinnen und Bürger online beteiligen. Die Beiträge werden dann für die Weiterentwicklung der Nachhaltigkeitsstrategie ausgewertet.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975910/2271570/2a5d1fa0f76c00dd1366cbcbd4cf9f46/beteiligung-nachhaltigkeitsstrategie-data.jpg" length="52558" type="image/jpeg" />
      <pubDate>Fri, 31 May 2024 12:00:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/deutsche-nachhaltigkeitsstrategie-mitgestalten-2268990</guid>
    </item>
    <item>
      <title>Was ändert sich im Juni 2024?</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/gesetzliche-neuregelungen-juni-2024-2289166</link>
      <description>Das Staatsangehörigkeitsrecht wird modernisiert, die Chancenkarte erleichtert ausländischen Fachkräften die Arbeitsplatzsuche und Geflüchtete erhalten Leistungen künftig über eine Bezahlkarte. Diese und andere Neuregelungen im Überblick.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289266/2aa7906202e9cfd17b4a79f46046e655/2024-05-30-gesetzliche-neuregelungen-data.png" length="48013" type="image/png" />
      <pubDate>Thu, 30 May 2024 13:18:23 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/gesetzliche-neuregelungen-juni-2024-2289166</guid>
    </item>
    <item>
      <title>Umwelterklärung 2023</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundespresseamt-umwelterklaerung-2023-2171732</link>
      <description>Das Bundespresseamt hat seine vierte Umwelterklärung veröffentlicht. Damit informiert das Amt über Maßnahmen, wie der Betrieb nachhaltig und umweltgerecht gestaltet wird. Die Erklärung ist Teil des strengen europäischen Umweltmanagementsystems.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/309150/b449025cff55b23b9e9338a1b0d7b351/logo-emas-data.jpg" length="106489" type="image/jpeg" />
      <pubDate>Thu, 30 May 2024 08:00:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundespresseamt-umwelterklaerung-2023-2171732</guid>
    </item>
    <item>
      <title>Verbraucherschutz aktuell – Ausgabe 9/2024</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/newsletter-verbraucherschutz-ausgabe-9-2289268</link>
      <description>Unsere Themen: Der neue Klinik-Atlas, Anreize für mehr Hausärzte im ländlichen Raum, das Rentenpaket II und die erweiterte KfW-Förderung für Wärmepumpen. Außerdem: Alles Wichtige zur Europawahl und zur Fußball-EM sowie jede Menge Tipps und Termine. Zum Newsletter</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289270/530256c28d991d13271289c33d1f7fee/2024-05-30-motiv-nl-verbraucherschutz-aktuell-ausgabe-9-data.jpg" length="175436" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 22:00:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/newsletter-verbraucherschutz-ausgabe-9-2289268</guid>
    </item>
    <item>
      <title>Die Carbon-Management-Strategie</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/carbon-management-strategie-2289146</link>
      <description>Nicht alle CO2-Emmissionen sind vermeidbar. Um die Klimaziele zu erreichen ist es daher notwendig, in einigen Bereichen auch die Speicherung von CO2 im Boden zu erlauben. Das Kabinett hat nun die Eckpunkte der sogenannten Carbon-Management-Strategie beschlossen.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289204/1afc5b8373b272d611235ac058036fc4/2024-05-29-co2-emissionen-data.jpg" length="660441" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 15:01:35 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/carbon-management-strategie-2289146</guid>
    </item>
    <item>
      <title>Bundeswehr beteiligt sich weiterhin an Friedensmission in Kosovo</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/verlaengerung-kfor-2042976</link>
      <description>Deutschland wird sich auch zukünftig mit Streitkräften an der internationalen Sicherheitspräsenz KFOR in Kosovo beteiligen. Das Kabinett hat beschlossen, das Mandat fortzusetzen. Der Bundestag muss dem Beschluss noch zustimmen.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2043552/fa230ee419dfefdfa48c93fc9279655b/2022-05-25-kfor-bundeswehr-data.jpg" length="199924" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 13:00:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/verlaengerung-kfor-2042976</guid>
    </item>
    <item>
      <title>Für eine stabile und finanzierbare Rente</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/rentenpaket-2-2281902</link>
      <description>Wer ein Leben lang arbeitet und Beiträge zahlt, soll sich im Alter auf seine Rente verlassen können. Mit dem Rentenpaket II will die Bundesregierung das Rentenniveau auf lange Sicht stabilisieren und dafür sorgen, dass die Rente für alle Generationen finanzierbar bleibt.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289132/0894cb0297e550e3fbd3acf0e06f9df4/2024-05-29-grafik-rente-data.png" length="65243" type="image/png" />
      <pubDate>Wed, 29 May 2024 12:45:48 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/rentenpaket-2-2281902</guid>
    </item>
    <item>
      <title>Wasserstoff schneller verfügbar machen</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/wasserstoffausbau-beschleunigen-2289130</link>
      <description>Wasserstoff ist essentiell, damit Deutschland bis 2045 ein klimaneutrales Industrieland wird. Dafür muss die Infrastruktur zur Erzeugung, Speicherung und zum Import von Wasserstoff entstehen. Das Kabinett hat nun das Wasserstoffbeschleunigungsgesetz beschlossen.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289172/62af2fab8bf55b84f34db5d5560bfebb/2024-05-29-h2-wasserstoff-data.jpg" length="179982" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 10:57:34 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/wasserstoffausbau-beschleunigen-2289130</guid>
    </item>
    <item>
      <title>Fragen und Antworten zur Organspende</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/faq-organspende-2194126</link>
      <description>Am 1. Juni ist der Tag der Organspende. Ein guter Grund, sich mit diesem lebensrettenden Thema auseinanderzusetzen: Kann ich mir vorstellen, Organe zu spenden? Und wie funktioniert das neue digitale Organspende-Register? Die wichtigsten Antworten im FAQ.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2194128/9b59e6eb998dcfdf2e8e9a6056ac40e8/2023-06-02-organspende-data.jpg" length="902799" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 09:26:41 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/faq-organspende-2194126</guid>
    </item>
    <item>
      <title>Schnelles Laden an Tankstellen</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/ladestrom-an-tankstellen-2289108</link>
      <description>Elektromobilität spielt eine zentrale Rolle für den Klimaschutz. Damit sich noch mehr Bürgerinnen und Bürger für ein E-Auto entscheiden, sind rund 8.000 zusätzliche Schnellladepunkte an Tankstellen vorgesehen.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2289126/bcb9a5dcae52b2fc2b65f100ebdb5d7a/2024-05-29-e-tankstelle-data.jpg" length="5741023" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 09:10:40 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/ladestrom-an-tankstellen-2289108</guid>
    </item>
    <item>
      <title>Neue Dieselsorten für den Straßenverkehr</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/neue-dieselsorten-2244528</link>
      <description>Um den Verbrauch fossiler Energieträger zu verringern, hat die Bundesregierung neue Dieselkraftstoffe eingeführt. Erstmals ist ein Dieselkraftstoff XTL für den Straßenverkehr zugelassen, der vollständig ohne fossile Energieträger hergestellt wird. Zudem steht mit B10-Diesel ein konventioneller Diesel mit nunmehr zehn Prozent Biodiesel zur Verfügung.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2243802/84bb648d01acca3c2cd0aa614bc404a7/2023-11-23-symbolfoto-tanken-spritpreise-data.jpg" length="124968" type="image/jpeg" />
      <pubDate>Wed, 29 May 2024 07:53:45 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/neue-dieselsorten-2244528</guid>
    </item>
    <item>
      <title>Bundesregierung beschließt Stärkung des Tierschutzes</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/tierschutzgesetz-2282306</link>
      <description>Die Bundesregierung setzt sich mit neuen gesetzlichen Regelungen weiter für einen verbesserten Tierschutz in Deutschland ein. Das steht im Einklang mit dem Auftrag des Grundgesetzes, in dem das Tierwohl seit 20 Jahren verankert ist.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/976074/1528234/93db834ee88fddad3d637d0aca558274/2018-09-04-fotoreihe4-tierwohlinitiative-hof-bodenkamp-offenstall-mit-viel-platz-data.jpg" length="300612" type="image/jpeg" />
      <pubDate>Fri, 24 May 2024 13:13:33 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/tierschutzgesetz-2282306</guid>
    </item>
    <item>
      <title>Hausarztberuf soll attraktiver werden</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/ambulante-gesundheitsversorgung-staerken-2285682</link>
      <description>Hausarztpraxen ohne Nachfolge, weite Wege bis zum nächsten Arzt – vor diesen Problemen stehen viele im ländlichen Raum. Das Kabinett hat nun einen Gesetzentwurf beschlossen, der unter anderem die Arbeitsbedingungen für Hausärztinnen und -ärzte attraktiver macht. Worum geht es?</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2285948/7c0e7a772eaac9a2b534dda763382527/20242-05-22-gesundheit-stethoskop-arzt-patient-data.jpg" length="1269380" type="image/jpeg" />
      <pubDate>Wed, 22 May 2024 12:11:53 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/ambulante-gesundheitsversorgung-staerken-2285682</guid>
    </item>
    <item>
      <title>Disziplinarverfahren werden beschleunigt</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/disziplinarverfahren-kuerzen-2284832</link>
      <description>Die Bundeswehr soll zukünftig schneller und effektiver auf Dienstvergehen von Soldatinnen und Soldaten reagieren können. Deshalb hat die Bundesregierung einen Gesetzentwurf beschlossen, der das Wehrdisziplinarrecht neu ordnen soll.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2285502/693b6acf0c5b246efcc69eb71bc80d98/2024-05-22-geloebnis-data.jpg" length="109506" type="image/jpeg" />
      <pubDate>Wed, 22 May 2024 11:12:54 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/disziplinarverfahren-kuerzen-2284832</guid>
    </item>
    <item>
      <title>Demokratie von innen heraus stärken</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/strategie-gemeinsam-fuer-demokratie-und-gegen-extremismus-2284760</link>
      <description>Menschen für demokratische Teilhabe gewinnen und extremistischem Gedankengut vorbeugen: Das sind zwei Ziele aus der Strategie „Gemeinsam für Demokratie und gegen Extremismus“, die die Bundesregierung beschlossen hat.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2285740/295b1f60fed37e8453cd4faeb776334b/2024-05-22-demokratie-strategie-data.jpg" length="1314877" type="image/jpeg" />
      <pubDate>Wed, 22 May 2024 09:47:02 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/strategie-gemeinsam-fuer-demokratie-und-gegen-extremismus-2284760</guid>
    </item>
    <item>
      <title>„Gewaltspirale durchbrechen“</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/politisch-motivierte-kriminalitaet-2023-2284956</link>
      <description>Die Zahl der politisch motivierten Straftaten ist angestiegen. Mit 60.028 Delikten kletterte der Wert auf den höchsten Stand seit Einführung des Meldedienstes im Jahr 2001. Politisch rechts motivierte Taten dominieren.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2285062/e57799cf3c8f22e8985436093f2c43e6/2024-05-21-fallzahlen-fuer-die-politisch-motivierte-kriminalitaet-2023-data.jpg" length="95304" type="image/jpeg" />
      <pubDate>Tue, 21 May 2024 14:18:21 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/politisch-motivierte-kriminalitaet-2023-2284956</guid>
    </item>
    <item>
      <title>Regionale Wertschöpfungsketten aufbauen</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/regionale-wertschoepfung-2283336</link>
      <description>Regionalität liegt bei Verbrauchern im Trend – unter anderem wegen hoher Qualität und Transparenz der Produkte. Das Bundeslandwirtschaftsministerium fördert hier in vielfältiger Weise. Imker Christian Grune aus Brandenburg berichtet im Interview, welche Vorteile ein regionaler Verbund bringt.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2286106/4742b8414bad6a6570955dc05fec29b8/2024-05-20-bild-regionale-wertschoepfungsketten-data.jpg" length="256693" type="image/jpeg" />
      <pubDate>Mon, 20 May 2024 13:06:05 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/regionale-wertschoepfung-2283336</guid>
    </item>
    <item>
      <title>Kanzler besucht Hochwassergebiet im Saarland</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/kanzler-hochwassergebiet-saarland-2284324</link>
      <description>Bundeskanzler Olaf Scholz hat sich am Samstag vor Ort über die anhaltende Hochwasserlage im Saarland informiert. Er dankte den vielen Helferinnen und Helfern für ihr Engagement: „Das ist ein Zeichen der Zusammenarbeit, das wir hier erkennen können.“</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2284326/eb4e4ac90da5ceda6c3def63dd50f7d6/2024-05-18-bk-saarland-data.jpg" length="601384" type="image/jpeg" />
      <pubDate>Sat, 18 May 2024 10:17:55 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/kanzler-hochwassergebiet-saarland-2284324</guid>
    </item>
    <item>
      <title>Mehr Solarstrom, weniger Bürokratie</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/solarpaket-photovoltaik-balkonkraftwerke-2213726</link>
      <description>Ob Balkonkraftwerke oder gemeinschaftliche Gebäudeversorgung: Das Solarpaket I wird den Bau und Betrieb von Photovoltaikanlagen deutlich entbürokratisieren. Die neuen Regelungen werden den Ausbau der Solarenergie weiter beschleunigen. Das Solarpaket ist am 16. Mai in Kraft getreten.</description>
      <enclosure url="https://www.bundesregierung.de/resource/blob/975228/2213732/66cc509f57754b81766643cbff27b4fe/2023-08-16-solarpaneele-am-balkon-data.jpg" length="292195" type="image/jpeg" />
      <pubDate>Fri, 17 May 2024 13:48:19 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/solarpaket-photovoltaik-balkonkraftwerke-2213726</guid>
    </item>
  </channel>
</rss>
`;

const testPressNews = `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Pressemitteilungen</title>
    <link>https://www.bundesregierung.de/breg-de/bundesregierung/1151244-1151244</link>
    <description>Zusammenstellung der aktuellsten Pressemitteilungen</description>
    <language>de</language>
    <copyright>Presse- und Informationsamt der Bundesregierung</copyright>
    <generator />
    <ttl>60</ttl>
    <item>
      <title>Kulturstaatsministerin Claudia Roth zum 100. Todestag Franz Kafkas</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/kulturstaatsministerin-claudia-roth-zum-100-todestag-franz-kafkas-2290008</link>
      <description>Kulturstaatsministerin Claudia Roth erklärt zum 100. Todestag Franz Kafkas am 3. Juni 2024: „Franz Kafka lebt. Seit seinem Tod vor 100 Jahren heißt ihn jede neue Generation von Leserinnen und Lesern als ihren Zeitgenossen willkommen. Heute ist Kafka der wohl berühmteste deutschsprachige Autor des 20. Jahrhunderts. Sein Werk gehört zum Kanon der Weltliteratur. Er wird weltweit gelesen, gefeiert und verehrt. Eine ganz besondere Bedeutung hat Frank Kafka nicht nur für den deutschsprachigen Raum, sondern auch für Israel und Tschechien. Die Würdigung seines Werkes und die Auseinandersetzung mit seinem Leben in diesem Jubiläumsjahr sind deshalb auch in besonderer Weise dazu geeignet, die kulturelle Zusammenarbeit mit Israel wie mit Tschechien zu stärken. Mit seiner Literatur trifft Frank Kafka gerade in unseren ungeordneten Umbruchzeiten einen Nerv. Denn so präzise die Sprache Kafkas zunächst erscheint, so geheimnisvoll, unverständlich und absurd ist die Wirklichkeit, die er uns präsentie...</description>
      <pubDate>Fri, 31 May 2024 13:55:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/kulturstaatsministerin-claudia-roth-zum-100-todestag-franz-kafkas-2290008</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz reist nach Frankreich</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-reist-nach-frankreich-2289950</link>
      <description>Der stellv. Sprecher der Bundesregierung, Wolfgang Büchner, teilt mit:</description>
      <pubDate>Fri, 31 May 2024 10:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-reist-nach-frankreich-2289950</guid>
    </item>
    <item>
      <title>Zum Einsatz gelieferter Waffen an die Ukraine</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/zum-einsatz-gelieferter-waffen-an-die-ukraine-2289868</link>
      <description>Der Sprecher der Bundesregierung, Steffen Hebestreit, erklärt:</description>
      <pubDate>Fri, 31 May 2024 08:30:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/zum-einsatz-gelieferter-waffen-an-die-ukraine-2289868</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz gratuliert dem Präsidenten der Republik Litauen, Gitanas Nausėda</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-praesidenten-der-republik-litauen-gitanas-naus%C4%97da-2289290</link>
      <description>Sehr geehrter Herr Präsident,

zu Ihrer Wiederwahl übermittle ich Ihnen meine herzlichen Glückwünsche.

Unsere beiden Länder verbindet eine vertrauensvolle und erfolgreiche Partnerschaft. Vor dem Hintergrund der aktuellen weltpolitischen Lage und durch unsere enge verteidigungspolitische Kooperation hat diese noch an Intensität gewonnen.

Für die vor Ihnen liegenden Aufgaben wünsche ich Ihnen viel Erfolg.

Mit freundlichen Grüßen

Olaf Scholz
Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Thu, 30 May 2024 08:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-praesidenten-der-republik-litauen-gitanas-naus%C4%97da-2289290</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz gratuliert dem Ministerpräsidenten der Republik Kroatien, Andrej Plenković</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-ministerpraesidenten-der-republik-kroatien-andrej-plenkovi%C4%87-2288986</link>
      <description>Sehr geehrter Herr Ministerpräsident,

ich gratuliere Ihnen herzlich zu Ihrer erneuten Wahl zum Ministerpräsidenten der Republik Kroatien.

Deutschland und Kroatien sind einander in Freundschaft und Partnerschaft verbunden. Als enge Partner in der Europäischen Union und in der NATO teilen wir gemeinsame Werte und stimmen in vielen aktuellen Fragen der europäischen und internationalen Politik überein.

Ich freue mich, unsere enge und vertrauensvolle Zusammenarbeit auf dieser Basis auch in Zukunft fortzusetzen.

Für Ihre dritte Amtszeit wünsche ich Ihnen eine glückliche Hand und viel Erfolg.

Mit freundlichen Grüßen

Olaf Scholz
Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Wed, 29 May 2024 06:30:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-ministerpraesidenten-der-republik-kroatien-andrej-plenkovi%C4%87-2288986</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz telefoniert mit dem kasachischen Staatspräsidenten Tokajew</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-telefoniert-mit-dem-kasachischen-staatspraesidenten-tokajew-2288850</link>
      <description>Der Sprecher der Bundesregierung, Steffen Hebestreit, teilt mit:</description>
      <pubDate>Tue, 28 May 2024 14:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-telefoniert-mit-dem-kasachischen-staatspraesidenten-tokajew-2288850</guid>
    </item>
    <item>
      <title>Kondolenztelegramm von Bundeskanzler Scholz an den Premierminister des Unabhängigen Staates Papua-Neuguinea, James Marape</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/kondolenztelegramm-von-bundeskanzler-scholz-an-den-premierminister-des-unabhaengigen-staates-papua-neuguinea-james-marape-2287782</link>
      <description>Sehr geehrter Herr Premierminister,

mit tiefer Betroffenheit habe ich von den massiven Erdrutschen in der Provinz Enga erfahren, bei denen zahlreiche Menschen ums Leben gekommen sind und viele weitere verletzt wurden.

Mein aufrichtiges Mitgefühl und Beileid gilt in dieser Stunde den Angehörigen der Opfer. Den Verletzten wünsche ich baldige Genesung.


Mit stillem Gruß


Olaf Scholz
Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Sun, 26 May 2024 11:00:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/kondolenztelegramm-von-bundeskanzler-scholz-an-den-premierminister-des-unabhaengigen-staates-papua-neuguinea-james-marape-2287782</guid>
    </item>
    <item>
      <title>Feierlicher Abschluss des Demokratiefestes zu 75 Jahren Grundgesetz</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/feierlicher-abschluss-des-demokratiefestes-zu-75-jahren-grundgesetz-2287780</link>
      <description>Mit kostenlosen Konzerten von Lena Meyer-Landrut, Vanessa Mai, den Fantastischen Vier und vielen weiteren Stars der deutschen Musikszene erreicht das große Demokratiefest in Berlin heute seinen Höhepunkt. Zwischen Reichstag, Bundeskanzleramt und Spree feiern Bürgerinnen und Bürger schon seit dem 24. Mai ein großes Fest, zu Ehren des Grundgesetzes, das vor 75 Jahren in Kraft getreten ist. Auf mehreren Bühnen und Pavillons präsentieren sich das Bundespräsidialamt, die Bundesministerien, alle 16 Bundesländer, der Bundestag, der Bundesrat, das Bundesverfassungsgericht, verschiedene Bundesbehörden und viele zivilgesellschaftliche Organisationen mit zahlreichen Spielen und Aktionen für Kinder und Erwachsene. Auch Bundespräsident Frank-Walter Steinmeier und Frankreichs Präsident Emmanuel Macron besuchen heute im Rahmen des Staatsbesuchs das Fest und sprechen gegen 14:45 Uhr auf der Bühne des Dialogforums über die Deutsch-Französische Freundschaft. Bundeskanzler Olaf Scholz hatte seit 11 Uh...</description>
      <pubDate>Sun, 26 May 2024 10:05:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/feierlicher-abschluss-des-demokratiefestes-zu-75-jahren-grundgesetz-2287780</guid>
    </item>
    <item>
      <title>Deutsch-Französischer Sicherheits- und Verteidigungsrat sowie Deutsch-Französischer Ministerrat tagen in Schloss Meseberg</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/deutsch-franzoesischer-sicherheits-und-verteidigungsrat-sowie-deutsch-franzoesischer-ministerrat-tagen-in-schloss-meseberg-2287128</link>
      <description>Die stellvertretende Sprecherin der Bundesregierung, Christiane Hoffmann, teilt mit:</description>
      <pubDate>Fri, 24 May 2024 10:15:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/deutsch-franzoesischer-sicherheits-und-verteidigungsrat-sowie-deutsch-franzoesischer-ministerrat-tagen-in-schloss-meseberg-2287128</guid>
    </item>
    <item>
      <title>75 Jahre Grundgesetz – Kulturstaatsministerin Roth: "Kunst- und Pressefreiheit sind Herzstück unserer Demokratie - Kultur sollte jetzt als Staatsziel aufgenommen werden"</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/75-jahre-grundgesetz-kulturstaatsministerin-roth-kunst-und-pressefreiheit-sind-herzstueck-unserer-demokratie-kultur-sollte-jetzt-als-staatsziel-aufgenommen-werden--2286226</link>
      <description>Anlässlich des 75-jährigen Jubiläums des Grundgesetzes hat Kulturstaatsministerin Claudia Roth die zentrale Rolle der Kunst- und Pressefreiheit für die Demokratie betont: „Vor 75 Jahren – als das Grundgesetz verkündet wurde – stand Deutschland nach einer verheerenden und menschenverachtenden Zeit vor einem Neuanfang. Aufgrund unserer Geschichte ist die in unserer Verfassung verankerte Kunst- und Pressefreiheit ein besonders hohes Gut und für mich ein Herzstück unserer Demokratie. Gerade in Krisenzeiten müssen wir dafür sorgen, dass Kultur und Medien ihre Kräfte entfalten können und mehr denn je eine vielfältige Kulturlandschaft fördern und freie, unabhängige Medien verteidigen und stärken. Die Freiheit der Kunst und der Medien insbesondere vor Angriffen von Antidemokraten und Rechtsstaatsverächtern zu schützen, ist unser aller Pflicht.“

Zum 75. Geburtstag des Grundgesetzes hob Kulturstaatsministerin Claudia Roth zudem die Bedeutung der Aufnahme der Kultur als Staatsziel in die deut...</description>
      <pubDate>Thu, 23 May 2024 09:03:26 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/75-jahre-grundgesetz-kulturstaatsministerin-roth-kunst-und-pressefreiheit-sind-herzstueck-unserer-demokratie-kultur-sollte-jetzt-als-staatsziel-aufgenommen-werden--2286226</guid>
    </item>
    <item>
      <title>Bundeskabinett beschließt Entwurf zur Novellierung des Filmförderungsgesetzes – Kulturstaatsministerin Roth: "Damit wird der deutsche Film gestärkt."</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskabinett-beschliesst-entwurf-zur-novellierung-des-filmfoerderungsgesetzes-kulturstaatsministerin-roth-damit-wird-der-deutsche-film-gestaerkt--2285738</link>
      <description>Das Bundeskabinett hat heute den von Kulturstaatsministerin Claudia Roth vorgelegten Entwurf zur Novellierung des Filmförderungsgesetzes (FFG) beschlossen. Mit der umfassenden Reform sollen die Strukturen und Förderinstrumente des FFG flexibler, effizienter und transparenter gestaltet werden, um damit zu einer erfolgreichen und zukunftsfähigen Filmförderung in Deutschland beizutragen und den deutschen Film zu stärken.

Kulturstaatsministerin Claudia Roth: „Es ist ein wichtiger Schritt, dass das Kabinett heute den Entwurf zur Änderung des Filmförderungsgesetzes beschlossen hat. Damit haben wir ein weiteres zentrales kultur- und medienpolitisches Vorhaben dieser Legislaturperiode auf den Weg gebracht. Neben der Reform der kulturellen Filmförderung ist die Novellierung des Filmförderungsgesetzes der zweite wesentliche Baustein für die im Koalitionsvertrag verabredete Neuordnung der Filmförderung. Damit wird der deutsche Film deutlich gestärkt.

Mit dem heute im Bundeskabinett beschloss...</description>
      <pubDate>Wed, 22 May 2024 13:08:13 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskabinett-beschliesst-entwurf-zur-novellierung-des-filmfoerderungsgesetzes-kulturstaatsministerin-roth-damit-wird-der-deutsche-film-gestaerkt--2285738</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz telefoniert mit dem Präsidenten der Republik Senegal, Bassirou Diomaye Faye</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-telefoniert-mit-dem-praesidenten-der-republik-senegal-bassirou-diomaye-faye-2285070</link>
      <description>Der Sprecher der Bundesregierung, Steffen Hebestreit, teilt mit:</description>
      <pubDate>Tue, 21 May 2024 15:14:57 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-telefoniert-mit-dem-praesidenten-der-republik-senegal-bassirou-diomaye-faye-2285070</guid>
    </item>
    <item>
      <title>Kondolenz von Bundeskanzler Scholz an den Vizepräsidenten der Islamischen Republik Iran, Herrn Mokhber</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/kondolenz-von-bundeskanzler-scholz-an-den-vizepraesidenten-der-islamischen-republik-iran-herrn-mokhber-2284390</link>
      <description>Sehr geehrter Herr Vizepräsident,

uns hat die Nachricht vom Hubschrauberabsturz und dem Tod von Staatspräsident Raisi erreicht.

Unser Beileid gilt der Regierung der Islamischen Republik Iran und den Familien der beim Absturz Getöteten.

Mit stillem Gruß

Olaf Scholz
Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Tue, 21 May 2024 11:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/kondolenz-von-bundeskanzler-scholz-an-den-vizepraesidenten-der-islamischen-republik-iran-herrn-mokhber-2284390</guid>
    </item>
    <item>
      <title>Common message from Germany and France on Georgia</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/common-message-from-germany-and-france-on-georgia-2284388</link>
      <description>We, Germany and France, are deeply concerned about the situation in Georgia.

Both of our countries have been staunch supporters of Georgia’s European path and actively supported the decision of the EUCO to grant candidacy status in December 2023.

It is with deep regret that we take note of the decision of the Georgian government and ruling party to deviate from this path by acting against our common European values and the aspirations of the Georgian people, such as through the adoption of the so-called law "on transparency of foreign influence".

Georgia’s European path has been charted – but speed and direction of moving forward depend on Georgia.</description>
      <pubDate>Sun, 19 May 2024 11:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/common-message-from-germany-and-france-on-georgia-2284388</guid>
    </item>
    <item>
      <title>Gemeinsame Botschaft von Deutschland und Frankreich zur Lage in Georgien</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/gemeinsame-botschaft-von-deutschland-und-frankreich-zur-lage-in-georgien-2284386</link>
      <description>Wir, Deutschland und Frankreich, sind zutiefst besorgt über die Lage in Georgien.

Unsere beiden Ländern haben den europäischen Pfad Georgiens stets befürwortet und die Entscheidung des Europäischen Rates vom Dezember 2023 zur Verleihung des Kandidatenstatus aktiv unterstützt.

Wir nehmen mit tiefem Bedauern die Entscheidung der georgischen Regierung und regierenden Partei zur Kenntnis, von diesem Pfad abzuweichen, indem sie gegen unsere gemeinsamen europäischen Werte und die Bestrebungen der georgischen Bevölkerung handelt, unter anderem durch Annahme des so genannten Gesetzes zur „Transparenz ausländischer Einflussnahme".

Georgiens europäischer Pfad ist vorgezeichnet – darüber, mit welcher Geschwindigkeit und Richtung vorangeschritten wird, entscheidet aber Georgien.</description>
      <pubDate>Sun, 19 May 2024 11:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/gemeinsame-botschaft-von-deutschland-und-frankreich-zur-lage-in-georgien-2284386</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz empfängt den Ministerpräsidenten der Republik Portugal, Montenegro</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-empfaengt-den-ministerpraesidenten-der-republik-portugal-montenegro-2283882</link>
      <description>Der Sprecher der Bundesregierung, Steffen Hebestreit, teilt mit:</description>
      <pubDate>Fri, 17 May 2024 10:45:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-empfaengt-den-ministerpraesidenten-der-republik-portugal-montenegro-2283882</guid>
    </item>
    <item>
      <title>Genesungstelegramm von Bundeskanzler Scholz an den Ministerpräsidenten der Slowakischen Republik, Robert Fico</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/genesungstelegramm-von-bundeskanzler-scholz-an-den-ministerpraesidenten-der-slowakischen-republik-robert-fico-2283584</link>
      <description>Sehr geehrter Herr Ministerpräsident, lieber Robert,

die Nachricht von dem feigen Angriff auf Ihr Leben hat mich zutiefst bestürzt. Ein solcher Angriff ist unerträglich. Gewalt darf keinen Platz haben in der europäischen Politik.

Meine Gedanken sind in diesen Stunden bei Ihnen. Ich wünsche Ihnen rasche Genesung.

Mit besten Grüßen



Olaf Scholz
Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Fri, 17 May 2024 07:50:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/genesungstelegramm-von-bundeskanzler-scholz-an-den-ministerpraesidenten-der-slowakischen-republik-robert-fico-2283584</guid>
    </item>
    <item>
      <title>75 Jahre Grundgesetz – Programmhöhepunkte beim Demokratiefest in Berlin</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/75-jahre-grundgesetz-programmhoehepunkte-beim-demokratiefest-in-berlin-2282994</link>
      <description>Vom 24. bis zum 26. Mai 2024 werden 75 Jahre Grundgesetz mit einem großen Demokratiefest in Berlin gefeiert. Alle sind eingeladen vorbeizukommen und mitzufeiern! Rund um das Bundeskanzleramt und das Paul-Löbe-Haus des Deutschen Bundestages wartet ein spannendes, vielfältiges Programm auf die Besucherinnen und Besucher. Bei der großen Abschlussveranstaltung am Sonntagabend treten unter anderem die Fantastischen Vier, Lena Meyer-Landrut und der DJ Alle Farben auf.

Auf insgesamt vier Bühnen gibt es über drei Tage Talks mit Politikerinnen und Politikern, Musik, ein buntes Programm für Kinder und vieles mehr. Im Spreebogenpark können Besucherinnen und Besucher den Pokal der Fußball-Europameisterschaft und das Maskottchen der Fußball-EM „Albärt“ bewundern.

Das gesamte Programm ist im Veranstaltungskalender  zu finden. Ein Flyer mit einem Lageplan ist dort  ebenfalls abzurufen.

Highlights des Programms:

Im Dialogforum, einer Bühne zwischen dem Bundeskanzleramt und dem Paul-Löbe-Haus, k...</description>
      <pubDate>Thu, 16 May 2024 05:05:00 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/75-jahre-grundgesetz-programmhoehepunkte-beim-demokratiefest-in-berlin-2282994</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz gratuliert dem Premierminister der Salomonen, Jeremiah Manele</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-premierminister-der-salomonen-jeremiah-manele-2282860</link>
      <description>Sehr geehrter Herr Premierminister,

zu Ihrem Amtsantritt als Premierminister der Salomonen übermittle ich Ihnen meine Glückwünsche.

Ich freue mich auf eine Fortsetzung der partnerschaftlichen und erfolgreichen Zusammenarbeit unserer beiden Länder.

Für Ihre verantwortungsvolle Aufgabe wünsche ich Ihnen viel Kraft und Erfolg.

Mit freundlichen Grüßen

Olaf Scholz


Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Wed, 15 May 2024 13:52:01 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-premierminister-der-salomonen-jeremiah-manele-2282860</guid>
    </item>
    <item>
      <title>Bundeskanzler Scholz gratuliert dem Premierminister der Republik Singapur, Lawrence Wong</title>
      <link>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-premierminister-der-republik-singapur-lawrence-wong-2282774</link>
      <description>Sehr geehrter Herr Premierminister,

zu Ihrer Amtsübernahme gratuliere ich Ihnen herzlich.

Deutschland und Singapur sind durch langjährige und freundschaftliche Beziehungen sowie durch gemeinsame Werte verbunden.

Auf die weitere Vertiefung der langjährigen, freundschaftlichen Beziehungen zwischen unseren Ländern freue ich mich und wünsche Ihnen für die anstehenden Aufgaben gutes Gelingen.

Mit freundlichen Grüßen

Olaf Scholz


Bundeskanzler der Bundesrepublik Deutschland</description>
      <pubDate>Wed, 15 May 2024 12:54:16 GMT</pubDate>
      <guid>https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-scholz-gratuliert-dem-premierminister-der-republik-singapur-lawrence-wong-2282774</guid>
    </item>
  </channel>
</rss>
`;