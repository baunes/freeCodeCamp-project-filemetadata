function extractMetadata(file) {
  return { filename: file.originalname, size: file.size }
}

module.exports = { extractMetadata }
