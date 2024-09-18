import { Animale} from '../types/animali.ts';

export const animaliFetch = (url: string) : Promise<Animale> => {
  return fetch(url).then(r => r.json()).then((data: Animale[]) => data[0]);
}
