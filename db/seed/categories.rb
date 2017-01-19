# filling category for db

categories = %w(
  Action Adventure Arcade
  Board
  Card Casino Casual
  Educational
  Music
  Puzzle
  Racing Role-Playing
  Simulation Sport Strategy
  Trivia
  World)

categories.each do |name|
  Category.create name: name
end
