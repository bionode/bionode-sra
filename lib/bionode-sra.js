// # bionode-sra
// > A Node.js wrapper for SRA Toolkit.
// >
// > doi: [?](?)
// > author: [Bruno Vieira](http://bmpvieira.com)
// > email: <mail@bmpvieira.com>
// > license: [MIT](https://raw.githubusercontent.com/bionode/bionode-sra/master/LICENSE)
//
// ---
//
// ## Usage
// This module can be used in Node.js as described further below, or as a command line tool.
// Examples:
//
//     $ npm install -g bionode-sra
//
//     # bionode-sra [command] [arguments...]
//     $ bionode-sra fastq-dump SRR1509835.sra
//     $ bionode-sra fastq-dump SRR1509835.sra fastqOutputDirectory

var path = require('path')
var spawn = require('child_process').spawn
var through = require('through2')

module.exports = exports = SRA

// ## SRA
// Takes a SRA toolkit command and returns a Stream that accepts arguments for it.
// For example, for ```fastq-dump```, arguments can be an array with ```[srcSRA, destDir]```,
// a string like ```'srcSRA destDir'```. If ```destDir``` is omitted, the current directory will be used.
//
//     var sra = require('bionode-sra')
//     var fastqDump = sra('fastq-dump')()
//     fastqDump.on('data', console.log)
//     fastqDump.write(['SRR1509835.sra', 'fastqOutDir'])
//     => { srcFile: 'SRR1509835.sra',
//          command: 'fastq-dump',
//          destDir: 'fastqOutDir' }
//
// A callback style can also be used:
//
//     var fastqDump = sra('fastq-dump')
//     fastqDump('SRR1509835.sra fastqOutDir', function(err, data) {
//       console.log(data)
//     })
//
// Or pipes, for example, from a file with just a list of SRA file names:
//
//     var split = require('split')
//     var fastqDump = sra('fastq-dump')()
//     fs.createReadStream('sraFilesList.txt')
//     .pipe(split())
//     .pipe(fastqDump)

function SRA (command) {
  command = command || 'fastq-dump'

  return sraStream

  function sraStream (srcFileDestDir, callback) {
    var stream = through.obj(transform)
    if (srcFileDestDir) { stream.write(srcFileDestDir); stream.end() }
    if (callback) {
      stream.on('data', function (data) {
        callback(null, data)
      })
      stream.on('error', callback)
    }
    return stream

    function transform (obj, enc, next) {
      var self = this

      try {
        var parsedObj = JSON.parse(obj)
        if (parsedObj.status === 'completed') {
          obj = [parsedObj.path, path.dirname(parsedObj.path)]
        } else {
          return next()
        }
      } catch (e) {}

      if (typeof obj === 'string') { obj = obj.split(' ') }

      if (obj.length > 2) { self.emit('error', new Error('Too many arguments')); next() }

      if (obj.length === 1) { obj.push('.') }

      // var sraPath = path.join(__dirname, '../sra/bin/' + command)
      var srcFile = obj[0]
      var destDir = obj[1]
      var options
      if (destDir === '.') {
        options = [srcFile]
      } else {
        options = [srcFile, '-O', destDir]
      }
      var sra = spawn(command, options)

      sra.stderr.on('data', function (data) {
        self.emit('error', new Error(data.toString()))
        next()
      })

      sra.on('close', function (code) {
        if (code) {
          self.emit('error', new Error('Unknown error, check that "' + obj[0] + '" exists'))
        } else {
          var output = {
            srcFile: obj[0],
            command: command,
            destDir: obj[1]
          }
          if (command === 'fastq-dump') {
            output.destFile = output.srcFile.replace('.sra', '.fastq')
          }
          self.push(output)
          next()
        }
      })
    }
  }
}
