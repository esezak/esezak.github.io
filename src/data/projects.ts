// Project data — example projects displayed in the Projects section.
import { Project } from "@/types";

/**
 * List of projects to display. Each project references i18n keys for
 * localised title and description. Edit this array to add or remove projects.
 */
export const PROJECTS: Project[] = [
  {
    id: "waste-classification",
    titleKey: "items.waste-classification.title",
    descriptionKey: "items.waste-classification.description",
    image: "/images/waste-classification.webp",
    repoUrl: "https://github.com/esezak",
    techStack: ["PyTorch", "LLM", "Computer Vision"],
  },
  {
    id: "skin-detect",
    titleKey: "items.skin-detect.title",
    descriptionKey: "items.skin-detect.description",
    image: "/images/skin-detect.webp",
    repoUrl: "https://github.com/esezak/skindetect",
    techStack: ["PyTorch", "Ultralytics YOLO", "CNN", "Edge Computing"],
  },
  {
    id: "barwise",
    titleKey: "items.barwise.title",
    descriptionKey: "items.barwise.description",
    image: "/images/barwise.webp",
    repoUrl: "https://github.com/esezak/barwise",
    techStack: ["Dart", "Flutter", "Async Data Streams"],
  },
  {
    id: "moviesync",
    titleKey: "items.moviesync.title",
    descriptionKey: "items.moviesync.description",
    image: "/images/moviesync.webp",
    repoUrl: "https://github.com/esezak/MovieSync",
    techStack: ["API Integration", "Synchronization"],
  },
  {
    id: "hotel-scraper",
    titleKey: "items.hotel-scraper.title",
    descriptionKey: "items.hotel-scraper.description",
    image: "/images/hotel-scraper.webp",
    repoUrl: "https://github.com/esezak/Hotel-Scraper",
    techStack: ["Python", "BeautifulSoup", "Data Mining", "GUI"],
  },
];
