// Function to determine if it is currently a PWA or not
export default function isPwa() {
  return window.matchMedia('(display-mode: standalone)').matches;
}
