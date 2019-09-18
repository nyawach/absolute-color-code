/**
  document
  https://github.com/noops-challenge/hexbot/blob/master/API.md
 */
import 'isomorphic-unfetch'
import { Color } from "~/domains/color/entity"

const ENDPOINT = "https://api.noopschallenge.com/hexbot"

export const getColors = async () => {
  const res = await fetch(ENDPOINT)
  const { colors }: { colors: Color[] } = await res.json()
  return colors
}
