const fs = require('fs');
const path = require('path');

// Define the new structure
const newStructure = {
  'docs': {
    '01-getting-started': 'getting-started',
    '02-introduction': 'introduction',
    '03-api-reference': {
      'python': 'api-reference/python',
      'cpp': 'api-reference/cpp',
      'csharp': 'api-reference/csharp'
    },
    '04-guides': {
      'tutorials': 'tutorials',
      'working-with-models': 'working-with-models',
      'volume-behavior': 'volume-behavior'
    },
    '05-resources': 'resources'
  }
};

// Function to create directory if it doesn't exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to move files
function moveFiles(source, destination) {
  if (fs.existsSync(source)) {
    if (fs.lstatSync(source).isDirectory()) {
      ensureDir(destination);
      const files = fs.readdirSync(source);
      files.forEach(file => {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);
        moveFiles(sourcePath, destPath);
      });
      // Remove empty source directory
      if (fs.readdirSync(source).length === 0) {
        fs.rmdirSync(source);
      }
    } else {
      fs.renameSync(source, destination);
    }
  }
}

// Create new structure and move files
function reorganize(structure, basePath = '') {
  Object.entries(structure).forEach(([newDir, oldPath]) => {
    const newPath = path.join(basePath, newDir);
    ensureDir(newPath);
    
    if (typeof oldPath === 'string') {
      moveFiles(oldPath, newPath);
    } else if (typeof oldPath === 'object') {
      reorganize(oldPath, newPath);
    }
  });
}

// Execute the reorganization
reorganize(newStructure); 