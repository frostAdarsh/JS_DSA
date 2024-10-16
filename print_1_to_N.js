function print1TON(n) {
  if (n === 0) {
    return;
  }
  print1TON(n - 1);
  console.log(n);
}


print1TON(7)