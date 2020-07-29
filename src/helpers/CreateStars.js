export default function CreateStars(numOfStars) {
    const stars = []
    for (let i = 0; i < numOfStars; i++) {
        const newStar = {
            size: 25 * Math.random() ^ 4 + 5,
            top: 100 * Math.random(),
            left: 100 * Math.random(),
            // size: 20,
            // top: 0,
            // left: 0,
            duration: 55 * Math.random() + 5,
            delay: 0
        }
        stars.push(newStar)
    }
    return stars
}
