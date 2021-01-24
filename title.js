export default function Title(title, timeout){
  document.title = title
  setTimeout(function(){}, timeout);
}