const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "SourceDir", "messy-files");
const organizedDir = path.join(__dirname, "SourceDir", "organized-folder");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".psd", ".svg"],

  documents: [".pdf", ".docx", ".txt", ".pptx", ".epub", ".md"],

  spreadsheets: [".xls", ".xlsx", ".csv"],

  audio: [".mp3", ".wav", ".aac"],

  videos: [".mp4", ".mkv", ".mov", ".avi"],

  code: [
    ".js",
    ".py",
    ".java",
    ".cpp",
    ".html",
    ".css",
    ".ts",
    ".go",
    ".sql",
    ".glsl",
  ],

  archives: [".zip", ".rar", ".7z", ".tar", ".gz"],

  config: [".ini", ".lock"],

  binary: [".bin"],

  unknown: [".xyz"],

  others: [],
};

const testFiles = [
  // Images
  "vacation.jpg",
  "image.png",
  "profile.jpeg",
  "banner.webp",
  "design.psd",
  "logo.svg",

  // Documents
  "report.pdf",
  "presentation.pptx",
  "notes.txt",
  "resume.docx",
  "ebook.epub",
  "readme.md",

  // Spreadsheets
  "data.csv",
  "invoice.xlsx",
  "table.xls",

  // Audio
  "song.mp3",
  "voice.wav",
  "podcast.aac",

  // Videos
  "movie.mp4",
  "clip.mkv",
  "travel.mov",
  "trailer.avi",

  // Code files
  "script.js",
  "style.css",
  "app.ts",
  "program.py",
  "server.go",
  "database.sql",
  "shader.glsl",
  "index.html",

  // Archives
  "archive.zip",
  "backup.rar",
  "project.7z",
  "Node.js.zip",

  // Config
  "config.ini",
  "package.lock",

  // Binary
  "unknownfile.bin",

  // Unknown
  "random.xyz",
];

// Create test files in the source directory
function initializeTestFiles() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }
  console.log("Messy file created!!!!!!!!!!");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
    Object.keys(categories).forEach((category) => {
      const categoryPath = path.join(organizedDir, category);
      fs.mkdirSync(categoryPath, { recursive: true });
    });
  }
}

function getCategoriesFiles(filename) {
  const ext = path.extname(filename).toLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}
console.log(getCategoriesFiles("file.js"));
