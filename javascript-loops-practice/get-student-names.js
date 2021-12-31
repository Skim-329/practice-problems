/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    var studentnames = students[i].name;
    names.push(studentnames);
  }
  return names;
}
