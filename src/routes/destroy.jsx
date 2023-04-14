import {redirect} from "react-router-dom"
import {removeFighter} from '../http/fight-watch'

export async function action({params}) {
  await removeFighter(params.id)
  return redirect('/fight-watch')
}