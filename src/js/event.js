class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let array = dirtyFileName.split('.');
    array.pop();
    return array.join('.').replace(/^[\d]+_/, '');
  }
}

console.log(
  FileNameExtractor.extractFileName(
    '1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34'
  )
);
// 'FILE_NAME.EXTENSION'
console.log(
  FileNameExtractor.extractFileName(
    '1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'
  )
);
// 'FILE_NAME.EXTENSION'
