
function parse(text) {
  var lines = text.split('\n');
  var results = {};

  lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);

    if (!results[letter]) {
      results[letter] = 0;
    }

    results[letter] += count;
  });

  console.log(results);
}
// Ans: { A: 2, B: 14, C: 6 }

exports.parse = parse;
