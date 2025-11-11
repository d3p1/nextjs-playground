/**
 * @description Server actions
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use server'

let likeCounter = 0
export const incrementLikes = async () => {
  return likeCounter++
}
