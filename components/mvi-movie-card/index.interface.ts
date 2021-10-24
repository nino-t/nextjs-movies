export interface MovieCard {
  id: string
  title: string
  poster: string
  year: string
  watchUrl: string
  handlePosterClicked: () => void
}