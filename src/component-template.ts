// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import './test.scss'
import bs from './imgs/beisen.png'

export default class DummyClass {
  render() {
    let img = document.createElement('img')
    img.src = bs
    return 1
  }
}
