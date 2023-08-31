import { PARTIDAS_GANADORAS} from "../constants/constants";

export const verGanador = (tablaRevisar) =>{
    for(const pos of PARTIDAS_GANADORAS){
      let [a, b, c] = pos;
      if(
        tablaRevisar[a] && 
        tablaRevisar[b] === tablaRevisar[a] && 
        tablaRevisar[c] === tablaRevisar[a]
        )
        {
          return tablaRevisar[a]
      } 
    }
    return null
}