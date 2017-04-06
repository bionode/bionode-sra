var sra = require('../')
var fs = require('fs')
var request = require('request')
var crypto = require('crypto')
var test = require('tape')

test('Extract fastq from SRA', function (t) {
  t.plan(1)
  var sraURL = 'http://ftp-trace.ncbi.nlm.nih.gov/sra/sra-instant/reads/ByRun/sra/SRR/SRR150/SRR1509835/SRR1509835.sra'
  var downloadSRA = request(sraURL)
  downloadSRA.pipe(fs.createWriteStream('test/SRR1509835.sra'))
  downloadSRA.on('complete', dumpFastq)
  function dumpFastq () {
    var fastqDump = sra('fastq-dump')
    var srcFile = 'test/SRR1509835.sra'
    var destDir = 'test/'
    fastqDump([srcFile, destDir]).on('data', fastqDumped)
  }
  function fastqDumped (data) {
    var sha256sum = crypto.createHash('sha256')
    var fastqPath = data.srcFile.replace('sra', 'fastq')
    var fastqFile = fs.createReadStream(fastqPath)
    fastqFile.on('data', function (d) { sha256sum.update(d) })
    fastqFile.on('end', checkSum)
    function checkSum () {
      var sha256 = sha256sum.digest('hex')
      var hash = 'f13dd1b06542a0a5e2ce078f8ab123abfbd70fe49400cae66f430a2d980e42d9'
      var msg = 'should take a srcFile and destDir strings and extract a fastq'
      t.equal(sha256, hash, msg)
    }
  }
})
