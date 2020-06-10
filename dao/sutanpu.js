const fs = require('fs');
const path = require('path');

let data = {
  length: 0,
  sutanpu: []
}

function endsWithAny(suffixes, string) {
  return suffixes.some(function (suffix) {
      return string.endsWith(suffix);
  });
}

function findJpeg(dir) {
  let img_files = fs.readdirSync(dir).filter((f) => {
    // return f.endsWith(".jpeg");
    return endsWithAny([".jpeg", ".jpg", ".png", "gif"], f);
    
  });
  

  img_files.forEach((f, index) => {
    data.sutanpu.push({
      key: index,
      src: "/images/sutanpu/"+f
    });

  })
}

let jpeg_dir = path.resolve(__dirname, "../static/images/sutanpu");
console.log(`=>jpeg_dir: ${jpeg_dir}`);
findJpeg(jpeg_dir);

module.exports = {
  getAll: async () => {
    return data.sutanpu;
  }
}