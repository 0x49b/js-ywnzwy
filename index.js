const join = (dash) => (accu, cur) => accu + dash + cur;

document.writeln([1, 2, 3].reduce(join('-')));
document.writeln([1, 2, 3].reduce(join('-')) === '1-2-3');
