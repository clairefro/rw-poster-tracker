import { db } from 'src/lib/db'

export const posters = () => {
  return db.poster.findMany()
}

export const poster = ({ id }) => {
  return db.poster.findOne({
    where: { id },
  })
}

export const createPoster = ({ input }) => {
  return db.poster.create({
    data: input,
  })
}

export const updatePoster = ({ id, input }) => {
  return db.poster.update({
    data: input,
    where: { id },
  })
}

export const deletePoster = ({ id }) => {
  return db.poster.delete({
    where: { id },
  })
}
