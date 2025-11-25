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

//  initial file create
function initializeFiles() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
    Object.keys(categories).forEach((file) => {
      const categoryPath = path.join(organizedDir, file);
      fs.mkdirSync(categoryPath, { recursive: true });
    });
  }

  console.log("Messy file created!!!");
}

function getCategories(filename) {
  const ext = path.extname(filename).toLowerCase();
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}

function organizedFiles() {
  console.log("Organize file:");
  console.log("Source file: ", sourceDir);
  console.log("Organize file: ", organizedDir);
  console.log("\n", "- -".repeat(50), "\n");

  const files = fs.readdirSync(sourceDir);
  if (files.length === 0) {
    console.log("No files to work on!!!!!");
    return;
  }

  console.log(`Found ${files.length} files to organize`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      return;
    }

    const category = getCategories(file);
    const destDir = path.join(organizedDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    console.log(file);
    console.log(category);
    console.log(stat.size);
  });
}

function showHelp() {
  console.log(`
        commands
        init - created file 
        organize - file organize 

        example: 
        node fileOrganizer.js init
        node fileOrganizer.js organize
        `);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializeFiles();
    break;
  case "organize":
    organizedFiles();
    break;
  default:
    showHelp();
    break;
}
