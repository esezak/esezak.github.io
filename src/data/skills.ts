// Skills data — skill categories and individual skills displayed in the Skills section.
import { SkillCategory } from "@/types";

/**
 * Skill categories and their skills. Each category title references
 * an i18n key in skills.json. Edit this array to add or remove skills.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleKey: "categories.languages",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiOpenjdk" },
      { name: "C#", icon: "SiCsharp" },
      { name: "Dart", icon: "SiDart" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "SQL", icon: "SiMysql" },
      { name: "MATLAB", icon: "SiOctave" },
    ],
  },
  {
    titleKey: "categories.ai",
    skills: [
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "Ultralytics YOLO", icon: "SiYolo" },
      { name: "MATLAB Image Toolkit", icon: "SiOctave" },
    ],
  },
  {
    titleKey: "categories.frameworks",
    skills: [
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "React", icon: "SiReact" },
      { name: ".NET", icon: "SiDotnet" },
      { name: "Java Socket", icon: "SiJava" },
      { name: "Asynchronous I/O", icon: "none" },
      { name: "Java Swing", icon: "SiJava" },
      { name: "Unity", icon: "SiUnity" },
      { name: "SAP ABAP", icon: "none" },
    ],
  },
  {
    titleKey: "categories.tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Linux", icon: "SiLinux" },
      { name: "Windows", icon: "SiWindows" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
      { name: "JetBrains IDEs", icon: "SiJetbrains" },
      { name: "Blender", icon: "SiBlender" },
    ],
  },
  {
    titleKey: "categories.methods",
    skills: [
      { name: "OOP", icon: "none" },
      { name: "Algorithm Design", icon: "none" },
      { name: "Data Structures", icon: "none" },
      { name: "Design Patterns", icon: "none" },
      { name: "AGILE/SCRUM", icon: "none" },
      { name: "Web Scraping", icon: "none" },
    ],
  },
  {
    titleKey: "categories.spoken_languages",
    skills: [
      { name: "Turkish (Native)", icon: "none" },
      { name: "English (C2)", icon: "none" },
      { name: "German (A1)", icon: "none" },
    ],
  },
];
