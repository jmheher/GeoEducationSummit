/* ---------------------------------------------------------------
   GeoSum Web Apps - site data
   Add an entry by appending an object to this array. Fields:

     title    (required)  Text shown as the heading. Links to `url`.
     url      (required)  External site, usually a GitHub Pages URL.
     image    (required)  Path or URL to the top image. Relative paths
                          resolve against this site (e.g. "images/foo.png").
     text     (required)  Short description shown below the title.
     alt      (optional)  Image alt text. Falls back to the title.

   No build step. Save the file and reload the page.
   --------------------------------------------------------------- */

window.SITES = [
  {
    title: "Evidence for the Persistent Effects of Racial Covenants from San José",
    url: "https://awildjake.github.io/racialcovenants/index.html",
    image: "images/wilde_project_gallery.png",
    text: "Racial covenants were legal property agreements used by homeowners in the United States during the first half of the 20th century to prohibit non-white buyers from purchasing or leasing property. This web map explores how covenants shaped San José’s demographics using a longitudinal demographic dataset spanning from 1940 to 2020.",
  },
  {
    title: "Bay Area Environmental Dashboard",
    url: "https://dkeil1215.github.io/GISC_230_Final_Project/",
    image: "images/Keil Final.png",
    text: "The main question this app addresses is how environmental and land use conditions vary across counties and through time. Rather than presenting the data only as a table or static map, the dashboard allows users to interactively select variables, years, months, and counties. This makes it easier to compare spatial patterns, identify high or low values, and look at whether selected counties show different trends over time.",
  },
  {
    title: "Cetacean Observations & Ship Tracks on Eastern Florida Coast (Feb, 2024)",
    url: "https://experience.arcgis.com/experience/275fa5cd86844b3493930f7b8e580428",
    image: "images/reimann_project_gallery.png",
    text: "As an introductory exploration of the concept of anthropogenic ocean noise pollution, this web map displays the potential impact of ship-based noise off the coast of Florida during February, 2024, as overlaid with cetacean species sightings since 2000. Viewers may toggle different feature classes to highlight the noise pollution’s spread."
  },
  {
    title: "San Joaquin Valley Change Detection Vegetation",
    url: "https://barbenheim.github.io/san-joaquin-valley-vegetation/",
    image: "images/san-joaquin-valley-vegetation.png",
    text: "This Web GIS app shows how native vegetation in California's San Joaquin Valley changed because of farming expansion. Users can interactively explore these ecological shifts over time, making it easier to understand historical habitat loss and help guide regional conservation awareness."
  },
  {
    title: "Transit-Oriented Mobility and Mental-Health Vulnerability in California",
    url: "https://experience.arcgis.com/experience/49cb1549c1644e95862d4e5bc26dcc87",
    image: "images/ghosal_project_gallery.png",
    text: "This Web GIS application analyzes how mental health and socioeconomic vulnerability intersect with transit access in California. Users can explore layers of vulnerability and transit-oriented development, focusing on areas within 0.5 miles of high-quality transit. This work supports my research on transportation equity and public health impacts."
  },
  {
    title: "San Francisco Eviction Notice Rates Analysis (2020–2025)",
    url: "https://experience.arcgis.com/experience/93cd70cbb387455a87f4c4928b90cfbe/",
    image: "images/gibson_eviction_gallery.png",
    text: "This Web GIS application explores eviction notice patterns across San Francisco neighborhoods from 2020 to 2025. Users can compare total eviction counts, percent change over time, and normalized eviction notice rates per 1,000 residential units. The app highlights spatial patterns of housing instability and supports interactive neighborhood-level analysis.",
    alt: "Screenshot of the Example Map Viewer app"
  },
  {
    title: "Transit Equity in the South County",
    url: "https://experience.arcgis.com/experience/171eddcc8e374467aa19a595f1da5a20",
    image: "images/LeeFinal.png",
    text: "The research question motivating this Web GIS application revolves around understanding transportation equity in South Santa Clara County: An area made up of the cities of Morgan Hill, San Martin, and Gilroy. This ArcGIS Experience Builder map is aimed at decisionmakers (e.g. Local and state politicians, city planners, public transit agencies, GIS Analysts, and academics/researchers) interested in learning a little more about this woefully understudied area.",
    alt: "Screenshot of the Example Map Viewer app"
  },
{
    title: "The Safe and Affordable Funding for Equity and Resilience (SAFER)",
    url: "https://experience.arcgis.com/experience/380c886479aa438e9753d2e1ea66e4fa",
    image: "images/SAFER map image.png",
    text: "The Safe and Affordable Funding for Equity and Resilience (SAFER) program was established through Senate Bill 200 (SB200) in 2019 to ensure that access to safe drinking water is restored as soon as possible to residents that lack access. The program assesses water districts in delivering high quality water, monitoring and reporting, and treatment techniques. This web app allows users to explore different water system performance across California.",
    alt: "Screenshot of the Example Map Viewer app"
  },
  {
    title: "Third Places and Teen Behavior in San José High Schools",
    url: "https://experience.arcgis.com/experience/0b3913332ca547f98e28efcb8b961854/",
    image: "images/AguilarMonica_ProjLogo.png",
    text: "Case studies were created to analyze two public high schools in the East Side Union High School District to determine how third places were distributed within a 15-	minute walk of each school. This information was paired with disciplinary event data to provide a fuller understanding of the relationship between third places and teen behavior.",
    alt: "Screenshot of the Example Map Viewer app"
  }
];
