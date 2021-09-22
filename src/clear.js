export default function clearElementContent(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
