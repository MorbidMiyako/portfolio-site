export default function ScrollDownFunction(ref) {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
