function hello() {
  // alert("Hello World!");
  // document.write('hello world!');
  // console.log('hello world!');
  document.getElementsByTagName('h1')[0].innerHTML='hello world!';
}
function show1() {
  document.getElementsByTagName('h2')[0].innerHTML = 'helloworld!';
}
function show2() {
  document.getElementById('h2').innerHTML = 'helloworld!';
}
