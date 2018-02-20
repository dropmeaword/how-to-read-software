var zeval = function(ast) {
  if(ast.op == "+") {
    return zeval(ast.left) + zeval(ast.right);
    
  } else if(ast.op == "<") {
    var evaled_left = zeval(ast.left);
    var evaled_right = zeval(ast.right);
    
    return evaled_left < evaled_right;
    
  } else if(ast.op == "print") {
    console.log(zeval(ast.input));
    
  } else if(ast.op == "if") {
    if(zeval(ast.conditional) == true) {
      return zeval(ast.trueCase);
    } else {
      return zeval(ast.falseCase);
    }
    
  } else {
    return ast;
    
  }
}

var helloworld_source = "(print (+ 2 3))"
var helloworld_tree = { op:"print", input:"hello" }

var if_source = "(if (< 5 6) (print 'hello') (print 'bye!'))"
var if_tree = { op:"if", conditional:{ op:"<", left:5, right:6 },
                         trueCase:{ op:"print", input:"hello" },
                         falseCase:{ op:"print", input:"bye!"} }

zeval(if_tree);