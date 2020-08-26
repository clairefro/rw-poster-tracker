// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/posters/new" page={NewPosterPage} name="newPoster" />
      <Route
        path="/posters/{id}/edit"
        page={EditPosterPage}
        name="editPoster"
      />
      <Route path="/posters/{id}" page={PosterPage} name="poster" />
      <Route path="/" page={PostersPage} name="posters" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
